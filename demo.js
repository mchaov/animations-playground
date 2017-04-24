"use strict";

var prop = "top";
function augString(x){
    return x + "px";
}

function generateAnimation(callback) {
    function generated(time) {
        if (this.startTime === null) {
            this.startTime = performance.now();
        }

        var dT = (time || this.startTime) - this.startTime;
        dT = dT < 0 ? 0 : dT;

        if (dT < this.duration) {
            this.frame = requestAnimationFrame(generated.bind(this));
        }
        else {
            this.stop();
        }

        var percent = dT / this.duration * 100;
        return callback.call(this, percent);
    };
    return generated.bind(this);
}

var obj = {
    frame: null,
    duration: 2000,
    startTime: null,
    start: null,
    stop: function () {
        cancelAnimationFrame(this.frame);
    },
    reset: function () {
        document.all.a.style[prop] = augString(0);
        document.all.b.style[prop] = augString(0);
        document.all.c.style[prop] = augString(0);
        document.all.d.style[prop] = augString(0);
        document.all.e.style[prop] = augString(0);

        this.startTime = null;
		return this;
    }
};

obj.start = generateAnimation.call(obj, function (percent) {
    var path = 400 / 100 * percent;
    document.all.a.style[prop] = augString(path);
    document.all.b.style[prop] = augString(path * 1.2);
    document.all.c.style[prop] = augString(path * 1.4);
    document.all.d.style[prop] = augString(path * 1.6);
    document.all.e.style[prop] = augString(path * 1.8);
});

setInterval(() => {
    obj.reset().start();
}, 1950);