/*
* @Author: Marte
* @Date:   2017-07-24 16:10:27
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-24 16:33:19
*/

$(function () {
    $.ajax({
        url: "http://127.0.0.1:3000/api/getsitenav",
        success:function (data) {
           console.log(data);
           var html = template("shopa",data);
           $(".shopul").html(html);
        }
    })
})