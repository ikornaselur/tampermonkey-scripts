// ==UserScript==
// @name         Hide WaniKani answers 
// @namespace    http://absalon.is
// @version      0.3.1
// @description  Hide wanikani answers, shuffle the cards and remove not learned
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
    var shuffleButton = $('<button class="btn">Shuffle answers</button>');
    var sections = $('section[id^=level-]')
    shuffleButton.on('click', function () {
      sections.each(function (_, el) {
        $('ul', el).shuffle('li.character-item');
      });
    });
    shuffleButton.appendTo(buttonGroup);

    /** 
     * Toggle not learned
     */
    var hideButton = $('<Button class="btn">Toggle not learned</button>');

    var lockedRadicals = $('li.locked', 'section[id$=radicals]');
    var lockedKanji = $('li.locked', 'section[id$=kanji]');
    var lockedVocab = $('li.locked', 'section[id$=vocabulary]');

    var notLearnedHidden = false;

    hideButton.on('click', function () {
      if (notLearnedHidden) {
        // Add the locked elements back
        $('ul[class$=grid]', 'section[id$=radicals]').append(lockedRadicals);
        $('ul[class$=grid]', 'section[id$=kanji]').append(lockedKanji);
        $('ul[class$=grid]', 'section[id$=vocabulary]').append(lockedVocab);
      }
      else {
        // Remove all locked elements
        $('li.locked').remove();
      }
      notLearnedHidden = !notLearnedHidden
    });
    hideButton.appendTo(buttonGroup);
  });
}(jQuery));
