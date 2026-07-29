// jQuery(document).ready(function () {
// /*Faq section*/
// jQuery(document).ready(function(e) {
// jQuery('.accordion-list .accordion-item .acc-label').on('click', function(){
//    jQuery(this).toggleClass('active');
//    jQuery(this).siblings('.accordion-data').slideToggle()
//    jQuery(this).parent().siblings().children('.accordion-data').slideUp();
//    jQuery(this).parent().siblings().children('.acc-label').removeClass('active');
// })
// });
// /*Faq section*/
// });


$(document).ready(function () {
 // Open the first accordion item on page load
 var $firstItem = $('.accordion-list .accordion-item').first();
 $firstItem.find('.accordion-data').slideDown();
 $firstItem.find('.acc-label').addClass('active');

 // // Scroll to the accordion section
 // $('html, body').animate({
 //   scrollTop: $('.accordion-list').offset().top
 // }, 600); // 600ms scroll speed

 // Toggle on click
 $('.accordion-list .accordion-item .acc-label').on('click', function () {
   $(this).siblings('.accordion-data').slideToggle();
   $(this).parent().siblings().children('.accordion-data').slideUp();
   $(this).parent().siblings().children('.acc-label').removeClass('active');
   $(this).toggleClass('active');
 });
});