$(document).ready(function () {
    let textp = $(".text");
    let wrongp = $(".wrong");

    $("#plus").on("click", function () {
        if (textp.css("fontSize") < "50px") {
            if (wrongp.text) {
                wrongp.text("");
            }
            textp.css("font-size", "+=2");
            console.log(textp.css("fontSize"));
        } else {
            wrongp.text("You've reached the maximum value.");
        }
    });

    $("#minus").on("click", function () {
        if (textp.css("fontSize") > "15px") {
            if (wrongp.text) {
                wrongp.text("");
            }
            textp.css("font-size", "-=2");
            console.log(textp.css("fontSize"));
        } else {
            wrongp.text("You've reached the minimum value.");
        }
    });
});
