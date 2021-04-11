$(function () {
    $("h1").on('click', function () {
        let index = 200
        deleteTodosIndexThen(index);
    });
});
function deleteTodosIndexThen(index) {
    var request = $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/' + index,
        method: 'DELETE',
    });

    request.then(function (data) {
        console.log(data);
    });
};

function deleteTodosDefaultThen() {
    var request = $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/200',
        method: 'DELETE',
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