console.log('Hello from console.log')
// Event Object
$(function () {

    //Check box1 background...
    $('#box2').on('click', function(event) {
        event.preventDefault()

        $('.box1').css('background', 'purple')

    })

    // Show mouse location...
    // $('#box2').on('mousemove', function(event) {
    //         event.preventDefault()
    //         $('#box2').text("EventX: " + event.pageX + " EventY: " + event.pageY)
    // })
})
