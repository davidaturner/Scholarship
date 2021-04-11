console.log('Hello from console.log')
// Event Object
const runToggle = true;
$(function () {

    $('#mybutton').click (function() {
        // Change alt on img to 'Vegeta'
        $(".box1 img").attr({'alt': "Vegeta"})
        console.log($(".box1 img").attr('alt'));

        // Get input value
        $(".box1 input").attr('value', 'creepy');
        console.log($(".box1 input").attr('value'));
    })
})
