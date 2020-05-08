<?php
include_once('env.php');
include_once('inc_titles.php');
$root = $base_dir . '../';
// $phase2 = $_SERVER['QUERY_STRING'] == 'phase2';
$phase2 = true;
$title = '';

function tpl_head($pageSlug = 'main') {
    global $root, $phase2, $base_dir, $settings;
    // if ($pageTitle !== '') {
    //     $title = $pageTitle . ' | ' . $title;
    // } else {
    //     $title = '' . $title;
    // }
    if (isset($settings[$pageSlug])) {
        $title = $settings[$pageSlug]['title'];
        $description = $settings[$pageSlug]['description'];
        $h1Text = $settings[$pageSlug]['h1Text'];
        $keyword = $settings[$pageSlug]['keyword'];
    } else {
        $title = '';
        $description = '';
        $h1Text = '';
        $keyword = '';
    }
    if($pageSlug === 'index') {
        $root = $base_dir . './';
    }
    ?>
<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="ja"><![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8" lang="ja"><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9" lang="ja"><![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="ja">
<!--<![endif]-->
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KGZHR7X');</script>
    <!-- End Google Tag Manager -->
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo $root;?>images/common/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo $root;?>images/common/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo $root;?>images/common/favicon-16x16.png">
    <link rel="manifest" href="<?php echo $root;?>images/common/site.webmanifest">
    <link rel="mask-icon" href="<?php echo $root;?>images/common/safari-pinned-tab.svg" color="#e9921f">
    <link rel="shortcut icon" href="<?php echo $root;?>images/common/favicon.ico">
    <meta name="msapplication-TileColor" content="#00aba9">
    <meta name="msapplication-config" content="<?php echo $root;?>images/common/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <title><?php echo $title;?></title>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css">
    <link href="//use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo $root;?>/css/style.css">
    <meta name="description" content="<?php echo $description;?>">
</head>
    <?php
}
function tpl_header($pageSlug = 'main') {
    global $root, $phase2, $base_dir, $settings;
        if($pageSlug === 'index') {
        $root = $base_dir . './';
    }
    ?>
  <body class="fadeout">
  <!-- Google Tag Manager (noscript) -->
<noscript><iframe src=""https://www.googletagmanager.com/ns.html?id=GTM-KGZHR7X""
height=""0"" width=""0"" style=""display:none;visibility:hidden""></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
      <header>
               <!--スクロール表示ナビ-->
 <div id="scroll-nav">
     <div class="nav-inner">
<p><a href="<?php echo $root;?>"><img src="<?php echo $root;?>images/common/header_logo.svg" alt="尾崎歯科医院" /></a></p>
<div id="reserve">
<a href="https://icontact-3.dapo.jp/docoapo_line_rk/webform.php?id=39242" target="_blank">
<div class="reserve_wrap">
<p class="reserve_button">ネット予約<span>24時間受付中</span></p>
</div>
</a>
</div>
        <nav>
          <ul>
          <li><a href="<?php echo $root;?>about">医院のご案内</a></li>
            <li><a href="<?php echo $root;?>treatment">診療内容一覧</a></li>
            <li><a href="<?php echo $root;?>about/#access">アクセス</a></li>
            <li><a href="<?php echo $root;?>faq">よくあるご質問</a></li>
          </ul>
        </nav>
</div>
</div>
 <!--スクロール表示ナビ　end-->
<div class="cp_fullscreenmenu">
<input type="checkbox" id="toggle" />
<label class="hamburger" for="toggle">
<div class="bar"></div>
<div class="bar"></div>
<div class="bar"></div>
メニュー
</label>
<div class="menu">
<ul>
            <li><a href="<?php echo $root;?>">ホーム</a></li>
            <li><a href="<?php echo $root;?>about">医院のご案内</a></li>
            <li><a href="<?php echo $root;?>treatment">診療内容一覧</a></li>
            <li><a href="<?php echo $root;?>about/#access">アクセス</a></li>
            <li><a href="<?php echo $root;?>faq">よくあるご質問</a></li>
            <li><a href="<?php echo $root;?>recruit">採用情報</a></li>
            <li><a href="https://ssl1.beeplus.ne.jp/~ozaki-dental/connect.html" target="_blank">お問い合わせ</a></li>
            <li>
                <ul>
                <li>受付時間</li>
                <li>平日 9:30 - 12:15/14:30 - 18:45<br>土曜 9:30 - 12:15/14:30 - 16:45</li>
                </ul>
            </li>
</ul>
</div>
</div>
<div class="header_inner">
  <p class="header_sp_logo"><a href="<?php echo $root;?>"><img src="<?php echo $root;?>images/common/header_logo.svg" alt="尾崎歯科医院" /></a></p>
  <p class="header_sp_reserve"><a href="https://icontact-3.dapo.jp/docoapo_line_rk/webform.php?id=39242" target="_blank">ネット予約<span class="time">24時間受付中</span></a></p>
  <p class="header_sp_tel"><a href="tel:0669615821">お電話</a></p>
  <div class="area-head">
    <div class="area-inner">
      <div class="row_left">
      <p><a href="<?php echo $root;?>"><img src="<?php echo $root;?>images/common/header_logo.svg" alt="尾崎歯科医院" /></a></p>
      <p>大阪市城東区鴫野の歯医者<br>JR線京橋駅南出口徒歩5分</p>
      </div>
      <div class="row_right">
      <dl>
      <dt>受付時間</dt>
      <dd>平日 9:30 - 12:15/14:30 - 18:45<br>土曜 9:30 - 12:15/14:30 - 16:45</dd>
      </dl>
      <div class="tel">ご予約・お問合せ<span>06-6961-5821</span></div>
      <div class="reserve_row">
<a href="https://icontact-3.dapo.jp/docoapo_line_rk/webform.php?id=39242" target="_blank" class="reserve_button"><span class="time">24時間<br>受付中</span><span class="icon">ネット予約はこちら</span></a>
</div>
      <nav>
          <ul>
          <li><a href="<?php echo $root;?>about">医院のご案内</a></li>
            <li><a href="<?php echo $root;?>treatment">診療内容一覧</a></li>
            <li><a href="<?php echo $root;?>about/#access">アクセス</a></li>
            <li><a href="<?php echo $root;?>faq">よくあるご質問</a></li>
          </ul>
        </nav>
      </div>
      </div>
      </div><!-- / area-head -->
      </div>
  </header><!-- / header end -->

<div class="fade_group">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
	<div class="fade_group2">
		<div></div>
		<div></div>
	</div>
    <?php
}


function tpl_header_top($pageSlug = 'main') {
    global $root, $phase2, $base_dir, $settings;
        if($pageSlug === 'index') {
        $root = $base_dir . './';
    }
    // header
    ?>


    <?php
}
function tpl_footer($index = '') {
    global $root, $phase2, $base_dir;
    // footer
    ?>
<aside id="area_foot">
<div class="foot_content">
<div class="foot_logo">
<p><img src="<?php echo $root;?>images/common/header_logo.svg" alt="尾崎歯科医院" width ="250px;"/></p>
<p class="foot_train">JR線京橋駅 南出口徒歩5分</p>
</div>
<div class="tel_foot">
<div class="tel"><a href="tel:0669615821">ご予約・お問合せ<span>06-6961-5821</span></a></div>
<div class="reserve_row">
<a href="https://icontact-3.dapo.jp/docoapo_line_rk/webform.php?id=39242" target="_blank" class="reserve_button"><span class="time">24時間<br>受付中</span><span class="icon">ネット予約はこちら</span></a>
</div>
</div>
<div class="foot_info">
<table>
    	<tbody><tr>
    		<th>診療時間</th>
    		<th>月</th>
    		<th>火</th>
    		<th>水</th>
    		<th>木</th>
    		<th>金</th>
    		<th>土</th>
    	</tr>
    	<tr>
    		<td><span>午前</span><span>受付/9:30 - 12:15<br>診療/9:30 - 12:30</span></td>
    		<td>●</td>
    		<td>●</td>
    		<td>●</td>
    		<td>●</td>
    		<td>●</td>
    		<td>●</td>
    	</tr>
    	<tr>
    		<td><span>午後</span><span>受付/14:30 - 18:45<br>診療/14:30 - 19:00</span></td>
    		<td>●</td>
    		<td>●</td>
    		<td>●</td>
    		<td>●</td>
    		<td>●</td>
    		<td>▲</td>

    	</tr>
    </tbody></table>
</div>
<div class="alert">
<p>※受付は診療終了15分前までです。<br>※土曜日午後<span>▲</span>の診療は17:00まで（受付16:45まで）、日祝は休診日です。</p>
<p>平日お忙しい方も通いやすいよう、土曜日の午後も診療しています。<br>お仕事帰り、お出かけ前などお気軽にお立ち寄りください。</p>
</div>
<address><p>〒536-0014<br>大阪市城東区鴫野西1-12-12</p>
<span><a href="https://goo.gl/maps/NC3eQfoGEd1WxTQF9" target="_blank">Google Mapで詳しく見る</a></span>
</address>
</div> 
    <div id="map"></div>
    </aside>
  <footer>
    <ul>
        <li><a href="<?php echo $root;?>">ホーム</a></li>
        <li><a href="<?php echo $root;?>greeting">医院のご案内</a></li>
        <li><a href="<?php echo $root;?>treatment">診療内容一覧</a></li>
        <li><a href="<?php echo $root;?>about/#access">アクセス</a></li>
        <li><a href="<?php echo $root;?>faq">よくあるご質問</a></li>
        <li><a href="<?php echo $root;?>recruit">採用情報</a></li>
        <li><a href="https://ssl1.beeplus.ne.jp/~ozaki-dental/connect.html" target="_blank">お問い合わせ</a></li>
    </ul>
    <small class="copyright">Copyright &copy; AKI DENTAL CLINIC All Rights Reserved.</small>

    <p class="go_top_btn"><a class="btn" href="#"><img src="<?php echo $root;?>images/common/arrow_top.svg" alt="TOPへ戻る" width ="250px;"/></a></p>
  </footer><!-- / footer end -->

    <?php
}

function tpl_footer_js($index = '') {
    global $root, $phase2, $base_dir;
    // footer
    ?>
</body>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<!-- <script src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script> -->
<script src="//cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js"></script>
<script src="<?php echo $root;?>js/swiper.js"></script>
<!-- <script>AOS.init();</script> -->
<!-- <script src="//unpkg.com/scrollreveal"></script> -->
<script src="//maps.googleapis.com/maps/api/js?key=AIzaSyChN4mY7Fw6OUuipRSbNqNJRI1OMToXa7M&callback=initMap" async defer></script>

<script src="<?php echo $root;?>js/common.js"></script>
<script>
$(function(){
    var style = '<link rel="stylesheet" href="<?php echo $root;?>css/animationForIOS.css">';
    $('head link:last').after(style);
});
</script>
</html>
<?php
}
