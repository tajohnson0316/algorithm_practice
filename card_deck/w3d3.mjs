import { suits, ranks, emojis } from "./cards.mjs";

/* 
  Deck of Cards

  From the imported arrays, create a function that
  builds a deck of cards. The deck will be a one-
  dimensional array of objects, such that each object
  represents one card in the deck.

  Example card: { suit: 'hearts', rank: '2' };
  
  Bonus: Use the included emoji matrix array to add
  a third property to each card.

  Example card with emoji property:
  { suit: 'hearts', rank: '2', emoji: '🂲' };
*/

function buildDeck(suits, ranks, emojis) {
  var deck = [];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
      const card = { suit: suits[i], rank: ranks[j], emoji: emojis[i][j] };
      deck.push(card);
    }
  }
  return deck;
}

/* 
  Shuffle
  
  Using the built deck, create a shuffle function
  implementing the Fisher-Yates shuffle algorithm.
  Return the deck after the shuffle.
  see: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
*/

function shuffleDeck(deck) {
  // assume deck has 52 values
  for (var i = 0; i < deck.length - 2; i++) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
}

var newDeck = buildDeck(suits, ranks, emojis);
newDeck = shuffleDeck(newDeck);
for (var i = 0; i < newDeck.length; i++) {
  var string = JSON.stringify(newDeck[i]);
  console.log(string);
}
