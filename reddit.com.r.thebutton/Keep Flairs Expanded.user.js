// ==UserScript==
// @name         Keep flairs expanded
// @namespace    https://absalon.is/
// @version      0.1.1
// @description  Make the hover state of the flairs the default state
// @author       Axel Orn Sigurdsson
// @match        http://www.reddit.com/r/thebutton*
// @grant        none
// ==/UserScript==

var flairs = $('.flair');
flairs.css('max-width', '500px');
flairs.css('padding', '0 5px');
flairs.css('color', '#fff');
$('.flair-cant-press').css('color', '#000');
