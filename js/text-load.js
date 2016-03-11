$(document).ready( function() {

    var div1 = "60px";
    var click = "575px";

    //intro

    $(".intro").on("click", function() {
        $(".intro-text").animate({left: "60px"}, 750 );
        $("#click1").animate({left: "575px"}, 750 );

        if (div1 = "60px") {
            div1 = "-1000px";
            click = "-500px";
        }

        else if (div1 = "-1000px") {
            div1 = "60px";
            click = "575px";
        }  

        console.log(div1);
        console.log(click); 
    });

    $("#click1").on("click", function() {
        $(".intro-text").animate({left: "-1000px"}, 750 );
        $("#click1").animate({left: "-500px"}, 750 );       
    });

    //afterwards

    $(".afterwards").on("click", function() {
        $(".afterwards-text").animate({right: "60px"}, 750 );
        $("#click2").animate({right: "575px"}, 750 );      
    });

    $("#click2").on("click", function() {
        $(".afterwards-text").animate({right: "-1000px"}, 750 );
        $("#click2").animate({right: "-500px"}, 750 );    
    });

});