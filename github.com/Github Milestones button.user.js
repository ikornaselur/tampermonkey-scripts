// ==UserScript==
// @name         Github Milestones button
// @namespace    http://absalon.is
// @version      0.2
// @description  Add a 'Milestones' button to a github repo
// @author       Axel Örn Sigurðsson
// @match        https://github.com/*/*
// @grant        none
// ==/UserScript==

var pulls = $('li[aria-label="Pull requests"]');
var milestones = $(pulls.clone());
milestones.attr('aria-label', 'Milestones');
var href = milestones.children('a').attr('href');
milestones.children('a').attr('href', href.substring(0, href.lastIndexOf('/')) + '/milestones');
milestones.children('a').children('.octicon-git-pull-request').removeClass('octicon-git-pull-request').addClass('octicon-milestone');
milestones.children('a').children('.full-word').text('Milestones');
milestones.children('a').children('.js-pull-replace-counter').remove();
// Remove selected class on the button if the issues button was selected during copy
milestones.children('a').removeClass('selected');
milestones.insertAfter(pulls);
