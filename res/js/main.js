$(function() {
    //http://mynameismatthieu.com/WOW/docs.html
    $('.wow:not([data-wow-delay])').attr('data-wow-delay', '0.3s');
    new WOW().init({ offset: 50 });
    
    //smooth scrolling for links
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
    
    //scrollspy (= top navigation bar marks the current position's chapter) activation
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    
    //animate header on scroll
    //cbpAnimatedHeader.js v1.0.0 (http://www.codrops.com)
    var bScrolledHeader = false,
        nChangeHeaderAfter = 300;
    $(window).on('scroll', function(_oEvent) {
        if(!bScrolledHeader) {
            bScrolledHeader = true;
            window.setTimeout(function() {
                if($(window).scrollTop() >= nChangeHeaderAfter) {
                    $('.navbar-fixed-top').addClass('navbar-shrink');
                } else {
                    $('.navbar-fixed-top').removeClass('navbar-shrink');
                }
                bScrolledHeader = false;
            }, 250);
        }
    });
    
    //modals
    $('a.portfolio-link[href="#modal_tmpl"]').on('click', function(_oEvent) {
        _oEvent.preventDefault();
        $('#modal_tmpl .modal-body h2').text($(this).data('title'));
        $('#modal_tmpl .modal-body p:not(.text-muted)').html($(this).find('p.hide').html());
        var oImgLink = $(this).find('img').get(0),
            oImgModal = $('#modal_tmpl .modal-body img').get(0);
        oImgModal.src = oImgLink.src;
        oImgModal.alt = oImgLink.alt;
        $('#modal_tmpl .modal-body p.text-muted em').text(oImgLink.alt);
        $('#modal_tmpl').modal();
        return false;
    });
    
    //tooltips
    $('.tooltips').tooltip();
});
