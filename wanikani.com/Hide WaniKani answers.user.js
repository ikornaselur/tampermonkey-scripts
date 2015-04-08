// ==UserScript==
// @name         Hide WaniKani answers 
// @namespace    http://absalon.is
// @version      0.1
// @description  Add a simple button to WaniKani level item list to hide naswers 
// @author       Axel Örn Sigurðsson
// @match        http://www.wanikani.com/level/*
// @exclude      http://www.wanikani.com/level/*/*
// @grant        none
// ==/UserScript==

(function($) {
    console.log('swag');
    $(document).ready(function () {
        $.fn.invisible = function() {
            if (!enabled) {
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
        var enabled = false;
        var button = $('<button class="btn" style="margin: 0 0 10px 20px;">Toggle answers</button>');
        button.on('click', function () {
            enabled = !enabled;
            if (!enabled) {
                $('.character-item > a > ul').visible();
            }
            else {
                $('.character-item > a > ul').invisible();
            }
        });
        button.insertAfter('.page-list');
        $('.character-item').hover(function() {
            if (enabled) {
                $('a > ul', this).visible();
            }
        }, function() {
            if (enabled) {
                $('a > ul', this).invisible();
            }
        });
    });
}(jQuery));
