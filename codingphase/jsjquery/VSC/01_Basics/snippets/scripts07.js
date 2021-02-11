console.log('Hello from console.log')
// Event Object
const runToggle = true;
$(function () {

    $('.box1:first').click(function() {
        $('.box1:first').append("<p>Test</p>");
        $('<p>Hello,World!</p>').appendTo('#box2');
    })

    $('#box2').click(function() {
        $('#box2').html('<p>Removed!</p>');

        console.log($('.box1:first').text());
        $('.box1:first').text('Mourning...');
        
        $('<div><h2>Preamble!</h2></div>').insertBefore('.box1:first');
        $('.box1:first').after('<div><h3>London calling</h3></div>');
    })


})
