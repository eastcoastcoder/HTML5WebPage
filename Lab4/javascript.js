//Declare array, add proverbs
var myProv=new Array();
myProv[0]="God help the rich the poor can look after themselves";
myProv[1]="Evil is sooner believed than good";
myProv[2]="Experience is a comb which nature gives to men when they are bald";
myProv[3]="Fame is a magnifying glass";
myProv[4]="Feather by feather the goose can be plucked";
myProv[5]="Fine feathers make fine birds";
myProv[6]="Flattery makes friends and truth makes enemies";
myProv[7]="Fortune is a woman if you neglect her today do not expect to regain her tomorrow";
myProv[8]="Fortune is blind but not invisible";
myProv[9]="Friends are like fiddle strings they must not be screwed too tight";
myProv[10]="Friends are lost by calling often and calling seldom";
myProv[11]="Friendship is a furrow in the sand";
myProv[12]="Give a man a fish he will eat for a day teach him how to fish he will eat forever";
myProv[13]="Give neither counsel nor salt till you are asked";
myProv[14]="Gray hairs are death's blossoms";
myProv[15]="Good luck beats early rising";
myProv[16]="God could not be everywhere so he made mothers";
myProv[17]="God gives the nuts but he does not crack them";
myProv[18]="God heals and the physician takes the fee";
myProv[19]="God help the rich man let the poor man beg";

var prov = myProv[Math.floor((Math.random()*20))];
var guessCount = 0;
var limit = prov.length;
var forfeit = false;
var grace = 2;

window.onload = function(){
    
    //start td id at 1, 100 cells/td total
    for (var td = 1; td < 101; td++) {
        var curTd = document.getElementById(td);
        var char = prov.charAt(td - 1);

        //blank case
        if (char.length == 0 || char == ' ') {
            curTd.style.backgroundColor = "#C0C0C0";
            if(char == ' ')
                limit--;
        }
        //char case, apostrophe case
        else {
            if (char == "\'"){
                curTd.style.backgroundColor = "#C0C0C0"
                curTd.innerHTML = '\'';
                limit--;
            }
            else {
                curTd.innerHTML = '';
                curTd.style.backgroundColor = "#00FFFF";
            }
        }
    }
    
}


function reveal(curr) {
    if (guessCount >= Math.ceil(limit / 2) && forfeit == false) {
        alert("You have no more letters to flip, please make your guess NOW!");
        guess();
    }
    else {
        document.getElementById(curr).innerHTML = prov.charAt(curr - 1);
        guessCount++;

        if (forfeit == false)
            document.getElementById("guessTracker").innerHTML = "<br/> Guesses: " + Math.ceil(limit / 2) + "<br>Used: " + guessCount;
        else
            document.getElementById("guessTracker").innerHTML = '';
    }
}

function guess() {
        document.getElementById("guessArea").innerHTML = "Guess: <input type=\"text\" id=\"userGuess\"></input><button onClick=\"check()\">Check!</button>";
}

function check() {
    rank = Math.ceil(limit / 2) - guessCount;
    final = document.getElementById("userGuess").value;
    if (prov.toLowerCase() == final.toLowerCase()) {
        alert("Correct! The proverb was: " + prov + "\nYou are a " + rank + " star guesser!");
        location.reload();
    }
    else {
        if (grace == 2) {
            alert("Sorry! That is incorrect, you have " + grace + " more guesses");
            document.getElementById("guessArea").innerHTML += "<button onClick=\"setForfeit()\">Forfeit!</button>";
            grace--;
        }
        else if (grace == 1) {
            alert("Sorry! That is incorrect, you have " + grace + " more guess");
            grace--;
        }
        else {
            setForfeit();
        }
   }
    
}

function setForfeit() {
    forfeit = true;
    document.getElementById("guessArea").innerHTML = "Flip to reveal the answer! <button onClick=\"window.location.reload()\">New Proverb</button>";
}