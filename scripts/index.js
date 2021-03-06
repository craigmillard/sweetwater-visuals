// full25
var full25dataFile = File('/Users/craig/Dropbox/Art/Brand/Sweetwater/sweetwater-visuals/scripts/full25andNotes.js');
var full25data = '#include' + full25dataFile.fullName;
eval(full25data);

// acc
var accdataFile = File('/Users/craig/Dropbox/Art/Brand/Sweetwater/sweetwater-visuals/scripts/acc.js');
var accdata = '#include' + accdataFile.fullName;
eval(accdata);

// mel
var meldataFile = File('/Users/craig/Dropbox/Art/Brand/Sweetwater/sweetwater-visuals/scripts/mel.js');
var meldata = '#include' + meldataFile.fullName;
eval(meldata);

var rhydataFile = File('/Users/craig/Dropbox/Art/Brand/Sweetwater/sweetwater-visuals/scripts/rhy.js');
var rhydata = '#include' + rhydataFile.fullName;
eval(rhydata);

var ambdataFile = File('/Users/craig/Dropbox/Art/Brand/Sweetwater/sweetwater-visuals/scripts/amb.js');
var ambdata = '#include' + ambdataFile.fullName;
eval(ambdata);

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

// TODO Stroke
// TODO Fill
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

function drawAcc(){
    drawingLayerName = "Acc";

    for (n = 0; n < acc["tracks"][0].notes.length; n++) {
        var note = acc["tracks"][0].notes[n];
        $.writeln(note.midi);
        $.writeln(note.ticks);
        $.writeln(note.durationTicks);
        $.writeln(note.duration); 
        $.writeln(note.velocity);
        $.writeln(note.time);
    
        var noteOffset = (note.midi-47)*19  
    
        switch (true) {
            case (note.time <= 5.75):
                var _midiLayer = getLayerByName(drawingLayerName+"1", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 11.75):
                yOffset = -605
                var _midiLayer = getLayerByName(drawingLayerName+"2", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 17.75):
                yOffset = -725
                var _midiLayer = getLayerByName(drawingLayerName+"3", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 23.75):
                yOffset = -845
                var _midiLayer = getLayerByName(drawingLayerName+"4", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 29.75):
                yOffset = -965
                var _midiLayer = getLayerByName(drawingLayerName+"5", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 35.75):
                yOffset = -1085
                var _midiLayer = getLayerByName(drawingLayerName+"6", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 41.75):
                yOffset = -1205
                var _midiLayer = getLayerByName(drawingLayerName+"7", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 47.75):
                yOffset = -1325
                var _midiLayer = getLayerByName(drawingLayerName+"8", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 53.75):
                yOffset = -1445
                var _midiLayer = getLayerByName(drawingLayerName+"9", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 59.75):
                yOffset = -1565
                var _midiLayer = getLayerByName(drawingLayerName+"10", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 65.75):
                yOffset = -1685
                var _midiLayer = getLayerByName(drawingLayerName+"11", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 71.75):
                yOffset = -1805
                var _midiLayer = getLayerByName(drawingLayerName+"12", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 77.75):
                yOffset = -1925
                var _midiLayer = getLayerByName(drawingLayerName+"13", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 83.75):
                yOffset = -2045
                var _midiLayer = getLayerByName(drawingLayerName+"14", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 89.75):
                yOffset = -2165
                var _midiLayer = getLayerByName(drawingLayerName+"15", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
        }   
    }
}

function drawMel(){
    drawingLayerName = "Mel";

    for (n = 0; n < mel["tracks"][0].notes.length; n++) {
        var note = mel["tracks"][0].notes[n];
        $.writeln(note.midi);
        $.writeln(note.ticks);
        $.writeln(note.durationTicks);
        $.writeln(note.duration); 
        $.writeln(note.velocity);
        $.writeln(note.time);
    
        var noteOffset = (note.midi-60)*19  
    
        switch (true) {
            case (note.time <= 5.75):
                var _midiLayer = getLayerByName(drawingLayerName+"1", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 11.75):
                yOffset = -605
                var _midiLayer = getLayerByName(drawingLayerName+"2", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 17.75):
                yOffset = -725
                var _midiLayer = getLayerByName(drawingLayerName+"3", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 23.75):
                yOffset = -845
                var _midiLayer = getLayerByName(drawingLayerName+"4", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 29.75):
                yOffset = -965
                var _midiLayer = getLayerByName(drawingLayerName+"5", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 35.75):
                yOffset = -1085
                var _midiLayer = getLayerByName(drawingLayerName+"6", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 41.75):
                yOffset = -1205
                var _midiLayer = getLayerByName(drawingLayerName+"7", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 47.75):
                yOffset = -1325
                var _midiLayer = getLayerByName(drawingLayerName+"8", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 53.75):
                yOffset = -1445
                var _midiLayer = getLayerByName(drawingLayerName+"9", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 59.75):
                yOffset = -1565
                var _midiLayer = getLayerByName(drawingLayerName+"10", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 65.75):
                yOffset = -1685
                var _midiLayer = getLayerByName(drawingLayerName+"11", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 71.75):
                yOffset = -1805
                var _midiLayer = getLayerByName(drawingLayerName+"12", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 77.75):
                yOffset = -1925
                var _midiLayer = getLayerByName(drawingLayerName+"13", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 83.75):
                yOffset = -2045
                var _midiLayer = getLayerByName(drawingLayerName+"14", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 89.75):
                yOffset = -2165
                var _midiLayer = getLayerByName(drawingLayerName+"15", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
        }   
    }
}

function drawRhy(){
    drawingLayerName = "Rhy";

    for (n = 0; n < rhy["tracks"][0].notes.length; n++) {
        var note = rhy["tracks"][0].notes[n];
        $.writeln(note.midi);
        $.writeln(note.ticks);
        $.writeln(note.durationTicks);
        $.writeln(note.duration); 
        $.writeln(note.velocity);
        $.writeln(note.time);
    
        var noteOffset = (note.midi-25)*19  
    
              switch (true) {
            case (note.time <= 5.75):
                var _midiLayer = getLayerByName(drawingLayerName+"1", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 11.75):
                yOffset = -605
                var _midiLayer = getLayerByName(drawingLayerName+"2", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 17.75):
                yOffset = -725
                var _midiLayer = getLayerByName(drawingLayerName+"3", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 23.75):
                yOffset = -845
                var _midiLayer = getLayerByName(drawingLayerName+"4", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 29.75):
                yOffset = -965
                var _midiLayer = getLayerByName(drawingLayerName+"5", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 35.75):
                yOffset = -1085
                var _midiLayer = getLayerByName(drawingLayerName+"6", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 41.75):
                yOffset = -1205
                var _midiLayer = getLayerByName(drawingLayerName+"7", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 47.75):
                yOffset = -1325
                var _midiLayer = getLayerByName(drawingLayerName+"8", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 53.75):
                yOffset = -1445
                var _midiLayer = getLayerByName(drawingLayerName+"9", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 59.75):
                yOffset = -1565
                var _midiLayer = getLayerByName(drawingLayerName+"10", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 65.75):
                yOffset = -1685
                var _midiLayer = getLayerByName(drawingLayerName+"11", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 71.75):
                yOffset = -1805
                var _midiLayer = getLayerByName(drawingLayerName+"12", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 77.75):
                yOffset = -1925
                var _midiLayer = getLayerByName(drawingLayerName+"13", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 83.75):
                yOffset = -2045
                var _midiLayer = getLayerByName(drawingLayerName+"14", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 89.75):
                yOffset = -2165
                var _midiLayer = getLayerByName(drawingLayerName+"15", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
        }   
    }
}

function drawAmb(){
    drawingLayerName = "Amb";

    for (n = 0; n < amb["tracks"][0].notes.length; n++) {
        var note = amb["tracks"][0].notes[n];
        $.writeln(note.midi);
        $.writeln(note.ticks);
        $.writeln(note.durationTicks);
        $.writeln(note.duration); 
        $.writeln(note.velocity);
        $.writeln(note.time);
    
        var noteOffset = (note.midi-35)*19  
    
              switch (true) {
            case (note.time <= 5.75):
                var _midiLayer = getLayerByName(drawingLayerName+"1", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 11.75):
                yOffset = -605
                var _midiLayer = getLayerByName(drawingLayerName+"2", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 17.75):
                yOffset = -725
                var _midiLayer = getLayerByName(drawingLayerName+"3", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 23.75):
                yOffset = -845
                var _midiLayer = getLayerByName(drawingLayerName+"4", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 29.75):
                yOffset = -965
                var _midiLayer = getLayerByName(drawingLayerName+"5", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 35.75):
                yOffset = -1085
                var _midiLayer = getLayerByName(drawingLayerName+"6", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 41.75):
                yOffset = -1205
                var _midiLayer = getLayerByName(drawingLayerName+"7", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 47.75):
                yOffset = -1325
                var _midiLayer = getLayerByName(drawingLayerName+"8", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 53.75):
                yOffset = -1445
                var _midiLayer = getLayerByName(drawingLayerName+"9", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 59.75):
                yOffset = -1565
                var _midiLayer = getLayerByName(drawingLayerName+"10", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 65.75):
                yOffset = -1685
                var _midiLayer = getLayerByName(drawingLayerName+"11", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 71.75):
                yOffset = -1805
                var _midiLayer = getLayerByName(drawingLayerName+"12", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 77.75):
                yOffset = -1925
                var _midiLayer = getLayerByName(drawingLayerName+"13", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 83.75):
                yOffset = -2045
                var _midiLayer = getLayerByName(drawingLayerName+"14", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
            case (note.time <= 89.75):
                yOffset = -2165
                var _midiLayer = getLayerByName(drawingLayerName+"15", _sound_Template);
                drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
                break;
        }   
    }
}

var _sound_Template = getItemByName("Template");
var xOffset = -190
var yOffset = -485

drawAcc()
// drawMel();
// drawRhy();
// drawAmb();

// Refactor for multiple groups of layers

// Clear layer midis

// acc4

//     var xOffset = -190
// var yOffset = -485

// // Refactor for multiple groups of layers

// // Clear layer midis

// // acc4
// for (n = 0; n < acc4["tracks"][0].notes.length; n++) {
//     var note = acc4["tracks"][0].notes[n];
//     $.writeln(note.midi);
//     $.writeln(note.ticks);
//     $.writeln(note.durationTicks);
//     $.writeln(note.duration); 
//     $.writeln(note.velocity);
//     $.writeln(note.time);

//     var noteOffset = (note.midi-47)*19

//     switch (true) {
//         case (note.time <= 5.75):
//             var _midiLayer = getLayerByName("Top1", _sound_Template);
//             drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
//             break;
//         case (note.time <= 11.75):
//             yOffset = -605
//             var _midiLayer = getLayerByName("Top2", _sound_Template);
//             drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
//             break;
//         case (note.time <= 17.75):
//             yOffset = -725
//             var _midiLayer = getLayerByName("Top3", _sound_Template);
//             drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
//             break;
//         case (note.time <= 23.75):
//             yOffset = -845
//             var _midiLayer = getLayerByName("Top4", _sound_Template);
//             drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
//             break;
//         case (note.time <= 29.75):
//             yOffset = -965
//             var _midiLayer = getLayerByName("Top5", _sound_Template);
//             drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
//             break;
//         case (note.time <= 35.75):
//             yOffset = -1085
//             var _midiLayer = getLayerByName("Top6", _sound_Template);
//             drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
//             break;
//         case (note.time <= 41.75):
//             yOffset = -1205
//             var _midiLayer = getLayerByName("Top7", _sound_Template);
//             drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
//             break;
//         case (note.time <= 47.75):
//             yOffset = -1325
//             var _midiLayer = getLayerByName("Top8", _sound_Template);
//             drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
//             break;
//         case (note.time <= 53.75):
//             yOffset = -1445
//             var _midiLayer = getLayerByName("Top9", _sound_Template);
//             drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
//             break;
//         case (note.time <= 59.75):
//             yOffset = -1565
//             var _midiLayer = getLayerByName("Top10", _sound_Template);
//             drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
//             break;
//         case (note.time <= 65.75):
//             yOffset = -1685
//             var _midiLayer = getLayerByName("Top11", _sound_Template);
//             drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
//             break;
//         case (note.time <= 71.75):
//             yOffset = -1805
//             var _midiLayer = getLayerByName("Top12", _sound_Template);
//             drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
//             break;
//         case (note.time <= 77.75):
//             yOffset = -1925
//             var _midiLayer = getLayerByName("Top13", _sound_Template);
//             drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
//             break;
//         case (note.time <= 83.75):
//             yOffset = -2045
//             var _midiLayer = getLayerByName("Top14", _sound_Template);
//             drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
//             break;
//         case (note.time <= 89.75):
//             yOffset = -2165
//             var _midiLayer = getLayerByName("Top15", _sound_Template);
//             drawRectangleInLayer(_midiLayer, n + ", m: " + note.midi + ", d: " + note.duration.toString().substr(0,4) + ", t: " + note.time.toString().substr(0,4), [xOffset+noteOffset,yOffset+(note.time * 20)], [10 , note.duration * 6]);
//             break;
//     }   


