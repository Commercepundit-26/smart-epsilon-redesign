wow = new WOW({offset: 100});
wow.init();

jQuery(document).ready(function () {

    jQuery(window).load(function () {
        jQuery('.page-preloader').addClass('preloader-loaded')
    });

    // jQuery(window).scroll(function () {
    //     if (jQuery(this).scrollTop() > 1) {
    //         jQuery('.page-header-wrapper').addClass("sticky_header");
    //     } else {
    //         jQuery('.page-header-wrapper').removeClass("sticky_header");
    //     }
    // });

    

    /* Toggle Menu */
//     if (jQuery('.toggle-menu').length) {
//         jQuery('.toggle-menu').click(function () {
//             jQuery(this).toggleClass('active');
//             jQuery('body').toggleClass('openMegamenu');
//            jQuery('body').addClass('openMegamenu');
//         });
//     }
//     jQuery('body').keydown(function(e){
//         if(e.keyCode == 27) {
//             jQuery('body').removeClass('openMegamenu');
//             jQuery('.toggle-menu').removeClass('active');
//         }
//     });
//     /* Toggle Menu */
//     /* Toggle Mobile Menu */
//     jQuery('.main-navigation > ul > li.has-dropdown > .sumenu-inner-arrow').on('click', function(e) {
//         // e.preventDefault();
//         jQuery('body').addClass('show-menu');
//     });
//     // jQuery(".arrow-next").on('click', function(e) {
//     //     jQuery('body').removeClass('show-menu');
//     // });

    /* Scroll To Top Arrow */
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 200) {
            jQuery('.scrollup').fadeIn();
        } else {
            jQuery('.scrollup').fadeOut();
        }
    });

    jQuery('.scrollup').click(function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    /* Scroll To Top Arrow */

    /*Footer Accordian */
    // if (jQuery('.expand-btn').length > 0) {
    //     jQuery('.expand-btn').click(function() {
    //         jQuery(this).toggleClass('active');
    //         jQuery('.expand-btn').not(jQuery(this)).removeClass('active');
    //         jQuery(this).parent().next('.quick-links').slideToggle();
    //         jQuery('.quick-links').not(jQuery(this).parent().next('.quick-links')).slideUp();
    //     });
    // }
    /*Solutionsfilter */
    jQuery('.slt-box').after('<div class="selectbox-group"><span class="selectlabel"></span><div class="bar-work-one"><ul class="selectbox"></ul></div></div>');
    jQuery('.slt-box option').each(function(){
        var option = jQuery(this).text();
        var value = jQuery(this).val();
        jQuery('ul.selectbox').append('<li class="item" id="'+value+'">' +option+ '</li>')
    })
    jQuery('.selectbox-group .selectlabel').text(jQuery(".slt-box").find(":selected").text());
    jQuery('.selectbox-group-second .selectlabel-second').text(jQuery(".slt-box-second").find(":selected").text());
    if (!$('.selectbox li.active').length) {
        $('.selectbox li:first').addClass('active');
    }

    jQuery(document).on('click','.selectbox li', function(){
        var thistxt = jQuery(this).text();
        jQuery('.selectbox li').removeClass('active');
        jQuery(this).addClass('active');

        // jQuery(".slt-box").find(":selected").text(thistxt);
        jQuery(".slt-box").val(jQuery(this).attr('id')).trigger('change'); // add .trigger('change')


        jQuery('.selectbox-group .selectlabel').text(thistxt);
        jQuery('.selectlabel').addClass('has-value'); 
        // jQuery('.selectbox').slideUp();
        jQuery(this).closest('.bar-work-one').hide();

        jQuery('.selectlabel').removeClass('select-open');
        toggleClearButton();
        updateClearButtonVisibility();
    });
    // jQuery(document).on('click','.selectbox-group .selectlabel', function(){
    //     jQuery('.selectbox-second').slideUp();
    //     jQuery('.selectbox-third').slideUp();
    //     jQuery('.selectbox').slideToggle();
    //     jQuery(this).toggleClass('select-open');
    // })

    jQuery(document).on('click', '.selectbox-group .selectlabel', function () {
        jQuery('.bar-work-two, .bar-work-three').hide(); // Hide others
    
        var $barWork = jQuery(this).siblings('.bar-work-one');
        $barWork.toggle(); // toggle current
        jQuery(this).toggleClass('select-open');
    });
    
    /*Industriesfilter */
    jQuery('.slt-box-second').after('<div class="selectbox-group-second"><span class="selectlabel-second"></span><div class="bar-work-two"><ul class="selectbox-second"></ul></div></div>');
    jQuery('.slt-box-second option').each(function(){
        var option = jQuery(this).text();
        var value = jQuery(this).val();
        jQuery('ul.selectbox-second').append('<li class="item" id="'+value+'">' +option+ '</li>')
    })

    jQuery('.selectbox-group-second .selectlabel-second').text(jQuery(".slt-box-second").find(":selected").text());
    jQuery('.selectbox-group .selectlabel').text(jQuery(".slt-box").find(":selected").text());
    if (!$('.selectbox-second li.active').length) {
        $('.selectbox-second li:first').addClass('active');
    }
    jQuery(document).on('click','.selectbox-second li', function(){
        var thistxt = jQuery(this).text();
        //jQuery(".slt-box").find(":selected").text("All Solutions");
        // jQuery(".slt-box-second").find(":selected").text(thistxt);
        jQuery(".slt-box-second").val(jQuery(this).attr('id')).trigger('change');

        //jQuery('.selectbox-group .selectlabel').text("All Solutions");
        jQuery('.selectbox-group-second .selectlabel-second').text(thistxt);
        // jQuery('.selectlabel-third').addClass('has-value');
        jQuery('.selectbox-second li').removeClass('active');
        //jQuery('.selectbox li:first').addClass('active');
        //jQuery('.selectbox li').removeClass('active');
        //jQuery('.selectbox li:first').addClass('active');
        jQuery(this).addClass('active');
        // jQuery('.selectbox-second').slideUp();
        jQuery(this).closest('.bar-work-two').hide();

        jQuery('.selectlabel-second').removeClass('select-open-second').addClass('has-value');
        
        toggleClearButton();
        updateClearButtonVisibility();
    });
    // jQuery(document).on('click','.selectbox-group-second .selectlabel-second', function(){
    //     jQuery('.selectbox').slideUp();
    //     jQuery('.selectbox-third').slideUp();
    //     jQuery('.selectbox-second').slideToggle();
    //     jQuery(this).toggleClass('select-open-second');
    // })
    jQuery(document).on('click', '.selectbox-group-second .selectlabel-second', function () {
        jQuery('.bar-work-one, .bar-work-three').hide();
    
        var $barWork = jQuery(this).siblings('.bar-work-two');
        $barWork.toggle();
        jQuery(this).toggleClass('select-open-second');
    });
    
    
    jQuery('.selectbox-group-second').click(function () { 
        jQuery('.selectlabel').removeClass('select-open');  
        jQuery('.selectlabel-third').removeClass('select-open-third');
    });
    jQuery('.selectbox-group').click(function () {
        jQuery('.selectlabel-second').removeClass('select-open-second');
        jQuery('.selectlabel-third').removeClass('select-open-third');  
    });
    jQuery(document).on('click', '.selectbox-group-third', function () {
        jQuery('.selectlabel').removeClass('select-open');
        jQuery('.selectlabel-second').removeClass('select-open-second');  
    }); 

    jQuery('.slt-box-third').after('<div class="selectbox-group-third"><span class="selectlabel-third"></span><div class="bar-work-three"><ul class="selectbox-third"></ul></div></div>');
    jQuery('.slt-box-third option').each(function(){
        var option = jQuery(this).text();
        var value = jQuery(this).val();
        jQuery('ul.selectbox-third').append('<li class="item" id="'+value+'">' +option+ '</li>')
    });
    jQuery('.selectbox-group-third .selectlabel-third').text(jQuery(".slt-box-third").find(":selected").text());
    jQuery('.selectbox-third li:first').addClass('active');
    // On click platform
    jQuery(document).on('click','.selectbox-third li', function(){
        var thistxt = jQuery(this).text();
        // jQuery(".slt-box-third").find(":selected").text(thistxt);
        jQuery(".slt-box-third").val(jQuery(this).attr('id')).trigger('change');

        // jQuery(".slt-box-third").val(jQuery(this).attr('id'));

        jQuery('.selectbox-group-third .selectlabel-third').text(thistxt);
        jQuery('.selectlabel-third').addClass('has-value');
        jQuery('.selectbox-third li').removeClass('active');
        jQuery(this).addClass('active');
        // jQuery('.selectbox-third').slideUp();
        jQuery(this).closest('.bar-work-three').hide();

        jQuery('.selectlabel-third').removeClass('select-open-third');
        // Trigger combined AJAX
        runFilterAjax();
        toggleClearButton();
        updateClearButtonVisibility();
    });
    // jQuery(document).on('click','.selectbox-group-third .selectlabel-third', function(){
    //     jQuery('.selectbox').slideUp();
    //     jQuery('.selectbox-second').slideUp();
    //     jQuery('.selectbox-third').slideToggle();
    //     jQuery(this).toggleClass('select-open-third');
    // });
    jQuery(document).on('click', '.selectbox-group-third .selectlabel-third', function () {
        jQuery('.bar-work-one, .bar-work-two').hide();
    
        var $barWork = jQuery(this).siblings('.bar-work-three');
        $barWork.toggle();
        jQuery(this).toggleClass('select-open-third');
    });
    
    // function runFilterAjax() {
    //     var solutionsfiltervalue   = jQuery('.selectbox li.active').attr('id') || '';
    //     var industriesfiltervalue  = jQuery('.selectbox-second li.active').attr('id') || '';
    //     var platformfiltervalue    = jQuery('.selectbox-third li.active').attr('id') || '';

    //     jQuery.ajax({
    //         url : filter_loadmore_params.ajaxurl,
    //         data: {
    //             action: "customfilter",
    //             solutionsfilter: solutionsfiltervalue,
    //             industriesfilter: industriesfiltervalue,
    //             platformfilter: platformfiltervalue
    //         },
    //         dataType : 'json',
    //         type : 'POST',
    //         success : function( data ){
    //             if (data.content === null || data.content === '') {
    //                 jQuery('#filter_posts_wrap').html('<p>Data not Found</p>');
    //                 jQuery('.without-filter').hide();
    //             } else {
    //                 jQuery('.without-filter').hide();
    //                 jQuery('#filter_posts_wrap').html(data.content);
    //             }
    //         }
    //     });
    // }
    let filterTimeout;
    function runFilterAjaxDebounced() {
        clearTimeout(filterTimeout);
        filterTimeout = setTimeout(runFilterAjax, 150);
    }

    function runFilterAjax() {
        var solutionsfiltervalue   = jQuery('#technologyfilter').val() || '';
        var industriesfiltervalue  = jQuery('#industriesfilter').val() || '';
        var platformfiltervalue    = jQuery('#platformfilter').val() || '';
    
        console.log("FILTERING:", { solutionsfiltervalue, industriesfiltervalue, platformfiltervalue });
    
        jQuery.ajax({
            url : filter_loadmore_params.ajaxurl,
            data: {
                action: "customfilter",
                solutionsfilter: solutionsfiltervalue,
                industriesfilter: industriesfiltervalue,
                platformfilter: platformfiltervalue
            },
            dataType : 'json',
            type : 'POST',
            success : function( data ){
                if (data.content === null || data.content === '') {
                    jQuery('#filter_posts_wrap').html('<p>Data not Found</p>');
                    jQuery('.without-filter').hide();
                } else {
                    jQuery('.without-filter').hide();
                    jQuery('#filter_posts_wrap').html(data.content);
                }
            }
        });
    }
    
    jQuery('#industriesfilter, #technologyfilter, #platformfilter').on('change', function(){
        runFilterAjaxDebounced();
    });
    
    jQuery('#clear-filters').on('click', function(){
        // Reset hidden selects (real filtering sources)
        jQuery('#industriesfilter, #technologyfilter, #platformfilter')
          .val('').trigger('change');
      
        // Reset UI active classes & labels
        jQuery('.selectbox li.active, .selectbox-second li.active, .selectbox-third li.active')
          .removeClass('active');
        jQuery('.selectbox-group .selectlabel').text('Select Technology');
        jQuery('.selectbox-group-second .selectlabel-second').text('Select Industries');
        jQuery('.selectbox-group-third .selectlabel-third').text('Select Platform');
        jQuery('.selectlabel, .selectlabel-second, .selectlabel-third').removeClass('has-value');
        jQuery('.bar-work-one, .bar-work-two, .bar-work-three').hide();
        jQuery('.selectlabel, .selectlabel-second, .selectlabel-third')
          .removeClass('select-open select-open-second select-open-third');
      
        toggleClearButton();
        updateClearButtonVisibility();
        runFilterAjax();
      });
      
    // Show clear button only when filters are applied
    function toggleClearButton() {
        const hasTech = jQuery('#technologyfilter').val() !== '';
        const hasIndustry = jQuery('#industriesfilter').val() !== '';
        const hasPlatform = jQuery('#platformfilter').val() !== '';
    
        if (hasTech || hasIndustry || hasPlatform) {
            jQuery('#clear-filters').show();
        } else {
            jQuery('#clear-filters').hide();
        }
    }
    
    // Update clear button visibility for custom dropdowns
    function updateClearButtonVisibility() {
        var industry = jQuery('.slt-box-second').val();
        var technology = jQuery('.slt-box').val();
        var platform = jQuery('.slt-box-third').val();
    
        if (industry || technology || platform) {
            jQuery('.clear-button').show(); //  Use correct class
        } else {
            jQuery('.clear-button').hide();
        }
    }
    
    
});
jQuery(function($) {
    const caseStudy = new URLSearchParams(window.location.search).get('case_study');
    if (caseStudy) {
        ['.selectbox', '.selectbox-second', '.selectbox-third'].forEach(function(selector) {
            const $item = $(selector + ' li#' + caseStudy);
            if ($item.length) {
                $(selector + ' li').removeClass('active');
                $item.addClass('active');
            }
        });
    }
});
// Atlatna Page 
jQuery(document).ready(function () {
        jQuery('.portfolio-logo-slider').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [
                {
                breakpoint: 1023,
                settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        autoplay:true,
                }
                },
                {
                breakpoint: 600,
                settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                }
                }
                ]
        });

        jQuery('.technology-experts-slider').slick({
                dots: false,
                arrows: false,
                speed: 300,
                slidesToShow: 3,
                autoplay: true,
                responsive: [
                {
                breakpoint: 1100,
                settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        autoplay:true,
                }
                },
                {
                breakpoint: 1023,
                settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        autoplay:true,
                }
                },
                {
                breakpoint: 600,
                settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                }
                }
                ]
                        });

                // Technology Slider for Landing
                jQuery('.technology-experts-slider-landing').slick({
                    dots: false,
                    arrows: false,
                    speed: 300,
                    slidesToShow: 3,
                    autoplay: true,
                    responsive: [
                    {
                    breakpoint: 1100,
                    settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                            autoplay:true,
                    }
                    },
                    {
                    breakpoint: 1023,
                    settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            autoplay:true,
                    }
                    },
                    {
                    breakpoint: 600,
                    settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                    }
                    },
                    {
                    breakpoint: 480,
                    settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                    }
                    }
                    ]
                            });
                // Ends

                // Service Landing Page Certification Slider
                jQuery('.services-certification-slider').slick({
                    dots: false,
                    arrows: false,
                    speed: 300,
                    slidesToShow: 4,
                    autoplay: true,
                    responsive: [
                    {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        autoplay:true,
                    }
                    },
                    {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                    },
                    {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                    }
                    ]
                        });
                // Ends

                /* Static Counter */
                var a = 0;
                jQuery(window).scroll(function () {

                    var $staticsCta = jQuery('.statics-cta');
                    if ($staticsCta.length === 0) {
                        return; // Exit the function if the element is not found
                    }

                    var oTop = $staticsCta.offset().top - window.innerHeight;
                    if (a === 0 && jQuery(window).scrollTop() > oTop) {
                        jQuery('.count').each(function () {
                            var $this = jQuery(this),
                                countTo = $this.attr('data-count');
                            jQuery({
                                countNum: $this.text()
                            }).animate({
                                countNum: countTo
                            }, {
                                duration: 2000,
                                easing: 'swing',
                                step: function () {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                    $this.text(this.countNum);
                                    //alert('finished');
                                }
                            });
                        });
                        a = 1;
                    }
                });
                /* Static Counter */

// Testimonial Page Custom
$(".testimonials-section .item").slice(0,6).show(); 
  $(".testimonials-section #seeMore").click(function(e){
    e.preventDefault();
    $(".testimonials-section .item:hidden").slice(0,6).fadeIn("slow");
    
    if($(".testimonials-section .item:hidden").length == 0){
       $(".testimonials-section .loadmore").fadeOut("slow");
      }
  });

    var l = $('.testimonials-section .item').length;
    if (l > 6) {
        $('.testimonials-section .loadmore').fadeIn();
    } else {
        $('.testimonials-section .loadmore').fadeOut();
    }

/* Mega Menu Script */
    //  if (jQuery('.toggle-menu').length) {
    //     jQuery('.toggle-menu').click(function () {
    //         $(this).next(".main_menu").slideToggle(); 
    //         jQuery(this).toggleClass('active'); 
    //     });
    // }
    
    // if($(window).width() <= 768 ){

        
    //     jQuery('.has_dropdown > .sub-arrow').click(function () {           
    //         jQuery(this).parent().toggleClass('active'); 
    //         jQuery(this).next().slideToggle();
    //     });

    //     jQuery('.mega_menu_item h4 .sub-arrow').click(function () {
    //         jQuery(this).parent().toggleClass('active'); 
    //         jQuery(this).parent().next().slideToggle();
    //         jQuery(this).parents('.mega_menu_item').siblings().find('ul').slideUp();
    //         jQuery(this).parents('.mega_menu_item').siblings().find(' h4').removeClass('active');
    //     });
    // }
    
});