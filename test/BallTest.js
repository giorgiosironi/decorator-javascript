TestCase("basic Ball object test", {
    "test it should tell us what it is" : function() {
         var ball = new Ball();
         assertEquals("I am a ball", ball.what());
    }
});
