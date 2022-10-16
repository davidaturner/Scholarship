// handling events
// https://api.jquery.com/category/events/

$(function() {
    $('.box').on('click', function() {
        $('.box').css({backgroundColor: 'blue'})
    })
})

// The following
// Can be used with React or Angular. Try it!
// If document not ready then it won't execute.
// Unlike the example:
    // $('.box').on('click', function() {
    //     $('.box').css({backgroundColor: 'blue'})
    // })
// which must be wrapped into a ready clause else
// it fails with the selector ('.box') undefined.
$(document).on('click', 'p', function () {
    $('p').css({backgroundColor: 'green'})
})

