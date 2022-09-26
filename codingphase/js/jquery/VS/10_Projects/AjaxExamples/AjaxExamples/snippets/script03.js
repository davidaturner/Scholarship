$(function () {
    $("h1").on('click', function () {
        let data = {
            userId: 13,
            title: "My Bride Toucan",
            completed: true,
        };
        postTodosIndexStringfyThen(data);
    });
});
function postTodosIndexStringfyThen(data) {
    var request = $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/200',
        method: 'PUT',
        data: JSON.stringify(data)
    });

    request.then(function (data) {
        console.log(data);
    });
};

function postTodosIndexThen() {
    var request = $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/200',
        method: 'PUT',
        data: {
            userId: 13,
/*            id : 200,*/
            title: "My Bride Bertha Simmons",
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