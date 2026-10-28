var size = 0;
var placement = 'point';
function categories_Edificaciones_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Residencial':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(61,42,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.304}),fill: new ol.style.Fill({color: 'rgba(230,159,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mixto (vivienda y comercio)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(61,26,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.304}),fill: new ol.style.Fill({color: 'rgba(213,94,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Comercial / galpón':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(13,53,80,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.304}),fill: new ol.style.Fill({color: 'rgba(86,180,233,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Equipamiento: Educación':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,31,51,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.304}),fill: new ol.style.Fill({color: 'rgba(0,114,178,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Equipamiento: Culto':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,15,48,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.304}),fill: new ol.style.Fill({color: 'rgba(106,61,154,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Equipamiento: Seguridad':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.304}),fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Equipamiento: Salud':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(61,31,48,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.304}),fill: new ol.style.Fill({color: 'rgba(204,121,167,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Equipamiento: Recreación':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,48,31,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.304}),fill: new ol.style.Fill({color: 'rgba(0,158,115,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Equipamiento: Comercio y servicios':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(34,34,34,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.304}),fill: new ol.style.Fill({color: 'rgba(153,153,153,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Edificaciones_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("uso");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Edificaciones_7(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
