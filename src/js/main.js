import $ from 'jQuery';
import jQuery from 'jQuery';
window.$ = $;
window.jQuery = jQuery;


$(() => {

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

});
