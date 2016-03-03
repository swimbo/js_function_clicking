var Game = {
  // below are the properties of the game

  // keeps track of the current players
  players: [],
  //
  keeps track of the players turn
  playerTurn: {},
  //set the game board
  board: [],
  // games played
  gamesPlayed: 0,
  // counting the turns in that game
  roundCount: 0,

  //---------------------------------------------------------
  // Now we'll start adding the methods
  //---------------------------------------------------------

  startGame: function(){
    var player1 == new Player("X", "RebeccaPurple", "Jim")
    //now we push that player into the players property of the game using .push
    Game.players.push(player1)
    var player1 == new Player("O", "black", "Bo")
    Game.players.push(player2)
    //now we need to set who goes first
    Game.playerTurn = player1
    //setup our game board
    for (var i = 0; i < 9; i++)
      Game.board.push(new Square(i))
  }
  changeTurn: function(){
    Game.roundCount++
    if(Game.playerTurn == Game.players[0]) {
      Game.playerTurn = Game.players[1]
    } else {
      Game.playerTurn = Game.players[0]
    }
  }
  //set game piece
  setSquare: function(id){
    Game.board[id].symbol = Game.playerTurn.symbol
    Game.board[id].color = Game.playerTurn.color
    Game.playerTurn.pickSquare(Game.board[id])
    //this setsquare method will be called by an event listener and then we will
    //update that game board piece with that player information
    // and then the pickSquare will push it to ?
  }
  // finish game
  endGame: function(){
    Game.gamePlayed++
    Game.newBoard()
  }
  checkWinner: function(){
    if(Game.playerTurn.playerSquares.length >= 3){
      Game.playerTurn.player
    }
  }
  newBoard: function(){
    Game.board = []
    //setup our game board
    for (var i = 0; i < 9; i++)
      Game.board.push(new Square(i))
  }

}

//----------------------------------------------------------
// Now we're outside of the game object
// and we'll start adding the methods for a player
// which will be in the form of a constructor function
//---------------------------------------------------------

function Player(symbol, color, name){
  this.symbol = symbol
  this.color = color
  this.name = name
  this.score = 0
  this.playerSquares = []
}

//----------------------------------------------------------
// Next, we'll add a method to our constructor function
// and we'll start adding the methods for a player
// which will be in the form of a constructor function
//---------------------------------------------------------

// format for this is as follows: Player.prototype.methodName = function (){}

Player.prototype.methodName = function (square){
  this.playerSquares.push(square)
}

// constructor function for a square

function square(id){
  this.symbol = ""
  this.id = id
  this.color = ""
}
