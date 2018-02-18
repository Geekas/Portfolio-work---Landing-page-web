
function badget() {
    $(".badget").hover(function () {
        $(this).find("img").fadeIn().css({ 'height': '350px' });
        $(this).find("p").fadeIn().css({ 'width': 'calc(100% - 60px)', "background-color": "#443857", "color": "white", "padding": "5px 0", "font-size": "20px" });
    },
        function () {
            $(this).find("img").css({ 'height': '300px' });
            $(this).find("p").css({ 'width': 'calc(100% - 80px)', "background-color": "white", "color": "#337ab7", "padding": "5px 0", "font-size": "14px" });
        }).click(function(){
            $(this).parent().find(".content").slideToggle("slow");
        });

};
