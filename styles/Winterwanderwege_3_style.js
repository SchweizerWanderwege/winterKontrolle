var size = 0;
var placement = 'point';
function categories_Winterwanderwege_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,255,0.6)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,170,220,0.6)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,100,220,0.6)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Winterwanderwege_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("IsCHM");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Winterwanderwege_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
