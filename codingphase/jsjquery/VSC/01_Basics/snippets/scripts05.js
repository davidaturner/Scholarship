console.log('Hello from console.log')
// Event Object
const runToggle = true;
$(function () {

    $('.box1').click(function () {
        $('.box1').addClass('active')
    
        if ($('.box1').hasClass('active')) {
            console.log("Box1 has active!")
        } else {
            console.log("Box1 not yet activated!")
        }

        if ($('#box2').hasClass('active')) {
            console.log("Box2 has active!")
        } else {
            console.log("Box2 not yet activated!")
        }
    })

    $('#box2').click(function() {
        if ($('.box1').hasClass('active')) {
            $('.box1').first().removeClass('active')
        }
    })

    $('#box2').dblclick(function() {
        $('.box1').toggleClass('active')
    })

})
