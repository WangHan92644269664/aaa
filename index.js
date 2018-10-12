var c=0;

setInterval(function(){
        c++;
        c=c==2?0:c;
        // 让c号图片显示，兄弟图片隐藏fadeIn淡入 fadeoUT淡出 siblings兄弟节点
        // $("#flash img").eq(c).show.siblings('img').hide();
        $("#flash img").eq(c).fadeIn(200).siblings('img').fadeOut(200);
        $("#flash ul li").eq(c).css('background','#a10000').siblings('li').css('background','#ddd');
    
    },1000)




