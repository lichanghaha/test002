/*
* @Author: Marte
* @Date:   2017-07-16 20:33:00
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-18 14:28:28
*/

$(function () {
     $.ajax({
        //接口写上
        url:"http://127.0.0.1:3000/api/getcategorytitle",
        success:function (data) {
            //将接收过来的数据打印出来看拿到了什么
            console.log(data);
            //用模板将script的id，data 写在script上面的那个盒子中渲染出来
            var html = template("boxlist",data);
            $(".main").html(html);

            //给箭头添加点击事件，点击哪一个要先存一个id（传来的数据中有）this=that,id存到临时的变量中 然后打印一下看看这个id出来了没
            $('.list_top > h4 > a').on('click', function() {
                var that = this;
                 var titleId = this.id;
                 console.log(titleId);
                 /*list start*/
                 //给this一个自定义属性，判断一下是否被展开，如果展开就合上。
                $(that).parent().parent().next().toggle(200);
                 //
                 // 写下面小列表的ajax 写到点击事件中，因为点击标题之后这个小ajax才会生成 请求数据 并渲染至页面。ajax是异步。
                $.ajax({
                    url:"http://127.0.0.1:3000/api/getcategory",
                    data:{titleid:parseInt(titleId)},
                    success:function (data) {
                        console.log(data);
                        var html = template("mixlist",data);
                        // console.log(html);
                        $(that).parent().parent().next().html(html);
                        // console.log($(that).parent().parent().next());
                    }
                })
            });
        }
    })
})