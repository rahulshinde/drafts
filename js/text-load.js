$(document).ready( function() {

    //intro

    $(".intro").on("click", function() {
        $(".intro-text").animate({left: "60px"}, 750 );
        $("#click1").animate({left: "575px"}, 750 );
        $(".intro-close").toggle();
    });

    $(".intro-close").on("click", function() {
        $(".intro-text").animate({left: "-1000px"}, 750 );
        $("#click1").animate({left: "-500px"}, 750 );
        $(".intro-close").toggle();       
    });

    $("#click1").on("click", function() {
        $(".intro-text").animate({left: "-1000px"}, 750 );
        $("#click1").animate({left: "-500px"}, 750 );
        $(".intro-close").toggle();       
    });

    //afterwards

    $(".afterwards").on("click", function() {
        $(".afterwards-text").animate({right: "60px"}, 750 );
        $("#click2").animate({right: "575px"}, 750 );
        $(".afterwards-close").toggle();      
    });

    $(".afterwards-close").on("click", function() {
        $(".afterwards-text").animate({right: "-1000px"}, 750 );
        $("#click2").animate({right: "-500px"}, 750 );
        $(".afterwards-close").toggle();   
    });

    $("#click2").on("click", function() {
        $(".afterwards-text").animate({right: "-1000px"}, 750 );
        $("#click2").animate({right: "-500px"}, 750 );
        $(".afterwards-close").toggle();   
    });

});