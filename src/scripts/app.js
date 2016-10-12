jQuery(function() {
    jQuery(document).foundation();
    jQuery('.fancybox').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            overlay: {
                locked: false
            }
        },
        afterLoad: function(current, previous) {
            jQuery('.slick').slick('slickGoTo', current.index-1);
            console.log('moved to ' + (current.index-1));
        }
    });
    jQuery('.slick').slick({
        arrows: true,
        dots: false,
        lazyLoad: 'ondemand',
        autoplay: false
    });
    jQuery('.slick-nav').click(function(){
        var slide = jQuery(this).parent().index();
        jQuery('.slick').slick('slickGoTo', slide);
    })
});