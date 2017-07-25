/*
* @Author: Marte
* @Date:   2017-07-21 16:25:21
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-23 10:42:16
*/

$(function  () {
    //第一个nva的ajax需求是 点击当前的标签 下面内容是相应的产品列表titleid相对应就行了
    //横向滑动列表的ajax
    $.ajax({
        //写接口
        url: "http://127.0.0.1:3000/api/getbaicaijiatitle",
        //写一个回调函数 里面放数据
        success:function (data) {
            //先打印出来data 看看输出来数据没有对不对
            console.log(data);
            //然后用模板引擎渲染进去（script的id，data）
            var html = template("ullist_ajax",data);
            //（script的父盒子的class）
            $(".ull").html(html);
            //渲染出来之后将当前的titleid取出来，因为没在url中 所以直接将数据里的id写在html标签后面的自定义属性中，然后在这里把自定义属性的值取出来备用
            var titleid = $(".ull>div").attr("data-titleid");
            //打印一下看看能打出来吗
            console.log(titleid);//0
            var mySwiper = new Swiper('#topNav', {
                freeMode: true,
                slidesPerView: 'auto'//设置slider容器能够同时显示的slides数量(carousel模式)。 可以设置为number或者 'auto'则自动根据slides的宽度来设定数量。
            });

            mySwiper.on('tap', function(swiper,e) {
                $("#topNav .active").removeClass('active')
                $("#topNav .swiper-slide").eq(swiper.clickedIndex).addClass('active')
            })







                //在这里添加点击事件，因为默认会显示第一个titleid为0 的页面所以现在点击事件之外渲染一个默认的页面。然后在添加点击事件
                 $.ajax({
                    url: "http://127.0.0.1:3000/api/getbaicaijiaproduct",
                    //默认的是0 直接写在这里就好了
                    data: {titleid :0},
                    success:function (data) {
                    console.log(data);
                    //输出正确之后渲染默认显示页面
                    var html = template("mainul_ajax",data);
                    $(".mainul").html(html);
                 }
                })
                 //添加点击事件，这个点击事件一定在nav那个ajax中的回调函数中写，因为是相关联的
            $('.ullist > .ull > div').on('click', function() {
                //var that = this;
                //点击当前的div 保存一下里面的自定义属性titleid的值
                var thisid = $(this).attr("data-titleid");
                //打印出来看看对不
                 console.log(thisid);
                 //在这个点击事件中再写一个动态的ajax来请求真正的相对应id的页面
                 $.ajax({
                    url: "http://127.0.0.1:3000/api/getbaicaijiaproduct",
                    //将我们保存下来的当前点击的盒子的那个自定义属性id拿出来，现在就能派上用场了，因为是点击谁，传过去的id就是啥，这样到后台才能请求到相应的id的页面数据
                    data: {titleid :thisid},
                    success:function (data) {
                    console.log(data);
                    //打印成功这样才能真正渲染动态页面
                    var html = template("mainul_ajax",data);
                    $(".mainul").html(html);
                 }
                })
            })
        }
    })
})