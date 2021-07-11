/// <reference types="../node_modules/types-for-adobe/AfterEffects/2018"/>

// Create a layer
var _midiLayer = app.project.item(4).layer(1);
var _rectangle1 = _midiLayer.property("Contents").property("Rectangle 1");
var _pathGroup = _rectangle1.property(2).property(1);

$.writeln(_midiLayer.property("Contents").property("Rectangle 1").matchName);

// Find comp
// Add shape layer
// Add "ADBE Vector Group"
app.beginUndoGroup("Process");
var comp = app.project.items.addComp("Test Comp", 1920, 1080, 1, 10, 30)
comp.openInViewer();
var shapeLayer = comp.layers.addShape();
shapeLayer.name = "Rectangle"
var rectangleGroup = shapeLayer.property("Contents").addProperty("ADBE Vector Group")
rectangleGroup.name = "Rectangle"

// Path group is different
var pathGroup = shapeLayer.property("Contents").property("Rectangle").property("Contents").addProperty("ADBE Vector Shape - Rect");
var size = pathGroup.property("Size").setValue([100,200]);
var position = pathGroup.property("Position").setValue([500,250]); 
// Fill is same
var strokeGroup = shapeLayer.property("Contents").property("Rectangle").property("Contents").addProperty("ADBE Vector Graphic - Stroke");

// Fill is same
var fillGroup = shapeLayer.property("Contents").property("Rectangle").property("Contents").addProperty("ADBE Vector Graphic - Fill");

app.endUndoGroup();



