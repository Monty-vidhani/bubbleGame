var time  = 63 ;
var score = 0 ;
var hitrn = 0 ;
var load = 3 ;

function inceraseScore(){
    score += 10 ;
    document.querySelector("#score").textContent = score ;
}

function deceraseScore(){
    score -= 10 ;
    document.querySelector("#score").textContent = score ;
}
function LoaderFunc(){
    var countdown = document.querySelector("#countdown");
    // var loading = document.querySelector("#loading");
    var runLoader = setInterval(()=>{
        if(load>1){
            load--;
            countdown.innerHTML = load;
        }
    },1000);
    // loading.style.display = "none" ;
}
function display(){
    var display = setTimeout(()=>{
        var loading = document.querySelector("#loading");
        loading.style.display = "none" ;

    },3000);
}
function timer(){
 var runTimer = setInterval(function(){
    if(time > 0){
        time--;
        document.querySelector("#timer").innerHTML = time+"S";

    }
    else{
        clearInterval(runTimer)
        document.querySelector(".down").innerHTML = `<h1>Game Over</br></br></br>Your Score is ${score}</h1>`
        
    }
 }, 1000)
}

function getNewHit(){
      hitrn = Math.floor(Math.random()*50)
    document.querySelector("#hit").textContent = hitrn ;
}

function makeBubble(){
    var clutter = "" ;

for(var i = 1 ; i<=162 ; i++){
    var  rn = Math.floor(Math.random()*50)
    clutter += `<button class="bubble">${rn}</button>`

}
var clutter = document.querySelector(".down").innerHTML = clutter
}


function main(){
    document.querySelector(".down")
.addEventListener("click", function(details){
        var clicked = Number(details.target.textContent);
        if(clicked === hitrn){
            inceraseScore();
            makeBubble();
            getNewHit();
        }
        else if (clicked !== hitrn){
            // deceraseScore();
            
        }
        document.querySelector(".refresh").addEventListener("click",function(){
          if(time>0){
            makeBubble();
            getNewHit();
          }
      
        })
})
}


main();
getNewHit();
timer();
makeBubble();
display();
