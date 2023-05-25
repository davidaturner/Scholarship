// Another commonly used CSS manipulation method is .css(). This method differs from 
// those you have explored above because it DOESN'T use a previously defined class in 
// your style.css file. There are two ways you can use this method:

// .css("propertyName") - This will return the CSS property of the first matched 
// element.
// .css("propertyName", "value") - This will set a specified element with a specific 
// property and set the value to either a string or a number depending on what the 
// property is. You can use any propertyName and value that you would use in a regular 
// CSS file.
// The second way of using the .css() method is used more frequently than the first, 
// simply because you do not need to return the CSS property as much as you would 
// want to set CSS to an element.
$(function(){
    // $(".p1").click(function(){
    $(".p1").on('mouseenter', function(){
        $(this).css("color", "orange");
    });
    $(".p1").on('mouseleave', function(){
        $(this).css("color", "blue");
    });
});