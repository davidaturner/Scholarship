console.log('Hello from console.log')
// Browser events
$(function() {
    
    $(window).resize(function() {

        if ($(window).width() > 1200) {
            $('body').css({
                background : 'red',
                fontSize : '22px'
                })
        } else if ($(window).width() > 1000) {
            $('body').css({
                background : 'blue',
                fontSize : '20px'
            })
        } else {
            $('body').css({
                background : 'yellow',
                fontSize : '18px'
            })
        }
    })
})
