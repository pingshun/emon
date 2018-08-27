
function main() {
// baidu analysis
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?43a5e3fd5cb6a7b1ef4b35973fe5b4fc";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            }, 900);
            return false;
          }
        }
      });


    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
    $(".navbar-nav li a").click(function (event) {
        // check if window is small enough so dropdown is created
        var toggle = $(".navbar-toggle").is(":visible");
        if (toggle) {
            $(".navbar-collapse").collapse('hide');
        }
    });


    /* ---------------------------------------------- /*
     * Set sections backgrounds
     /* ---------------------------------------------- */

    var module = $('.home-section, .module, .module-small, .side-image');
    module.each(function(i) {
        if ($(this).attr('data-background')) {
            $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
        }
    });


    /* ---------------------------------------------- /*
     * Video popup, Gallery
     /* ---------------------------------------------- */

    $('.video-pop-up').magnificPopup({
        type: 'iframe'
    });
    $(".gallery-item").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            titleSrc: 'title',
            tError: 'The image could not be loaded.'
        }
    });

    // Nivo Lightbox
    $('.portfolio-item a').nivoLightbox({
        effect: 'slideDown',
        keyboardNav: true,
    });

    /* ---------------------------------------------- /*
     * Scroll top
     /* ---------------------------------------------- */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });

    $('a[href="#totop"]').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

		
}());


}
main();
