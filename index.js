var anim = 1;
function spin(){
    if(anim === 1){
    document.querySelector(".img1").style.transform = "rotate(1800deg)";
    document.querySelector(".img2").style.transform = "rotate(1800deg)";
    anim = 0;}
    else if (anim === 0){
        document.querySelector(".img1").style.transform = "rotate(-1800deg)";
        document.querySelector(".img2").style.transform = "rotate(-1800deg)"; anim = 1;
    }
}

var winnerid = "'/.`[)8797#" , prewin;

function roll(){

    document.querySelector(".foot").style.marginTop = "5%";
    
    if(winnerid != "'/.`[)8797#")
    {
        document.querySelector("#"+winnerid).value = prewin;
        document.querySelector("#spotlight").className = "spot";
    }

var rand1 = Math.floor((Math.random() * 6)+1);
var rand2 = Math.floor((Math.random() * 6)+1);

switch (rand1) {
    case 1:
        document.querySelector(".img1").src = "./images/dice1.png";
        break;
    case 2:
        document.querySelector(".img1").src = "./images/dice2.png";
        break;
    case 3:
        document.querySelector(".img1").src = "./images/dice3.png";
        break;
    case 4:
        document.querySelector(".img1").src = "./images/dice4.png";
        break;
    case 5:
        document.querySelector(".img1").src = "./images/dice5.png";
        break;
    case 6:
        document.querySelector(".img1").src = "./images/dice6.png";
        break;

}

switch (rand2) {
    case 1:
        document.querySelector(".img2").src = "./images/dice1.png";
        break;
    case 2:
        document.querySelector(".img2").src = "./images/dice2.png";
        break;
    case 3:
        document.querySelector(".img2").src = "./images/dice3.png";
        break;
    case 4:
        document.querySelector(".img2").src = "./images/dice4.png";
        break;
    case 5:
        document.querySelector(".img2").src = "./images/dice5.png";
        break;
    case 6:
        document.querySelector(".img2").src = "./images/dice6.png";
        break;

}

if(rand1 === rand2)
{roll();}
else if(rand1 > rand2)
{
    document.querySelector(".spot").className = "spotl";
    document.querySelector(".btn").innerHTML = "<h2>Roll again!</h2>";
    prewin = document.querySelector("#one").value;
    document.querySelector(".podium").innerHTML = prewin+" WINS!";
    document.querySelector("#one").value = "👑"+document.querySelector("#one").value;
    winnerid = document.querySelector("#one").id;
}
else if(rand2 > rand1)
{
    document.querySelector(".spot").className = "spotr";
    document.querySelector(".btn").innerHTML = "<h2>Roll again!</h2>";
    prewin = document.querySelector("#two").value;
    document.querySelector(".podium").innerHTML = prewin+" WINS!";
    document.querySelector("#two").value = document.querySelector("#two").value+"👑";
    winnerid = document.querySelector("#two").id;
}

document.querySelector(".foot").innerHTML = "<a href='index.html'>Reset</a>   <br>  🎲 Toss format DICE game from : ATJ 🎲";

}
