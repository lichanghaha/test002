/*
* @Author: Marte
* @Date:   2017-07-22 21:04:05
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-23 15:28:50
*/

//


$(function () {
    //先给一个默认值这里写死 因为下面要写活 只能上来先写死 默认0 各部分的ajax都分开写
    var shid = 0;
    var arid = 0;

    //shop的ajax
    $.ajax({
        url:"http://127.0.0.1:3000/api/getgsshop",
        success:function (data) {
            console.log(data);
            var htmls = template("shop",data);
            $(".shopbox").html(htmls);
            //上面拿到数据渲染完毕
            //给selector一个change事件 这是自带的，就是用来判断里面选项改变的。
            $(".shopbox").change(function () {
                //存一下当前改变的选项的id ，因为直接把id写到那个option的value中了，这个value默认就是一个服务器传值的东西，比自定义属性好用多了！在selector中就用value 到时候用的时候直接拿就行
                var shid = this.value;
                console.log(shid);
                //这里面写的ajax是选项改变了，然后渲染下面的页面 写活
                $.ajax({
                    url:"http://127.0.0.1:3000/api/getgsproduct",
                    data:{
                        shopid:shid,
                        areaid:arid
                     },
                    success:function (data) {
                        console.log(data);
                        var htmls = template("pro",data);
                        $(".productajax").html(htmls);
                    }
                })
            });
        }
    })

    //area的ajax
    $.ajax({
        url:"http://127.0.0.1:3000/api/getgsshoparea",
        success:function (data) {
            console.log(data);
            var htmls = template("area",data);
            $(".areabox").html(htmls);
            //这里也是判断这个selector来一个onchange事件 判断他选项的改变
            $(".areabox").change(function () {
                //存一下当前改变的选项的id
                var arid = this.value;
                console.log(arid);
                //再写一个针对当前地区来渲染下面内容的ajax
                 $.ajax({
                    url:"http://127.0.0.1:3000/api/getgsproduct",
                    data:{
                        shopid:shid,
                        areaid:arid
                     },
                    success:function (data) {
                        console.log(data);
                        var htmls = template("pro",data);
                        $(".productajax").html(htmls);
                    }
                })
            });
        }
    })

    //默认商品列表的ajax，也要写活，就是没有改变选项时默认显示的页面数据
    $.ajax({
        url:"http://127.0.0.1:3000/api/getgsproduct",
        data:{
            shopid:shid,
            areaid:arid
         },
        success:function (data) {
            console.log(data);
            var htmls = template("pro",data);
            $(".productajax").html(htmls);
        }
    })


})