var scriptFile = File('/Users/craig/Dropbox/Art/Brand/Sweetwater/sweetwater-visuals/scripts/full25andNotes.js');
var script = '#include' + scriptFile.fullName;
eval(script);

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

var xOffset = -390
var yOffset = -485


// write first block
for (n = 0; n < full25["tracks"][0].notes.length; n++) {
    var note = full25["tracks"][0].notes[n];
    $.writeln(note.midi);
    $.writeln(note.ticks);
    $.writeln(note.durationTicks);
    $.writeln(note.duration); 
    $.writeln(note.velocity);
    $.writeln(note.time);

    var noteOffset = (note.midi-49)*19


    // Rectangle bounds
    if (note.time < 8){
    drawRectangleInLayer(_midiLayer, n + ", midi: " + note.midi + ", dur: " + note.duration, [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
    } 
    

}

// // Test drawing keys 
// for (i = 1; i <= 25; i++) {
//     drawRectangleInLayer(_midiLayer, "Rectangle " + i, [0,i*24], [180,10]);
//   } 

// subdivide 480 into the 25 keys ()

// subdivide time 120 / 8 = 15 pixels per second 

// melody B3 to C5



