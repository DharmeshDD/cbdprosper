$( document ).ready(function() {
$('#announcement-bar').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }   
})

$(".announcement-close-icon").click(function(){
   $(".announcement").addClass('d-none');
});

$(".phoneno").click(function(){
    $(".contact-numbers").toggleClass('display');
 });
});