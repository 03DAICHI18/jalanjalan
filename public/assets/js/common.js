$(function () {
  // ハンバーガーメニュー
  $('.js_btn , .js_nav').on('click', function () {
    $('.bl_nav , .el_btn_line , .el_nav_item > a').toggleClass('is_open');
  })


  // スライドショー
  var slideCurrent = 0;
  var lastCurrent = $('.js_slide_list').length - 1;

  $('.js_slide_list').css('display', 'none'); // 一旦すべてのスライドを非表示
  $('.js_slide_list').eq(slideCurrent).css('display', 'block'); // 最初のスライドを表示

  function changeslide() {
    $('.js_slide_list').fadeOut(1500);
    $('.js_slide_list').eq(slideCurrent).fadeIn(1500);
  };

  var Timer;
  function startTimer() {
    Timer = setInterval(function () {
      if (slideCurrent === lastCurrent) {
        slideCurrent = 0;
        changeslide();
      } else {
        slideCurrent++;
        changeslide();
      };
    }, 3000);
  }
  startTimer();
});