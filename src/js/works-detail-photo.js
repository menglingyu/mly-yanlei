$(function(){
    var screen_h = $(window).height();
    $(".m-works-detail-picture").click(function(){
        var picture_way = $(this).children("img").attr("src");
        $(".g-show-big").children("img").attr("src",picture_way);
         $("body").css({"height":"100%","overflow":"hidden"});
        $(".g-show-big").fadeIn(300).children("img").css({"transform":"scale(1,1)"});
    })
    $(".g-show-big").click(function(){
        $("body").css({"height":"auto","overflow":"auto"});
        $(this).fadeOut(300).children("img").css({"transform":"scale(0,0)"});
    })
})