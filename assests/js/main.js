let $eggs = $(".egg"),
    $brokenEggs = $(".brokenEgg"),
    $basket = $("#Basket"),
    HighestScore = 0,
    currentLeft = $basket.offset().left,
    lifeScore = 5,
    score = 0,
    movingLeft =false,
    movingRight =false;


$(window).on("mousemove", function (e) {
    moveBasketWithTouch(e.pageX);
});

$(window).on("touchmove", function (e) {
    e.preventDefault();

    let pageX = e.originalEvent.touches[0].pageX;
    moveBasketWithTouch(pageX);
});

function moveBasketWithTouch(pageX) {
    let halfOfBasket = $basket.outerWidth(true) / 2;

    if (
        pageX >= halfOfBasket &&
        pageX <= $(window).width() - halfOfBasket + 10
    ) {
        $basket.offset({
            left: pageX - halfOfBasket
        });

        currentLeft = pageX - halfOfBasket;
    }
}

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

$(".burger").on("click",function () {
    $(this).toggleClass("active");
});

$("#Start").on("click",function (e) {
    resetGame();
    $("#Start, #Start h4").slideUp(1000, function () {
        
        startGame();
    });
})