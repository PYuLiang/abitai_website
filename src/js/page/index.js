// 引入css
require('../../css/lib/reset.css')
require('../../css/common/global.css')
require('../../css/common/grid.css')
require('../../css/page/index.less')

require('bootstrap/dist/css/bootstrap.min.css')
require('bootstrap/dist/js/bootstrap.min.js')
require('amazeui-slick/dist/amazeui.slick.css')
require('amazeui-slick/dist/slick.js')
require('waypoints/lib/noframework.waypoints.js')
require('../plugin/swiper.js')
require('../plugin/swiper.css')
// require('video.js/dist/video-js.min.css')
// require('video.js/dist/video.min')

//模块淡入
$('.easy-in-box').each(function () {
  var _this = $(this);
  var waypoint = new Waypoint({
    element: _this[0],
    handler: function () {
      console.log($(this));
      _this.addClass("animate");
      this.destroy();
    },
    offset: '90%',
  })
})

$("#show_QR").click(function(){
    if ($(".QR_code").hasClass('ss-hide')) {
        $(".QR_code").removeClass('ss-hide')
    }else{
        $(".QR_code").addClass('ss-hide')
    }
})

// 锚点滚动动画设置
$("a.topLink").click(function () {
  if (location.search.split("=")[1]) {
    $("#product").siblings().css("display", "block");
    $(".all-section").css("display", "block");
  }
  $(this).parent().addClass('li_active_mixin').siblings().removeClass('li_active_mixin');
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top + "px"
  }, {
      duration: 500,
      easing: "swing"
    })
  return false
})

$('.topLinkBox').click(function () {
  $(this).children('a').click();
})

//点击播放演示视频按钮
$('body').on('click', '.product_demo_btn', function () {
  $('.demo_play').append('<iframe  frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="100%" height="440px" src="https://v.qq.com/iframe/player.html?vid=h0522o07nj5&tiny=0&auto=0"></iframe>')
  $('.demo_play_box').css('display', 'block');
})
//点击关闭播放演示视频按钮
$('body').on('click', '.close_play', function () {
  $('.demo_play_box').css('display', 'none');
  $('.demo_play').children().remove();
})

//监听页面滚动改变head颜色
window.onscroll = function () {
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  if (scrollTop >= 0 && scrollTop < 2818) {
    $('.topLinkBox').removeClass('li_active_mixin');
    $('.topLinkBox').eq(0).addClass('li_active_mixin');
  } else if (scrollTop >= 2818 && scrollTop < 4272) {
    $('.topLinkBox').removeClass('li_active_mixin');
    $('.topLinkBox').eq(1).addClass('li_active_mixin');
  } else if (scrollTop >= 4272 && scrollTop < 5360) {
    $('.topLinkBox').removeClass('li_active_mixin');
    $('.topLinkBox').eq(2).addClass('li_active_mixin');
  } else if (scrollTop >= 5360 && scrollTop < 6360) {
    $('.topLinkBox').removeClass('li_active_mixin');
    $('.topLinkBox').eq(3).addClass('li_active_mixin');
  } else if (scrollTop >= 6360 && scrollTop < 7360) {
    $('.topLinkBox').removeClass('li_active_mixin');
    $('.topLinkBox').eq(4).addClass('li_active_mixin');
  } else {

  }

}

$('.autoplay_media').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  prevArrow: '<span class="team-Previous"></span>',
  nextArrow: '<span class="team-next"></span>'
});


//点击展开当前岗位招聘信息
$('body').on('click', '.join_us_plus', function () {
  $(this)
    .removeClass('join_us_plus')
    .addClass('join_us_minus')
    .text('-')
    .parents('.info-cell')
    .next()
    .removeClass('display_none')
})
$('body').on('click', '.join_us_minus', function () {
  $(this)
    .removeClass('join_us_minus')
    .addClass('join_us_plus')
    .text('+')
    .parents('.info-cell')
    .next()
    .addClass('display_none')
})

// $.ajax({
//   url: 'http://39.106.105.118:9000/getInfo',
//   type: 'get',
//   success: function (re) {
//     let data = re.workList;
//     var str = '';
//     data.forEach(function (v, i) {
//       str += '<div class="info-body">' +
//         '<div class="info-cell">' +
//         '<div class="name">' +
//         '<span class="name-content">' + v.name + '</span>' +
//         '<span class="plus join_us_plus"> + </span>' +
//         '</div>' +
//         '</div>' +
//         '<div class="content display_none">' +
//         '<div class="content-cell">' +
//         '<span class="content-cell-title">岗位职责:</span>' +
//         '<br/>';
//       v.duty.forEach(function (val, ind) {
//         str += '<p class="content-cell-body" style="display:block"><span>' + (ind + 1) + '、</span>' + val + '</p >';
//       })

//       str += '</div>' +
//         '<div class="content-cell">' +
//         '<span class="content-cell-title">岗位要求:</span>' +
//         '<br/>';
//       v.requirement.forEach(function (value, index) {
//         str += '<p class="content-cell-body" style="display:block"><span>' + (index + 1) + '、</span>' + value + '</p >';
//       })

//       str += '</div>' +
//         '<div class="content-cell">' +
//         '<span class="content-cell-title">投递邮箱:</span>' +
//         '<span class="content-cell-body content-mail">' + v.email + '</span>' +
//         '</div>' +
//         '</div>' +
//         '</div>';
//     })

//     $("#jobBox").html(str);
//   }
// })

/*邮件提交*/

$(".submit").on("click", function () {
  let email = $(".email").val().trim(),
    address = $(".address").val().trim(),
    feedback = $(".feedback").val().trim();
  let flag = email && address && feedback;
  if (flag) {
    $('.input_succ_alert').removeClass('display_none');


    // $.ajax({
    //   url: 'http://39.106.105.118:9000/test',
    //   type: "get",
    //   async: false,
    //   data: {
    //     mailTo: 'info@abitai.com',
    //     subject: '官网信息反馈',
    //     text: '官网信息反馈',
    //     html: '反馈信息：' + feedback + '<br/>邮箱：' + email + '<br/>地址：' + address
    //   },
    //   success: function (re) {
    //     JSON.parse(re);
    //     console.log(re)
    //     if (re.code == 200) {
    //       alert('提交成功！')
    //     }
    //   }
    // })
    $.ajax({
      url: 'https://open.abitai.com/admin/open/mail/office/send',
      type: "get",
      async: false,
      data: {
        subject: '官网信息反馈',
        html: '反馈信息：' + feedback + '<br/>邮箱：' + email + '<br/>地址：' + address
      },
      success: function (re) {
        JSON.parse(re);
        console.log(re)
        if (re.code == 200) {
          alert('提交成功！')
        }
      }
    })
    $(".email").val("");
    $(".address").val("");
    $(".feedback").val("");
    setTimeout(function () {
      $('.input_succ_alert').addClass('display_none');
    }, 2000)
  }

})

var mySwiper = new Swiper('.swiper-container', {
  autoplay: 3000, //可选选项，自动滑动
  pagination: '.swiper-pagination',
  slidesPerView: 4,
  observer: true,
  observeParents: true,
  autoplayDisableOnInteraction: false,
  prevButton: '.swiper-button-prev',
  nextButton: '.swiper-button-next',
  spaceBetween: 20,
  paginationClickable: true,
  // grabCursor: true
})

var mySwiperTop = new Swiper('.swiper-top', {
  speed: 1000,
  autoplay: 5000, //可选选项，自动滑动
  loop: true
})


$(document).ready(function () {
  $("body").on('click', '#fabuhui_link', function () {
    window.location.href = "http://www.huodongxing.com/event/7441579099800";
  })
  if (location.search.split("=")[1] == "timeLine") {
    //$(".swiper-top").css("display", "none");
    $("#product").siblings().css("display", "none");
    $(".timeline-box").siblings().css("display", "none");

  } else if (location.search.split("=")[1] == "service") {
    $("#product").siblings().css("display", "none");
    $(".timeline-box,.module-box,.support-box").css("display", "none");
  } else if (location.search.split("=")[1] == "introduction") {
    $("#product").siblings().css("display", "none");
    $(".timeline-box,.module-box,.core-box,.scene-box").css("display", "none");
  }
});
