
console.log("General Event Handling");

// Common errors to make:
// 1. Forgetting to put quotes ('') around the class.
// 2. Forgetting to designate whether class (.) or id (#).
// 3. Forgetting to describe styling in terms of Javascript and not css.
// 4. Forgetting to describe styling in terms of JSON value pair - key : "value"
$(function () {
    $('.box1').on('click', function () {
        jQuery('.box1').css({ background: "red" });
    });
});

$(function () {
    jQuery('.box2').on('click', function () {
        $('.box2').css({ background: "yellow" });
    });
});

$(function () {
    $('.box3').on('click', function () {
        $('.box3').css({ background: "beige", color: "black", width: "100px" });
    });
});