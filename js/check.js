$(function () {
    // 价格
    $(".price").click(function () {
        var check = $(".check_price").css("display");
        if (check == "none") {
            $(".check_price").css("display", "block");
            $(".check_years").css("display", "none");
            $(".check_chexing").css("display", "none");
            $(".car_container").css("background-color", "#999");
            $(".car_container").css("pointer-events", "none")
            $(".footer_box").css("background-color", "#999");
            $("ul#price_ul").on("click", "li", function () {   
                var price_text = $(this).text();
                $(".price_text").text(price_text);
                $(".check_price").css("display", "none");
                $(".car_container").css("background-color", "#fff");
                $(".footer_box").css("background-color", "rgb(239, 239, 239)");
            });
        } else if (check == "block") {
            $(".check_price").css("display", "none");
            $(".car_container").css("background-color", "#fff");
            $(".footer_box").css("background-color", "#fff");
        }
    }),
    // 年限
    $(".years").click(function () {
        var check = $(".check_years").css("display");
        if (check == "none") {
            $(".check_price").css("display", "none");
            $(".check_years").css("display", "block");
            $(".check_chexing").css("display", "none");
            $(".car_container").css("background-color", "#999");
            $(".car_container").css("pointer-events", "none")
            $(".footer_box").css("background-color", "#999");
            $("ul#years_ul").on("click", "li", function () {   
                var price_text = $(this).text();
                $(".years_text").text(price_text);
                $(".check_years").css("display", "none");
                $(".car_container").css("background-color", "#fff");
                $(".footer_box").css("background-color", "rgb(239, 239, 239)");
            });
        } else if (check == "block") {
            $(".check_years").css("display", "none");
            $(".car_container").css("background-color", "#fff");
            $(".footer_box").css("background-color", "#fff");
        }
    }),
    //车型
    $(".chexing").click(function () {
        var check = $(".check_chexing").css("display");
        if (check == "none") {
            $(".check_price").css("display", "none");
            $(".check_years").css("display", "none");
            $(".check_chexing").css("display", "block");
            $(".car_container").css("background-color", "#999");
            $(".car_container").css("pointer-events", "none")
            $(".footer_box").css("background-color", "#999");
            $("ul#chexing_ul").on("click", "li", function () {   
                var price_text = $(this).text();
                $(".chexing_text").text(price_text);
                $(".check_chexing").css("display", "none");
                $(".car_container").css("background-color", "#fff");
                $(".footer_box").css("background-color", " rgba(0, 0,0, 0.05);");
            });
        } else if (check == "block") {
            $(".check_chexing").css("display", "none");
            $(".car_container").css("background-color", "#fff");
            $(".footer_box").css("background-color", "#fff");
        }
    }),
    
    $(".nav_items").children("div").click(function(){
        var va = $(this).attr("va");
        if(va == "1"){
            $(".nav_item1").addClass("nav_default");
            $(".nav_item2").removeClass("nav_default");
            $(".nav_item3").removeClass("nav_default");
            $(".buy_car_container").css("display", "block");
            $(".dxxc_container").css("display", "none");
        }else if(va == "2"){
            $(".nav_item2").addClass("nav_default");
            $(".nav_item1").removeClass("nav_default");
            $(".nav_item3").removeClass("nav_default");
        }else if(va == "3"){
            $(".nav_item3").addClass("nav_default");
            $(".nav_item1").removeClass("nav_default");
            $(".nav_item2").removeClass("nav_default");
            $(".buy_car_container").css("display", "none");
            $(".dxxc_container").css("display", "block");
        }
    })
    
})