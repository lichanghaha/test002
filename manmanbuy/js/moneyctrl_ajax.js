$(function () {
    /*product start*/
    var pageid = "";
    $.ajax({
        url:"http://127.0.0.1:3000/api/getmoneyctrl",
        data:{pageid:parseInt(pageid)},
        success:function (data) {
            console.log(data);
            var html = template("prolist",data);
            $(".product_list").html(html);
            console.log(html);

        }
    })
})
