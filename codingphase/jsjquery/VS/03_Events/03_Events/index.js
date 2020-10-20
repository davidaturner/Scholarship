
console.log("General Event Handling");

// Common errors to make:
// 1. Forgetting to put quotes ('') around the class.
// 2. Forgetting to designate whether class (.) or id (#).
// 3. Forgetting to describe styling in terms of Javascript and not css.
// 4. Forgetting to describe styling in terms of JSON value pair - key : "value"

/*
$(function () {
    $('.box1').on('click', function () {
        jQuery('.box1').css({ background: "red" });
    });
});
*/

$(function () {

// Same function, but Safer, since it safeguards app
// from the possibility that .box1 is undefined at
// the time document.Ready.
    $(document).on('click', '.box1', function () {
        $('.box1').css({ background: "red" });
    });
});

// You can have multiples calls to style under 
// one jQuery call.
$(function () {
    // Version 1
//    $('.box2').on('click', function () {
//        $('body').css({ background: "gray" });
//    });

    // Version 2
//    $('.box2')
//        .click(function () {
//            $('body').css({ background: "gray" });
//        });

    // Additional mouse events.
    $('.box2')
       .mouseenter(function () {
            $('body').css({ background: "blue" });
        })
        .mouseleave(function () {
            $('body').css({ background: "orange" });
        });

    // Version 3
    $('.box2').on({
        click: function () {
            $('body').css({ background: "gray" });
        }
    });

});

