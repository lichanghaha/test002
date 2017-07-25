/*
* @Author: Marte
* @Date:   2017-07-21 11:40:47
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-21 16:07:01
*/

$(function () {
    //这里需要传一个数据productid 从地址栏拿到，然后截取字符串
    var str = location.search.substring(1).split("&");
    //写一个空对象，用来装以后我们弄好的数据对象
    var obj = {};
    //数据多的话要循环遍历数组，可是现在就需要一个id 所以就不用了直接截取
    //声明一个临时变量存储处理的字符串
    var temp = str[0].split("=");
    obj[temp[0]]=temp[1];
    //输出一下看拿到了吗
    console.log(obj);
    //存一下
    var productid = obj.productid;
    console.log(obj.productid);
    $.ajax({
        url:"http://127.0.0.1:3000/api/getdiscountproduct",
        data:{"productid":productid},
        success:function (data) {
            console.log(data);
            var html = template("discount_ajax",data);
            $(".dis").html(html);
            console.log(html);
        }
    })
})
