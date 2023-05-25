// var plist = document.getElementsByTagName("p");
// for(let i=0; i<plist.length; i++){
//     if (i % 2 ==0){
//         plist[i].classList.add("hide");
//     }
// }

// Now, addClass() is not the only jQuery CSS manipulation method. Below are two 
// more of the frequently used CSS manipulation methods:
// removeClass() - This will do the opposite of addClass(). It will take away 
// any CSS class already being used with a specific element.
// toggleClass() - This will switch between the addClass() and removeClass() 
// methods. If you consider the code above and instead had toggleClass(), each 
// time you click on the paragraph, it will either add the CSS class or remove it.
// $(document).ready(function(){
//     $(".p1").click(function(){
//         $(this).addClass("blue");
//     });
// });

$(function() {
    // $("p").on('click', function() { // doesn't toggle right. a css error.
    $(".p1").on('click', function() {   // toggles as expected.
        $(this).toggleClass("blue");
    })
});
