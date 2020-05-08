// window.alert(navigator.userAgent)
// AOS.init();
var transition = document.querySelector('.fade_group2 div')
transition.addEventListener('transitionend', function() {
  // console.log('end')
  new Swiper('.swiper-container', swipeOption)
  // setTimeout(function(){new Swiper('.swiper-container', swipeOption)}, 3000)
})


// ページ切り替えアニメーション
 $(function(){
	$('body').removeClass('fadeout');
});
$(function() {
  // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
  $('a:not([href^="#"]):not([target])a:not([href^="tel"])').on('click', function(e){
    e.preventDefault(); // ナビゲートをキャンセル
    url = $(this).attr('href'); // 遷移先のURLを取得
    if (url !== '') {
      $('body').addClass('fadeout');  // bodyに class="fadeout"を挿入
      setTimeout(function(){
        window.location = url;  // 0.8秒後に取得したURLに遷移
      }, 800);
    }
    return false;
  });
});

//footerスライド
function resizeSlide() {
  // console.log(document.querySelector('.footer-slide img').height)
  $('.footer-slide li').css('width', window.innerWidth / 5 + 'px')
  $('#footer_image').css({'height': document.querySelector('.footer-slide img').height + 'px'})
  // alert($('.footer-slide ul').width())
}
window.addEventListener('load', function() {
  $('.footer-slide ul').clone().appendTo('.footer-slide')
  resizeSlide()
  changeWinSize()
  // var style = '<link rel="stylesheet" href="./css/animationForIOS.css">'
  // $('head link:last').after(style)
  $('.footer-slide ul').addClass('anim')
  // alert($('head link:last')[0].href)
})
window.addEventListener('resize', function() {
  resizeSlide()
})


//ページトップ
$(function() {
  var topBtn = $('.go_top_btn');    
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
      //ボタンの表示方法
          topBtn.fadeIn();
      } else {
      //ボタンの非表示方法
          topBtn.fadeOut();
      }
  }); 
  //スクロールしてトップ
  topBtn.click(function () {
      $('body,  html').animate({
          scrollTop: 0
      },   500);
      return false;
  });
});

//お知らせポップアップ
$(function(){
  $('.js-modal-open').each(function(){
      $(this).on('click',function(){
          var target = $(this).data('target');
          var modal = document.getElementById(target);
          $(modal).fadeIn();
          return false;
      });
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
  }); 
});


//グーグルマップ
var modePc = true
var gMap
var center = {
  sp: {lat: 34.694000, lng: 135.538317},
  pc: {lat: 34.694592, lng: 135.527549}
}
var gMapSetting = {
  mapArea: document.getElementById('map'),
  mapOptions: {
    center: center.pc,
    zoom: 16,
  },
  markerOptions: {
    map: gMap,
    position: {lat: 34.693395, lng: 135.538317},
    title: '医療法人 尾崎歯科医院',
    icon: 'http://web-sat.jp/ozaki-dental/images/common/map_icon.png', 
  }
}
if (window.matchMedia('(max-width: 1023px)').matches) {
  gMapSetting.mapOptions.center = center.sp
}
// window.addEventListener('load', gmapInit)
window.addEventListener('resize', changeWinSize)
function changeWinSize() {
  // console.log('cws')
  var tmpMode = modePc
  if (window.matchMedia('(max-width: 1023px)').matches) {
    if (tmpMode) {
      // console.log('modeChange')
      gMap.setCenter(center.sp)
    }
    $('.aos-init').addClass('aos-animate')
    modePc = false
  } else if (window.matchMedia('(min-width:1024px)').matches) {
    if (!tmpMode) {
      // console.log('modeChange')
      gMap.setCenter(center.pc)
    }
    // aos
    var aosStyle = '<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">'
    $('head link:last').after(aosStyle)
    AOS.init()
    modePc = true
  }
}

function initMap() {
  // console.log(gMapSetting)
  gMap = new google.maps.Map(gMapSetting.mapArea, gMapSetting.mapOptions)
  gMapSetting.markerOptions.map = gMap
  var marker = new google.maps.Marker(gMapSetting.markerOptions)
  // console.log(gMap)
  marker.addListener('click', function() {
    // console.log('click')
    window.open('https://goo.gl/maps/NC3eQfoGEd1WxTQF9', '_blank')
  })
}

//スマホナビメニュー
$(function() {
  $('.menu ul li a').click(function() {
    $('input[type="checkbox"]').prop('checked', false);
  });
});
function switchByWidth(){
  if (window.matchMedia('(min-width: 1022px)').matches) {
    $('input[type="checkbox"]').prop('checked', false);
  }
}
//ロードとリサイズの両方で同じ処理を付与する
// window.onload = switchByWidth;
window.onresize = switchByWidth;

//スクロールしたら出てきてfooterで消えるナビメニュー
$(window).scroll(function() {
  var scroll_len = $(window).scrollTop();
  var page_len   = $(document).height();
  var window_len = $(window).height();
  var header_margin = 800;
  var footer_margin = 500;
  if ( (scroll_len > header_margin) && (scroll_len < page_len - window_len - footer_margin) ) {
    $('.nav-inner').addClass('nav-on');
    $('#reserve').addClass('nav-on2');
  } else {
    $('.nav-inner').removeClass('nav-on');
    $('#reserve').removeClass('nav-on2');
  }
});


//スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


//スマホ用メインビジュアル高さ取得
  $(document).ready(function(){
    var hSize = $(window).height() -100;
      $('#scroll_top').css('margin-top', hSize + 'px'); // アドレスバーを除いたサイズを付与
    });
    $(window).resize(function(){ // ページをリサイズした時の処理
    var hSize = $(window).height() -100;
      $('#scroll_top').css('margin-top', hSize + 'px'); // アドレスバーを除いたサイズを付与
    });
