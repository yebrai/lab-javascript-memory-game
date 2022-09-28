class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = []
    this.pairsGuessed = []
  }

  shuffleCards() {
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed.push(card1)
      return true

  } else {this.pairsClicked.push(card1)}
  return false
  }
  

  checkIfFinished() {
    if (pairsGuessed.length >= cards.length) {
      return end
    }
  }
}
