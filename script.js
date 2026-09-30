$(document).ready(function () {

    $("#myCarousel").carousel();

    $(".right").click(function () {
        $("#myCarousel").carousel("next");
    });

    $(".left").click(function () {
        $("#myCarousel").carousel("prev");
    });

});