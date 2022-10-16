// browser events - using $(window) - the window object WITHIN jQuery,
// not the browser window
// https://api.jquery.com/category/events/browser-events/

// bootstrap media queries breaks
const EXTRA_SMALL = 576
const SMALL = 768
const MEDIUM = 992
const LARGE = 1200

$(function() {
    // Test for the event.
    $(window).resize(function() {
        console.log($(window).width())

        // Do if event was found.
        if ($(window).width() < EXTRA_SMALL) {
            $('body').css({backgroundColor: 'red'})
        } else if ($(window).width() < SMALL) {
            $('body').css({backgroundColor: 'green'})
        } else if ($(window).width() < MEDIUM) {
            $('body').css({backgroundColor: 'blue'})
        } else if ($(window).width() < LARGE) {
            $('body').css({backgroundColor: 'violet'})
        } else {
            $('body').css({backgroundColor: 'rgba(255, 255, 255, 0.4)'})        
        }
    })
})

// CSS By Victor Grk on Apr 22 2020 ThankComments(2)
// // Extra small devices (portrait phones, less than 576px)
// // No media query for `xs` since this is the default in Bootstrap

// // Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) { ... }

// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }

// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }

// // Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }

