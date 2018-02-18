
function badget() {
    $(".badget").hover(function () {
        console.log(this);
        $(this).find("img").fadeIn().css({ 'height': '350px' });
        $(this).find("p").fadeIn().css({ 'width': 'calc(100% - 60px)', "background-color": "#443857", "color": "white", "padding": "5px 0", "font-size": "20px" });
    },
        function () {
            $(this).find("img").css({ 'height': '300px' });
            $(this).find("p").css({ 'width': 'calc(100% - 80px)', "background-color": "white", "color": "#337ab7", "padding": "5px 0", "font-size": "14px" });
        }).click(function () {
            $(this).parent().find(".content").slideToggle("slow");
        });

};

function validateFields() {
    $("#inputName, #inputEmail, #inputSubject, #inputMesg").on("keyup", function () {
        if (!this.checkValidity() && this.innerHtml == "") {
            $(this).css({ "border-color": " #ccc", "background-color": "#fff" });
            $(this).parent().find(".error-field").hide();
            $(this).parent().parent().parent().find(".form-group").css({"margin-bottom":"15px"});
        }
        else if (!this.checkValidity() && !this.value == "") {
            $(this).css({ "border-color": " #900", "background-color": "#FDD" });
            $(this).parent().find(".error-field").show();
            $(this).parent().parent().parent().find(".form-group").css({"margin-bottom":"0"});
        }
        else {
            $(this).css({ "border-color": " #ccc", "background-color": "#fff" });
            $(this).parent().find(".error-field").hide();
            $(this).parent().parent().parent().find(".form-group").css({"margin-bottom":"15px"});
        }

    });
};



