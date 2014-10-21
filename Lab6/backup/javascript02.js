document.write("JS works");

function preload(x){
  var xhr = new XMLHttpRequest();
  //xhr.open("GET", "album/" + x + ".jpg", true);
  document.getElementById("output").innerHTML=("<br/>x is:" + x + " loaded: album/" + x + ".jpg<br/>");
  xhr.onreadystatechange = function(){
    //write picture to frame when ready
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("inner").innerHTML="<a href=\"album/" + x + ".jpg\"><img src=\"album/" + x + ".jpg\" /></a>";
     }
  }
  
  //prev(x);
  //next(y);
  //async request
  x++;
  xhr.open("GET", "album/" + x + ".jpg", false);
  document.getElementById("output").innerHTML+=("x is:" + x + " cached: album/" + x + ".jpg" + "<br/>");
  xhr.send(null);
  if(x > 2){
    x -= 2;
    xhr.open("GET", "album/" + x + ".jpg", false);
    document.getElementById("output").innerHTML+=("x is:" + x + " cached: album/" + x + ".jpg" + "<br/>");
    xhr.send(null);
  }
}

//function prev(w){
  //preload(w);
//}

//function next(y){
  //preload(y);
//}

/*
1). When a user clicks on any one of the photo links, 
the corresponding photo shall show up. 
But behind the scene, there are two possibilities: 

(1) the photo available, hidden. 
make photo visible, 
-----document.getElementById("inner").innerHTML=

same time check readiness of two photos 
before and after current photo
-----recursive? call preload from xhr?

If ready loaded, do nothing more; 
not ready/loaded, asynchronously request
-----xhr.open("GET", "album/" + x + ".jpg", true);

load into the browser (integrated into the page). 
-----document.getElementById("inner").innerHTML=

(2) current photo not available. 
get through a synchronous request, 
-----xhr.open("GET", "album/" + x + ".jpg", false);

display 
same as above for preparing the 2 neighboring photos 
(i.e., check their availabilities and asynchronously 
request them from server if unavailable).


*/