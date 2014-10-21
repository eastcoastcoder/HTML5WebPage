var flagprev = 0;
var flagnext = 0;
var unavailable = 0;
var xhr = new XMLHttpRequest();

//x defined as picture number from html
function preload(x){
  flagprev = 0;
  flagnext = 0;
  unavailable = 1;

  //current photo not available, get current photo through synchronous request, output to frame
  if(unavailable == 1){
      xhr.open("GET", "album/" + x + ".jpg", false);

    xhr.onreadystatechange = function(){
      //write picture to frame when ready
      if(xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("inner").innerHTML="<a href=\"album/" + x + ".jpg\"><img src=\"album/" + x + ".jpg\" /></a>";
      }
    };
    xhr.send(null);
  
  document.getElementById("output").innerHTML=("<br/>x is:" + x + " loaded: album/" + x + ".jpg<br/>");
  }
  //current photo is available, output to frame
  else{
    document.getElementById("inner").innerHTML="<a href=\"album/" + x + ".jpg\"><img src=\"album/" + x + ".jpg\" /></a>";
  }
  
  next(x);
  prev(x);
}

//get next photo through asynchronous request
function next(x){
    y = x; 
    if(flagnext == 0){
      y++;
      if(y <= 20){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "album/" + y + ".jpg", true);
        xhr.onreadystatechange = function(){
        //set next to ready
        if(xhr.readyState == 4 && xhr.status == 200) {
          flagnext = 1;
        }
      };

      xhr.send(null);
      document.getElementById("output").innerHTML+=("<br/>y is:" + y + " cached: album/" + y + ".jpg<br/>");
      
      unavailable = 0;
      }
    } else{unavailable = 1;}
}

//get prev photo through asynchronous request
function prev(x){
    z = x;
    if(flagprev == 0){
      z--;
      if(z > 0){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "album/" + z + ".jpg", true);
        xhr.onreadystatechange = function(){
          //set prev to ready
          if(xhr.readyState == 4 && xhr.status == 200) {
            flagprev = 1;
          }
        };

        xhr.send(null);
        document.getElementById("output").innerHTML+=("<br/>z is:" + z + " cached: album/" + z + ".jpg<br/>");
        
        unavailable = 0;
      }
    } else{unavailable = 1;}
}