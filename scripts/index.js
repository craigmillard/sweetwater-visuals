/// <reference types="../node_modules/types-for-adobe/AfterEffects/2018"/>

function getItemByName(name){
    for (i = 1; i <= app.project.numItems; i++) {
        projectItem = app.project.item(i);
        $.writeln(projectItem.name)
        if (projectItem.name === name){
            return projectItem;
        }
      }
    return null;
}

function getLayerByName(name, comp){
    for (i = 1; i <= comp.numLayers; i++) {
        layer = comp.layers[i];
        $.writeln(layer.name)
        if (layer.name === name){
            return layer;
        }
      }
    return null;
}

function drawRectangleInLayer(layer, rectName, position, size){
    var _rectangleGroup = layer.property("Contents").addProperty("ADBE Vector Group")
    _rectangleGroup.name = rectName;

    // Rectangle Properties
    var pathGroup = layer.property("Contents").property(rectName).property("Contents").addProperty("ADBE Vector Shape - Rect");
    var size = pathGroup.property("Size").setValue(size);
    var position = pathGroup.property("Position").setValue(position); 
    var strokeGroup = layer.property("Contents").property(rectName).property("Contents").addProperty("ADBE Vector Graphic - Stroke");
    var fillGroup = layer.property("Contents").property(rectName).property("Contents").addProperty("ADBE Vector Graphic - Fill");

}

var _sound_Template = getItemByName("Template");
var _midiLayer = getLayerByName("Top1", _sound_Template);

// // Test drawing keys 
// for (i = 1; i <= 25; i++) {
//     drawRectangleInLayer(_midiLayer, "Rectangle " + i, [0,i*24], [180,10]);
//   } 

var xOffset = 45
var yOffset = -430

// Rectangle bounds
drawRectangleInLayer(_midiLayer, "Rectangle " + i, [xOffset,yOffset], [480,120]);




