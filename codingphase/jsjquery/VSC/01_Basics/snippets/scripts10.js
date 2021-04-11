console.log('Hello from console.log')
// Event Object
const runToggle = true;
$(function () {

    // Parent
    var parent = $('#box2').parent()
    console.log("My parent: ", parent)

    // Children
    var children = $('.container').children()
    console.log("My children: ", children)

    // Each
    $('#mybutton').on('click', function() {
        $('.box').each(function() {
            console.log('I found a box')
            $('.box').css({background : 'blue'})
        })
    })

    // First
    $('#box2').click(function() {
        $('.box1').first().css({background : 'green'})

    })

    // Has
    var hasIt = $('.box').has('img').css({background : 'purple'})
    console.log("The eyes hasIt: ", hasIt)

})
