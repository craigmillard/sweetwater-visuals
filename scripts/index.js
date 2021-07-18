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
var yIncrement= -120; 


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

    switch (true) {
        case (note.time <= 5.75):
            var _midiLayer = getLayerByName("Top1", _sound_Template);
            drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration + ", t: " +note.time, [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
            break;
        case (note.time <= 11.75):
            yOffset = -605
            var _midiLayer = getLayerByName("Top2", _sound_Template);
            drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration + ", t: " +note.time, [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
            break;
        case (note.time <= 17.75):
            yOffset = -725
            var _midiLayer = getLayerByName("Top3", _sound_Template);
            drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration + ", t: " +note.time, [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
            break;
        case (note.time <= 23.75):
            yOffset = -845
            var _midiLayer = getLayerByName("Top4", _sound_Template);
            drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration + ", t: " +note.time, [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
            break;
        case (note.time <= 29.75):
            yOffset = -965
            var _midiLayer = getLayerByName("Top5", _sound_Template);
            drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration + ", t: " +note.time, [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
            break;
        case (note.time <= 35.75):
            yOffset = -1085
            var _midiLayer = getLayerByName("Top6", _sound_Template);
            drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration + ", t: " +note.time, [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
            break;
        case (note.time <= 41.75):
            yOffset = -1205
            var _midiLayer = getLayerByName("Top7", _sound_Template);
            drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration + ", t: " +note.time, [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
            break;
        case (note.time <= 47.75):
            yOffset = -1325
            var _midiLayer = getLayerByName("Top8", _sound_Template);
            drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration + ", t: " +note.time, [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
            break;
        case (note.time <= 53.75):
            yOffset = -1445
            var _midiLayer = getLayerByName("Top9", _sound_Template);
            drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration + ", t: " +note.time, [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
            break;
        case (note.time <= 59.75):
            yOffset = -1565
            var _midiLayer = getLayerByName("Top10", _sound_Template);
            drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration + ", t: " +note.time, [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
            break;
        case (note.time <= 65.75):
            yOffset = -1685
            var _midiLayer = getLayerByName("Top11", _sound_Template);
            drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration + ", t: " +note.time, [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
            break;
        case (note.time <= 71.75):
            yOffset = -1805
            var _midiLayer = getLayerByName("Top12", _sound_Template);
            drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration + ", t: " +note.time, [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
            break;
        case (note.time <= 77.75):
            yOffset = -1925
            var _midiLayer = getLayerByName("Top13", _sound_Template);
            drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration + ", t: " +note.time, [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
            break;
        case (note.time <= 83.75):
            yOffset = -2045
            var _midiLayer = getLayerByName("Top14", _sound_Template);
            drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration + ", t: " +note.time, [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
            break;
        case (note.time <= 89.75):
            yOffset = -2165
            var _midiLayer = getLayerByName("Top15", _sound_Template);
            drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration + ", t: " +note.time, [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
            break;
    }   

}

// // Test drawing keys 
// for (i = 1; i <= 25; i++) {
//     drawRectangleInLayer(_midiLayer, "Rectangle " + i, [0,i*24], [180,10]);
//   } 

// subdivide 480 into the 25 keys ()

// subdivide time 120 / 8 = 15 pixels per second 

// melody B3 to C5



