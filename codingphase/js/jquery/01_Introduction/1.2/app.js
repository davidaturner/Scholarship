// $('body').css({background: 'blue'});
// tag
$('body').css({backgroundColor: 'ghostwhite'});
$('p').css({color: 'orangered'});
$('p:nth-of-type(2)').css({backgroundColor: 'green', padding: '10px'}).fadeOut('slow', 
function() {
        console.log("fade is complete!")
    });
// $('div ~ p').css({backgroundColor: 'purple'});
// class
$('.box').css({backgroundColor: 'red'});
// id
$('#box3').css({color: 'ghostwhite', backgroundColor: 'blue'});