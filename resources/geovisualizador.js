/* Geovisualizador Urbano · Buenavista
   Interacción de la interfaz propia sobre el mapa de qgis2web (variables globales: map, layersList).
   Los datos del tablero vienen de resources/indicadores.js (window.INDICADORES), que genera 09_mapa_web.py. */
(function () {
  "use strict";
  var D = window.INDICADORES;
  var $ = function (sel) { return document.querySelector(sel); };
  var $$ = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };
  var num = function (v, dec) {
    return Number(v).toLocaleString("es-EC", { minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0 });
  };

  /* ---------- Capas de qgis2web por nombre ---------- */
  function nombreCapa(capa) {
    var t = capa.get("title") || "";
    var antesDeBr = t.split(/<br\s*\/?>/i)[0];
    return antesDeBr.replace(/<[^>]+>/g, "").trim();
  }
  var capas = {};
  layersList.forEach(function (c) { capas[nombreCapa(c)] = c; });
  function leyendaDe(capa) {
    var items = [], re = /<img src="([^"]+)"\s*\/?>\s*([^<]+)/g, m;
    while ((m = re.exec(capa.get("title") || ""))) items.push({ img: m[1], texto: m[2].trim() });
    return items;
  }

  var TEMAS = {
    edificaciones: { capa: "Edificaciones", titulo: "Edificaciones por uso" },
    uso: { capa: "Uso del suelo", titulo: "Uso del suelo" },
    inundacion: { capa: "Susceptibilidad a inundación", titulo: "Susceptibilidad a inundación" },
    manzanas: { capa: "Manzanas", titulo: "Densidad de viviendas por manzana" },
    cobertura: { capa: "Cobertura Sentinel-2", titulo: "Cobertura (Sentinel-2)", leyenda: [["#7f7f7f", "Construido"], ["#006D2C", "Vegetación densa"], ["#A6D96A", "Vegetación baja"], ["#D8B365", "Suelo desnudo"], ["#2B8CBE", "Agua"]] },
    cuenca: { capa: "Cuenca del río Buenavista", titulo: "Cuenca del río Buenavista", extra: "Red de drenaje", encuadre: true }
  };
  var GRUPOS_CAPAS = {
    "#gv-interruptores-tema": ["Edificaciones", "Uso del suelo", "Susceptibilidad a inundación", "Manzanas",
                               "Cobertura Sentinel-2", "Cuenca del río Buenavista", "Red de drenaje"],
    "#gv-interruptores": ["Equipamientos", "Red vial", "Hidrografía", "Límite de estudio",
                          "Cobertura educación (300 m)", "Cobertura salud (600 m)"]
  };

  /* ---------- Paneles ---------- */
  function abrirPanel(cual, abrir) {
    var panel = $("#gv-" + cual), boton = $("#gv-btn-" + cual);
    if (abrir === undefined) abrir = panel.hidden;
    panel.hidden = !abrir;
    boton.setAttribute("aria-pressed", String(abrir));
    document.body.classList.toggle("gv-" + cual + "-abierto", abrir);
    if (abrir && window.matchMedia("(max-width: 720px)").matches) {
      abrirPanel(cual === "capas" ? "indicadores" : "capas", false);
    }
  }
  $("#gv-btn-indicadores").addEventListener("click", function () { abrirPanel("indicadores"); });
  $("#gv-btn-capas").addEventListener("click", function () { abrirPanel("capas"); });
  $$("[data-cierra]").forEach(function (b) {
    b.addEventListener("click", function () { abrirPanel(b.dataset.cierra, false); });
  });
  // Estado inicial sin animación: en móvil el tablero empieza cerrado
  document.body.classList.add("gv-sin-transicion");
  if (window.matchMedia("(max-width: 720px)").matches) abrirPanel("indicadores", false);
  else document.body.classList.add("gv-indicadores-abierto");
  setTimeout(function () { document.body.classList.remove("gv-sin-transicion"); }, 60);

  function seleccionar(grupo, boton) {
    $$(grupo + " button").forEach(function (b) { b.setAttribute("aria-pressed", String(b === boton)); });
  }

  /* ---------- Temas del mapa ---------- */
  var temaEnCuenca = false;
  var vista = map.getView();
  function aplicarTema(tema) {
    Object.keys(TEMAS).forEach(function (k) {
      var c = capas[TEMAS[k].capa];
      if (c) c.setVisible(k === tema);
      if (TEMAS[k].extra && capas[TEMAS[k].extra]) capas[TEMAS[k].extra].setVisible(k === tema);
    });
    if (TEMAS[tema].encuadre) {
      vista.fit(capas[TEMAS[tema].capa].getSource().getExtent(), { padding: margenes(), duration: 500 });
      temaEnCuenca = true;
    } else if (temaEnCuenca) {
      temaEnCuenca = false;
      encuadrar(500);
    }
  }

  /* Leyenda de todo lo visible y tema marcado según lo que realmente se ve */
  var sincronizacion = null;
  function sincronizar() {
    clearTimeout(sincronizacion);
    sincronizacion = setTimeout(function () {
      var activos = Object.keys(TEMAS).filter(function (k) { return capas[TEMAS[k].capa] && capas[TEMAS[k].capa].getVisible(); });
      $$("#gv-temas button").forEach(function (b) {
        b.setAttribute("aria-pressed", String(activos.length === 1 && b.dataset.tema === activos[0]));
      });
      var html = layersList.slice().reverse().filter(function (l) {
        return l.getVisible() && leyendaDe(l).length;
      }).map(function (l) {
        var filas = leyendaDe(l).map(function (it) {
          return '<div><img src="' + it.img + '" alt=""><span>' + it.texto + "</span></div>";
        }).join("");
        return leyendaDe(l).length > 1 ? '<p class="gv-leyenda-grupo">' + nombreCapa(l) + "</p>" + filas : filas;
      }).join("");
      $("#gv-leyenda").innerHTML = html || '<p class="gv-leyenda-vacia">Activa una capa para ver su leyenda.</p>';
    }, 0);
  }
  layersList.forEach(function (l) {
    l.on("change:visible", function () { sincronizar(); cerrarPopup(); });
  });
  function cerrarPopup() {
    var p = $("#popup");
    if (p && p.style.display !== "none") $("#popup-closer").click();
  }
  $$("#gv-temas button").forEach(function (b) {
    b.addEventListener("click", function () { aplicarTema(b.dataset.tema); });
  });

  /* ---------- Mapa base ---------- */
  // "Calles" usa OpenStreetMap cuando la página se sirve por http(s) (GitHub Pages, servidor local).
  // Abierta como archivo (file://) OSM bloquea las teselas, así que se queda el mapa de calles de Esri.
  if (location.protocol !== "file:" && capas["OpenStreetMap"]) {
    capas["OpenStreetMap"].setSource(new ol.source.XYZ({
      url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      maxZoom: 19,
      attributions: "© OpenStreetMap"
    }));
  }
  $$("#gv-base button").forEach(function (b) {
    b.addEventListener("click", function () {
      var sat = b.dataset.base === "satelite";
      capas["Imagen satelital (Esri)"].setVisible(sat);
      capas["OpenStreetMap"].setVisible(!sat);
      seleccionar("#gv-base", b);
    });
  });

  /* ---------- Interruptores de capas de referencia ---------- */
  Object.keys(GRUPOS_CAPAS).forEach(function (grupo) {
    $(grupo).innerHTML = GRUPOS_CAPAS[grupo].filter(function (n) { return capas[n]; }).map(function (n) {
      return '<label class="gv-interruptor"><span>' + n + '</span><input type="checkbox" data-capa="' + n + '"' +
        (capas[n].getVisible() ? " checked" : "") + '><span class="gv-switch"></span></label>';
    }).join("");
  });
  $$(".gv-lista input[data-capa]").forEach(function (inp) {
    var c = capas[inp.dataset.capa];
    inp.addEventListener("change", function () { c.setVisible(inp.checked); });
    // El interruptor sigue a la capa aunque la cambie un tema o una pestaña
    c.on("change:visible", function () { inp.checked = c.getVisible(); });
  });

  /* ---------- Controles del mapa ---------- */
  function zoom(delta) { vista.animate({ zoom: vista.getZoom() + delta, duration: 250 }); }
  $("#gv-zoom-mas").addEventListener("click", function () { zoom(1); });
  $("#gv-zoom-menos").addEventListener("click", function () { zoom(-1); });
  function esMovil() { return window.matchMedia("(max-width: 720px)").matches; }
  /* Área del mapa que no tapan la barra ni los paneles: [arriba, derecha, abajo, izquierda] */
  function areaLibre() {
    var ind = $("#gv-indicadores"), cap = $("#gv-capas"), tam = map.getSize();
    var arriba = $("#gv-barra").getBoundingClientRect().bottom + 12, abajo = tam[1] - 12, izq = 12, der = tam[0] - 12;
    if (esMovil()) {
      [ind, cap].forEach(function (p) { if (!p.hidden) abajo = Math.min(abajo, p.getBoundingClientRect().top - 12); });
    } else {
      if (!ind.hidden) izq = ind.getBoundingClientRect().right + 12;
      if (!cap.hidden) der = cap.getBoundingClientRect().left - 12;
      else der = $("#gv-controles").getBoundingClientRect().left - 12;
    }
    return { arriba: arriba, abajo: abajo, izq: izq, der: der };
  }
  function margenes() {
    var a = areaLibre(), tam = map.getSize();
    return [a.arriba + 12, tam[0] - a.der + 12, tam[1] - a.abajo + 12, a.izq + 12];
  }
  function encuadrar(duracion) {
    var lim = capas["Límite de estudio"];
    if (!lim) return;
    vista.fit(lim.getSource().getExtent(), { padding: margenes(), duration: duracion || 0 });
  }
  $("#gv-inicio").addEventListener("click", function () { encuadrar(400); });
  $("#gv-medir").addEventListener("click", function () {
    var original = $(".measure-control .measure-button");
    if (original) original.click();
    var activo = this.getAttribute("aria-pressed") !== "true";
    this.setAttribute("aria-pressed", String(activo));
    $("#gv-medir-opciones").hidden = !activo;
    doHighlight = !activo;
    if (activo) cerrarPopup();
  });
  $$("#gv-medir-opciones button").forEach(function (b) {
    b.addEventListener("click", function () {
      var sel = $("#type");
      sel.value = b.dataset.medida;
      sel.onchange();
      seleccionar("#gv-medir-opciones", b);
    });
  });
  map.addControl(new ol.control.ScaleLine({ units: "metric", minWidth: 80 }));

  /* ---------- Tablero ---------- */
  function barra(etiqueta, pct, color, detalle) {
    return '<div class="gv-barra-progreso"><div class="gv-fila"><span>' + etiqueta + "</span><strong>" +
      num(pct, 1) + ' %</strong></div><div class="gv-pista"><i data-ancho="' + Math.min(pct, 100) +
      '" style="background:' + color + '"></i></div>' + (detalle ? '<p class="gv-detalle">' + detalle + "</p>" : "") + "</div>";
  }
  function fila(a, b, clase) { return '<div class="gv-fila"><span>' + a + "</span><strong" + (clase ? ' class="' + clase + '"' : "") + ">" + b + "</strong></div>"; }
  function kpi(valor, unidad, etiqueta) {
    return '<div class="gv-kpi"><div class="gv-kpi-valor">' + valor + (unidad ? "<small>" + unidad + "</small>" : "") +
      '</div><div class="gv-kpi-etiqueta">' + etiqueta + "</div></div>";
  }
  function dona() {
    var C = 2 * Math.PI * 42, acum = 0;
    var arcos = D.usos.map(function (u) {
      var largo = C * u.porc / 100;
      var s = '<circle r="42" cx="56" cy="56" stroke="' + u.color + '" data-dash="' + Math.max(largo - 1.5, 0.5) +
        " " + C + '" stroke-dasharray="0 ' + C + '" stroke-dashoffset="' + (-acum) + '"/>';
      acum += largo;
      return s;
    }).join("");
    return '<div class="gv-dona"><svg viewBox="0 0 112 112">' + arcos + '</svg><div class="gv-dona-centro"><b>' +
      num(D.area_ha, 1) + "</b><span>hectáreas</span></div></div>";
  }

  var R = D.riesgo, V = D.verde;
  var SECCIONES = {
    resumen: function () {
      return '<div class="gv-kpis">' +
        kpi(num(D.area_ha, 1), "ha", "Área de estudio") +
        kpi(num(D.poblacion), "", "Habitantes (estimado)") +
        kpi(num(D.viviendas), "", "Viviendas") +
        kpi(num(R.pct_poblacion, 0), "%", "Población en riesgo alto") + "</div>" +
        '<div class="gv-tarjeta"><h3><i class="gv-punto-titulo" style="background:var(--gv-azul)"></i>Lectura rápida</h3>' +
        fila("Uso dominante", D.dominante.cat + " · " + num(D.dominante.porc, 1) + " %") +
        fila("Edificaciones", num(D.edificaciones)) +
        fila("Red vial", num(D.km_total, 1) + " km") +
        fila("Área verde por habitante", num(V.m2_hab, 2) + " m²") +
        fila("Viviendas a ≤ " + D.edu.radio + " m de una escuela", num(D.edu.pct, 0) + " %") +
        '<p class="gv-nota">Población estimada con <strong>' + num(D.hab_vivienda, 1) +
        " hab/vivienda</strong> sobre las edificaciones residenciales y mixtas.</p></div>" +
        '<p class="gv-creditos"><strong>UTMACH · Proyecto Integrador de Geomática</strong><br>' + D.creditos.join("<br>") + "</p>";
    },
    suelo: function () {
      var leyenda = D.usos.map(function (u) {
        return '<div><i style="background:' + u.color + '"></i><span>' + u.cat + "</span><b>" + num(u.porc, 1) + " %</b></div>";
      }).join("");
      var e = D.usos_edif;
      return '<div class="gv-tarjeta"><h3><i class="gv-punto-titulo" style="background:#E69F00"></i>Ocupación del suelo</h3>' +
        '<div class="gv-dona-bloque">' + dona() + '<div class="gv-leyenda-uso">' + leyenda + "</div></div>" +
        '<p class="gv-nota">El uso <strong>' + D.dominante.cat.toLowerCase() + " (" + num(D.dominante.porc, 1) +
        " %)</strong> domina el sector. Suelo vacante y en consolidación suman <strong>" + num(D.reserva_pct, 1) +
        " %</strong>: reserva para crecer fuera de las zonas inundables.</p></div>" +
        '<div class="gv-tarjeta"><h3><i class="gv-punto-titulo" style="background:#56B4E9"></i>Edificaciones y vías</h3>' +
        fila("Edificaciones", num(D.edificaciones)) +
        fila("Residencial", num(e["Residencial"] || 0)) +
        fila("Mixto (vivienda y comercio)", num(e["Mixto (vivienda y comercio)"] || 0)) +
        fila("Comercial / galpón", num(e["Comercial / galpón"] || 0)) +
        fila("Red vial total", num(D.km_total, 1) + " km") +
        fila("Calles y caminos de tierra", num(D.km_tierra, 1) + " km · " + num(D.pct_tierra, 0) + " %") + "</div>" +
        '<div class="gv-tarjeta"><h3><i class="gv-punto-titulo" style="background:#006D2C"></i>Clasificación Sentinel-2</h3>' +
        fila("Exactitud global", num(D.clasif.exactitud_pct, 1) + " %") + fila("Índice kappa", num(D.clasif.kappa, 2)) +
        D.clasif.clases.map(function (k) { return fila(k, num(D.clasif.areas_ha[k], 1) + " ha"); }).join("") +
        '<p class="gv-nota">Imagen del ' + D.clasif.escena.fecha + ", máxima verosimilitud; validada con bloques separados de 200 m.</p></div>";
    },
    acceso: function () {
      return '<div class="gv-tarjeta"><h3><i class="gv-punto-titulo" style="background:var(--gv-azul)"></i>Accesibilidad a equipamientos</h3>' +
        barra("Educación · radio " + D.edu.radio + " m", D.edu.pct, "var(--gv-azul)",
              num(D.edu.viv) + " de " + num(D.viviendas) + " viviendas · " + D.edu.n + " establecimientos") +
        barra("Centro de salud · radio " + D.salud.radio + " m", D.salud.pct, "var(--gv-verde)",
              D.salud.centro + " · a " + num(D.salud.dist_media / 1000, 2) + " km en promedio (mínimo " + num(D.salud.dist_min) + " m)") +
        barra("Farmacia · radio " + D.salud.radio + " m", D.salud.farmacia_pct, "#CC79A7", "Único punto de salud dentro del sector") +
        '<p class="gv-nota">Dentro del sector no hay centro de salud registrado en OpenStreetMap: el más cercano está en La Victoria.</p>' +
        "</div>" +
        '<div class="gv-tarjeta"><h3><i class="gv-punto-titulo" style="background:var(--gv-verde)"></i>Área verde por habitante</h3>' +
        '<div class="gv-dato-grande"><b>' + num(V.m2_hab, 2) + "</b><span>m² / hab</span></div>" +
        '<span class="gv-chip ' + (V.m2_hab < V.oms ? "gv-chip-rojo" : "gv-chip-verde") + '">' +
        (V.m2_hab < V.oms ? "Bajo el mínimo OMS de " + V.oms + " m²" : "Cumple el mínimo OMS") + "</span>" +
        barra("Cumplimiento del mínimo OMS", 100 * V.m2_hab / V.oms, "var(--gv-rojo)") +
        fila("Área verde y recreativa", num(V.m2) + " m²") +
        fila("Déficit frente a OMS", "−" + num(V.deficit / 10000, 2) + " ha", "text-red") + "</div>";
    },
    riesgo: function () {
      return '<div class="gv-tarjeta"><h3><i class="gv-punto-titulo" style="background:var(--gv-rojo)"></i>Susceptibilidad a inundación</h3>' +
        '<div class="gv-dato-grande"><b>' + num(R.pct_poblacion, 1) + " %</b><span>de la población en zona alta</span></div>" +
        '<p class="gv-detalle">' + num(R.hab_alta) + " hab · " + num(R.viv_alta) + " viviendas de " + num(D.viviendas) + "</p>" +
        '<div class="gv-apilada"><i style="flex-basis:' + R.alta + '%;background:#B2182B"></i><i style="flex-basis:' + R.media +
        '%;background:#EF8A62"></i><i style="flex-basis:' + R.baja + '%;background:#FDDBC7"></i></div>' +
        '<div class="gv-apilada-leyenda"><span><i style="background:#B2182B"></i>Alta ' + num(R.alta, 0) + ' %</span><span><i style="background:#EF8A62"></i>Media ' +
        num(R.media, 0) + ' %</span><span><i style="background:#FDDBC7"></i>Baja ' + num(R.baja, 0) + " %</span></div></div>" +
        '<div class="gv-tarjeta">' +
        fila("Manzanas en susceptibilidad alta", R.manz_alta + " de " + R.n_manz) +
        fila("Equipamientos en susceptibilidad alta", R.equip_alta.length + " de " + R.n_equip) +
        '<div class="gv-etiquetas">' + R.equip_alta.map(function (e) { return "<span>" + e + "</span>"; }).join("") + "</div>" +
        '<p class="gv-nota">Alta: terreno a ≤ 2 m sobre el cauce del río Buenavista; media: 2–4 m; baja: &gt; 4 m. ' +
        "Calculado con el MDE Copernicus de 30 m: es una <strong>susceptibilidad aproximada</strong>, no una cota exacta.</p></div>" +
        '<div class="gv-tarjeta"><h3><i class="gv-punto-titulo" style="background:#2B8CBE"></i>Cuenca del río Buenavista</h3>' +
        fila("Área", num(D.cuenca.area_km2, 1) + " km²") + fila("Longitud del cauce", num(D.cuenca.long_cauce_km, 1) + " km") +
        fila("Cota máxima / salida", num(D.cuenca.cota_max) + " / " + num(D.cuenca.cota_min) + " msnm") +
        fila("Compacidad (Kc)", num(D.cuenca.Kc, 2)) + fila("Factor de forma", num(D.cuenca.factor_forma, 2)) +
        fila("Tiempo de concentración", num(D.cuenca.tc_horas, 1) + " h") +
        '<p class="gv-nota">Cuenca alargada y de montaña: la crecida baja rápido desde la cordillera y llega al tramo plano donde está Buenavista.</p></div>';
    }
  };
  var TEMA_DE_PESTANA = { suelo: "uso", acceso: "edificaciones", riesgo: "inundacion" };
  var coberturaDeAcceso = false;

  function mostrar(pestana) {
    seleccionar("#gv-pestanas", $('#gv-pestanas [data-pestana="' + pestana + '"]'));
    var cuerpo = $("#gv-contenido");
    cuerpo.innerHTML = '<div class="gv-seccion">' + SECCIONES[pestana]() + "</div>";
    cuerpo.scrollTop = 0;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        $$("#gv-contenido [data-ancho]").forEach(function (i) { i.style.width = i.dataset.ancho + "%"; });
        $$("#gv-contenido [data-dash]").forEach(function (c) { c.setAttribute("stroke-dasharray", c.dataset.dash); });
      });
    });
    var cob = pestana === "acceso";
    if (cob !== coberturaDeAcceso) {
      ["Cobertura educación (300 m)", "Cobertura salud (600 m)"].forEach(function (n) {
        if (capas[n]) capas[n].setVisible(cob);
      });
      coberturaDeAcceso = cob;
    }
    if (TEMA_DE_PESTANA[pestana]) aplicarTema(TEMA_DE_PESTANA[pestana]);
  }
  $$("#gv-pestanas button").forEach(function (b) {
    b.addEventListener("click", function () { mostrar(b.dataset.pestana); });
  });

  $("#gv-meta-sector").textContent = num(D.area_m2) + " m² · " + num(D.poblacion) + " habitantes (estimado)";
  mostrar("resumen");
  aplicarTema("edificaciones");
  sincronizar();
  encuadrar(0);

  /* ---------- Ventana emergente: siempre en la zona libre del mapa ---------- */
  overlayPopup.autoPan = false;
  function ajustarPopup() {
    var p = $("#popup");
    if (!p || p.style.display === "none") return;
    if (esMovil()) { abrirPanel("indicadores", false); abrirPanel("capas", false); }
    setTimeout(function () {
      var r = p.getBoundingClientRect(), a = areaLibre(), tam = map.getSize();
      var dx = r.left < a.izq ? r.left - a.izq : (r.right > a.der ? r.right - a.der : 0);
      var dy = r.top < a.arriba ? r.top - a.arriba : (r.bottom > a.abajo ? r.bottom - a.abajo : 0);
      if (dx || dy) vista.animate({ center: map.getCoordinateFromPixel([tam[0] / 2 + dx, tam[1] / 2 + dy]), duration: 250 });
    }, 80);
  }
  overlayPopup.on("change:position", ajustarPopup);
})();
