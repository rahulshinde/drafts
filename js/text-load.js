$(document).ready( function() {

    //intro

    $(".intro").on("click", function() {
        $(".intro-text").animate({left: "60px"}, 750 );
        // $("#nav-open").fadeToggle("fast", function() {});
        // $(".mobile-nav").slideToggle("fast", function() {});       
    });

    //afterwards

    $(".afterwards").on("click", function() {
        $(".afterwards-text").animate({right: "60px"}, 750 );
        // $("#nav-open").fadeToggle("fast", function() {});
        // $(".mobile-nav").slideToggle("fast", function() {});       
    });

});