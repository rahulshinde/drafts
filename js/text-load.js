$(document).ready( function() {

    //intro

    $(".intro").on("click", function() {
        $(".intro-text").animate({left: "60px"}, 750 );
        $("#click1").animate({left: "48%"}, 750 );
        // $("#nav-open").fadeToggle("fast", function() {});
        // $(".mobile-nav").slideToggle("fast", function() {});       
    });

    $("#click1").on("click", function() {
        $(".intro-text").animate({left: "-1000px"}, 750 );
        $("#click1").animate({left: "-500px"}, 750 );
        // $("#nav-open").fadeToggle("fast", function() {});
        // $(".mobile-nav").slideToggle("fast", function() {});       
    });

    //afterwards

    $(".afterwards").on("click", function() {
        $(".afterwards-text").animate({right: "60px"}, 750 );
        $("#click2").animate({right: "48%"}, 750 );
        // $("#nav-open").fadeToggle("fast", function() {});
        // $(".mobile-nav").slideToggle("fast", function() {});       
    });

    $("#click2").on("click", function() {
        $(".afterwards-text").animate({right: "-1000px"}, 750 );
        $("#click2").animate({right: "-500px"}, 750 );
        // $("#nav-open").fadeToggle("fast", function() {});
        // $(".mobile-nav").slideToggle("fast", function() {});       
    });

});