var size = 0;
var placement = 'point';
function categories_Redvial_9(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Principal':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(59,59,59,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.18}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Local':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(110,110,110,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Local de tierra':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(160,116,60,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Servicio':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(142,142,142,1.0)', lineDash: [5.319999999999999,2.6599999999999997], lineCap: 'square', lineJoin: 'bevel', width: 1.3299999999999998}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Camino de tierra':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(160,116,60,1.0)', lineDash: [5.319999999999999,2.6599999999999997], lineCap: 'square', lineJoin: 'bevel', width: 1.3299999999999998}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Peatonal':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(142,142,142,1.0)', lineDash: [1.14,2.28], lineCap: 'square', lineJoin: 'bevel', width: 1.14}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Redvial_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("tipo");
    var labelFont = "9.1px \'Arial\', sans-serif";
    var labelFill = "#222222";
    var bufferColor = "#ffffff";
    var bufferWidth = 2.4000000000000004;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("nombre") !== null) {
        labelText = String(feature.get("nombre"));
    }
    
    var style = categories_Redvial_9(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
