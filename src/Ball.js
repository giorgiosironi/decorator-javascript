function Ball() {
    this.what = function() {
        return "I am a ball";
    }
}

Blinking = {};
Blinking.decorate = function(originalBall) {
    newBallConstructor = function() {
        this.canBlink = function() {
            return true;
        };
    };
    newBallConstructor.prototype = originalBall;
    return new newBallConstructor();
}

Jumping = {};
Jumping.decorate = function(originalBall) {
    newBallConstructor = function() {
        this.canJump = function() {
            return true;
        };
    };
    newBallConstructor.prototype = originalBall;
    return new newBallConstructor();
}
