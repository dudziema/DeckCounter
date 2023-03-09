function countFullDecks(cards) {
  const deck = {
    WPIK: 0,
    WKIE: 0,
    WTRE: 0,
    WKAR: 0,
    DPIK: 0,
    DKIE: 0,
    DTRE: 0,
    DKAR: 0,
    KPIK: 0,
    KKIE: 0,
    KTRE: 0,
    KKAR: 0,
    APIK: 0,
    AKIE: 0,
    ATRE: 0,
    AKAR: 0,
  }

  cards.forEach(card => {
    deck[card]++
  })

  let fullDecksCount = deck.WPIK // choose any card count from the deck

  for (const card in deck) {
    const count = deck[card]
    if (count < fullDecksCount) {
      fullDecksCount = count
    }
  }

  return fullDecksCount
}

const cards = ['WPIK', 'WKIE', 'WTRE', 'WTRE', 'WTRE', 'WKAR', 'DPIK', 'DKIE', 'DTRE', 'DKAR',
  'KPIK', 'KKIE', 'KTRE', 'KKAR', 'APIK', 'AKIE', 'ATRE', 'AKAR']

const fullDecks = countFullDecks(cards)
console.log(`Number of full decks: ${fullDecks}`)
