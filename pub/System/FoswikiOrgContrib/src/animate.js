jQuery(function($) {
   var effects = ['bounce', 'headShake', 'jello', 'pulse', 'rubberBand', 'swing', 'tada', 'wobble', 'bounceIn', 'bounceInDown', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInUp', 'fadeInUpBig', 'flip', 'flipInX', 'flipInY', 'rotateInDownLeft', 'jackInTheBox', 'slideInDown', 'slideInUp', 'zoomIn', 'zoomInDown', 'zoomInUp'];

   function animate(elem) {
      elem.removeClass(effects.join(" ")).addClass(effects[Math.floor(Math.random()*effects.length)]);
   }

   $(".animated.random").each(function() {
      animate($(this));
   }).on("click", function() {
      animate($(this));
   });
});
