var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubbles(){
var clutter = "";

for (var i = 1; i<=152 ; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer() {
    var timerInt = setInterval(function(){
        if (timer > 0) {
            timer--;
            document.querySelector('#timerVal').textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
        }
    }, 1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitVal').textContent = hitrn;
} 

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function(details) {
    var clickedNum = Number(details.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        makeBubbles();
        getNewHit();

    }
});



getNewHit();
runTimer();
makeBubbles();
//increaseScore();

