"use strict";

/*
    frame rate counter
*/
var startTime = null;
var val = 0;
function frameRate(e, time) {
    // preparation
    if (startTime === null) {
        startTime = performance.now();
    }
    time = time || startTime;

    var t = Math.abs(time - startTime);
    var d = Math.round(t / 1000);

    console.log(d)
    /* logic
    val += 1;
    e.style.transform = "translateY(" + val + "px)";
    */

    // limit
    if (d < 5) {
        return requestAnimationFrame(frameRate.bind(null, e));
    }
}