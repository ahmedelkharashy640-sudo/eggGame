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
    console.log(e.pageX, e.pageY);

    let halfOfBasket = $("#Basket").outerWidth(true) /2;
    if (e.pageX >= halfOfBasket && e.pageX <= ($(window).outerWidth(true) - (halfOfBasket - 10))) {
        
        $('#Basket').offset({
            left : e.pageX - halfOfBasket,

        });
        currentLeft = e.pageX - halfOfBasket;
    };
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