var size = 0;
var placement = 'point';
function categories_Usodelsuelo_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Residencial':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(122,85,0,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.38}),fill: new ol.style.Fill({color: 'rgba(230,159,0,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Residencial en consolidación':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(122,85,0,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.38}),fill: new ol.style.Fill({color: 'rgba(247,207,138,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Equipamiento':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(107,58,89,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.38}),fill: new ol.style.Fill({color: 'rgba(204,121,167,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Recreación y área verde':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,77,56,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.38}),fill: new ol.style.Fill({color: 'rgba(0,158,115,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Agrícola':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(138,130,32,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.38}),fill: new ol.style.Fill({color: 'rgba(240,228,66,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Suelo vacante':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(156,143,112,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.38}),fill: new ol.style.Fill({color: 'rgba(232,220,192,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vial':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(189,189,189,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(189,189,189,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cuerpo de agua':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,111,163,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.38}),fill: new ol.style.Fill({color: 'rgba(86,180,233,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Usodelsuelo_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("categoria");
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
    
    var style = categories_Usodelsuelo_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
