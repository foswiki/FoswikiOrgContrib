/* Copyright 2018-2025 Michael Daum */
(function($) {

   var defaults = {
      minSize: 5,
      maxSize: 50,
      maxSpeed: 3000,
      minSpeed: 6000,
      numBubbles: 10,
      opacityDelta: 0.7,
      elem: null,
      fromHeight: "0%",
      toHeight: "100%"
   };

   function Bubbles(elem, opts) {
      var self = this, $elem = $(elem);

      self.opts = $.extend({}, defaults, $elem.data(), opts);
      self.elem = self.opts.elem ? $(self.opts.elem) : $elem;
      self.init();
   }

   Bubbles.prototype.init = function() {
      var self = this;

      for (var i = 0; i < self.opts.numBubbles; i++) {
         self.addBubble();
      }
   };

   Bubbles.prototype.addBubble = function() {
      var self = this,
         delay = Math.floor(Math.random() * self.opts.maxSpeed / 5 ) * 5,
         blb = $('<div class="bubble"></div>')
            .css({
               "bottom": self.opts.fromHeight
            })
            .appendTo(self.elem);

      setTimeout(function() {
         self.animateBubble(blb);
      }, delay);
   };

   Bubbles.prototype.animateBubble = function(blb) {
      var self = this,
         size = Math.floor(Math.random() * (self.opts.maxSize - self.opts.minSize)) + self.opts.minSize,
         left = Math.floor(Math.random() * 100),
         speed = Math.floor(Math.random() * (self.opts.minSpeed - self.opts.maxSpeed)) + self.opts.maxSpeed,
         origOpacity = blb.css("opacity");
         
      blb.css({
         "width": size,
         "height": size,
         "left": left + "%"
      }).animate({
         'bottom': self.opts.toHeight,
         'opacity' : `-=${self.opts.opacityDelta}`
      }, speed, function(){
         blb.css({
            "bottom": self.opts.fromHeight,
            "opacity": origOpacity
         });
         self.animateBubble(blb);
       });
   };

   $.fn.bubblesPlugin = function (opts) {
      return this.each(function () {
         if (!$.data(this, "Bubbles")) {
            $.data(this, "Bubbles", new Bubbles(this, opts));
         }
       });
    };

    $(".jqBubbles:not(.jqBubblesInited)").livequery(function() {
      $(this).addClass("jqBubblesInited").bubblesPlugin();
    });
}(jQuery));
