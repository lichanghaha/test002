/*
* @Author: Marte
* @Date:   2017-07-18 15:22:05
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-19 20:51:02
*/




$(function () {
    //先从地址栏拿到？后面的字符串 去掉&
    var str = location.search.substring(1).split("&");
    //事先写一个空对象 以后装我们转成的对象用
    var obj = {};
    //循环遍历这个数组，去掉等号 把索引1的等于0的 这样就变成了对象 a:1
    for (var i = 0; i <str.length; i++) {
        var temp= str[i].split("=");
        obj[temp[0]]=temp[1];
    };
      console.log(obj);
      var categoryId = obj.categoryid;
      var category = obj.category;
      console.log(categoryId);
      //本来没有来个默认1
      var pageid = obj.pageid||1;

    $.ajax({
        url:'http://127.0.0.1:3000/api/getcategorybyid',
        data:{categoryid:categoryId},
        success:function  (data) {
            console.log(data);
            var html = template("tvtitle",data);
            $(".topnav").html(html);
        }
    })



    $.ajax({
        url:'http://127.0.0.1:3000/api/getproductlist',
        data:{categoryid:categoryId,
                pageid:pageid
            },
        success:function  (data) {
            console.log(data);
            //获取当前page
            var pagea =Math.ceil(data.totalCount / data.pagesize);
            //获取到页数 总商品数除以每页多少个
            console.log(pagea);
            //中间部分
            //先写一个空字符串，然后循环遍历每一页动态添加option 动态加进去
            var pageOption = "";
            for (var i =1 ; i<=pagea; i++) {
                //这里的url一定要拼接字符串，因为里面的页数的数字要和真正的页面id联系起来
               var url = "productlist.html?categoryid="+categoryId+"&pageid="+(i);
               //然后把动态生成的option标签活生生的加到刚才生成的空字符串中
               pageOption+="<option value="+url+" "+((i==pageid)?"selected":"")+">第"+(i)+"页</option>";
            };
            //然后将刚才生成的option标签渲染到页面中
            $(".two").html(pageOption);
            //这里是计算点击上一页 pageid就会-1，但是我们下面做个判断 等于1时永远等于1
            var previd = pageid-1;
            //点击下一页是当前页id +1 -0是为了不让+作为拼接使用
            var nextid = pageid - 0 + 1;
            //判断，当当前页面id=1时，就一等于一 不让他在点击上一页了
            if(pageid<=1){
                previd = 1;
            }else if(pageid>=pagea){
                //如果当前页到了最后页了，就让这也一直等于最后页，不让他下一页继续+了
                nextid = pageid;
            }
            console.log(previd);
            //这里是拼接上、下 一页按钮的url地址，手动把pageid加上
            var prvurl = "productlist.html?categoryid="+categoryId+"&pageid="+previd;
            var nexturl = "productlist.html?categoryid="+categoryId+"&pageid="+nextid;
            //因为传过来的数据url地址中没有自带pageid 合适数据中有，那么我们就给a标签的href弄成自定义属性，然后把我们刚才拼接的url加到这个自定义属性href中。
            $(".one > a").attr("href",prvurl);
            $(".three > a").attr("href",nexturl);
            var html = template("tvid",data);
            $(".product").html(html);
        }
    })
})