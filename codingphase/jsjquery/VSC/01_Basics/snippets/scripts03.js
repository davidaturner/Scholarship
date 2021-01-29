console.log('Hello from console.log')
// Events
$(function() {

    // Will not error
    // $(document).on('click', '.box1', function() {

    //     $('.box1').css({
    //         background : 'darkgrey', 
    //         color: 'white'
    //     })
    // })

    // May cause error if .box1 is not currently in DOM
    $('.box1').on('click', function() {

        $('.box1').css({
            background : 'darkgrey', 
            color: 'white'
        })
    })

    $('#box2').on({
        click: function() {

            $('#box2').css({
                background: 'purple',
                color: 'white'
            })
        },
         mouseenter: function() {

            $('#box2').css({
                background: 'brown',
                color: 'white'
            })
        },
        mouseleave: function() {

            $('#box2').css({
                background: 'blue',
                color: 'white'
            })
        }

    })




})
