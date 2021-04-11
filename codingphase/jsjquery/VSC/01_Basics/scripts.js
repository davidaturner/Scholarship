$(function () {
    $('#box2').on('click', function() {
    var request = $.ajax({
        url: 'http://jsonplaceholder.com.typicode.com/todos',
        method: 'GET',
        // data: { id: menuId },
        // datatype: "html"
    })
    })
})

function getPostsAjaxDoneFail () {     
    var request = $.ajax({
        url: 'http://jsonplaceholder.com.typicode.com/todos',
        method: 'GET',
        // data: { id: menuId },
        // datatype: "html"
    })

    request.done(function( data ) {
        console.log(data)
    })

    request.fail(function( jqXHR, errmsg) {
        alert('Request failed: '+ errmsg)
    })
}

function getPostsAjaxThen() {
    // var target = 'https://jsonplaceholder.com.typicode.com/todos'
    var target = 'https://google.com'
    $.ajax(target, {
        method: 'GET'
    }).then(function(data) {
        console.log(data)
    })
}

// $(function () {

//     var target = 'https://jsonplaceholder.com.typicode.com/posts'

//     $.ajax(target, {
//         method: 'GET'
//     }).then(function(data) {
//         console.log(data)
//     })
// })
