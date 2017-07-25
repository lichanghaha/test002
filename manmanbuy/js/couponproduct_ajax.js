/*
* @Author: Marte
* @Date:   2017-07-22 15:59:14
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-24 15:47:07
*/

$(function () {
    //从地址栏拿到couponId 截取 ？后面的
    var str = location.search.substring(1).split("&");
    //写一个空的对象 备用
    var obj = {};
    //如果数据多就循环遍历
    for(var i = 0 ; i < str.length;i++){
        var temp = str[i].split("=");
        obj[temp[0]] = temp[1];
    }
    //输出一下看看拿没拿到
    // console.log(obj);
    var couponId = obj.couponid;
    var couponTitle = obj.couponTitle;
    // console.log(couponId);
    // console.log(couponTitle);
    //拿到了ok可以写ajax了
    $.ajax({
        url: "http://127.0.0.1:3000/api/getcouponproduct",
        data:{
            couponid:couponId,
            coupontitle:couponTitle,
        },
        success:function (data) {
           // console.log(data);
            $(".head > h1").html(decodeURI(couponTitle)+"优惠券");
           var html = template("youhuilist",data);
            $(".bodya").html(html);

            console.log($(".bodya img"));//一堆img
            $(".bodya img").click(function () {
                console.log($(this));//当前点击img

                $(".maximg").toggle({display:"block"});
               var swiper = new Swiper('.swiper-container');
                })
            }
        })

    $.ajax({
        url: "http://127.0.0.1:3000/api/getcouponproduct",
        data:{
            couponid:couponId,
            coupontitle:couponTitle,
        },
        success:function (data) {
           // console.log(data);
           var html = template("coverlist",data);
           $(".coverimg").html(html);
           $(".maximg").click(function () {
                $(".maximg").toggle({display:"none"});
           });

        }
    })
})
