// ==UserScript==
// @name         Hide WaniKani answers 
// @namespace    http://absalon.is
// @version      0.2.1
// @description  Add a simple button to WaniKani level item list to hide naswers 
// @author       Axel Örn Sigurðsson
// @match        http://www.wanikani.com/level/*
// @exclude      http://www.wanikani.com/level/*/*
// @grant        none
// ==/UserScript==

(function($) {
  $(document).ready(function () {
    /**
     * Helper functions
     */
    $.fn.invisible = function() {
      if (!answersShown) {
        return;
      }
      return this.each(function() {
        $(this).css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0.0}, 150);
      });
    };
    $.fn.visible = function() {
      return this.each(function() {
        $(this).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 150);
      });
    };
    $.fn.shuffle = function(childElem) {
      return this.each(function() {
        var $this = $(this);
        var elems = $this.children(childElem);

        elems.sort(function() { return (Math.round(Math.random())-0.5); });  

        $this.detach(childElem);  

        for(var i=0; i < elems.length; i++)
        $this.append(elems[i]);      

      });    
    };

    /**
     * Button group for all the buttons
     */
    var buttonGroup = $('<div class="btn-group" style="margin: 0 0 10px 20px;"></div>');
    buttonGroup.insertAfter('.page-list');

    /**
     * Toggle answers button
     */
    var answersShown = false;
    var answersButton = $('<button class="btn">Toggle answers</button>');
    answersButton.on('click', function () {
      answersShown = !answersShown;
      if (!answersShown) {
        $('.character-item > a > ul').visible();
      }
      else {
        $('.character-item > a > ul').invisible();
      }
    });
    answersButton.appendTo(buttonGroup);
    $('.character-item').hover(function() {
      if (answersShown) {
        $('a > ul', this).visible();
      }
    }, function() {
      if (answersShown) {
        $('a > ul', this).invisible();
      }
    });

    /**
     * Shuffle cards
     */
    var shuffleButton = $('<Button class="btn">Shuffle answers</button>');
    var sections = $('section[id^=level-]')
    shuffleButton.on('click', function () {
      sections.each(function (_, el) {
        $('ul', el).shuffle('li');
      });
    });
    shuffleButton.appendTo(buttonGroup);

    /** 
     * Hide not learned
     */
  });
}(jQuery));
