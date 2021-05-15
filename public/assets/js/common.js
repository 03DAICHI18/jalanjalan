$(function () {
  var slideCurrent = 0;
  var lastCurrent = $('.el_slide_list').length - 1;

  $('.el_slide_list').css('display', 'none'); // 一旦すべてのスライドを非表示
  $('.el_slide_list').eq(slideCurrent).css('display', 'block'); // 最初のスライドを表示

  function changeslide() {
    $('.el_slide_list').fadeOut(1500);
    $('.el_slide_list').eq(slideCurrent).fadeIn(1500);
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