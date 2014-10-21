document.write("JS works");

function preload(x){
  document.getElementById("output").innerHTML=("<br/>x is:" + x + " loaded: album/" + x + ".jpg<br/>");
  x++;
  var xhr = new XMLHttpRequest();
  //async request
  xhr.open("GET", "album/" + x + ".jpg", true);
  //xhr.onreadystatechange = ajaxResponse();
  document.getElementById("inner").innerHTML="<a href=\"album/" + x + ".jpg\"><img src=\"album/" + x + ".jpg\" /></a>";
  xhr.send(null);
  document.getElementById("output").innerHTML+=("x is:" + x + " cached: album/" + x + ".jpg" + "<br/>");
  if(x > 2){
    x -= 2;
    xhr = new XMLHttpRequest();
    //async request
    xhr.open("GET", "album/" + x + ".jpg", true);
    //xhr.onreadystatechange = receiveResponse;
    xhr.send(null);
    document.getElementById("output").innerHTML+=("x is:" + x + " cached: album/" + x + ".jpg" + "<br/>");
  }
}

function ajaxResponse(){
  if(xhr.readyState == 4 && xhr.status == 200) {
        if(xhr.responseText != null)  //server response may not yet arrive
             xmlResponse = xhr.responseXML; 
        else {
             alert("failed");
             return false;
        }
     }
}

/*
1). When a user clicks on any one of the photo links, 
the corresponding photo shall show up. 
But behind the scene, there are two possibilities: 

(1) the photo (image) is available but hidden. 
In this case, the click simply makes the photo visible, 
and at the same time you check the readiness of the two photos 
before and after the photo link being clicked on. 
If they are ready to show (loaded), do nothing more; 
if they are not ready/loaded, asynchronously request the photos from the server 
and load into the browser (integrated into the page). 

(2) The photo being clicked on is not available. 
In this case, get it from the server through a synchronous request, 
and display it, and then do the same as above for preparing the 2 
neighboring photos (i.e., check their availabilities and 
asynchronously request them from server if unavailable).
*/