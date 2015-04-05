// ==UserScript==
// @name         Google Translate: Remove max-width
// @namespace    http://absalon.is/
// @version      0.1
// @description  Remove the max width from google translate
// @author       Absalon
// @match        https://translate.google.com*
// @grant        MIT
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle("#gt-text-c { max-width: none; }");
