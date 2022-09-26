$(function () {
    $("h1").on('click', function () {
        getTodosDoneFail();
    });
});

function getTodosDoneFail() {
    var request = $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        method: 'GET',
        data: { userId : 1 }
    });

    request.done(function (data) {
        console.log(data);
    });

    request.fail(function (jqXHR, textStatus, errorThrown) {
        alert("Request failed: " + textStatus + " " + errorThrown);
    });
}

/*
$(function () {
    var request = $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        method: 'GET'
    });

    request.done(function (data) {
        console.log(data);
    });

    request.fail(function (jqXHR, errmsg) {
        alert("Request failed: " + errmsg);
    });
});*/
/*
$(function () {
    $("h1").on('click', function () {
        console.log('Hello from JS1!')
    });
});
*/
/*
$(document).ready(function () {
    $("h1").click(function () {
        $(this).hide();
    });
});
*/