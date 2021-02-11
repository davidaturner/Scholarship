console.log('Hello from console.log')
// Event Object
const runToggle = true;
$(function () {

    $('#box2').click(function () {
        $('#box2').remove();
    })

    // Replaces box1 with box2.
    // NOTE: It 'moves' box2, not'clones' box2.
    // $('.box1:first').click(function () {
    //     $('#box2').replaceAll('.box1:first');
    // })

   $('.box1:first').click(function () {
        $('<div><p>Welcome to NewAnger</p></div>').replaceAll('.box1');
    })

})
