console.log('Hello from console.log')
// Event Object
const runToggle = true;
$(function () {

        $('.box1 button').on('click', function() {
            // Remove existing .result if found
            $('#box2').find('.result').remove()

            // Display new .result
            var val = $('.box1 input[type="text"]').val()
            console.log(val)
            var len = val.length.toString()
            console.log(len)
            $('#box2').append(`<p class="result">${val} has ${len} letters.</p>`)
        })

})
