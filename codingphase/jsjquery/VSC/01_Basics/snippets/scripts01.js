console.log('Hello from console.log')

// Refer to the jQuery API.

// jQuery('body').css('backgroundColor', '#fff2cc')

// jQuery('.container').css('backgroundColor', '#fff2cc')

// jQuery('.box1').css('backgroundColor', '#fff2cc')

// jQuery('p').css('backgroundColor', '#fff2cc')

// $('#box2').css('backgroundColor', '#fff2cc')

// $('#box2 p').css('backgroundColor', '#fff2cc')
//             .css('fontStyle', 'italic')

$('#box2 p').css('backgroundColor', '#fff2cc')
            .fadeOut('slow', function() {
                console.log("I am out!")
            })