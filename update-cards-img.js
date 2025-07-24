// update-cards-img.js
// Adds an 'img' property to each card in cards.json with the correct image URL.
// Usage: node update-cards-img.js

const fs = require('fs');
const path = require('path');

const cardsPath = path.join(__dirname, 'public', 'cards.json');

function padId(id) {
  return id.toString().padStart(3, '0');
}

function main() {
  let cards = JSON.parse(fs.readFileSync(cardsPath, 'utf8'));
  let changed = false;
  for (const card of cards) {
    const padded = padId(card.Id);
    //const imgUrl = `https://yugioh-fm-db.pages.dev/assets/images/cards/card/eu/${padded}.webp`;
    const imgUrl = `https://yugioh-fm-db.pages.dev/assets/images/cards/detail/eu/${padded}.png`;
    if (card.img !== imgUrl) {
      card.desc = imgUrl;
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(cardsPath, JSON.stringify(cards, null, 2), 'utf8');
    console.log('cards.json updated with img property for each card.');
  } else {
    console.log('No changes needed.');
  }
}

main();
