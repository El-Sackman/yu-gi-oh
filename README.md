# Yu-Gi-Oh! Forbidden Memories Web Companion

This project is a web-based companion tool for the classic PlayStation game **Yu-Gi-Oh! Forbidden Memories**. The goal is to help players manage their deck, track their card collection, and optimize their strategy by analyzing possible fusions and deck improvements.

## Features

- **Deck Builder**: Set up and manage your current deck.
- **Fusion Checker**: Check your hand for possible card fusions based on the game's fusion rules.
- **Chest Management**: Add cards you win to your chest (collection) and keep track of your growing card pool.
- **Deck Optimization**: Get suggestions for the best cards to add to your deck and which cards to remove, based on fusion chances and the resulting monster's power.
- **Card Database**: Browse all available cards, their stats, and fusion possibilities.

## How It Works

- The app uses a modern Material Design interface for ease of use.
- Card data and fusion rules are loaded from JSON files in the `public/` directory.
- All logic runs in the browser—no server required.

## Getting Started

1. **Clone or Download** this repository.
2. **Open `index.html`** in your web browser.
3. Start building your deck, managing your chest, and optimizing your strategy!

## Project Structure

- `index.html` — Main web page and UI
- `public/cards.json` — Card data
- `public/fusion.json` — Fusion rules
- `public/results.json` — Fusion results
- `public/equips.json` — Equip cards data
- `public/type_stats.js` — Card type stats

## Planned Improvements

- Save/load deck and chest from local storage
- Advanced fusion search and recommendations
- Enemy deck database and duel simulation
- Mobile-friendly enhancements

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your ideas or improvements.

## Disclaimer

This project is a fan-made tool and is not affiliated with Konami or the official Yu-Gi-Oh! franchise. All card data and images are for educational and entertainment purposes only.
