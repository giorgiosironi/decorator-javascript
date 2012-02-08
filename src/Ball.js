function Ball() {
    this.what = function() {
        return "I am a ball";
    }
}

createDecorator = function(newConstructor) {
    return function(originalObject) {
        newConstructor.prototype = originalObject;
        return new newConstructor();
    };
};

Blinking = {};
Blinking.decorate = createDecorator(function() {
    this.canBlink = function() {
        return true;
    };
});

Jumping = {};
Jumping.decorate = createDecorator(function() {
    this.canJump = function() {
        return true;
    };
});
