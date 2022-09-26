$(function () {
    $("h1").on('click', function () {
        postTodosPost();
    });
});

function postTodosPost() {
    $.post(
        'https://jsonplaceholder.typicode.com/todos',
        {
            userId: 13,
            /*            id : 2000, */
            title: "My Bride Bertha Simms",
            completed: false,
        },
        function(data) {
            console.log(data);
        }
    );
}
function postTodosThen() {
    var request = $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        method: 'POST',
        data: {
            userId: 13,
/*            id : 2000, */
            title: "My Bride Bertha Simms",
            completed: true,
        }
    });

    request.then(function (data) {
        console.log(data);
    });
/*
    request.fail(function (jqXHR, textStatus, errorThrown) {
        alert("Request failed: " + textStatus + " " + errorThrown);
    });
    */
}
/*
$(document).ready(function () {
    $("h1").click(function () {
        $(this).hide();
    });
});
*/