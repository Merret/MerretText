var trackWin;
function liveDemo() {
trackWin = window.open();
trackWin.document.write(document.getElementById("codeZone").value);
document.getElementById("codeZone").onblur=function() {trackWin.document.write(document.getElementById("codeZone").value);};
}
