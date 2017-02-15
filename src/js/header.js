$(function(){
    var stopScrollFunc = function(event){
        event.stopPropagation();
        return false;
    };
    var stopTouchFunc = function(event){
        event.stopPropagation();
        return false;
    };
   $(".j-u-list").click(function(){
        if ($(".z-toggle-list").hasClass("show")) {
            $("body").css({"height":"auto","overflow":"auto"});
            $(".z-toggle-list").slideUp(600).removeClass("show");

        }
        else {
            $("body").css({"height":"100%","overflow":"hidden"});
            $(".z-toggle-list").slideDown(600).addClass("show");

        }
   })

})