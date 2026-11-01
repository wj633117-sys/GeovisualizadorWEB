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
var format_CuencadelroBuenavista_2 = new ol.format.GeoJSON();
var features_CuencadelroBuenavista_2 = format_CuencadelroBuenavista_2.readFeatures(json_CuencadelroBuenavista_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuencadelroBuenavista_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuencadelroBuenavista_2.addFeatures(features_CuencadelroBuenavista_2);
var lyr_CuencadelroBuenavista_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuencadelroBuenavista_2, 
                style: style_CuencadelroBuenavista_2,
                popuplayertitle: 'Cuenca del río Buenavista',
                interactive: true,
                title: '<img src="styles/legend/CuencadelroBuenavista_2.png" /> Cuenca del río Buenavista'
            });
var format_Reddedrenaje_3 = new ol.format.GeoJSON();
var features_Reddedrenaje_3 = format_Reddedrenaje_3.readFeatures(json_Reddedrenaje_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reddedrenaje_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reddedrenaje_3.addFeatures(features_Reddedrenaje_3);
var lyr_Reddedrenaje_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reddedrenaje_3, 
                style: style_Reddedrenaje_3,
                popuplayertitle: 'Red de drenaje',
                interactive: false,
                title: '<img src="styles/legend/Reddedrenaje_3.png" /> Red de drenaje'
            });
var lyr_CoberturaSentinel2_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cobertura Sentinel-2<br />\
    <img src="styles/legend/CoberturaSentinel2_4_0.png" /> Construido<br />\
    <img src="styles/legend/CoberturaSentinel2_4_1.png" /> Vegetación densa<br />\
    <img src="styles/legend/CoberturaSentinel2_4_2.png" /> Vegetación baja<br />\
    <img src="styles/legend/CoberturaSentinel2_4_3.png" /> Suelo desnudo<br />\
    <img src="styles/legend/CoberturaSentinel2_4_4.png" /> Agua<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CoberturaSentinel2_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8889539.740671, -375811.878050, -8887112.439617, -373529.466005]
        })
    });
var format_Usodelsuelo_5 = new ol.format.GeoJSON();
var features_Usodelsuelo_5 = format_Usodelsuelo_5.readFeatures(json_Usodelsuelo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Usodelsuelo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Usodelsuelo_5.addFeatures(features_Usodelsuelo_5);
var lyr_Usodelsuelo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Usodelsuelo_5, 
                style: style_Usodelsuelo_5,
                popuplayertitle: 'Uso del suelo',
                interactive: true,
    title: 'Uso del suelo<br />\
    <img src="styles/legend/Usodelsuelo_5_0.png" /> Residencial<br />\
    <img src="styles/legend/Usodelsuelo_5_1.png" /> Residencial en consolidación<br />\
    <img src="styles/legend/Usodelsuelo_5_2.png" /> Equipamiento<br />\
    <img src="styles/legend/Usodelsuelo_5_3.png" /> Recreación y área verde<br />\
    <img src="styles/legend/Usodelsuelo_5_4.png" /> Agrícola<br />\
    <img src="styles/legend/Usodelsuelo_5_5.png" /> Suelo vacante<br />\
    <img src="styles/legend/Usodelsuelo_5_6.png" /> Vial<br />\
    <img src="styles/legend/Usodelsuelo_5_7.png" /> Cuerpo de agua<br />' });
var format_Susceptibilidadainundacin_6 = new ol.format.GeoJSON();
var features_Susceptibilidadainundacin_6 = format_Susceptibilidadainundacin_6.readFeatures(json_Susceptibilidadainundacin_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Susceptibilidadainundacin_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Susceptibilidadainundacin_6.addFeatures(features_Susceptibilidadainundacin_6);
var lyr_Susceptibilidadainundacin_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Susceptibilidadainundacin_6, 
                style: style_Susceptibilidadainundacin_6,
                popuplayertitle: 'Susceptibilidad a inundación',
                interactive: true,
    title: 'Susceptibilidad a inundación<br />\
    <img src="styles/legend/Susceptibilidadainundacin_6_0.png" /> Alta<br />\
    <img src="styles/legend/Susceptibilidadainundacin_6_1.png" /> Media<br />\
    <img src="styles/legend/Susceptibilidadainundacin_6_2.png" /> Baja<br />' });
var format_Coberturasalud600m_7 = new ol.format.GeoJSON();
var features_Coberturasalud600m_7 = format_Coberturasalud600m_7.readFeatures(json_Coberturasalud600m_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coberturasalud600m_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coberturasalud600m_7.addFeatures(features_Coberturasalud600m_7);
var lyr_Coberturasalud600m_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coberturasalud600m_7, 
                style: style_Coberturasalud600m_7,
                popuplayertitle: 'Cobertura salud (600 m)',
                interactive: false,
    title: 'Cobertura salud (600 m)<br />\
    <img src="styles/legend/Coberturasalud600m_7_0.png" /> Centro de salud a 600 m<br />\
    <img src="styles/legend/Coberturasalud600m_7_1.png" /> Farmacia a 600 m<br />' });
var format_Coberturaeducacin300m_8 = new ol.format.GeoJSON();
var features_Coberturaeducacin300m_8 = format_Coberturaeducacin300m_8.readFeatures(json_Coberturaeducacin300m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coberturaeducacin300m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coberturaeducacin300m_8.addFeatures(features_Coberturaeducacin300m_8);
var lyr_Coberturaeducacin300m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coberturaeducacin300m_8, 
                style: style_Coberturaeducacin300m_8,
                popuplayertitle: 'Cobertura educación (300 m)',
                interactive: false,
                title: '<img src="styles/legend/Coberturaeducacin300m_8.png" /> Cobertura educación (300 m)'
            });
var format_Manzanas_9 = new ol.format.GeoJSON();
var features_Manzanas_9 = format_Manzanas_9.readFeatures(json_Manzanas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_9.addFeatures(features_Manzanas_9);
var lyr_Manzanas_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manzanas_9, 
                style: style_Manzanas_9,
                popuplayertitle: 'Manzanas',
                interactive: true,
    title: 'Manzanas<br />\
    <img src="styles/legend/Manzanas_9_0.png" /> Menos de 5 viv/ha<br />\
    <img src="styles/legend/Manzanas_9_1.png" /> 5 – 15 viv/ha<br />\
    <img src="styles/legend/Manzanas_9_2.png" /> 15 – 25 viv/ha<br />\
    <img src="styles/legend/Manzanas_9_3.png" /> 25 – 40 viv/ha<br />\
    <img src="styles/legend/Manzanas_9_4.png" /> Más de 40 viv/ha<br />' });
var format_Edificaciones_10 = new ol.format.GeoJSON();
var features_Edificaciones_10 = format_Edificaciones_10.readFeatures(json_Edificaciones_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificaciones_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificaciones_10.addFeatures(features_Edificaciones_10);
var lyr_Edificaciones_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificaciones_10, 
                style: style_Edificaciones_10,
                popuplayertitle: 'Edificaciones',
                interactive: true,
    title: 'Edificaciones<br />\
    <img src="styles/legend/Edificaciones_10_0.png" /> Residencial<br />\
    <img src="styles/legend/Edificaciones_10_1.png" /> Mixto (vivienda y comercio)<br />\
    <img src="styles/legend/Edificaciones_10_2.png" /> Comercial / galpón<br />\
    <img src="styles/legend/Edificaciones_10_3.png" /> Equipamiento: Educación<br />\
    <img src="styles/legend/Edificaciones_10_4.png" /> Equipamiento: Culto<br />\
    <img src="styles/legend/Edificaciones_10_5.png" /> Equipamiento: Seguridad<br />\
    <img src="styles/legend/Edificaciones_10_6.png" /> Equipamiento: Salud<br />\
    <img src="styles/legend/Edificaciones_10_7.png" /> Equipamiento: Recreación<br />\
    <img src="styles/legend/Edificaciones_10_8.png" /> Equipamiento: Comercio y servicios<br />' });
var format_Hidrografa_11 = new ol.format.GeoJSON();
var features_Hidrografa_11 = format_Hidrografa_11.readFeatures(json_Hidrografa_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidrografa_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrografa_11.addFeatures(features_Hidrografa_11);
var lyr_Hidrografa_11 = new ol.layer.Vector({
                declutter: 'etiquetas',
                source:jsonSource_Hidrografa_11, 
                style: style_Hidrografa_11,
                popuplayertitle: 'Hidrografía',
                interactive: true,
                title: '<img src="styles/legend/Hidrografa_11.png" /> Hidrografía'
            });
var format_Redvial_12 = new ol.format.GeoJSON();
var features_Redvial_12 = format_Redvial_12.readFeatures(json_Redvial_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redvial_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redvial_12.addFeatures(features_Redvial_12);
var lyr_Redvial_12 = new ol.layer.Vector({
                declutter: 'etiquetas',
                source:jsonSource_Redvial_12, 
                style: style_Redvial_12,
                popuplayertitle: 'Red vial',
                interactive: true,
    title: 'Red vial<br />\
    <img src="styles/legend/Redvial_12_0.png" /> Principal<br />\
    <img src="styles/legend/Redvial_12_1.png" /> Local<br />\
    <img src="styles/legend/Redvial_12_2.png" /> Local de tierra<br />\
    <img src="styles/legend/Redvial_12_3.png" /> Servicio<br />\
    <img src="styles/legend/Redvial_12_4.png" /> Camino de tierra<br />\
    <img src="styles/legend/Redvial_12_5.png" /> Peatonal<br />' });
var format_Lmitedeestudio_13 = new ol.format.GeoJSON();
var features_Lmitedeestudio_13 = format_Lmitedeestudio_13.readFeatures(json_Lmitedeestudio_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmitedeestudio_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmitedeestudio_13.addFeatures(features_Lmitedeestudio_13);
var lyr_Lmitedeestudio_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmitedeestudio_13, 
                style: style_Lmitedeestudio_13,
                popuplayertitle: 'Límite de estudio',
                interactive: false,
                title: '<img src="styles/legend/Lmitedeestudio_13.png" /> Límite de estudio'
            });
var format_Equipamientos_14 = new ol.format.GeoJSON();
var features_Equipamientos_14 = format_Equipamientos_14.readFeatures(json_Equipamientos_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equipamientos_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipamientos_14.addFeatures(features_Equipamientos_14);
var lyr_Equipamientos_14 = new ol.layer.Vector({
                declutter: 'etiquetas',
                source:jsonSource_Equipamientos_14, 
                style: style_Equipamientos_14,
                popuplayertitle: 'Equipamientos',
                interactive: true,
    title: 'Equipamientos<br />\
    <img src="styles/legend/Equipamientos_14_0.png" /> Educación<br />\
    <img src="styles/legend/Equipamientos_14_1.png" /> Salud<br />\
    <img src="styles/legend/Equipamientos_14_2.png" /> Culto<br />\
    <img src="styles/legend/Equipamientos_14_3.png" /> Seguridad<br />\
    <img src="styles/legend/Equipamientos_14_4.png" /> Recreación<br />\
    <img src="styles/legend/Equipamientos_14_5.png" /> Comercio y servicios<br />\
    <img src="styles/legend/Equipamientos_14_6.png" /> Cementerio<br />' });

lyr_OpenStreetMap_0.setVisible(false);lyr_ImagensatelitalEsri_1.setVisible(true);lyr_CuencadelroBuenavista_2.setVisible(false);lyr_Reddedrenaje_3.setVisible(false);lyr_CoberturaSentinel2_4.setVisible(false);lyr_Usodelsuelo_5.setVisible(false);lyr_Susceptibilidadainundacin_6.setVisible(false);lyr_Coberturasalud600m_7.setVisible(false);lyr_Coberturaeducacin300m_8.setVisible(false);lyr_Manzanas_9.setVisible(false);lyr_Edificaciones_10.setVisible(true);lyr_Hidrografa_11.setVisible(true);lyr_Redvial_12.setVisible(true);lyr_Lmitedeestudio_13.setVisible(true);lyr_Equipamientos_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ImagensatelitalEsri_1,lyr_CuencadelroBuenavista_2,lyr_Reddedrenaje_3,lyr_CoberturaSentinel2_4,lyr_Usodelsuelo_5,lyr_Susceptibilidadainundacin_6,lyr_Coberturasalud600m_7,lyr_Coberturaeducacin300m_8,lyr_Manzanas_9,lyr_Edificaciones_10,lyr_Hidrografa_11,lyr_Redvial_12,lyr_Lmitedeestudio_13,lyr_Equipamientos_14];
lyr_CuencadelroBuenavista_2.set('fieldAliases', {'fid': 'fid', 'nombre': 'Nombre', 'area_km2': 'Área (km²)', 'perim_km': 'Perímetro (km)', 'long_cauce_km': 'Longitud del cauce (km)', 'cota_max': 'Cota máxima (msnm)', 'cota_min': 'Cota mínima (msnm)', 'cota_media': 'Cota media (msnm)', 'pend_media_pct': 'Pendiente media (%)', 'kc': 'Compacidad (Kc)', 'factor_forma': 'Factor de forma', 'dens_drenaje': 'Densidad de drenaje (km/km²)', 'tc_horas': 'Tiempo de concentración (h)', });
lyr_Reddedrenaje_3.set('fieldAliases', {'fid': 'fid', 'fuente': 'Fuente', });
lyr_Usodelsuelo_5.set('fieldAliases', {'fid': 'fid', 'categoria': 'Categoría', 'area_m2': 'Área (m²)', 'porc': '% del área', 'criterio': 'Criterio', });
lyr_Susceptibilidadainundacin_6.set('fieldAliases', {'fid': 'fid', 'nivel': 'Susceptibilidad', 'orden': 'Orden', 'descripcion': 'Descripción', 'area_m2': 'Área (m²)', 'porc': '% del área', 'metodo': 'Método', });
lyr_Coberturasalud600m_7.set('fieldAliases', {'fid': 'fid', 'cobertura': 'Cobertura', 'radio_m': 'Radio (m)', 'puntos': 'Establecimientos', });
lyr_Coberturaeducacin300m_8.set('fieldAliases', {'fid': 'fid', 'cobertura': 'Cobertura', 'radio_m': 'Radio (m)', 'puntos': 'Establecimientos', });
lyr_Manzanas_9.set('fieldAliases', {'fid': 'fid', 'id_manzana': 'Manzana N.º', 'area_m2': 'Área (m²)', 'perim_m': 'Perímetro (m)', 'estado': 'Estado', 'riesgo': 'Riesgo de inundación', 'n_edif': 'Edificaciones', 'viviendas': 'Viviendas', 'poblacion': 'Población estimada (hab)', 'dens_viv_ha': 'Densidad (viv/ha)', 'construido_pct': 'Superficie construida (%)', 'uso_predom': 'Uso predominante', 'dist_edu_m': 'Distancia a educación (m)', 'dist_salud_m': 'Distancia al centro de salud (m)', });
lyr_Edificaciones_10.set('fieldAliases', {'fid': 'fid', 'id_edif': 'Edificación N.º', 'uso': 'Uso', 'area_m2': 'Área (m²)', 'id_manzana': 'Manzana N.º', 'fuente': 'Fuente', 'criterio': 'Criterio', 'riesgo': 'Riesgo de inundación', });
lyr_Hidrografa_11.set('fieldAliases', {'fid': 'fid', 'nombre': 'Nombre', 'tipo': 'Tipo', 'long_m': 'Longitud (m)', 'fuente': 'Fuente', });
lyr_Redvial_12.set('fieldAliases', {'fid': 'fid', 'nombre': 'Nombre', 'tipo': 'Tipo', 'ancho_m': 'Ancho (m)', 'long_m': 'Longitud (m)', 'fuente': 'Fuente', });
lyr_Lmitedeestudio_13.set('fieldAliases', {'fid': 'fid', 'nombre': 'Nombre', 'parroquia': 'Parroquia', 'canton': 'Cantón', 'area_m2': 'Área (m²)', 'area_ha': 'Área (ha)', });
lyr_Equipamientos_14.set('fieldAliases', {'fid': 'fid', 'nombre': 'Nombre', 'tipo': 'Tipo', 'subtipo': 'Subtipo', 'fuente': 'Fuente', 'riesgo': 'Riesgo de inundación', });
lyr_CuencadelroBuenavista_2.set('fieldImages', {'fid': '', 'nombre': '', 'area_km2': '', 'perim_km': '', 'long_cauce_km': '', 'cota_max': '', 'cota_min': '', 'cota_media': '', 'pend_media_pct': '', 'kc': '', 'factor_forma': '', 'dens_drenaje': '', 'tc_horas': '', });
lyr_Reddedrenaje_3.set('fieldImages', {'fid': '', 'fuente': '', });
lyr_Usodelsuelo_5.set('fieldImages', {'fid': '', 'categoria': '', 'area_m2': '', 'porc': '', 'criterio': '', });
lyr_Susceptibilidadainundacin_6.set('fieldImages', {'fid': '', 'nivel': '', 'orden': '', 'descripcion': '', 'area_m2': '', 'porc': '', 'metodo': '', });
lyr_Coberturasalud600m_7.set('fieldImages', {'fid': '', 'cobertura': '', 'radio_m': '', 'puntos': '', });
lyr_Coberturaeducacin300m_8.set('fieldImages', {'fid': '', 'cobertura': '', 'radio_m': '', 'puntos': '', });
lyr_Manzanas_9.set('fieldImages', {'fid': '', 'id_manzana': '', 'area_m2': '', 'perim_m': '', 'estado': '', 'riesgo': '', 'n_edif': '', 'viviendas': '', 'poblacion': '', 'dens_viv_ha': '', 'construido_pct': '', 'uso_predom': '', 'dist_edu_m': '', 'dist_salud_m': '', });
lyr_Edificaciones_10.set('fieldImages', {'fid': '', 'id_edif': '', 'uso': '', 'area_m2': '', 'id_manzana': '', 'fuente': '', 'criterio': '', 'riesgo': '', });
lyr_Hidrografa_11.set('fieldImages', {'fid': '', 'nombre': '', 'tipo': '', 'long_m': '', 'fuente': '', });
lyr_Redvial_12.set('fieldImages', {'fid': '', 'nombre': '', 'tipo': '', 'ancho_m': '', 'long_m': '', 'fuente': '', });
lyr_Lmitedeestudio_13.set('fieldImages', {'fid': '', 'nombre': '', 'parroquia': '', 'canton': '', 'area_m2': '', 'area_ha': '', });
lyr_Equipamientos_14.set('fieldImages', {'fid': '', 'nombre': '', 'tipo': '', 'subtipo': '', 'fuente': '', 'riesgo': '', });
lyr_CuencadelroBuenavista_2.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', 'perim_km': 'inline label - visible with data', 'long_cauce_km': 'inline label - visible with data', 'cota_max': 'inline label - visible with data', 'cota_min': 'inline label - visible with data', 'cota_media': 'inline label - visible with data', 'pend_media_pct': 'inline label - visible with data', 'kc': 'inline label - visible with data', 'factor_forma': 'inline label - visible with data', 'dens_drenaje': 'inline label - visible with data', 'tc_horas': 'inline label - visible with data', });
lyr_Reddedrenaje_3.set('fieldLabels', {'fid': 'hidden field', 'fuente': 'hidden field', });
lyr_Usodelsuelo_5.set('fieldLabels', {'fid': 'hidden field', 'categoria': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'porc': 'inline label - visible with data', 'criterio': 'hidden field', });
lyr_Susceptibilidadainundacin_6.set('fieldLabels', {'fid': 'hidden field', 'nivel': 'inline label - visible with data', 'orden': 'hidden field', 'descripcion': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'porc': 'inline label - visible with data', 'metodo': 'hidden field', });
lyr_Coberturasalud600m_7.set('fieldLabels', {'fid': 'hidden field', 'cobertura': 'inline label - visible with data', 'radio_m': 'inline label - visible with data', 'puntos': 'inline label - visible with data', });
lyr_Coberturaeducacin300m_8.set('fieldLabels', {'fid': 'hidden field', 'cobertura': 'inline label - visible with data', 'radio_m': 'inline label - visible with data', 'puntos': 'inline label - visible with data', });
lyr_Manzanas_9.set('fieldLabels', {'fid': 'hidden field', 'id_manzana': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'perim_m': 'hidden field', 'estado': 'hidden field', 'riesgo': 'inline label - visible with data', 'n_edif': 'inline label - visible with data', 'viviendas': 'inline label - visible with data', 'poblacion': 'inline label - visible with data', 'dens_viv_ha': 'inline label - visible with data', 'construido_pct': 'inline label - visible with data', 'uso_predom': 'inline label - visible with data', 'dist_edu_m': 'inline label - visible with data', 'dist_salud_m': 'inline label - visible with data', });
lyr_Edificaciones_10.set('fieldLabels', {'fid': 'hidden field', 'id_edif': 'hidden field', 'uso': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'id_manzana': 'inline label - visible with data', 'fuente': 'hidden field', 'criterio': 'hidden field', 'riesgo': 'inline label - visible with data', });
lyr_Hidrografa_11.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'long_m': 'inline label - visible with data', 'fuente': 'hidden field', });
lyr_Redvial_12.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'ancho_m': 'inline label - visible with data', 'long_m': 'inline label - visible with data', 'fuente': 'hidden field', });
lyr_Lmitedeestudio_13.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - visible with data', 'parroquia': 'inline label - visible with data', 'canton': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', });
lyr_Equipamientos_14.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'subtipo': 'inline label - visible with data', 'fuente': 'hidden field', 'riesgo': 'inline label - visible with data', });
lyr_Equipamientos_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});