function liveDemo() {
var trackWin = window.open();
document.getElementById("codeZone").onblur=function() {trackWin.document.write(document.getElementById("codeZone").value);};
}
