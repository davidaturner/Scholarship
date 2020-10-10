console.log('A Study in Browser Event handling')

//Refer to: ttps://api.jquery.com/category/events/

// Resize() example 'click on Resize()
/*
$(window).resize(function () {
    $("#log").append("<div>Handler for .resize() called.</div>");
});
*/
$(window).resize(function () {
    console.log($(window).width());

    if ($(window).width() > 992) {
        jQuery('body').css({ background: "red" });
    } else if ($(window).width() > 767) {
        $('body').css({ background: "blue" });
    } else {
        $('body').css({ background: "yellow" });
    }
});
