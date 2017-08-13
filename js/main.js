var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];



var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1])
    alert("You found a match!");
  else
   alert("Sorry, try again.");
}

var flipCard = function() {
  /* don't allow the user to flip the 3rd card */
  if (cardsInPlay.length ===2)
    return;

  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);

  if (cardsInPlay.length === 2)
    checkForMatch();
}

function createBoard() {
  var cardElement;
   for (var i = 0; i < cards.length; i++) {
    cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

function restartGame() {
  cardsInPlay.splice(0,2);
  var gameBoard = document.getElementById('game-board');

  for (var i = 0; i < cards.length; i++)
    gameBoard.childNodes[i].setAttribute('src', 'images/back.png')
}

var restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', restartGame);
createBoard();
