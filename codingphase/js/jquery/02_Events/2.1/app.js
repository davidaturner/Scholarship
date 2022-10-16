$(function () {
// window.jQuery(document).ready(function() {
// window.$(document).ready(function() {
// jQuery(document).ready(function() {
// $(document).ready(function() {

    $('body').css({backgroundColor: 'ghostwhite'});
    $('p').css({color: 'orangered'});
    $('p:nth-of-type(2)').css({backgroundColor: 'green', padding: '10px'}).fadeOut('slow', 
    function() {
        console.log("fade is complete!")
    });
    $('.box').css({backgroundColor: 'red'});
    $('#box3').css({color: 'ghostwhite', backgroundColor: 'blue'});
})
