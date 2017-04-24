
var startTime = 0;

function raf(time){
    startTime = startTime || time;

    var dT = time - startTime;
    var dP = 100 / 2000 * dT;
    var dL = 1000 / 100 * dP;
    document.all.d.style.transform = "translate(" + dL + "px, 0px)";

    if(2000 > dT){
        requestAnimationFrame(raf);
    }
}

setTimeout(function(){
    requestAnimationFrame(raf)
}, 5000);