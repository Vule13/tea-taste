function IsMobile() {
  var Uagent = navigator.userAgent || navigator.vendor || window.opera;
  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
      Uagent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      Uagent.substr(0, 4)
    )
  );
}

(function ($) {
  $(document).ready(function () {
    "use strict";

    $(".js-burger-menu").on("click", function () {
      $(this).toggleClass("active");
      $(".js-menu-mobile-spl").toggleClass("d-none");
    });

    $(".menu-item-js").on("click", function () {     
      $(".js-menu-mobile-spl").toggleClass("d-none");
      $(".js-burger-menu").removeClass("active");
    });

    $(".js-click-tabs-btn").on("click", function () {
      var btnNameTab = $(this).text();
      $(".js-click-tabs-post").text(btnNameTab);
    });

    $(".spl-close-popup").on("click", function () {
      setTimeout(function () {
        $(".spl-popup-warning").hide();
      }, 350);
    });

    $(".js-demo-link-click").on("click", function () {
      var demo_url = $(this).closest(".demo-item").attr("data-url");
      $(".js-spl-popup-click .spl-btn-view-now").attr("href", demo_url);
      $(".js-spl-popup-click").show();
    });

    $(".js-link-click-layout").on("click", function () {
      var demo_url = $(this).closest(".shop-layout-thumb").attr("data-url");
      $(".js-spl-popup-click .spl-btn-view-now").attr("href", demo_url);
      $(".js-spl-popup-click").show();
    });

    $(".js-click-product-layout").on("click", function () {
      var demo_url = $(this).closest(".layout-pr-box").attr("data-url");
      $(".js-spl-popup-click .spl-btn-view-now").attr("href", demo_url);
      $(".js-spl-popup-click").show();
    });

    $(".js-carousel-testimonial").slick({
      infinite: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".js-slick-layout").slick({
      infinite: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1000,
      speed: 1000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            arrows: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: false,
          },
        },
      ],
    });

    // smooths croll
    function smooth_scroll() {
      $(function () {
        // This will select everything with the class smoothScroll
        // This should prevent problems with carousel, scrollspy, etc...
        $(
          'a[href*="#"]:not([href="#"]):not([href*="#mm-"]):not([href="#primary-navigation"])'
        )
          .not('a[data-toggle="tab"]')
          .on("click", function () {
            if (
              location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
              location.hostname == this.hostname
            ) {
              var target = $(this.hash);
              target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
              if (target.length) {
                $("html,body").stop().animate(
                  {
                    scrollTop: target.offset().top,
                  },
                  1000
                ); // The number here represents the speed of the scroll in milliseconds
                return false;
              }
            }
          });
      });
    }

    function tab_product_fade_effect() {
      // effect click
      $(document).on("click", '.ecome-tabs a[data-toggle="tab"]', function () {
        var tab_id = $(this).attr("href");
        var tab_animated = $(this).data("animated");
        tab_animated =
          tab_animated == undefined || tab_animated == ""
            ? "fadeInUp"
            : tab_animated;

        $(tab_id)
          .find(".demo-item")
          .each(function (i) {
            var t = $(this);
            var style = $(this).attr("style");
            style = style == undefined ? "" : style;
            var delay = i * 50;
            t.attr(
              "style",
              style +
                ";-webkit-animation-delay:" +
                delay +
                "ms;" +
                "-moz-animation-delay:" +
                delay +
                "ms;" +
                "-o-animation-delay:" +
                delay +
                "ms;" +
                "animation-delay:" +
                delay +
                "ms;"
            )
              .addClass(tab_animated + " animated")
              .one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function () {
                  t.removeClass(tab_animated + " animated");
                  t.attr("style", style);
                }
              );
          });
      });
    }

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 80) {
        $(".main-header").addClass("menu-bg");
      } else {
        $(".main-header").removeClass("menu-bg");
      }
    });
    $(window).on("load", function () {
      smooth_scroll();
    });
    // Change the speed to whatever you want
    // Personally i think 1000 is too much
    // Try 800 or below, it seems not too much but it will make a difference

    new WOW().init();

    if ($(".counterUp").length > 0) {
      $(".counterUp").counterUp({
        delay: 10,
        time: 800,
      });
    }
  });
})(jQuery);
