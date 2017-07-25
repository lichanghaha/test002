/*
* @Author: Marte
* @Date:   2017-07-22 15:23:38
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-22 15:54:13
*/

$(function () {
    $.ajax({
        url: "http://127.0.0.1:3000/api/getcoupon",
        success:function (data) {
           console.log(data);
           var html = template("youhuiha",data);
           $(".youhui").html(html);
        }
    })
})