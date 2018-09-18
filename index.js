function togglePreviewOn(x) {
   var id = x.id;
   document.getElementById("p-default").style.display="none";
   document.getElementById("p-"+id).style.display="block";
}

function togglePreviewOff(x) {
  var id = x.id;
  document.getElementById("p-"+id).style.display="none";
  document.getElementById("p-default").style.display="block";
}
