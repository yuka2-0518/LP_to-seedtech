$('.thumb-item').slick({
  autoplay: true,         //自動再生
  autoplaySpeed: 2000,   //自動再生のスピード
  speed: 800,		         //スライドするスピード
  dots: true,           //スライドしたのドット
  arrows: true,          //左右の矢印
  infinite: true,       //スライドのループ
  pauseOnHover: false,   //ホバーしたときにスライドを一時停止しない　

  // arrows:false,
  // asNavFor:'.thumb',
});


// $('.thumb-item-nav').slick({
//     asNavFor:'.slider',
//     focusOnSelect: true,
//     slidesToShow:4,
//     slidesToScroll:1
// });






// $('.slider').slick({
//   dots:true

// });





// $(function(){

// $(document).ready(function(){
//   $('.thumb-item').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
//     nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
//     pauseOnFocus: false,
//     pauseOnHover: false,
//     pauseOnDotsHover: false,
//     // asNavFor: '.thumb-item-nav' //サムネイルのクラス名
//   });
//   $('.thumb-item-nav').slick({
//     infinite: true,
//     slidesToShow: 4,
//     focusOnSelect: true,
//     asNavFor: '.thumb-item' //スライダー本体のクラス名
//   });
//   //下の選択画像をスライドさせずに連動して変更させる設定。
//   $('.thumb-item').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
//     var index = nextSlide; //次のスライド番号
//     //サムネイルのslick-currentを削除し次のスライド要素にslick-currentを追加
//     $(".thumb-item-nav .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
//   });
// });


// }


