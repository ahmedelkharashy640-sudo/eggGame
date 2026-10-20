let $eggs = $(".egg"),
    $brokenEggs = $(".brokenEgg"),
    $basket = $("#Basket"),
    HighestScore = 0,
    currentLeft = $basket.offset().left,
    lifeScore = 5,
    score = 0,
    movingLeft =false,
    movingRight =false;


$(window).on("mousemove touchmove", function (e) {
     e.preventDefault();
    let pageX;

    if (e.type === "touchmove") {
        pageX = e.originalEvent.touches[0].pageX;
    } else {
        pageX = e.pageX;
    }

    let halfOfBasket = $basket.outerWidth(true) / 2;

    if (
        pageX >= halfOfBasket &&
        pageX <= $(window).outerWidth(true) - halfOfBasket + 10
    ) {
        $basket.offset({
            left: pageX - halfOfBasket
        });

        currentLeft = pageX - halfOfBasket;
    }
});

$(window).on("keydown",function (e) {
    if(e.key === "ArrowLeft")
    {
        movingLeft = true;
    }
    else if (e.key === "ArrowRight")
    {
        movingRight = true; 
    }
});

$(window).on("keyup",function (e) {
    if(e.key === "ArrowLeft")
    {
        movingLeft = false;
    }
    else if (e.key === "ArrowRight")
    {
        movingRight = false; 
    }
});


$("#Start").on("click",function (e) {
    resetGame();
    $("#Start, #Start h4").slideUp(1000, function () {
        
        startGame();
    });
})