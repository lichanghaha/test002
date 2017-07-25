/*
* @Author: Marte
* @Date:   2017-07-21 10:20:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-21 15:56:29
*/

$(function () {
    $.ajax({
        url:"http://127.0.0.1:3000/api/getinlanddiscount",
        success:function (data) {
            console.log(data);
            var html = template("discount_listid",data);
            $(".discount_ul").html(html);
            //console.log(html);
        }
    })
})
