/*
*/
var ctx = document.all.c.getContext('2d');
ctx.lineWidth = 8;
ctx.strokeStyle = "#ff0000";
ctx.beginPath();
ctx.moveTo(0, 0);

function curvePoint(t, p0, p1, p2) {
    return (Math.pow(1 - t, 2) * p0 + 2 * (1 - t) * t * p1 + Math.pow(t, 2) * p2)
}


var startTime = false;
function frameRate(time) {
    startTime = startTime || time;

    var deltaTime = time - startTime;


    var t = deltaTime / 2000;
    
    gridMe();
    ctx.lineTo(
        curvePoint(t, 0, 150, 500),
        curvePoint(t, 0, -50, 500)
    );
    ctx.stroke();
/*
	ctx.beginPath();
	ctx.clear();
	ctx.rect(0, 0, 500, 500);
	ctx.fillStyle = "#ffffff";
	ctx.fill();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.arc(
		curvePoint(t, 0, 250, 500),
        curvePoint(t, 0, 450, 500),
		50, 0 , 2 * Math.PI);
		
	ctx.closePath();
*/


    if (deltaTime > 2000) {
        startTime = 0;
    } else {
        requestAnimationFrame(frameRate);
    }
}

requestAnimationFrame(frameRate);































function gridMe(){
    ctx.fillStyle = "#ff0000";
    var sz = 4, i, j, cell = 10;

    for (i = 0; i <= cell; i++) {
        for (j = 0; j <= cell; j++) {
            ctx.fillRect( i * 50 - sz / 2, j * 50 - sz / 2, sz, sz);
        }
    }
}