console.log('Hello from console.log')
// Event Object
const runToggle = true;
$(function () {

    $('#box2').click(function () {
        $('.box1:first').clone().appendTo('.container')
        $('#box2').clone().appendTo('body')
    })

    $('.box1:first').click(function() {
        $('.box1').wrap('<div class="addWhite" style="color: white"></div>')
        $('#box2').wrapInner('<div class="active"></div>')
        $('.box1:first').unwrap(".addWhite")
    })


})
