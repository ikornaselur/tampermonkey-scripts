// ==UserScript==
// @name         Color TheButton header
// @namespace    https://absalon.is/
// @version      0.1
// @description  Script from http://www.reddit.com/r/thebutton/comments/320p3v/color_changing_header/
// @author       Axel Orn Sigurdsson
// @match        http://www.reddit.com/r/thebutton
// @match        http://www.reddit.com/r/thebutton/
// @grant        none
// ==/UserScript==

$('.thebutton-form').css('background-image', 'radial-gradient(50% 125%,rgba(0, 0, 0, 0) 25%,rgba(255, 255, 255, 0.2) 100%)');
$('.thebutton-wrap h1, .thebutton-counter span').css('color', 'white');
colorTimer = window.setInterval(function(){ 
var s = r.thebutton._msgSecondsLeft;
var ring = $('.thebutton-container, .thebutton-form, .thebutton-wrap')
ring.css('-webkit-transition', 'background-color 0.4s')
    .css('-moz-transition', 'background-color 0.4s')
    .css('-ms-transition', 'background-color 0.4s')
    .css('-o-transition', 'background-color 0.4s')
    .css('transition', 'background-color 0.4s');
if (s < 12) { ring.css('background-color', '#e50000') } else
if (s < 22) { ring.css('background-color', '#e59500') } else
if (s < 32) { ring.css('background-color', '#e5d900') } else
if (s < 42) { ring.css('background-color', '#02be01') } else
if (s < 52) { ring.css('background-color', '#0083c7') } else
{ ring.css('background-color', '#820080') }}, 10);
