/*
* @Author: Marte
* @Date:   2017-07-16 17:19:28
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-16 20:26:45
*/

/*list start*/
$(function () {
     $.ajax({
        url:"http://127.0.0.1:3000/api/getindexmenu",
        success:function (data) {
            console.log(data);
            var html = template("list",data);
            $(".nav").html(html);

            $('.nav>li:nth-child(8)').on('click', function() {
                    // toggle表示切换当前调用的元素的显示隐藏
                $('.nav>li:nth-last-child(-n+4)').toggle(200);
                return false;//阻止跳转
             });
        }
    })
    /*product start*/
    $.ajax({
        url:"http://127.0.0.1:3000/api/getmoneyctrl",
        success:function (data) {
            console.log(data);
            var html = template("prolist",data);
            $(".product_list").html(html);
        }
    })
})

