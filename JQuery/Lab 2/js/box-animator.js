$(document).ready(function () {
    let cube = $(".cube");
    cube.animate({ left: "400px", height: "200px", width: "200px" }, 1000, function () {
        cube.css("background", "green");
    });
    cube.animate({ bottom: "70px", height: "100px", width: "100px" }, 1000, function () {
        cube.css("background", "yellow");
    });
    cube.animate({ left: "0", bottom: "0", height: "200px", width: "200px" }, 1000, function () {
        cube.css("background", "blue");
    });
    cube.animate({ left: "0", top: "0", height: "100px", width: "100px" }, 1000, function () {
        cube.css("background", "yellow");
    });
});
