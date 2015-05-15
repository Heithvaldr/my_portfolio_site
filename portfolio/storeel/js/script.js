$( document ).ready(function() {

 console.log('ready');

  $(".link").each(function () {
    text = $(this).text();
    if (text.length > 150) {
        $(this).html(text.substr(0, 150));
    }
 });

});
$(document).ready(function() {

$("#slider").owlCarousel();

});

$(".owl-carousel").owlCarousel({
/* navigation: true,*/
slideSpeed: 300,
paginationSpeed: 400,
singleItem: true,
autoHeight: true,
autoPlay: true
});