let currProj = 0;
let oldProj=0;

function togglePreviewOn(x) {
  var id = x.id;
  document.getElementById("p-default").style.display="none";

  document.getElementById("p-"+id).style.animation="swing .2s ease";
  document.getElementById("p-"+id).style.display="block";
}

function togglePreviewOnKey(id) {
  document.getElementById("p-default").style.display="none";
  document.getElementById("p-"+id).style.display="block";
  document.getElementById("p-"+id).style.animation="swing .2s ease";
}

function togglePreviewOff(x) {
  var id = x.id;
  document.getElementById("p-"+id).style.display="none";
  document.getElementById("p-default").style.display="block";
  document.getElementById("p-"+id).style.animation="none";
}

function togglePreviewOffKey(id) {
  document.getElementById("p-"+id).style.display="none";
  document.getElementById("p-"+id).style.animation="none";
}

function onProjUpdate(currProj, oldProj) {
  projID = "proj" + currProj;
  oldProjID = "proj" + oldProj;

  document.getElementById(projID).style.backgroundColor = "black";
  document.getElementById(projID).style.color = "white";

  togglePreviewOnKey(projID);
  if (oldProj === 0) {
    document.getElementById("p-default".style.display="none");
  }
  else {
    togglePreviewOffKey(oldProjID);
    document.getElementById(oldProjID).style.backgroundColor="white";
    document.getElementById(oldProjID).style.color="black";
  }
  
  // document.getElementById("p-default").style.display="none";
  // document.getElementById("p-" + projID).style.display="block";
  // document.getElementById("p-" + oldProjID).style.display="none";
  // document.getElementById("p-default").style.display="block";
}

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
  
  if (e.keyCode == '38') {
    //up
      e.preventDefault();
      if (currProj > 1){
        oldProj = currProj;
        currProj = currProj - 1;
        onProjUpdate(currProj, oldProj);
      }
  }
  else if (e.keyCode == '40') {
    //down
      e.preventDefault();
      if (currProj < 5){
        oldProj = currProj;
        currProj = currProj + 1;
        onProjUpdate(currProj, oldProj);
      }
  }
  else if (e.keyCode == '13'){
    e.preventDefault();
    url = document.getElementById("link-proj"+currProj).href;
    window.open(url, '_blank')
  }
  else{
    //do nothing
  }
}