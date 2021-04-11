// console.log('Hello from JS!')
$(function () {
    $('.add-circle').on('click', function () {
        $('.task-edit-form').addClass('active');
    });
    $('.close-btn').on('click', function () {
        $('.task-edit-form').removeClass('active');
    });
});