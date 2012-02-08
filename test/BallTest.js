TestCase("basic Ball object test", {
    "test it should tell us what it is" : function() {
         var ball = new Ball();
         assertEquals("I am a ball", ball.what());
    },
    "test a blinking ball is a ball that can blink" : function () {
         var ball = Blinking.decorate(new Ball());
         assertEquals("I am a ball", ball.what());
         assertTrue(ball.canBlink());
    },
    "test a jumping ball is a ball that can jump" : function () {
         var ball = Jumping.decorate(new Ball());
         assertEquals("I am a ball", ball.what());
         assertTrue(ball.canJump());
    },
    "test a blinking&jumping ball is a ball that can do both" : function () {
         var ball = Blinking.decorate(JumpingBall.decorate(new Ball()));
         assertEquals("I am a ball", ball.what());
         assertTrue(ball.canBlink());
         assertTrue(ball.canJump());
    }
});
