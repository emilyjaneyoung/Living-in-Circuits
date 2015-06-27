// SVG Animations
function animate() {
    $('.fade')
        .velocity({ opacity: 0 }, 0)
        .velocity({ opacity: 1 }, {duration: 1000, delay: 1500});
    $('.path')
        .velocity({ 'stroke-dashoffset': 3000 }, 0)
        .velocity({ 'stroke-dashoffset': 0 }, { duration: 1000, delay: 500 });
    $('.lights-1')
        .velocity({ fillRed: 255, fillGreen: 255, fillBlue: 102 }, { duration: 500, delay: 4000 });
    $('.lights-2')
        .velocity({ fillRed: 255, fillGreen: 255, fillBlue: 102 }, { duration: 500, delay: 4500 });
    $('.lights-3')
        .velocity({ fillRed: 255, fillGreen: 255, fillBlue: 102 }, { duration: 500, delay: 5000 });
};

animate();

// Reading Time
$(".content .post__content").readingTime();

// Infinite Scroll Plugin
$(function() {
    $("#infinite-scroll-wrap").infinitescroll({
        navSelector: ".pagination",
        nextSelector: ".next-page",
        itemSelector: ".square__item",
        loadingImg: "",
        animate: true,
        maxPage: parseInt($(".next-page").data("pages")),
        behavior: "twitter"
    });
    $(window).unbind(".infscr");
    $(".next-page").click(function() {
        $(document).trigger("retrieve.infscr");
        return false;
    });
    $(document).ajaxError(function(e,xhr,opt) {
        if(xhr.status==404)
        $(".next-page").remove();
    });
});
