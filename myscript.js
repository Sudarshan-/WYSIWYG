//Intialize counters to default values
clicking = false;
selecting = false;

//Set the toolbar to some invalid position so it will not appear unless a selection is made
var currentMousePos = {
    x: -100,
    y: -100
};

$(document).mousedown(function () {
    //Click is started
    clicking = true;
});

//Tool bar to add
$('body').append("<div id='root' style='position: absolute; left:" + currentMousePos.x + "px; top:" + currentMousePos.y + "px; display: block;'><a id='univ' href='javascript:void(0);'>&nbsp;</a><a id='addr' href='javascript:void(0);' >&nbsp;</a></div>");


$(document).mouseup(function (event) {
    if (selecting) {
        //He is selecting text
        $("#root").attr("style", "position: absolute; left:" + currentMousePos.x + "px; top:" + currentMousePos.y + "px; display: block;");
    } else {
        //He just clicked
        $("#root").attr("style", "display: none;");
    }
    //Reset counters
    clicking = false;
    selecting = false;
});

$(document).mousemove(function () {
    if (clicking) {
        //He did not simply click , but he is selecting some text
        selecting = true;
        //Track current position to put toolbar
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
    }
});

$("div #addr").click(function () {
    //Get Selected text
    var selection = document.getSelection();
    //Add your tags and prepare replacing content
    var html = "[addr]" + selection + "[/addr]";
    if (selection.getRangeAt && selection.rangeCount) {
        //Chrome supports only one range fire fox supports multiple ranges
        range = document.getSelection().getRangeAt(0);
        //remove selection
        range.deleteContents();
        //Create a node
        node = range.createContextualFragment(html);
        //Add the custom node
        range.insertNode(node);
    }
});

$("div #univ").click(function () {
    //Get Selected text
    var selection = document.getSelection();
    //Add your tags and prepare replacing content
    var html = "[univ]" + selection + "[/univ]";
    if (selection.getRangeAt && selection.rangeCount) {
        //Chrome supports only one range fire fox supports multiple ranges
        range = document.getSelection().getRangeAt(0);
        //remove selection
        range.deleteContents();
        //Create a node
        node = range.createContextualFragment(html);
        //Add the custom node
        range.insertNode(node);
    }
});
