jQuery(document).ready(function () {
  /* Toggle Menu */

  jQuery(".toggle-menu").click(function () {
    jQuery(this).toggleClass("active");
    jQuery("body").toggleClass("openMenu");
  });

  jQuery(".main_menu li").on("click", function () {
    jQuery(this).siblings("li").removeClass("active");
    jQuery(this).toggleClass("active");
  });

  if ($(window).width() > 768) {
    $(document).on("click", function (event) {
      if (!$(event.target).closest(".toggle-menu,.main_inner").length) {
        jQuery("body").removeClass("openMenu");
        jQuery(".toggle-menu").removeClass("active");
      }
    });
  }

  jQuery(".single_slider").slick({
    dots: false,
    autoplay: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    prevArrow: '<button class="slick-prev slick-arrow">Prev <i>/</i></button>',
    nextArrow: '<button class="slick-next slick-arrow">Next</button>',
  });

  jQuery(".blog_slider").slick({
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  jQuery(".badges-slider").slick({
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  });

  jQuery(".six_slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    focusOnSelect: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // responsive
  // if ($(window).width() < 767) {
  //   jQuery(".main_menu .sub-arrow").on("click", function (e) {
  //     jQuery("body").addClass("show-menu");
  //   });
  //   jQuery(".main_menu .sub-back").on("click", function (e) {
  //     jQuery("body").removeClass("show-menu");
  //   });
  // }

  /*Footer Accordian */

  if ($(window).width() > 767) {
    jQuery(".reach_section .item:first-child").addClass("current");
    jQuery(".reach_section .item").on("mouseenter", function () {
      jQuery(this).addClass("current").siblings(".item").removeClass("current");
    });
  }
  if (jQuery(window).width() < 767) {
    jQuery(".reach_section .item:first-child")
      .addClass("current")
      .find(".item_content")
      .slideToggle();
    jQuery(".reach_section .item").click(function () {
      jQuery(this).removeClass("current");
      jQuery(this).addClass("current").find(".item_content").slideToggle();
      jQuery(this)
        .siblings()
        .removeClass("current")
        .find(".item_content")
        .slideUp();
    });

    jQuery(".footeraddess-items li").on("click", function (e) {
      e.preventDefault();
      jQuery(this).toggleClass("current").children(".item-info").slideToggle();
      jQuery(this)
        .siblings("li")
        .removeClass("current")
        .children(".item-info")
        .slideUp();
    });
  }

var header = $(".page-header-wrapper");
var sections = $("[data-color-class]");
//   if ($("main").hasClass("ai-automation-page")) {
//     header.attr("data-color-update", "light");
// }
var sections = $("[data-color-class]");
  if ($("main").hasClass("light-page")) {
    header.attr("data-color-update", "light");
}
 
var sections = $("[data-color-class]");
  if ($("main").hasClass("dark-page")) {
    header.attr("data-color-update", "dark");
}

$(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();

    // Only for home-new page
    if ($("body").hasClass("home-new") && scrollPosition === 0) {
        header.attr("data-color-update", "dark");
        return;
    }
    if ($("main").hasClass("light-page") && scrollPosition === 0) {
        header.attr("data-color-update", "light");
        return;
    }
    if ($("main").hasClass("dark-page") && scrollPosition === 0) {
        header.attr("data-color-update", "dark");
        return;
    }

    // For all other pages when at top
    if (scrollPosition === 0) {
        return;
    }

    sections.each(function () {
        var sectionTop = $(this).offset().top;
        var sectionBottom = sectionTop + $(this).height();
        var sectionColorClass = $(this).data("color-class");

        var offsetToChangeClass = 5;

        if (
            sectionTop <= scrollPosition + offsetToChangeClass &&
            sectionBottom > scrollPosition + offsetToChangeClass
        ) {
            header.attr("data-color-update", sectionColorClass);
        }
    });
});

  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .on("click", function (event) {
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
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              var $target = $(target);
              $target.focus();

              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1");
                $target.focus();
              }
            }
          );
        }
      }
    });

  // if ($('.page-middle > [data-color-class="light"]:first-child').length > 0) {
  //   // Delay the initial update by one second (1000 milliseconds)
  //   setTimeout(function () {
  //     $("header").attr("data-color-update", "light");
  //   }, 300);

  //   // Listen for scroll events
  //   // $(window).scroll(function () {
  //   //   // Check if the user has scrolled at least 1px
  //   //   if ($(window).scrollTop() >= 1) {
  //   //     // Update the attribute to 'light' when scrolled
  //   //     $("header").attr("data-color-update", "light");
  //   //   }
  //   // });
  // }

  var header = $(".page-header-wrapper");
  var sections = $("[data-color-class]");

  // Get the first visible section
  var firstSection = $(".page-middle > [data-color-class]:first-child");

  if (firstSection.length > 0) {
    var initialColor = firstSection.data("color-class");

    // Delay the initial update by 300ms
    setTimeout(function () {
      $("header").attr("data-color-update", initialColor);
    }, 300);
  }

  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();

    if (scrollPosition === 0) {
      // Optional: You can reset or maintain
      return;
    }

    sections.each(function () {
      var sectionTop = $(this).offset().top;
      var sectionHeight = $(this).outerHeight();

      if (
        scrollPosition >= sectionTop - sectionHeight / 2 &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        var colorClass = $(this).data("color-class");
        $("header").attr("data-color-update", colorClass);
        return false; // break the loop
      }
    });
  });

  $(document).on("click", function (event) {
    if (!$(event.target).closest(".sticky_share_btn").length) {
      $(".sticky_share_btn").removeClass("active");
      jQuery(".sticky_share_btn .addtoany_shortcode").slideUp();
    }
  });

  jQuery(".sticky_share_btn .share-toggle").click(function () {
    jQuery(this).parents(".sticky_share_btn").toggleClass("active");
    jQuery(this).siblings(".addtoany_shortcode").slideToggle();
  });

  //  var btn = $('.sticky_share_btn');

  //   $(window).scroll(function() {
  //     if ($(window).scrollTop() > 50) {
  //       btn.addClass('down');
  //       btn.removeClass('up');
  //     } else {
  //       btn.removeClass('up');
  //       btn.removeClass('down');
  //     }
  //   });

  //   btn.on('click', function(e) {
  //     e.preventDefault();
  //     $('html, body').animate({scrollTop:0}, '300');
  //   });
});
/// ready end


/* Faq Section Start */
// $(document).ready(function(e) {
//   $('.accordion-list .accordion-item .acc-label').on('click', function(){
//      $(this).siblings('.accordion-data').slideToggle()
//      $(this).parent().siblings().children('.accordion-data').slideUp();
//      $(this).parent().siblings().children('.acc-label').removeClass('active');
//   })
// });
// $(document).ready(function () {
//     $('.accordion-list .accordion-item .acc-label').on('click', function () {
//         // Toggle the accordion content
//         $(this).siblings('.accordion-data').slideToggle();
//         $(this).parent().siblings().children('.accordion-data').slideUp();
//         $(this).parent().siblings().children('.acc-label').removeClass('active');
//         $(this).toggleClass('active');
//     });
// });
/* Faq section End */

// Sticky Header Changes
jQuery(function ($) {
  var lastScrollTop = 0;
  var $header = $(".page-header-wrapper");
  var $bodyHeader = $(".wp-theme-commercepundit");
  var headerHeight = $header.outerHeight();

  $(window).on("scroll", function () {
    var currentScroll = $(this).scrollTop();

    if (currentScroll > headerHeight) {
      if (currentScroll < lastScrollTop) {
        // Scrolling Up
        $header.addClass("sticky_header");
        $bodyHeader.addClass("body-sticky-header");
      } else {
        // Scrolling Down
        $header.removeClass("sticky_header");
        $bodyHeader.removeClass("body-sticky-header");
      }
    } else {
      $header.removeClass("sticky_header");
      $bodyHeader.removeClass("body-sticky-header");
    }

    lastScrollTop = currentScroll;
  });
});


jQuery(window).scroll(function () {
  // var $header_h = $(".page-header-wrapper").outerHeight();

  // if ($(this).scrollTop() >= $header_h) {
  //   $(".page-header-wrapper").addClass("sticky_header");
  //   $('body').addClass('headsticky');
  // } else {
  //   $(".page-header-wrapper").removeClass("sticky_header");
  //   $('body').removeClass('headsticky');
  // }

  // number animation
  var a = 0;
  var $staticsCta = jQuery(".section_specialize .item-right .item, .section_block .item");

  if ($staticsCta.length === 0) {
    return; // Exit the function if the element is not found
  }

  var oTop = $staticsCta.offset().top - window.innerHeight;
  if (a === 0 && jQuery(window).scrollTop() > oTop) {
    jQuery($staticsCta).find(".count").each(function () {
      var $this = jQuery(this),
        countTo = $this.attr("data-count");
      jQuery({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
});
jQuery(window).scroll(function () {

  // number animation  testimonials section
  var counted = 0;
  if (jQuery(".testimonials_section .increase_item").length > 0) {
    var oTop1 = jQuery(".testimonials_section .increase_item").offset().top - window.innerHeight;
    console.log('hshs');
    if (counted == 0 && jQuery(window).scrollTop() > oTop1) {
      jQuery(".testimonials_section")
        .find(".count")
        .each(function () {
          var jQuerythis = jQuery(this),
            countTo = jQuerythis.attr("data-count");
          jQuery({
            countNum: jQuerythis.text(),
          }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                jQuerythis.text(Math.floor(this.countNum));
              },
              complete: function () {
                jQuerythis.text(this.countNum);
                //alert('finished');
              },
            }
          );
        });
      counted = 1;
    }
  }
});

$(window)
  .scroll(function () {
    var bodyHeight = $("body").height();
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();
    $(".service_list .items .item").removeClass("active");
    $(".service_list .items .item").each(function () {
      var itemTop = $(this).offset().top;
      var itemHeight = $(this).outerHeight();
      var isInMiddle =
        itemTop <= scrollPosition + windowHeight / 2 &&
        itemTop + itemHeight > scrollPosition + windowHeight / 2;
      if (isInMiddle) {
        $(".service_list .items .item").removeClass("active");
        $(this).addClass("active");
      }
    });
  })
  .scroll();

// Set At Top 0 Left 0
// gsap.set(".cursorball", { xPercent: -50, yPercent: -50 });
// var CA = document.querySelector(".cursorball");
// window.addEventListener("mousemove", (e) => {
// 	gsap.to(CA, 0.5, { x: e.clientX, y: e.clientY });
// 	gsap.to(CA, { delay: 0.6, opacity: 1 });

// });



jQuery(document).ready(function () {


  jQuery(function () {
    jQuery(".weare_section .item:not(:first-of-type) .item-info").css("display", "none");
    jQuery(".weare_section .item:first-of-type").addClass("open");
    jQuery(".weare_section .item").click(function () {
      jQuery(".open").not(this).removeClass("open").find('.item-info').slideUp(300);
      jQuery(this).toggleClass("open").find('.item-info').slideToggle(300);
    });
  });

  // jQuery(function ($) {
  //   $(".weare_section .items .item .item-info").hide();
  //   $(".weare_section .items .item:first-of-type .item-info").show().parent().addClass("open");
  //   $(".weare_section .items .item").hover(
  //       function () {
  //           $(this).find('.item-info').stop(true, true).slideDown(300);
  //       },
  //       function () {
  //           if (!$(this).hasClass("open")) {
  //               $(this).find('.item-info').stop(true, true).slideUp(300);
  //           }
  //       }
  //   );
  // });




  //  Find Your Section  //
  jQuery('.findyour_section .positions-tab > div:first').addClass("current");
  jQuery('.findyour_section .positions-row:first .positions').addClass("current").show();
  jQuery('.findyour_section .positions-tab > div').click(function () {
    var tab_id = jQuery(this).attr('data-tab');
    jQuery('.findyour_section .positions-tab > div').removeClass('current');
    jQuery('.findyour_section .positions').removeClass('current').hide();
    jQuery(this).addClass('current');
    jQuery("#" + tab_id).addClass('current').slideToggle();
  });
  jQuery('.findyour_section .positions-row:first .positions-title').addClass("current");
  jQuery('.findyour_section .positions-title').click(function () {
    jQuery(this).toggleClass("current");
    jQuery(this).next().slideToggle().toggleClass("current");
  });


  //  Employee Section  //
  jQuery('.employee_section .positions-tab > div:first').addClass("current");
  jQuery('.employee_section .positions-row:first .positions').addClass("current").show();
  jQuery('.employee_section .positions-tab > div').click(function () {
    var tab_id = jQuery(this).attr('data-tab');
    jQuery('.employee_section .positions-tab > div').removeClass('current');
    jQuery('.employee_section .positions').removeClass('current').hide();
    jQuery(this).addClass('current');
    jQuery("#" + tab_id).addClass('current').slideToggle();
  });
  jQuery('.employee_section .positions-row:first .positions-title').addClass("current");
  jQuery('.employee_section .positions-title').click(function () {
    jQuery(this).toggleClass("current");
    jQuery(this).next().slideToggle().toggleClass("current");
  });


  // if(jQuery('.section_ourprocess .list').length){
  // jQuery('.section_ourprocess .list').slick({
  //   slidesToShow: 4,
  //   arrows: false,
  //   dots: false,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   infinite: true,
  //   focusOnSelect: true,
  //   pauseOnHover:false,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //       }
  //     },
  //       {
  //         breakpoint: 991,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //         }
  //       },
  //       {
  //         breakpoint: 575,
  //         settings: {  
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         }
  //       }
  //     ]
  //   });  
  // }

  jQuery('#FileAttachment').on('change', function () {
    var fullPath = $(this).val();
    var fileName = fullPath.split('\\').pop();
    jQuery('#fileuploadurl').val(fileName);
  });

  // New Email Marekting Page js Add
  if (jQuery('.ourproecess_email .list').length) {
    jQuery('.ourproecess_email .list').slick({
      slidesToShow: 3,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      focusOnSelect: true,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }
  if (jQuery('.email_partners .items').length) {
    jQuery('.email_partners .items').slick({
      slidesToShow: 3,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      focusOnSelect: true,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {

            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {

            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }
  if (jQuery('.section_ourprocess .list').length) {
    jQuery('.section_ourprocess .list').slick({
      slidesToShow: 4,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      focusOnSelect: true,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {

            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {

            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }
  $('#marketing-temp-remove').remove(); // Remove this code after add data

});




// New Mega Menu Code Start
// Overlay Function Code
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".main_menu");

  if (menu) {
    document.querySelectorAll(".main_menu li").forEach(li => {
      const link = li.querySelector("a");
      const hasSubMenu = li.querySelector(".mega_menu, .mega_menu"); // Check if submenu exists

      if (link) {
        const textClass = link.textContent.trim().toLowerCase().replace(/\s+/g, "-");
        li.classList.add(textClass); // Add text-based class to <li>
      }

      if (hasSubMenu) {
        li.addEventListener("mouseenter", () => {
          document.body.classList.add("menuoverlay");
        });

        li.addEventListener("mouseleave", () => {
          document.body.classList.remove("menuoverlay");
        });
      }
    });
  }
  initDesktopMegaMenuColumns();
});
function getMegaMenuColumnSizes(li) {
  // const title = li.querySelector(":scope > a[title]")?.getAttribute("title") || "";

  // /* Services uses CSS column-count — no fixed JS column split */
  // if (title === "Services" || li.classList.contains("services")) {
  //   return null;
  // }

  // if (
  //   title === "AI Solution" ||
  //   title === "AI Services" ||
  //   li.classList.contains("ai-solution") ||
  //   li.classList.contains("ai-services")
  // ) {
  //   return [1, 2, 1];
  // }

  return null;
}

function wrapMegaMenuColumns(menuLi, columnSizes) {
  if (window.innerWidth < 1025) {
    return;
  }

  const item = menuLi.querySelector(".mega_menu .mega_menu_item");
  if (!item || item.classList.contains("mega-menu-cols-ready")) {
    return;
  }

  const uls = Array.from(item.children).filter((el) => el.tagName === "UL");

  if (!uls.length) {
    return;
  }

  let index = 0;

  columnSizes.forEach((size) => {
    const col = document.createElement("div");
    col.className = "mega_menu_col";

    for (let i = 0; i < size && index < uls.length; i += 1) {
      col.appendChild(uls[index]);
      index += 1;
    }

    if (col.children.length) {
      item.appendChild(col);
    }
  });

  if (index > 0) {
    item.classList.add("mega-menu-cols-ready");
  }
}

function initDesktopMegaMenuColumns() {
  if (window.innerWidth < 1025) {
    return;
  }

  const desktopMenu = document.querySelector(".main_menu.menu-desktop");
  if (!desktopMenu) {
    return;
  }

  desktopMenu.querySelectorAll(".main_inner > ul > li").forEach((li) => {
    const columnSizes = getMegaMenuColumnSizes(li);
    if (columnSizes) {
      wrapMegaMenuColumns(li, columnSizes);
    }
  });
}
// Mobile Menu Code
jQuery(document).ready(function ($) {
  function isMegaMenuMobileView() {
    return window.innerWidth <= 1024;
  }

  function isTouchDesktopView() {
    return (
      window.innerWidth > 1024 &&
      window.matchMedia("(hover: none) and (pointer: coarse)").matches
    );
  }

  function toggleMobileMegaMenu($parentLi) {
    const $megaMenu = $parentLi.children(".mega_menu");
    if (!$megaMenu.length) {
      return false;
    }

    $(".menu-mobile .mega_menu").not($megaMenu).slideUp(400);
    $(".menu-mobile .main_inner > ul > li").not($parentLi).removeClass("active");

    if ($megaMenu.is(":visible")) {
      $megaMenu.slideUp(400);
      $parentLi.removeClass("active");
    } else {
      $megaMenu.slideDown(400);
      $parentLi.addClass("active");
    }

    return true;
  }

  function toggleTouchDesktopMegaMenu($parentLi) {
    const $megaMenu = $parentLi.children(".mega_menu");
    if (!$megaMenu.length) {
      return;
    }

    const isOpen = $parentLi.hasClass("mega-touch-open");

    $(".menu-desktop .main_inner > ul > li").removeClass("mega-touch-open");
    document.body.classList.remove("menuoverlay");

    if (!isOpen) {
      $parentLi.addClass("mega-touch-open");
      document.body.classList.add("menuoverlay");
    }
  }

  // Mobile only: open top-level mega menus from nav link or arrow
  $(document).on("click", ".menu-mobile .main_inner > ul > li > a", function (e) {
    if (!isMegaMenuMobileView()) {
      return;
    }

    const $parentLi = $(this).closest("li");
    if (!toggleMobileMegaMenu($parentLi)) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
  });

  $(document).on("click", ".menu-mobile .main_inner > ul > li > .sub-arrow", function (e) {
    if (!isMegaMenuMobileView()) {
      return;
    }

    const $parentLi = $(this).closest("li");
    if (!toggleMobileMegaMenu($parentLi)) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
  });

  // iPad / touch tablets in landscape: desktop nav only — tap to open
  $(document).on(
    "click",
    ".menu-desktop .main_inner > ul > li > a, .menu-desktop .main_inner > ul > li > .sub-arrow",
    function (e) {
      if (!isTouchDesktopView()) {
        return;
      }

      const $parentLi = $(this).closest("li");
      if (!$parentLi.children(".mega_menu").length) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      toggleTouchDesktopMegaMenu($parentLi);
    }
  );

  $(document).on("click", function (e) {
    if (!isTouchDesktopView()) {
      return;
    }

    if (!$(e.target).closest(".menu-desktop .main_inner > ul > li").length) {
      $(".menu-desktop .main_inner > ul > li").removeClass("mega-touch-open");
      document.body.classList.remove("menuoverlay");
    }
  });

  // Mobile only: nested sub menus inside mega menus (Agency, Case Studies, etc.)
  // Direct bind required — .mega_menu stopPropagation below blocks document delegation
  $(".menu-mobile .mega_menu .sub-arrow").on("click", function (e) {
    if (!isMegaMenuMobileView()) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    const $itemLi = $(this).parent("li");
    const $subMenu = $itemLi.next(".sub_menu");
    const $topNavLi = $(this).closest(".menu-mobile .main_inner > ul > li");

    if ($topNavLi.hasClass("agency")) {
      $subMenu.show();
      return;
    }

    $(this).closest(".mega_menu").find(".sub_menu").not($subMenu).slideUp(400);
    $(this).closest(".mega_menu").find(".sub-arrow").not(this).removeClass("rotated");
    $subMenu.stop(true, true).slideToggle(400);
    $(this).toggleClass("rotated");
    $itemLi.toggleClass("active");
  });

  // Stop clicks inside panels from closing the hamburger menu (not on arrows — handled above)
  $(".menu-mobile .mega_menu, .menu-mobile .sub_menu").on("click", function (e) {
    if (!$(e.target).closest(".sub-arrow").length) {
      e.stopPropagation();
    }
  });

  // Add text-based class to mobile nav items only
  $(".menu-mobile .main_inner > ul > li > a").each(function () {
    let text = $(this).text().trim().toLowerCase().replace(/\s+/g, "-");
    $(this).closest("li").addClass(text);
  });

  // Agency sub menus always open on mobile
  $(".menu-mobile .agency .sub_menu").show();
});
// New Mega Menu Code End


function calculateReviews() {
  let currentRating = document.getElementById("currentRating");
  let currentReviews = document.getElementById("currentReviews");
  let desiredRating = document.getElementById("desiredRating");
  let resultElement = document.getElementById("result");

  let currentRatingValue = parseFloat(currentRating.value);
  let currentReviewsValue = parseInt(currentReviews.value);
  let desiredRatingValue = parseFloat(desiredRating.value);

  // Remove previous validation messages
  document.querySelectorAll(".error-message").forEach(el => el.remove());
  document.querySelectorAll(".custom-error").forEach(field => field.classList.remove("custom-error"));

  let isValid = true;

  // Function to show error messages below the field
  function showError(field, message) {
    let errorSpan = document.createElement("span");
    errorSpan.className = "error-message";
    errorSpan.style.color = "red";
    errorSpan.style.fontSize = "12px";
    errorSpan.innerText = message;
    field.classList.add("custom-error");
    field.parentNode.appendChild(errorSpan);
  }

  // Validation rules
  if (!currentRating.value) {
    showError(currentRating, "Please enter your current rating.");
    isValid = false;
  } else if (currentRatingValue > 4.99) {
    showError(currentRating, "Please enter a value less than or equal to 4.99.");
    isValid = false;
  } else if (currentRatingValue < 1) {
    showError(currentRating, "Please enter a value greater than or equal to 1.");
    isValid = false;
  }

  if (!currentReviews.value) {
    showError(currentReviews, "Please enter your current number of reviews.");
    isValid = false;
  } else if (currentReviewsValue < 0) {
    showError(currentReviews, "Number of reviews cannot be negative.");
    isValid = false;
  }

  if (!desiredRating.value) {
    showError(desiredRating, "Please enter your desired rating.");
    isValid = false;
  } else if (desiredRatingValue > 4.99) {
    showError(desiredRating, "Please enter a value less than or equal to 4.99.");
    isValid = false;
  } else if (desiredRatingValue < 1) {
    showError(desiredRating, "Desired rating must be at least 1.");
    isValid = false;
  } else if (desiredRatingValue <= currentRatingValue) {
    showError(desiredRating, `Value must be greater than your current Google rating (${currentRatingValue}).`);
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  // Calculate required reviews
  let sumOfCurrentScores = currentRatingValue * currentReviewsValue;
  let requiredReviews = Math.ceil(
    (desiredRatingValue * (currentReviewsValue + 1) - sumOfCurrentScores) / (5 - desiredRatingValue)
  );

  if (requiredReviews < 0 || isNaN(requiredReviews)) {
    resultElement.innerHTML = "Desired rating is already achieved!";
  } else {
    resultElement.innerHTML = `We need <b>${requiredReviews}</b> more <strong>5-star</strong> reviews to achieve a <strong>${desiredRatingValue}</strong>-star rating.`;
  }

  // Populate CF7 hidden fields
  document.getElementById("current_google_rating_pre").value = currentRatingValue;
  document.getElementById("current_number_of_google_reviews_pre").value = currentReviewsValue;
  document.getElementById("desired_google_rating_pre").value = desiredRatingValue;
  document.getElementById("required_google_reviews_pre").value = requiredReviews;

  // Hide calculator form and show schedule form
  document.querySelector(".Calculator-wrap").style.display = "none";
  document.querySelector(".schedule-wrap").style.display = "block";
}

// Google Review Calculator Js Code Here 
document.addEventListener("DOMContentLoaded", function () {
  const backBtn = document.getElementById("backto-calculator");
  if (backBtn) {
    backBtn.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Reset form fields with checks
      const currentRating = document.getElementById("currentRating");
      const currentReviews = document.getElementById("currentReviews");
      const desiredRating = document.getElementById("desiredRating");
      const result = document.getElementById("result");

      if (currentRating) currentRating.value = "";
      if (currentReviews) currentReviews.value = "";
      if (desiredRating) desiredRating.value = "";
      if (result) result.innerHTML = "";

      // Remove validation errors
      document.querySelectorAll(".error-message").forEach(el => el.remove());
      document.querySelectorAll(".custom-error").forEach(el => el.classList.remove("custom-error"));

      // Toggle visibility
      const calcWrap = document.querySelector(".Calculator-wrap");
      const schedWrap = document.querySelector(".schedule-wrap");
      if (calcWrap) calcWrap.style.display = "block";
      if (schedWrap) schedWrap.style.display = "none";
    });
  }
});


// testimonial new design page video cards
document.addEventListener('DOMContentLoaded', function () {

  const videoContainers = document.querySelectorAll(
    '.testimonial-style-new .testimonial-video-container, .testiminial-client-logo'
  );

  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const closeModal = document.querySelector('.close-modal');

  if (!modal || !modalVideo || videoContainers.length === 0) {
    return;
  }

  videoContainers.forEach(container => {
    container.addEventListener('click', function () {
      const videoUrl = this.getAttribute('data-video');
      if (!videoUrl) return;

      let embedUrl = '';

      if (videoUrl.includes('youtube.com/watch?v=')) {
        const videoId = videoUrl.split('v=')[1].split('&')[0];
        embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      } else if (videoUrl.includes('youtu.be/')) {
        const videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
        embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      } else {
        embedUrl = videoUrl;
      }

      modalVideo.src = embedUrl;
      modal.style.display = 'flex';
    });
  });

  if (closeModal) {
    closeModal.addEventListener('click', function () {
      modalVideo.src = '';
      modal.style.display = 'none';
    });
  }

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modalVideo.src = '';
      modal.style.display = 'none';
    }
  });
});



//  Home Page Trusted Landing Brands Section Slider on Mobile with resize function
$(document).ready(function () {
  function initSlickForMobile() {
    if ($(window).width() < 991) {
      if (!$('.trusted_section .items').hasClass('slick-initialized')) {
        $('.trusted_section .items').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          dots: false,
          infinite: true,
          responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3
              }
            }
          ]
        });
      }
    } else {
      if ($('.trusted_section .items').hasClass('slick-initialized')) {
        $('.trusted_section .items').slick('unslick');
      }
    }
  }
  // Initialize on load
  initSlickForMobile();
  // Re-initialize on window resize
  $(window).resize(function () {
    initSlickForMobile();
  });
  /** Case Study Detail Page Mobile BG Color Codes **/
  // if($("#mobile-banner-overlay").length > 0){
  //   console.log('abcd123');
  //   var overlay = $("#mobile-banner-overlay");
  //   var bgColor = overlay.data('bgcolor');
  //   if (window.innerWidth >= 200 && window.innerWidth <= 767) {
  //     $(overlay).css('background-color', bgColor);
  //   }else{
  //     overlay.style.removeProperty("background-color");
  //   }
  // }
});




//why choose magento from service detail page slider from content block  with resize function and resolved issue of blink
jQuery(window).on('load', function () {
  var $slider = jQuery('.cp-choose-slick-carousel');
  var $container = jQuery('.why-magento-section .magento-three-cards');
  var itemCount = $slider.find('.why-magento-feature-card').length;
  var isMobile = window.innerWidth <= 990;
  var isSliderInitialized = false;
  var resizeTimeout;

  if ($slider.length > 0) {
    checkAndInitSlider(isMobile);
  }

  function checkAndInitSlider(isMobileCheck) {
    if (isMobileCheck || itemCount >= 4) {
      if (!isSliderInitialized) {
        initSlider();
      }
    } else {
      if (isSliderInitialized) {
        $slider.slick('unslick');
        isSliderInitialized = false;
      }
      $container.removeClass('magento-slider-desktop');
      $container.find('.no-slider').css('display', 'flex');
    }
  }

  function initSlider() {
    var images = $slider.find('img');
    var totalImages = images.length;
    var imagesLoaded = 0;

    if (totalImages === 0) {
      setupSlick();
    } else {
      images.each(function () {
        if (this.complete) {
          imageLoaded();
        } else {
          jQuery(this).on('load error', imageLoaded);
        }
      });
    }

    function imageLoaded() {
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
        setupSlick();
      }
    }
  }

  function setupSlick() {
    if ($slider.hasClass('slick-initialized')) {
      $slider.slick('unslick');
    }

    $slider.slick({
      slidesToShow: 3.2,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 991,
          settings: { slidesToShow: 2.2 }
        },
        {
          breakpoint: 640,
          settings: { slidesToShow: 1.2 }
        }
      ]
    });

    isSliderInitialized = true;

    setTimeout(function () {
      $slider.slick('setPosition');
      $slider.slick('refresh');
    }, 150);

    if (!isMobile && itemCount >= 4) {
      $container.addClass('magento-slider-desktop');
    }
  }

  // Debounced resize/orientation change
  jQuery(window).on('resize orientationchange', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      var newIsMobile = window.innerWidth <= 990;

      // Only proceed if the layout condition actually changes
      if (newIsMobile !== isMobile) {
        isMobile = newIsMobile;
        checkAndInitSlider(isMobile);
      }
    }, 300);
  });
});

// our process slider with  resize function and resolved blink issue
jQuery(window).on('load', function () {
  var $slider = jQuery('.cp-our-process-slick-carousel');
  var $container = jQuery('.our-process .magento-three-cards');
  var itemCount = $slider.find('.step').length;
  var isMobile = window.innerWidth <= 767;
  var isSliderInitialized = false;
  var resizeTimeout;

  if ($slider.length > 0) {
    checkAndInitSlider();
  }

  // Debounced resize/orientation handler
  jQuery(window).on('resize orientationchange', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      var newIsMobile = window.innerWidth <= 767;

      // Only proceed if screen layout category changes
      if (newIsMobile !== isMobile) {
        isMobile = newIsMobile;
        checkAndInitSlider();
      }
    }, 300);
  });

  function checkAndInitSlider() {
    var screenWidth = window.innerWidth;

    if ((screenWidth > 990 && itemCount > 5) || screenWidth <= 990) {
      if (!isSliderInitialized) {
        initSlider();
      }
    } else {
      if (isSliderInitialized) {
        $slider.slick('unslick');
        isSliderInitialized = false;
      }
      $container.removeClass('process-cp-slider-desktop');
      $container.find('.no-slider').css('display', 'flex');
    }
  }

  function initSlider() {
    var images = $slider.find('img');
    var totalImages = images.length;
    var imagesLoaded = 0;

    if (totalImages === 0) {
      setupSlick();
    } else {
      images.each(function () {
        if (this.complete) {
          imageLoaded();
        } else {
          jQuery(this).on('load error', imageLoaded);
        }
      });
    }

    function imageLoaded() {
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
        setupSlick();
      }
    }
  }

  function setupSlick() {
    setTimeout(function () {
      $slider.slick({
        slidesToShow: 5.2,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: false,
        responsive: [
          {
            breakpoint: 1201,
            settings: {
              slidesToShow: 4.2
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3.2
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 3.2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2.1
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1.2
            }
          }
        ]
      });

      setTimeout(function () {
        $slider.slick('setPosition');
        $slider.slick('refresh');
      }, 150);

      isSliderInitialized = true;

      if (!isMobile && itemCount > 5) {
        $container.addClass('process-cp-slider-desktop');
      } else {
        $container.removeClass('process-cp-slider-desktop');
      }
    }, 100);
  }
});

//Key Facts about us resize function used and not cause blink issue
jQuery(window).on('load', function () {
  var $slider = jQuery('.cp-about-fact-slick-carousel');
  var $container = jQuery('.about_fact_section .magento-three-cards');
  var itemCount = $slider.find('.fact-item').length;
  var isMobile = window.innerWidth <= 767;
  var isSliderInitialized = false;

  // Resize and orientationchange fix with debounce
  var resizeTimeout;
  jQuery(window).on('resize orientationchange', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      requestAnimationFrame(() => {
        let newIsMobile = window.innerWidth <= 767;
        if (newIsMobile !== isMobile) {
          isMobile = newIsMobile;
          initOrDestroySlider();
        }
      });
    }, 300);
  });

  // Initial setup
  initOrDestroySlider();

  function initOrDestroySlider() {
    if ($slider.length === 0) return;

    if (isMobile || itemCount >= 5) {
      if (!isSliderInitialized) {
        initSlider();
      }
    } else {
      if (isSliderInitialized) {
        $slider.slick('unslick');
        isSliderInitialized = false;
      }
      $container.removeClass('about-facts-cp-slider-desktop');
      $container.find('.no-slider').css('display', 'flex');
    }
  }

  function initSlider() {
    var images = $slider.find('img');
    var totalImages = images.length;
    var imagesLoaded = 0;

    if (totalImages === 0) {
      setupSlick();
    } else {
      images.each(function () {
        if (this.complete) {
          imageLoaded();
        } else {
          jQuery(this).on('load error', imageLoaded);
        }
      });
    }

    function imageLoaded() {
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
        setupSlick();
      }
    }
  }

  function setupSlick() {
    if ($slider.hasClass('slick-initialized')) {
      $slider.slick('unslick'); // Just in case
    }

    $slider.slick({
      slidesToShow: 4.2,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1.2
          }
        },
      ]
    });

    isSliderInitialized = true;

    setTimeout(function () {
      $slider.slick('refresh');
      $slider.slick('setPosition');
    }, 150);

    if (!isMobile && itemCount >= 5) {
      $container.addClass('about-facts-cp-slider-desktop');
    } else {
      $container.removeClass('about-facts-cp-slider-desktop');
    }
  }
});

// Testimonial page, Our Work Process From content block and Culture page No Counting Code
document.addEventListener("DOMContentLoaded", () => {
  const statNumbers = document.querySelectorAll('.testimonial-stat-number, .count-up');

  statNumbers.forEach(statNumber => {
    const rawTarget = statNumber.getAttribute('data-target')?.trim() || statNumber.getAttribute('data-count')?.trim();
    if (!rawTarget) return;

    const targetSpan = statNumber.querySelector('span') || statNumber;

    const numericMatch = rawTarget.match(/(\d+(\.\d+)?)/g);
    if (!numericMatch) return;

    const numbers = numericMatch.map(num => parseFloat(num));
    const duration = 6000;
    const step = 10;

    if (numbers.length === 2 && rawTarget.includes('/')) {
      const [fixed, target] = numbers;
      let current = 0;
      const increment = target / (duration / step);

      const counter = setInterval(() => {
        current += increment;
        const display = current >= target ? Math.round(target) : Math.floor(current);
        targetSpan.textContent = `${fixed}/${display}`;
        if (current >= target) clearInterval(counter);
      }, step);
    }

    else if (numbers.length === 1) {
      const target = numbers[0];
      let current = 0;
      const increment = target / (duration / step);

      const prefix = rawTarget.match(/^[^\d]+/)?.[0] || '';
      const suffix = statNumber.getAttribute('data-sign') || rawTarget.match(/[^\d]+$/)?.[0] || '';

      const counter = setInterval(() => {
        current += increment;
        const display = current >= target ? Math.round(target) : Math.floor(current);
        targetSpan.textContent = `${prefix}${display}${suffix}`;
        if (current >= target) clearInterval(counter);
      }, step);
    }
  });
});

// Save The Planet Code
$(document).ready(function () {
  const $container = $('#planet-scrollContainer');
  const $row = $('#planetscrollRow');
  if ($container.length && $row.length) {
    // Avoid double clone
    if ($row.children().length > 0 && $row.children().length < 100) {
      $row.children().clone().appendTo($row);
    }
    let scrollSpeed = 1;
    let scrollLeft = 0;
    let paused = false;
    function autoScroll() {
      if (!paused) {
        scrollLeft += scrollSpeed;
        $container.scrollLeft(scrollLeft);

        if (scrollLeft >= $row[0].scrollWidth / 2) {
          scrollLeft = 0;
          $container.scrollLeft(0);
        }
      }
      requestAnimationFrame(autoScroll);
    }
    $container.on('mouseenter', function () {
      paused = true;
    });
    $container.on('mouseleave', function () {
      paused = false;
    });
    autoScroll();
  }
});

// Culture page js for slider of Amazing work section
document.addEventListener('DOMContentLoaded', () => {

  const root = document.querySelector('.amazing-work-place');

  if (!root) return;

  const track = root.querySelector('.cp-carousel-track');
  const items = root.querySelectorAll('.cp-carousel-item');

  if (!track || !items.length) return;

  let index = 0, visible = 3, width = 33.333, paused = false;
  let max = items.length - visible;

  function update() {
    track.style.transform = `translateX(-${index * width}%)`;
  }

  function resize() {
    const w = window.innerWidth;

    if (w <= 680) {
      visible = 1;
      width = 100;
    } else if (w <= 768) {
      visible = 2;
      width = 50;
    } else {
      visible = 3;
      width = 33.333;
    }

    max = items.length - visible;
    index = Math.min(index, max);
    update();
  }

  function next() { index = (index + 1) > max ? 0 : index + 1; update(); }
  function prev() { index = (index - 1) < 0 ? max : index - 1; update(); }

  let startX = 0, currentX = 0, dragging = false;

  function swipeEnd() {
    const dx = startX - currentX;

    if (Math.abs(dx) > 50) {
      dx > 0 ? next() : prev();
    } else {
      update();
    }

    paused = false;
  }

  track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    paused = true;
  });

  track.addEventListener('touchmove', e => {
    currentX = e.touches[0].clientX;
  });

  track.addEventListener('touchend', swipeEnd);

  track.addEventListener('mousedown', e => {
    e.preventDefault();
    startX = e.clientX;
    dragging = true;
    paused = true;
  });

  document.addEventListener('mouseup', () => {
    if (dragging) {
      dragging = false;
      swipeEnd();
    }
  });

  document.addEventListener('mousemove', e => {
    if (dragging) {
      currentX = e.clientX;
      const dragOffset = ((startX - currentX) / root.offsetWidth) * width;
      track.style.transform = `translateX(-${index * width + dragOffset}%)`;
    }
  });

  root.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    paused = false;
  });

  track.addEventListener('mouseenter', () => paused = true);
  track.addEventListener('mouseleave', () => paused = false);
  document.addEventListener('visibilitychange', () => paused = document.hidden);

  setInterval(() => { if (!paused) next(); }, 3000);

  root.setAttribute('tabindex', '0');
  resize();
  window.addEventListener('resize', resize);
});

// Culture page for 2nd section popup
function playCultureVideo(button) {
  const wrapper = button.closest('.cp-culture-video-wrapper');
  const iframe = wrapper.querySelector('.cp-culture-iframe');
  const placeholder = wrapper.querySelector('.cp-culture-placeholder');
  const overlay = wrapper.querySelector('.cp-culture-overlay');

  if (!iframe.src) {
    iframe.src = iframe.dataset.src;
  }

  iframe.style.display = 'block';
  placeholder.style.display = 'none';
  overlay.style.display = 'none';

  if (iframe.src.includes('autoplay=0')) {
    iframe.src = iframe.src.replace('autoplay=0', 'autoplay=1');
  }
}

// Culture page for collab section
const modal = document.getElementById('collab-videoModal');
const collabvideoFrame = document.getElementById('collab-videoFrame');

function openModal(element) {
  const videoUrl = element.getAttribute('data-video-url');
  const thumbnailUrl = element.getAttribute('data-thumbnail');

  // Convert YouTube URL to embed format
  let embedUrl = '';
  if (videoUrl.includes('youtu.be')) {
    const videoId = videoUrl.split('/').pop();
    embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  } else if (videoUrl.includes('youtube.com/watch')) {
    const videoId = videoUrl.split('v=')[1].split('&')[0];
    embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }

  modal.style.display = 'flex';
  collabvideoFrame.src = embedUrl;
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
  modal.style.display = 'none';
  collabvideoFrame.src = ''; // Stop video playback
  document.body.style.overflow = 'auto'; // Restore scrolling
}

document.addEventListener('DOMContentLoaded', function () {
  const videoItems = document.querySelectorAll('.collab-video-item');
  videoItems.forEach(item => {
    const thumbnailUrl = item.getAttribute('data-thumbnail');
    const thumbnailDiv = item.querySelector('.collab-video-thumbnail');
    if (thumbnailUrl) {
      thumbnailDiv.style.backgroundImage = `url('${thumbnailUrl}')`;
    }
  });
});

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// ====== Case Study Detail Page Js Code 
// case impact with  resize function and resolved blink issue
jQuery(window).on('load', function () {
  var $slider = jQuery('.case-impact-slick-carousel');
  var $container = jQuery('.case-impact-process .magento-three-cards');
  var itemCount = $slider.find('.case-impact-step').length;
  var isSliderInitialized = false;
  var resizeTimeout;

  if ($slider.length > 0) {
    checkAndInitSlider();
  }

  // Recheck on resize or orientation change
  jQuery(window).on('resize orientationchange', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(checkAndInitSlider, 300);
  });

  function checkAndInitSlider() {
    var screenWidth = window.innerWidth;

    // Destroy if already initialized
    if (isSliderInitialized) {
      $slider.slick('unslick');
      isSliderInitialized = false;
    }

    if ((screenWidth > 1024 && itemCount > 5) || screenWidth <= 1024) {
      initSlider();
    } else {
      $container.removeClass('case-impact-process-slider-desktop');
      $container.find('.no-slider').css('display', 'flex');
    }
  }

  function initSlider() {
    const images = $slider.find('img');
    let total = images.length, loaded = 0;

    if (total === 0) {
      setupSlick();
    } else {
      images.each(function () {
        if (this.complete) {
          countLoaded();
        } else {
          jQuery(this).on('load error', countLoaded);
        }
      });
    }

    function countLoaded() {
      loaded++;
      if (loaded === total) {
        setupSlick();
      }
    }
  }

  function setupSlick() {
    $slider.slick({
      slidesToShow: 5.2,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      dots: false,
      responsive: [
        { breakpoint: 1201, settings: { slidesToShow: 4.2 } },
        { breakpoint: 991, settings: { slidesToShow: 3.2 } },
        { breakpoint: 769, settings: { slidesToShow: 3.2 } },
        { breakpoint: 767, settings: { slidesToShow: 2.1 } },
        { breakpoint: 640, settings: { slidesToShow: 1.2 } }
      ]
    });

    // Fix flicker and refresh positioning
    requestAnimationFrame(() => {
      $slider.slick('setPosition');
      $slider.slick('refresh');
      $container.addClass('slick-ready');

      if (window.innerWidth > 1024 && itemCount > 5) {
        $container.addClass('case-impact-process-slider-desktop');
      } else {
        $container.removeClass('case-impact-process-slider-desktop');
      }

      isSliderInitialized = true;
    });
  }
});

// case study goals and objective resize and resolved blink issue
jQuery(window).on('load', function () {
  var $slider = jQuery('.goals-obj-slick-carousel');
  var $container = jQuery('.goals-obj-process .case-three-cards');
  var itemCount = $slider.find('.goal-step').length;
  var isSliderInitialized = false;
  var resizeTimeout;

  if ($slider.length > 0) {
    checkAndInitSlider();
  }

  // Handle window resize and orientation change
  jQuery(window).on('resize orientationchange', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(checkAndInitSlider, 300);
  });

  function checkAndInitSlider() {
    var screenWidth = window.innerWidth;

    if (isSliderInitialized) {
      $slider.slick('unslick');
      isSliderInitialized = false;
    }

    if ((screenWidth > 990 && itemCount > 4) || screenWidth <= 990) {
      initSlider();
    } else {
      $container.removeClass('goals-obj-process-slider-desktop');
      $container.find('.no-slider').css('display', 'flex');
    }
  }

  function initSlider() {
    const images = $slider.find('img');
    let loaded = 0, total = images.length;

    if (total === 0) {
      setupSlick();
    } else {
      images.each(function () {
        if (this.complete) {
          countImage();
        } else {
          jQuery(this).on('load error', countImage);
        }
      });
    }

    function countImage() {
      loaded++;
      if (loaded === total) setupSlick();
    }
  }

  function setupSlick() {
    $slider.slick({
      slidesToShow: 4.2,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      dots: false,
      responsive: [
        { breakpoint: 1201, settings: { slidesToShow: 4.2 } },
        { breakpoint: 991, settings: { slidesToShow: 3.2 } },
        { breakpoint: 769, settings: { slidesToShow: 3.2 } },
        { breakpoint: 767, settings: { slidesToShow: 2.1 } },
        { breakpoint: 640, settings: { slidesToShow: 1.2 } }
      ]
    });

    setTimeout(() => {
      $slider.slick('setPosition');
      $slider.slick('refresh');
      $container.addClass('slick-ready');

      if (window.innerWidth > 990 && itemCount >= 5) {
        $container.addClass('goals-obj-process-slider-desktop');
      } else {
        $container.removeClass('goals-obj-process-slider-desktop');
      }

      isSliderInitialized = true;
    }, 200);
  }
});


// For Testimonial BG Color Changes js
function applyColorClass(sectionSelector, bodyClassToCheck, lightValue = 'light', darkValue = 'dark') {
  const body = document.body;
  const section = document.querySelector(sectionSelector);
  if (section) {
    const colorClass = body.classList.contains(bodyClassToCheck) ? lightValue : darkValue;
    section.setAttribute('data-color-class', colorClass);
  }
}
document.addEventListener('DOMContentLoaded', function () {
  applyColorClass('.testimonial-section', 'testimonial-white-bg');
  applyColorClass('.case-study-detail-banner', 'cb-station-bg-mobile');
});


// AI Voice Page js Start

// Bherubhai Section Code
document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".ai-features-section .tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const section = tab.closest(".ai-features-section");
      if (!section) return;

      section.querySelectorAll(".tab").forEach((t) =>
        t.classList.remove("active")
      );
      tab.classList.add("active");

      section.querySelectorAll(".tab-content").forEach(
        (content) => (content.style.display = "none")
      );

      const tabId = tab.getAttribute("data-tab");
      const content = section.querySelector(`#${tabId}`);
      if (content) content.style.display = "block";
    });
  });

  // ---------- Amazing work slider ----------
  const root = document.querySelector(".amazing-work-place");

  if (!root) return;

  const track = root.querySelector(".cp-carousel-track");
  const items = root.querySelectorAll(".cp-carousel-item");

  if (!track || !items.length) return;

  let index = 0,
    visible = 3,
    width = 33.333,
    paused = false;

  let max = items.length - visible;

  function update() {
    track.style.transform = `translateX(-${index * width}%)`;
  }

  function resize() {
    const w = window.innerWidth;

    if (w <= 680) {
      visible = 1;
      width = 100;
    } else if (w <= 768) {
      visible = 2;
      width = 50;
    } else {
      visible = 3;
      width = 33.333;
    }

    max = items.length - visible;
    index = Math.min(index, max);
    update();
  }

  function next() {
    index = index + 1 > max ? 0 : index + 1;
    update();
  }

  function prev() {
    index = index - 1 < 0 ? max : index - 1;
    update();
  }

  let startX = 0,
    currentX = 0,
    dragging = false;

  function swipeEnd() {
    const dx = startX - currentX;
    if (Math.abs(dx) > 50) {
      dx > 0 ? next() : prev();
    } else {
      update();
    }
    paused = false;
  }

  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    paused = true;
  });

  track.addEventListener("touchmove", (e) => {
    currentX = e.touches[0].clientX;
  });

  track.addEventListener("touchend", swipeEnd);

  track.addEventListener("mousedown", (e) => {
    e.preventDefault();
    startX = e.clientX;
    dragging = true;
    paused = true;
  });

  document.addEventListener("mouseup", () => {
    if (dragging) {
      dragging = false;
      swipeEnd();
    }
  });

  document.addEventListener("mousemove", (e) => {
    if (dragging) {
      currentX = e.clientX;
      const dragOffset = ((startX - currentX) / root.offsetWidth) * width;
      track.style.transform = `translateX(-${index * width + dragOffset}%)`;
    }
  });

  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    paused = false;
  });

  track.addEventListener("mouseenter", () => (paused = true));
  track.addEventListener("mouseleave", () => (paused = false));
  document.addEventListener(
    "visibilitychange",
    () => (paused = document.hidden)
  );

  setInterval(() => {
    if (!paused) next();
  }, 3000);

  root.setAttribute("tabindex", "0");
  resize();
  window.addEventListener("resize", resize);
});


//  Pintu Section code
document.querySelectorAll(".case_s").forEach(section => {
  const tabs = section.querySelectorAll(".tab");
  const contents = section.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      const content = section.querySelector(`#${tab.getAttribute("data-tab")}`);
      content.classList.add("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".case_s");

  if (!container) return; // Don't run if .case_s doesn't exist

  function isMobile() {
    return window.innerWidth <= 1024;
  }

  function moveTabContentsToMobileLayout() {
    const tabs = container.querySelectorAll(".tab");
    tabs.forEach(tab => {
      const tabName = tab.getAttribute("data-tab");
      const content = container.querySelector(`#${tabName}`);
      if (content && content.previousElementSibling !== tab) {
        tab.insertAdjacentElement("afterend", content);
      }
    });
  }

  function moveTabContentsToDesktopLayout() {
    const tabsWrapper = container.querySelector(".tabs");
    const contents = container.querySelectorAll(".tab-content");

    // Create desktop content wrapper if not exists
    let wrapper = container.querySelector(".desktop-content-wrapper");
    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.classList.add("desktop-content-wrapper");
      container.appendChild(wrapper);
    }

    contents.forEach(content => {
      wrapper.appendChild(content);
    });
  }

  function setupTabs() {
    const tabs = container.querySelectorAll(".tab");
    const contents = container.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const targetId = tab.getAttribute("data-tab");

        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        container.querySelector(`#${targetId}`).classList.add("active");
      });
    });
  }

  let currentMobileMode = isMobile();

  function handleResponsiveLayout() {
    const nowMobile = isMobile();
    if (nowMobile !== currentMobileMode) {
      currentMobileMode = nowMobile;

      if (nowMobile) {
        moveTabContentsToMobileLayout();
      } else {
        moveTabContentsToDesktopLayout();
      }
    }
  }

  // Initial setup
  setupTabs();
  handleResponsiveLayout();

  window.addEventListener("resize", handleResponsiveLayout);
});
//  Pathikbhai Section Code
$(document).ready(function () {
  const $calculator = $('.price-calculator');

  function format(n) {
    return n.toLocaleString();
  }

  function updateSliderFill(slider) {
    const value = slider.val();
    const min = slider.attr('min');
    const max = slider.attr('max');
    const percentage = ((value - min) / (max - min)) * 100;

    const gradient = `linear-gradient(to right, #CD554B 0%, #CD554B ${percentage}%, #ccc ${percentage}%, #ccc 100%)`;
    slider.css('background', gradient);
  }

  function updateValues() {
    const calls = parseInt($calculator.find('#calls').val());
    const agents = parseInt($calculator.find('#agents').val());
    const duration = parseInt($calculator.find('#duration').val());

    $calculator.find('#callCount, #callCount1').text(format(calls));
    $calculator.find('#agentCount, #agentCount1').text(agents);
    $calculator.find('#durationCount, #durationCount1').text(duration);

    const aiCost = 249;
    const humanCost = Math.round((calls * 0.5) + (agents * 1000));
    const savings = humanCost - aiCost;
    const annualSavings = savings * 12;
    const roi = Math.round((savings / aiCost) * 100);

    $calculator.find('#roi').text(`${roi}%`);
    $calculator.find('#aiCost').text(`$${format(aiCost)}`);
    $calculator.find('#humanCost').text(`$${format(humanCost)}`);
    $calculator.find('#savings, #resultSavings').text(`$${format(savings)}`);
    $calculator.find('#annualSavings').text(`$${format(annualSavings)}`);

    updateSliderFill($calculator.find('#calls'));
    updateSliderFill($calculator.find('#agents'));
    updateSliderFill($calculator.find('#duration'));
  }

  $calculator.find('#calls, #agents, #duration').on('input', updateValues);

  updateValues();
});
// /* change vedika start */
// work page js for when select any value from dropdown then dynamic class add and change that css
document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = [
    {
      itemSelector: '.selectbox .item',
      groupSelector: '.selectbox-group',
      labelSelector: '.selectlabel',
      defaultText: 'Select Technology'
    },
    {
      itemSelector: '.selectbox-second .item',
      groupSelector: '.selectbox-group-second',
      labelSelector: '.selectlabel-second',
      defaultText: 'Select Industries'
    },
    {
      itemSelector: '.selectbox-third .item',
      groupSelector: '.selectbox-group-third',
      labelSelector: '.selectlabel-third',
      defaultText: 'Select Platform'
    }
  ];

  dropdowns.forEach(({ itemSelector, groupSelector, labelSelector, defaultText }) => {
    document.querySelectorAll(itemSelector).forEach(item => {
      item.addEventListener('click', function () {
        const group = this.closest(groupSelector);
        const label = group.querySelector(labelSelector);

        if (this.textContent.trim() !== defaultText) {
          label.classList.add('has-value');
        } else {
          label.classList.remove('has-value');
        }

        label.textContent = this.textContent.trim();
      });
    });
  });
});
// /* change vedika start */

//Contact page no counting js
jQuery(window).on("load", function () {
  var $staticsCta = jQuery(".stats .stat");
  if ($staticsCta.length === 0) return;
  $staticsCta.find(".count").each(function () {
    var $this = jQuery(this);
    var countTo = $this.attr("data-count");
    jQuery({ countNum: $this.text() }).animate(
      { countNum: countTo },
      {
        duration: 2000,
        easing: "swing",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });
});




//Case study detail page Banner color change from 1024px screen
function applyOverlayColor() {
  const overlay = document.getElementById("mobile-banner-overlay");
  if (!overlay) return;

  const color = overlay.dataset.bgcolor;

  if (window.innerWidth <= 1024 && color) {
    overlay.style.backgroundColor = color;
  } else {
    overlay.style.backgroundColor = "";
  }
}
window.addEventListener("DOMContentLoaded", applyOverlayColor);
window.addEventListener("resize", applyOverlayColor);




// AI Work Flow Tabbing Code
document.addEventListener('DOMContentLoaded', () => {
  const sectionRoot = document.querySelector('.automation-business-section');
  if (!sectionRoot) return;

  const navItems = sectionRoot.querySelectorAll('.nav-item');
  const contentSections = sectionRoot.querySelectorAll('.content-section');

  function switchTab(targetSection) {
    navItems.forEach(item => item.classList.remove('active'));
    contentSections.forEach(section => section.classList.remove('active'));

    const targetNavItem = sectionRoot.querySelector(`[data-section="${targetSection}"]`);
    const targetContentSection = sectionRoot.querySelector(`#${targetSection}`);

    if (targetNavItem && targetContentSection) {
      targetNavItem.classList.add('active');
      targetContentSection.classList.add('active');
    }
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const section = item.getAttribute('data-section');
      switchTab(section);
    });
  });
});



//  HOME PAGE NEW CHANGES JS CODE
jQuery(document).ready(function ($) {
  // Video Section
  // $('.home-video-section').each(function () {
  //   var $section = $(this);
  //   var $container = $section.find('#acfVideoThumb');
  //   var $video = $container.find('video');
  //   var $thumb = $container.find('.video-thumb');
  //   var $button = $container.find('.play-button');

  //   $button.on('click', function () {
  //     $thumb.hide();
  //     $button.hide();
  //     $video.show().trigger('play');
  //   });
  // });

  // Accordion Section
  $('.over-services-wraps').each(function () {
    var $wrapper = $(this);
    var $accordion = $wrapper.find('.custom-accordion');
    var $imageRight = $wrapper.find('.image-right');
    var $images = $imageRight.find('.accordion-image'); // each contains <img>

    // ---- Helpers ----
    function setImageRightHeightByIndex(idx) {
      var $img = $images.eq(idx).find('img');
      if (!$img.length) return;

      // If image already loaded, set height immediately; else wait for load
      if ($img[0].complete && $img[0].naturalHeight > 0) {
        $imageRight.height($img.outerHeight());
      } else {
        $img.off('load._acc').on('load._acc', function () {
          $imageRight.height($img.outerHeight());
        });
      }
    }

    // Debounce for resize
    var resizeTimer = null;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        var activeIndex = $images.index($images.filter('.active'));
        if (activeIndex < 0) activeIndex = 0;
        setImageRightHeightByIndex(activeIndex);
      }, 100);
    }

    // ---- Init: collapse all ----
    $accordion.find('.accordion-content').css('max-height', '0');

    // Open first item by default
    var $firstHeader = $accordion.find('.accordion-header').first();
    var $firstContent = $firstHeader.next('.accordion-content');
    $firstHeader.addClass('active');
    $firstContent.css('max-height', $firstContent[0].scrollHeight + 'px');

    // Show first image by default (CSS handles fade; just set class)
    $images.removeClass('active');
    $images.eq(0).addClass('active');
    // Prepare container for height animation
    $imageRight.addClass('is-ready'); // adds height transition via CSS
    setImageRightHeightByIndex(0);

    // Toggle on click
    $accordion.find('.accordion-header').on('click', function () {
      var $header = $(this);
      var $content = $header.next('.accordion-content');
      var isActive = $header.hasClass('active');
      var index = $header.parent().index(); // index of accordion item

      // Keep at least one open
      if (isActive && $accordion.find('.accordion-header.active').length === 1) {
        return;
      }

      // Reset all
      $accordion.find('.accordion-header').removeClass('active');
      $accordion.find('.accordion-content').css('max-height', '0');

      // Switch image with crossfade (class toggle only)
      var $currentActive = $images.filter('.active');
      var $next = $images.eq(index);
      if ($next.length) {
        $currentActive.removeClass('active');
        $next.addClass('active');
        setImageRightHeightByIndex(index);
      }

      if (!isActive) {
        $header.addClass('active');
        $content.css('max-height', $content[0].scrollHeight + 'px');
      } else {
        // If user closed the only one, reopen first (safeguard)
        var $fh = $accordion.find('.accordion-header').first();
        var $fc = $fh.next('.accordion-content');
        $fh.addClass('active');
        $fc.css('max-height', $fc[0].scrollHeight + 'px');

        $images.removeClass('active');
        $images.eq(0).addClass('active');
        setImageRightHeightByIndex(0);
      }
    });

    // Recalculate on resize
    $(window).on('resize', onResize);
  });

  // Brand Logos Scrolling with Drag Support
  function initBrandScroll(selector, direction) {
    var $wrapper = $(selector);
    if (!$wrapper.length) return;

    var $scrollContainer = $wrapper.find(".brand-logos-new");
    var $items = $scrollContainer.children().not('.cloned');

    $scrollContainer.find(".cloned").remove();

    var cleanup = $wrapper.data('cleanup');
    if (cleanup) {
      cleanup();
    }

    var $clones = $items.clone().addClass("cloned");
    $scrollContainer.append($clones).append($clones.clone());

    var totalWidth = 0;
    $items.each(function () {
      var style = window.getComputedStyle(this);
      var width = this.getBoundingClientRect().width;
      var marginLeft = parseFloat(style.marginLeft) || 0;
      var marginRight = parseFloat(style.marginRight) || 0;
      totalWidth += width + marginLeft + marginRight;
    });

    $scrollContainer.css("width", (totalWidth * 3) + "px");

    var position = direction === "right" ? totalWidth : 0;
    var isHovered = false;
    var isDragging = false;
    var isActive = true;
    var animationId;
    var autoScrollTimer;

    var startX = 0;
    var startScrollLeft = 0;
    var hasMoved = false;

    function animate() {
      if (!isActive || isDragging || isHovered) return;

      if (direction === "left") {
        position += 0.5;
        if (position >= totalWidth) {
          position = 0;
        }
      } else {
        position -= 0.5;
        if (position <= 0) {
          position = totalWidth;
        }
      }
      $wrapper.scrollLeft(position);

      animationId = requestAnimationFrame(animate);
    }

    function resumeAutoScroll() {
      clearTimeout(autoScrollTimer);
      isHovered = false;
      isDragging = false;
      if (isActive && !isHovered && !isDragging) {
        animate();
      }
    }

    function startDrag(e) {
      isDragging = true;
      isHovered = true;
      startX = e.type.includes('touch') ? e.originalEvent.touches[0].clientX : e.clientX;
      startScrollLeft = $wrapper.scrollLeft();
      hasMoved = false;

      $wrapper.css('cursor', 'grabbing');
      e.preventDefault();
    }

    function doDrag(e) {
      if (!isDragging) return;

      var currentX = e.type.includes('touch') ? e.originalEvent.touches[0].clientX : e.clientX;
      var deltaX = currentX - startX;

      if (Math.abs(deltaX) > 5) {
        hasMoved = true;
      }

      var newScrollLeft = startScrollLeft - deltaX;

      if (newScrollLeft <= 0) {
        newScrollLeft = totalWidth;
        startScrollLeft = totalWidth;
        startX = currentX;
      } else if (newScrollLeft >= totalWidth * 2) {
        newScrollLeft = totalWidth;
        startScrollLeft = totalWidth;
        startX = currentX;
      }

      $wrapper.scrollLeft(newScrollLeft);
      position = newScrollLeft;

      e.preventDefault();
    }

    function endDrag(e) {
      if (!isDragging) return;

      isDragging = false;
      $wrapper.css('cursor', 'grab');

      e.preventDefault();
    }

    // Event handlers
    $wrapper.on("mouseenter.brandScroll", function () {
      if (!isDragging) {
        isHovered = true;
      }
    }).on("mouseleave.brandScroll", function () {
      resumeAutoScroll();
    });

    // Mouse drag events
    $wrapper.on("mousedown.brandScroll", startDrag)
      .on("mousemove.brandScroll", doDrag)
      .on("mouseup.brandScroll", endDrag);

    // Touch drag events
    $wrapper.on("touchstart.brandScroll", startDrag)
      .on("touchmove.brandScroll", doDrag)
      .on("touchend.brandScroll", endDrag);

    // Global mouse events for drag outside wrapper
    $(document).on("mousemove.brandScroll" + selector.replace(/\W/g, ''), function (e) {
      if (isDragging) {
        doDrag(e);
      }
    }).on("mouseup.brandScroll" + selector.replace(/\W/g, ''), function (e) {
      if (isDragging) {
        endDrag(e);
      }
    });

    // Prevent text selection during drag
    $wrapper.on("selectstart.brandScroll", function (e) {
      if (isDragging) {
        e.preventDefault();
      }
    });

    // Cleanup function
    $wrapper.data('cleanup', function () {
      isActive = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      clearTimeout(autoScrollTimer);
      $wrapper.off(".brandScroll");
      $(document).off(".brandScroll" + selector.replace(/\W/g, ''));
    });

    // Set cursor style
    $wrapper.css('cursor', 'grab');

    // Start animation
    $wrapper.scrollLeft(position);
    setTimeout(function () {
      if (isActive) {
        animate();
      }
    }, 100);
  }
  // Initialize scrolling
  initBrandScroll(".leftscrolling", "left");
  initBrandScroll(".rightscrolling", "right");

});

jQuery(window).on('load', function ($) {
  setTimeout(function () {
    if (jQuery('.portfolio_main .items').length) {
      var $slider = jQuery('.portfolio_main .items');
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('destroy');
      }
      $slider.slick({
        slidesToShow: 3.6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: false, // Change to false to avoid left cut
        focusOnSelect: true,
        pauseOnHover: false,
        // Add CSS to handle overflow
        variableWidth: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2.2,
              slidesToScroll: 1,
              centerMode: false,
              infinite: false
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1.2,
              slidesToScroll: 1,
              centerMode: false,
              infinite: false
            }
          }
        ]
      });
    }
  }, 500);
});

//  HOME PAGE NEW CHANGES JS CODE END



//  Footer Js Code
document.addEventListener("DOMContentLoaded", function () {
  // Accordion
  function setupFooterAccordion() {
    if (window.innerWidth <= 768) {
      const accordions = document.querySelectorAll(".footer-links, .footer-locations");
      accordions.forEach(acc => {
        const heading = acc.querySelector("h4");
        if (heading && !heading.classList.contains("accordion-ready")) {
          heading.classList.add("accordion-ready");
          heading.addEventListener("click", () => {
            acc.classList.toggle("active");
          });
        }
      });
    }
  }
  setupFooterAccordion();
  window.addEventListener("resize", setupFooterAccordion);
  // Partner logos slider (mobile only)
  function setupPartnerSlider() {
    if (window.innerWidth <= 768) {
      if (!$(".partner-slider").hasClass("slick-initialized")) {
        $(".partner-slider").slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          dots: false,
          responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
          ]
        });
      }
    } else {
      if ($(".partner-slider").hasClass("slick-initialized")) {
        $(".partner-slider").slick("unslick");
      }
    }
  }

  setupPartnerSlider();
  window.addEventListener("resize", setupPartnerSlider);

  (function () {
    const C = "vibe-tab-images--enter";
    const tabs = document.querySelectorAll(".vibe-tab[data-tab]");
    const panels = document.querySelectorAll(".vibe-tab-panel");
    const noMotion = globalThis.matchMedia("(prefers-reduced-motion: reduce)");
    let active = 0;

    const finishEnter = (wrap) => {
      const imgs = wrap.querySelectorAll("img");
      if (!imgs.length) {
        wrap.classList.remove(C);
        return;
      }
      let left = imgs.length;
      const done = () => --left <= 0 && wrap.classList.remove(C);
      imgs.forEach((img) => img.addEventListener("animationend", done, { once: true }));
    };

    function show(i) {
      if (i === active) return;
      tabs.forEach((t, j) => t.setAttribute("aria-selected", String(j === i)));
      panels.forEach((p, j) => {
        const wrap = p.querySelector(".vibe-tab-images");
        if (j !== i) {
          p.hidden = true;
          return;
        }
        p.hidden = false;
        if (!wrap) return;
        wrap.classList.remove(C);
        wrap.getBoundingClientRect();
        if (!noMotion.matches) {
          wrap.classList.add(C);
          finishEnter(wrap);
        }
      });
      active = i;
    }

    tabs.forEach((t) =>
      t.addEventListener("click", () => {
        const i = Number.parseInt(t.dataset.tab ?? "", 10);
        if (!Number.isNaN(i)) show(i);
      })
    );
  })();

});


document.addEventListener("click", handleVideoClick);
document.addEventListener("touchstart", handleVideoClick, { passive: true });

function handleVideoClick(e) {
  const section = e.target.closest(".home-video-section");
  if (!section) return;

  const container = e.target.closest(".acf-video-container");
  if (!container || !section.contains(container)) return;

  // Prevent multiple loads
  if (container.classList.contains("video-loaded")) return;

  const youtubeId = container.getAttribute("data-youtube-id");
  if (!youtubeId) return;

  const iframe = document.createElement("iframe");

  iframe.src =
    "https://www.youtube.com/embed/" +
    youtubeId +
    "?autoplay=1&rel=0&playsinline=1";

  iframe.frameBorder = "0";
  iframe.allow = "autoplay; encrypted-media; fullscreen";
  iframe.allowFullscreen = true;

  iframe.style.width = "100%";
  iframe.style.height = "100%";

  container.classList.add("video-loaded");
  container.innerHTML = "";
  container.appendChild(iframe);
}

jQuery(document).ready(function ($) {
  $('a[href="javascript:void(0)"]').each(function () {
    var $link = $(this);

    // Remove link behavior
    $link.removeAttr('href');

    // Make it accessible
    $link.attr({
      role: 'button',
      tabindex: '0'
    });
  });
});


(function () {
  "use strict";

  function initTestimonialSlider() {
    var root = document.querySelector("[data-slider]");
    if (!root) return;

    var viewport = root.querySelector(".testimonial-slider__viewport");
    var track = root.querySelector(".testimonial-slider__track");
    var slides = Array.prototype.slice.call(root.querySelectorAll(".testimonial-slide"));
    var prev = root.querySelector(".slider-btn--prev");
    var next = root.querySelector(".slider-btn--next");
    var dotsWrap = root.querySelector(".slider-dots");
    if (!viewport || !track || !slides.length) return;

    var index = 0;
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    slides.forEach(function (slide, i) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "slider-dot" + (i === 0 ? " is-active" : "");
      dot.setAttribute("aria-label", "Go to testimonial " + (i + 1));
      dot.addEventListener("click", function () {
        goTo(i);
      });
      dotsWrap.appendChild(dot);
    });

    var dots = function () {
      return dotsWrap.querySelectorAll(".slider-dot");
    };

    function layout() {
      var w = viewport.offsetWidth;
      track.style.width = w * slides.length + "px";
      slides.forEach(function (slide) {
        slide.style.width = w + "px";
      });
      move(false);
    }

    function move(animate) {
      var w = viewport.offsetWidth;
      var offset = -index * w;
      track.style.transition =
        animate === false || reducedMotion ? "none" : "transform var(--duration-emphasis, 0.36s) cubic-bezier(0.33, 1, 0.32, 1)";
      track.style.transform = "translateX(" + offset + "px)";
      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === index);
      });
      dots().forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === index);
      });
    }

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      move(true);
    }

    if (prev)
      prev.addEventListener("click", function () {
        goTo(index - 1);
      });
    if (next)
      next.addEventListener("click", function () {
        goTo(index + 1);
      });

    window.addEventListener("resize", function () {
      layout();
    });
    layout();
  }

  /* [testimonial mobile slider] Horizontal snap + dot pagination + auto-advance — only ≤767px */
  const initTestimonialMobileCarousel = () => {
    const viewport = document.querySelector(".testimonial-slider-viewport");
    const track = viewport ? viewport.querySelector(".testimonial-slider-track") : null;
    const dotsWrap = document.querySelector("[data-testimonial-slider-dots]");
    if (!viewport || !track || !dotsWrap) {
      return;
    }

    const mq = window.matchMedia("(max-width: 767px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const AUTO_INTERVAL_MS = 3000;
    let autoTimerId = 0;
    let resumeTimerId = 0;
    let testimonialScrollRaf = 0;

    const clearAutoTimer = () => {
      if (autoTimerId) {
        window.clearInterval(autoTimerId);
        autoTimerId = 0;
      }
    };

    const clearResumeTimer = () => {
      if (resumeTimerId) {
        window.clearTimeout(resumeTimerId);
        resumeTimerId = 0;
      }
    };

    const scheduleAutoAdvance = () => {
      clearAutoTimer();
      clearResumeTimer();
      if (!mq.matches || reducedMotion.matches) {
        return;
      }
      autoTimerId = window.setInterval(() => {
        // Internal logic or scroll behavior handler
      }, AUTO_INTERVAL_MS);
    };

    const pauseAutoThenResume = () => {
      clearAutoTimer();
      clearResumeTimer();
      resumeTimerId = window.setTimeout(() => {
        scheduleAutoAdvance();
      }, 6000);
    };

    const setSlideWidth = () => {
      if (!mq.matches) {
        viewport.style.removeProperty("--testimonial-slide-width");
        return;
      }
      viewport.style.setProperty("--testimonial-slide-width", `${viewport.clientWidth}px`);
    };

    const getOriginalSlides = () =>
      Array.from(track.children).filter(
        (el) => el instanceof HTMLElement && !el.hasAttribute("data-testimonial-clone"),
      );

    const getStep = () => {
      const originals = getOriginalSlides();
      if (originals.length >= 2) {
        const delta = originals[1].offsetLeft - originals[0].offsetLeft;
        if (delta > 0) {
          return delta;
        }
      }
      return Math.max(1, viewport.clientWidth);
    };

    const syncTestimonialDots = () => {
      if (!mq.matches) {
        return;
      }
      const dots = dotsWrap.querySelectorAll(".testimonial-slider-dot");
      if (!dots.length) {
        return;
      }
      const originals = getOriginalSlides();
      const step = getStep();
      let idx = Math.round(viewport.scrollLeft / step);
      idx = Math.max(0, Math.min(idx, originals.length - 1));
      dots.forEach((dot, i) => {
        const on = i === idx;
        dot.classList.toggle("is-active", on);
        dot.setAttribute("aria-current", on ? "true" : "false");
      });
    };

    const buildTestimonialDots = () => {
      dotsWrap.innerHTML = "";
      if (!mq.matches) {
        return;
      }
      const originals = getOriginalSlides();
      originals.forEach((_, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "testimonial-slider-dot" + (i === 0 ? " is-active" : "");
        btn.setAttribute("aria-label", `Go to slide ${i + 1}`);
        dotsWrap.appendChild(btn);
      });
    };

    // Initialize mobile layout options
    setSlideWidth();
    buildTestimonialDots();
    scheduleAutoAdvance();

    viewport.addEventListener("scroll", () => {
      if (testimonialScrollRaf) cancelAnimationFrame(testimonialScrollRaf);
      testimonialScrollRaf = requestAnimationFrame(() => {
        syncTestimonialDots();
      });
    }, { passive: true });

    window.addEventListener("resize", () => {
      setSlideWidth();
      syncTestimonialDots();
    });
  };

  // Safe DOM Execution wrapper to make sure elements exist before running
  function initAllSliders() {
    initTestimonialSlider();
    initTestimonialMobileCarousel();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAllSliders);
  } else {
    initAllSliders();
  }
})();