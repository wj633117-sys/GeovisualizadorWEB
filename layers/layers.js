var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
                maxZoom: 19
            })
        });

        var lyr_ImagensatelitalEsri_1 = new ol.layer.Tile({
            'title': 'Imagen satelital (Esri)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                maxZoom: 18
            })
        });
var format_Usodelsuelo_2 = new ol.format.GeoJSON();
var features_Usodelsuelo_2 = format_Usodelsuelo_2.readFeatures(json_Usodelsuelo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Usodelsuelo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Usodelsuelo_2.addFeatures(features_Usodelsuelo_2);
var lyr_Usodelsuelo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Usodelsuelo_2, 
                style: style_Usodelsuelo_2,
                popuplayertitle: 'Uso del suelo',
                interactive: true,
    title: 'Uso del suelo<br />\
    <img src="styles/legend/Usodelsuelo_2_0.png" /> Residencial<br />\
    <img src="styles/legend/Usodelsuelo_2_1.png" /> Residencial en consolidación<br />\
    <img src="styles/legend/Usodelsuelo_2_2.png" /> Equipamiento<br />\
    <img src="styles/legend/Usodelsuelo_2_3.png" /> Recreación y área verde<br />\
    <img src="styles/legend/Usodelsuelo_2_4.png" /> Agrícola<br />\
    <img src="styles/legend/Usodelsuelo_2_5.png" /> Suelo vacante<br />\
    <img src="styles/legend/Usodelsuelo_2_6.png" /> Vial<br />\
    <img src="styles/legend/Usodelsuelo_2_7.png" /> Cuerpo de agua<br />' });
var format_Susceptibilidadainundacin_3 = new ol.format.GeoJSON();
var features_Susceptibilidadainundacin_3 = format_Susceptibilidadainundacin_3.readFeatures(json_Susceptibilidadainundacin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Susceptibilidadainundacin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Susceptibilidadainundacin_3.addFeatures(features_Susceptibilidadainundacin_3);
var lyr_Susceptibilidadainundacin_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Susceptibilidadainundacin_3, 
                style: style_Susceptibilidadainundacin_3,
                popuplayertitle: 'Susceptibilidad a inundación',
                interactive: true,
    title: 'Susceptibilidad a inundación<br />\
    <img src="styles/legend/Susceptibilidadainundacin_3_0.png" /> Alta<br />\
    <img src="styles/legend/Susceptibilidadainundacin_3_1.png" /> Media<br />\
    <img src="styles/legend/Susceptibilidadainundacin_3_2.png" /> Baja<br />' });
var format_Coberturasalud600m_4 = new ol.format.GeoJSON();
var features_Coberturasalud600m_4 = format_Coberturasalud600m_4.readFeatures(json_Coberturasalud600m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coberturasalud600m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coberturasalud600m_4.addFeatures(features_Coberturasalud600m_4);
var lyr_Coberturasalud600m_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coberturasalud600m_4, 
                style: style_Coberturasalud600m_4,
                popuplayertitle: 'Cobertura salud (600 m)',
                interactive: true,
                title: '<img src="styles/legend/Coberturasalud600m_4.png" /> Cobertura salud (600 m)'
            });
var format_Coberturaeducacin300m_5 = new ol.format.GeoJSON();
var features_Coberturaeducacin300m_5 = format_Coberturaeducacin300m_5.readFeatures(json_Coberturaeducacin300m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coberturaeducacin300m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coberturaeducacin300m_5.addFeatures(features_Coberturaeducacin300m_5);
var lyr_Coberturaeducacin300m_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coberturaeducacin300m_5, 
                style: style_Coberturaeducacin300m_5,
                popuplayertitle: 'Cobertura educación (300 m)',
                interactive: true,
                title: '<img src="styles/legend/Coberturaeducacin300m_5.png" /> Cobertura educación (300 m)'
            });
var format_Manzanas_6 = new ol.format.GeoJSON();
var features_Manzanas_6 = format_Manzanas_6.readFeatures(json_Manzanas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_6.addFeatures(features_Manzanas_6);
var lyr_Manzanas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manzanas_6, 
                style: style_Manzanas_6,
                popuplayertitle: 'Manzanas',
                interactive: true,
    title: 'Manzanas<br />\
    <img src="styles/legend/Manzanas_6_0.png" /> Menos de 5 viv/ha<br />\
    <img src="styles/legend/Manzanas_6_1.png" /> 5 – 15 viv/ha<br />\
    <img src="styles/legend/Manzanas_6_2.png" /> 15 – 25 viv/ha<br />\
    <img src="styles/legend/Manzanas_6_3.png" /> 25 – 40 viv/ha<br />\
    <img src="styles/legend/Manzanas_6_4.png" /> Más de 40 viv/ha<br />' });
var format_Edificaciones_7 = new ol.format.GeoJSON();
var features_Edificaciones_7 = format_Edificaciones_7.readFeatures(json_Edificaciones_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificaciones_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificaciones_7.addFeatures(features_Edificaciones_7);
var lyr_Edificaciones_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificaciones_7, 
                style: style_Edificaciones_7,
                popuplayertitle: 'Edificaciones',
                interactive: true,
    title: 'Edificaciones<br />\
    <img src="styles/legend/Edificaciones_7_0.png" /> Residencial<br />\
    <img src="styles/legend/Edificaciones_7_1.png" /> Mixto (vivienda y comercio)<br />\
    <img src="styles/legend/Edificaciones_7_2.png" /> Comercial / galpón<br />\
    <img src="styles/legend/Edificaciones_7_3.png" /> Equipamiento: Educación<br />\
    <img src="styles/legend/Edificaciones_7_4.png" /> Equipamiento: Culto<br />\
    <img src="styles/legend/Edificaciones_7_5.png" /> Equipamiento: Seguridad<br />\
    <img src="styles/legend/Edificaciones_7_6.png" /> Equipamiento: Salud<br />\
    <img src="styles/legend/Edificaciones_7_7.png" /> Equipamiento: Recreación<br />\
    <img src="styles/legend/Edificaciones_7_8.png" /> Equipamiento: Comercio y servicios<br />' });
var format_Hidrografa_8 = new ol.format.GeoJSON();
var features_Hidrografa_8 = format_Hidrografa_8.readFeatures(json_Hidrografa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidrografa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrografa_8.addFeatures(features_Hidrografa_8);
var lyr_Hidrografa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hidrografa_8, 
                style: style_Hidrografa_8,
                popuplayertitle: 'Hidrografía',
                interactive: true,
                title: '<img src="styles/legend/Hidrografa_8.png" /> Hidrografía'
            });
var format_Redvial_9 = new ol.format.GeoJSON();
var features_Redvial_9 = format_Redvial_9.readFeatures(json_Redvial_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redvial_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redvial_9.addFeatures(features_Redvial_9);
var lyr_Redvial_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Redvial_9, 
                style: style_Redvial_9,
                popuplayertitle: 'Red vial',
                interactive: true,
    title: 'Red vial<br />\
    <img src="styles/legend/Redvial_9_0.png" /> Principal<br />\
    <img src="styles/legend/Redvial_9_1.png" /> Local<br />\
    <img src="styles/legend/Redvial_9_2.png" /> Local de tierra<br />\
    <img src="styles/legend/Redvial_9_3.png" /> Servicio<br />\
    <img src="styles/legend/Redvial_9_4.png" /> Camino de tierra<br />\
    <img src="styles/legend/Redvial_9_5.png" /> Peatonal<br />' });
var format_Lmitedeestudio_10 = new ol.format.GeoJSON();
var features_Lmitedeestudio_10 = format_Lmitedeestudio_10.readFeatures(json_Lmitedeestudio_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmitedeestudio_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmitedeestudio_10.addFeatures(features_Lmitedeestudio_10);
var lyr_Lmitedeestudio_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmitedeestudio_10, 
                style: style_Lmitedeestudio_10,
                popuplayertitle: 'Límite de estudio',
                interactive: false,
                title: '<img src="styles/legend/Lmitedeestudio_10.png" /> Límite de estudio'
            });
var format_Equipamientos_11 = new ol.format.GeoJSON();
var features_Equipamientos_11 = format_Equipamientos_11.readFeatures(json_Equipamientos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equipamientos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipamientos_11.addFeatures(features_Equipamientos_11);
var lyr_Equipamientos_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Equipamientos_11, 
                style: style_Equipamientos_11,
                popuplayertitle: 'Equipamientos',
                interactive: true,
    title: 'Equipamientos<br />\
    <img src="styles/legend/Equipamientos_11_0.png" /> Educación<br />\
    <img src="styles/legend/Equipamientos_11_1.png" /> Salud<br />\
    <img src="styles/legend/Equipamientos_11_2.png" /> Culto<br />\
    <img src="styles/legend/Equipamientos_11_3.png" /> Seguridad<br />\
    <img src="styles/legend/Equipamientos_11_4.png" /> Recreación<br />\
    <img src="styles/legend/Equipamientos_11_5.png" /> Comercio y servicios<br />\
    <img src="styles/legend/Equipamientos_11_6.png" /> Cementerio<br />' });

lyr_OpenStreetMap_0.setVisible(false);lyr_ImagensatelitalEsri_1.setVisible(true);lyr_Usodelsuelo_2.setVisible(false);lyr_Susceptibilidadainundacin_3.setVisible(false);lyr_Coberturasalud600m_4.setVisible(false);lyr_Coberturaeducacin300m_5.setVisible(false);lyr_Manzanas_6.setVisible(false);lyr_Edificaciones_7.setVisible(true);lyr_Hidrografa_8.setVisible(true);lyr_Redvial_9.setVisible(true);lyr_Lmitedeestudio_10.setVisible(true);lyr_Equipamientos_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ImagensatelitalEsri_1,lyr_Usodelsuelo_2,lyr_Susceptibilidadainundacin_3,lyr_Coberturasalud600m_4,lyr_Coberturaeducacin300m_5,lyr_Manzanas_6,lyr_Edificaciones_7,lyr_Hidrografa_8,lyr_Redvial_9,lyr_Lmitedeestudio_10,lyr_Equipamientos_11];
lyr_Usodelsuelo_2.set('fieldAliases', {'fid': 'fid', 'categoria': 'Categoría', 'area_m2': 'Área (m²)', 'porc': '% del área', 'criterio': 'Criterio', });
lyr_Susceptibilidadainundacin_3.set('fieldAliases', {'fid': 'fid', 'nivel': 'Susceptibilidad', 'orden': 'Orden', 'descripcion': 'Descripción', 'area_m2': 'Área (m²)', 'porc': '% del área', 'metodo': 'Método', });
lyr_Coberturasalud600m_4.set('fieldAliases', {'cobertura': 'Cobertura', 'radio_m': 'Radio (m)', 'equipamientos': 'N.º de equipamientos', });
lyr_Coberturaeducacin300m_5.set('fieldAliases', {'cobertura': 'Cobertura', 'radio_m': 'Radio (m)', 'equipamientos': 'N.º de equipamientos', });
lyr_Manzanas_6.set('fieldAliases', {'fid': 'fid', 'id_manzana': 'Manzana N.º', 'area_m2': 'Área (m²)', 'perim_m': 'Perímetro (m)', 'estado': 'Estado', 'riesgo': 'Riesgo de inundación', 'n_edif': 'Edificaciones', 'viviendas': 'Viviendas', 'poblacion': 'Población estimada (hab)', 'dens_viv_ha': 'Densidad (viv/ha)', 'construido_pct': 'Superficie construida (%)', 'uso_predom': 'Uso predominante', });
lyr_Edificaciones_7.set('fieldAliases', {'fid': 'fid', 'id_edif': 'Edificación N.º', 'uso': 'Uso', 'area_m2': 'Área (m²)', 'id_manzana': 'Manzana N.º', 'fuente': 'Fuente', 'criterio': 'Criterio', 'riesgo': 'Riesgo de inundación', });
lyr_Hidrografa_8.set('fieldAliases', {'fid': 'fid', 'nombre': 'Nombre', 'tipo': 'Tipo', 'long_m': 'Longitud (m)', 'fuente': 'Fuente', });
lyr_Redvial_9.set('fieldAliases', {'fid': 'fid', 'nombre': 'Nombre', 'tipo': 'Tipo', 'ancho_m': 'Ancho (m)', 'long_m': 'Longitud (m)', 'fuente': 'Fuente', });
lyr_Lmitedeestudio_10.set('fieldAliases', {'fid': 'fid', 'nombre': 'Nombre', 'parroquia': 'Parroquia', 'canton': 'Cantón', 'area_m2': 'Área (m²)', 'area_ha': 'Área (ha)', });
lyr_Equipamientos_11.set('fieldAliases', {'fid': 'fid', 'nombre': 'Nombre', 'tipo': 'Tipo', 'subtipo': 'Subtipo', 'fuente': 'Fuente', 'riesgo': 'Riesgo de inundación', });
lyr_Usodelsuelo_2.set('fieldImages', {'fid': '', 'categoria': '', 'area_m2': '', 'porc': '', 'criterio': '', });
lyr_Susceptibilidadainundacin_3.set('fieldImages', {'fid': '', 'nivel': '', 'orden': '', 'descripcion': '', 'area_m2': '', 'porc': '', 'metodo': '', });
lyr_Coberturasalud600m_4.set('fieldImages', {'cobertura': '', 'radio_m': '', 'equipamientos': '', });
lyr_Coberturaeducacin300m_5.set('fieldImages', {'cobertura': '', 'radio_m': '', 'equipamientos': '', });
lyr_Manzanas_6.set('fieldImages', {'fid': '', 'id_manzana': '', 'area_m2': '', 'perim_m': '', 'estado': '', 'riesgo': '', 'n_edif': '', 'viviendas': '', 'poblacion': '', 'dens_viv_ha': '', 'construido_pct': '', 'uso_predom': '', });
lyr_Edificaciones_7.set('fieldImages', {'fid': '', 'id_edif': '', 'uso': '', 'area_m2': '', 'id_manzana': '', 'fuente': '', 'criterio': '', 'riesgo': '', });
lyr_Hidrografa_8.set('fieldImages', {'fid': '', 'nombre': '', 'tipo': '', 'long_m': '', 'fuente': '', });
lyr_Redvial_9.set('fieldImages', {'fid': '', 'nombre': '', 'tipo': '', 'ancho_m': '', 'long_m': '', 'fuente': '', });
lyr_Lmitedeestudio_10.set('fieldImages', {'fid': '', 'nombre': '', 'parroquia': '', 'canton': '', 'area_m2': '', 'area_ha': '', });
lyr_Equipamientos_11.set('fieldImages', {'fid': '', 'nombre': '', 'tipo': '', 'subtipo': '', 'fuente': '', 'riesgo': '', });
lyr_Usodelsuelo_2.set('fieldLabels', {'fid': 'hidden field', 'categoria': 'inline label - always visible', 'area_m2': 'inline label - always visible', 'porc': 'inline label - always visible', 'criterio': 'hidden field', });
lyr_Susceptibilidadainundacin_3.set('fieldLabels', {'fid': 'hidden field', 'nivel': 'inline label - always visible', 'orden': 'hidden field', 'descripcion': 'inline label - always visible', 'area_m2': 'inline label - always visible', 'porc': 'inline label - always visible', 'metodo': 'hidden field', });
lyr_Coberturasalud600m_4.set('fieldLabels', {'cobertura': 'inline label - always visible', 'radio_m': 'inline label - always visible', 'equipamientos': 'inline label - always visible', });
lyr_Coberturaeducacin300m_5.set('fieldLabels', {'cobertura': 'inline label - always visible', 'radio_m': 'inline label - always visible', 'equipamientos': 'inline label - always visible', });
lyr_Manzanas_6.set('fieldLabels', {'fid': 'hidden field', 'id_manzana': 'inline label - always visible', 'area_m2': 'inline label - always visible', 'perim_m': 'hidden field', 'estado': 'hidden field', 'riesgo': 'inline label - always visible', 'n_edif': 'inline label - always visible', 'viviendas': 'inline label - always visible', 'poblacion': 'inline label - always visible', 'dens_viv_ha': 'inline label - always visible', 'construido_pct': 'inline label - always visible', 'uso_predom': 'inline label - always visible', });
lyr_Edificaciones_7.set('fieldLabels', {'fid': 'hidden field', 'id_edif': 'hidden field', 'uso': 'inline label - always visible', 'area_m2': 'inline label - always visible', 'id_manzana': 'inline label - always visible', 'fuente': 'hidden field', 'criterio': 'hidden field', 'riesgo': 'inline label - always visible', });
lyr_Hidrografa_8.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'long_m': 'inline label - always visible', 'fuente': 'hidden field', });
lyr_Redvial_9.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'ancho_m': 'inline label - always visible', 'long_m': 'inline label - always visible', 'fuente': 'hidden field', });
lyr_Lmitedeestudio_10.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'parroquia': 'inline label - always visible', 'canton': 'inline label - always visible', 'area_m2': 'inline label - always visible', 'area_ha': 'inline label - always visible', });
lyr_Equipamientos_11.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'subtipo': 'inline label - always visible', 'fuente': 'hidden field', 'riesgo': 'inline label - always visible', });
lyr_Equipamientos_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});