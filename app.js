(function() {
  'use strict';
  console.log('Tic Tac Toe')
  //Create a player turn variable
  var playerTurn = true
  //Select all boxes with class box
  var boxes = document.querySelectorAll('.box')
  // loop through the boxes and add click event listener



  for(var i = 0; i <  boxes.length; i++){
    boxes[i].addEventListener('click',changeBackgroundColor)
  }
  function changeBackgroundColor(){
    console.log('the box clicked:',this) //"this" points to who is calling the function, which in this case is the "boxes[i]" above.

    if(playerTurn){
        console.log('Player 1 turn')
        this.className += ' player1'
        checkWinner('player1')
    }
    else{
        console.log('Player 2 turn')
        this.className += ' player2'
        checkWinner('player2')
      }
    //Switch playerTurn
    playerTurn = !playerTurn
    //remove click event listener
    this.removeEventListener('click',changeBackgroundColor)
  }

  //-------------------------------------------------------------------
  // Win checking function that pushes all clicked boxes into an array and
  // then checks whether or not they've won.
  //-------------------------------------------------------------------
  function checkWinner(player){
      var playedBoxes = document.querySelectorAll('.' + player)
      console.log('.' + player)
      console.log('Checking for winner' + player + ": ", playedBoxes)
      var clicked = []

      for(var i = 0; i < playedBoxes.length; i++){
        console.log(playedBoxes[i])
        clicked.push(playedBoxes[i].id)
      }
  }
      // Checking to see what this function is putting out:
      console.log(clicked)

    //-------------------------------------------------------------------
    // Listing out all the possible winning scenarios and setting them
    // variables so I can easily reference them
    //-------------------------------------------------------------------

    var Win1 = ["box1", "box2", "box3"]
    var Win2 = ["box4", "box5", "box6"]
    var Win3 = ["box7", "box8", "box9"]
    var Win4 = ["box1", "box4", "box7"]
    var Win5 = ["box2", "box5", "box8"]
    var Win6 = ["box3", "box6", "box9"]
    var Win7 = ["box1", "box5", "box9"]
    var Win8 = ["box3", "box2", "box6"]

    //-------------------------------------------------------------------
    // Checking each winning scenario to see if it matches the current state
    //-------------------------------------------------------------------

    function winloop()

    //-------------------------------------------------------------------
    // A function to iterate through the various Win options
    //-------------------------------------------------------------------

    // var ifelse = function(winloop)
    // }

    function winloop(){
      for (var i = 1; i < 9, i++)
      var winNumb = "Win" + i
      console.log(playedBoxes[i])
      if(clicked === "Win"+[i]){
        alert(player + " wins!")
      }
      else  if(clicked === "Win"+(i+1)){
          alert(player + " wins!")
      }
    }


  }

}());
