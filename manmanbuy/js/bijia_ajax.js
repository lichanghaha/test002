/*
* @Author: Marte
* @Date:   2017-07-19 10:51:35
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-19 21:55:50
*/

$(function  () {
    //先从地址栏获取到？后面的字符串 并且去掉&
    //
    var producturl = location.search.substring(1).split("&");
    console.log(producturl);
    // 写一个空对象，为了装我们字符串转成的对象
    var obj = {};
    // //只需要拿到一个id 所以不用循环遍历
    var temp = producturl[0].split("=");
    obj[temp[0]]=temp[1];
    //输出一下看看我们拿没拿到id数
    console.log(obj);
    //拿到了就存起来
    var productid = obj.productid;
    console.log(productid);

    $.ajax({
        url:"http://127.0.0.1:3000/api/getproduct",
        data:{"productid":productid},
        success:function(data){
            console.log(data);
            var html = template("tabll",data);
           // console.log(html);
            $(".mainproduct").html(html);

            var categoryid = data.result[0].categoryId;
            $.ajax({
                url: "http://127.0.0.1:3000/api/getcategorybyid",
                data:{"categoryid":categoryid},
                success:function (data) {
                    $(".tv1").html(data.result[0].category+"&nbsp;>");
                    console.log(data);
                }

            });

        }
    })


    $.ajax({
        url:"http://127.0.0.1:3000/api/getproductcom",
        data:{"productid":productid},
        success:function(data){
             console.log(data);
            var html = template("plid",data);
            /*console.log(html);*/
            $(".pingjia").html(html);
        }
    })


















})