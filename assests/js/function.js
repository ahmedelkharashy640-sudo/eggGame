function startGame() {
  moveEgg($eggs[0], Math.random() * 10);
  moveEgg($eggs[1], Math.random() * 10);
  moveEgg($eggs[2], Math.random() * 10);

  isEggHunted($eggs[0]);
  isEggHunted($eggs[1]);
  isEggHunted($eggs[2]);

  let theGame = requestAnimationFrame(startGame);
    moveBasket(); 
  if(lifeScore <= 0)
    {
      cancelAnimationFrame(theGame);
      $("#Start").slideDown(1000);
      $("#Start h3").html(
        `
        <h3>Game Over</h3> 
        <p>Click here <i class="fa-solid fa-rotate-right"></i> to start again</p>
        `
      );
      if(score > HighestScore)
      {
        HighestScore = score ;
        $("#HighestScore").text(HighestScore);
      }
    }
}

function resetGame() {
  backEgg($eggs[0]);
  backEgg($eggs[1]);
  backEgg($eggs[2]);
  lifeScore = 5; 
  $("#LifeScore").text(lifeScore);
  score = 0;
  $(".score").text(score);

}
function moveBasket() {
  if(movingLeft)
  {
    currentLeft -=10;
   
  }
  else if(movingRight)
  {
    currentLeft +=10;
  }
  
  $basket.offset({
    left : currentLeft,
  });
}
function moveEgg(egg, speed) {
  let topOfEgg = $(egg).offset().top,
      distance = (Math.random()) * speed + 1, 
      bottomOfBasket = $("#Basket").offset().top + $("#Basket").outerHeight(true),
      indexOfEgg = $eggs.index(egg);

      if (topOfEgg <= bottomOfBasket) {

          $(egg).offset({
            top : topOfEgg + distance,
          });

      }else 
      {
       if(lifeScore > 0)
       {
         $(egg).offset({
          top : 150,
        })
        $brokenEggs.eq(indexOfEgg).fadeIn(500).delay(500).fadeOut(500);
        $("#LifeScore").text(--lifeScore);
      }
    }
}

function backEgg(egg) {
  $(egg).offset({
            top : 150,
          });
}

function isEggHunted(egg) {
  if(collision(egg, $basket))
  {
    $(".score").text(++score);
    backEgg(egg);
  }
}
function collision(item1, item2) {  // it's a function on 
  let t1 = $(item1).offset().top,
      l1 = $(item1).offset().left,
      r1 = l1 + $(item1).outerWidth(true),
      b1 = t1 + $(item1).outerHeight(true),

      t2 = $(item2).offset().top,
      l2 = $(item2).offset().left,
      r2 = l2 + $(item2).outerWidth(true),
      b2 = t2 + $(item2).outerHeight(true);

      if(b1 < t2 || b2 < t1 || l1 > r2 || r1 < l2)
      {
        return false;
      }
      return true;
}