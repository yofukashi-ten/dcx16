import $ from 'jQuery';
import jQuery from 'jQuery';
window.$ = $;
window.jQuery = jQuery;

import Swiper from './vendor/swiper/swiper.min.js'

$(() => {

  $('#top').css('opacity', '1.0');

  // ---- 画像のロールオーバー ---- //
  // 画像名には-on, -offが付いていなければならない.
  $('img').each(function (){
      var img = $(this);
      var src_off = img.attr('src');
      var src_on = src_off.replace(/^(.+)-off(\.[^\.]+)$/, '$1-on$2');
      $('<img />').attr('src', src_on);
      img.hover(function (){
        img.attr('src', src_on);
      }, function (){
        img.attr('src', src_off);
      });
  });

  $(".scroll").click(function(event){
    event.preventDefault();
    var url = this.href;

    var parts = url.split("#");
    var target = parts[1];

    var target_offset = $("#"+target).offset();
    var target_top = target_offset.top;

    $('html, body').animate({ scrollTop:target_top }, 1000);
  });

  var topButton = $('#page-top');
  topButton.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400)
        topButton.fadeIn();
    else
        topButton.fadeOut();
  });

  var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  });

});
