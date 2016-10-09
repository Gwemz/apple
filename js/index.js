$(function(){
    var slides=$(".gallery-slide-wrapper a");
    var dots=$(".tab .dot");
    var dir="right";
    var flag=false;
    var height=$(window).height();
    $(".xiala-list").css("height",height);
    moveTo=function(el,dir){
        if(dir==="right"){
            slides
                .filter(".active")
                .removeClass("active")
                .addClass("leave")
                .delay(1000)
                .queue(function(){
                    $(this).removeClass("leave").dequeue();
                });
            $(el).addClass("right");
            $(el).get(0).offsetWidth;
            $(el).removeClass("right").addClass("active");
        }else if(dir==="left"){
            slides
                .filter(".active")
                .removeClass("active")
                .addClass("right")
                .delay(1000)
                .queue(function(){
                    $(this).removeClass("right").dequeue();
                });
            $(el).addClass("leave");
            $(el).get(0).offsetWidth;
            $(el).removeClass("leave").addClass("active");
        }
        dots.filter(".active").removeClass("active");
        dots.eq($(el).index()).addClass("active");
    }
    moveRight=function(){
        var active=slides.filter(".active");
        var next=active.next().length ? active.next() : slides.eq(0);
        moveTo(next,"right");
    }
    moveLeft=function(){
        var active=slides.filter(".active");
        var prev=active.prev().length ? active.prev() : slides.eq(-1);
        moveTo(prev,"left");
    }

    dots.on("click",function(){
        var n=$(this).index();
        var m=slides.filter(".active").index();
        if(n>m){
            moveTo(slides.eq(n),"right");
        }else if(n<m){
            moveTo(slides.eq(n),"left");
        }else if(n==m){
            return;
        }
        dots.removeClass("active");
        $(this).addClass("active");
    })
    setInterval(moveRight,2000);

// 小页面顶部下拉菜单
    var xian=$(".nav-left");
    var input_click=$(".input-click");
    var hover=$(".xiala-list-item div");
    var click_num=0;
    xian.on("click",function(){
        // $(this).toggleClass("xian-click");
        click_num++;
        if(click_num%2==1){
            $(".bg").css("height",height);
        }else{
            $(".bg").css("height","auto");
        }
        xian.find(".xian").toggleClass("xian-click");
        $(".xiala-list").toggleClass("block");

        $(".zhezhao").toggleClass("active");
    });
    input_click.on("click",function(){
        hover.addClass("list-none");
        $(".input-show")
            .delay(1000)
            .queue(function(){
                $(this).addClass("active").dequeue();
            })
    });

    //小页面底部的下拉菜单
    var bottom_list=$(".bottom-small .list-click");
    var bottom_lists=$(".bottom-xiala-list");
    var num=0;
    bottom_list.on("click",function(){
        $(this).toggleClass("click");
        $(this).find(".bottom-xiala-list").toggleClass("active");
        $(this).find("h3").toggleClass("active");
    })
});