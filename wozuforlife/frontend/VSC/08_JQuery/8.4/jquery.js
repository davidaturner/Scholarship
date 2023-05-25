// var plist = document.getElementsByTagName("p");
// for(let i=0; i<plist.length; i++){
//     if (i % 2 ==0){
//         plist[i].classList.add("hide");
//     }
// }

// $(document).ready(function(){ // depreciated
//     $("p").click(function(){  // depreciated
$(function() {
    $("p").on('click', function() {
        $(this).hide();
    })
});
