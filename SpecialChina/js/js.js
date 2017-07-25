/**
 * Created by Administrator on 2017/5/15 0015.
 */
//猜你喜欢
$(function() {
    //鼠标进入，当前div有cover，兄弟变none
    $(".caibox").mouseover(function() {
        //其他隐藏
        $(this).(".cover").css("display","none");
        //当前显示
        $(this).(".cover").css("display","block");
    });
    //鼠标移开 恢复隐藏
    $(".caibox").mouseout(function() {
        $(".caibox").css("display","none");
    });
});