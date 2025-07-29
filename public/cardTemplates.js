// cardTemplates.js
// Abstraction for all possible card HTML templates

const CardTemplates = {
    // Hand card slot
    handCard: function(card, borderColor = '#1976d2') {
        if (!card) return '<div class="slot-inner empty"></div>';
        return `<div class="slot-inner" style="border:3px solid ${borderColor};">
            <img src="${card.img}" alt="" style="width:70px;height:100px;object-fit:contain;display:block;margin:0 auto 4px auto;"/>
            <div style='font-size:0.9em;text-align:center;'>#${card.Id.toString().padStart(3,'0')}</div>
        </div>`;
    },
    // Board card
    boardCard: function(card) {
        return `<div style="position:relative;">
            <img src="${card.img}" alt="${card.Name}" data-card-id="${card.Id}" style="width:70px;height:100px;object-fit:contain;">
            <div style="position:absolute;bottom:0;left:0;width:100%;background:rgba(0,0,0,0.7);color:white;font-size:0.8em;text-align:center;padding:2px 0;">
                ATK/${card.Attack} DEF/${card.Defense}
            </div>
        </div>`;
    },
    // Merge list item (fusion)
    mergeFusion: function(cardA, cardB, result) {
        return `<li class="merge-list-item" data-a="${cardA.Id}" data-b="${cardB.Id}" style="margin-bottom:16px;padding:8px 0;">
            <div style="display:flex;align-items:center;gap:18px;justify-content:flex-start;">
                <div class="merge-card-thumb" data-handid="${cardA.Id}" style='text-align:center;cursor:pointer;'>
                    <div style='font-size:1.2em;font-weight:bold;'>#${cardA.Id.toString().padStart(3,'0')}</div>
                    <img src="${cardA.img}" alt="${cardA.Name}" title="${cardA.Name}" style="height:56px;width:40px;object-fit:contain;border-radius:8px;box-shadow:0 2px 8px rgba(25,118,210,0.10);">
                </div>
                <span style="font-size:2em;">+</span>
                <div class="merge-card-thumb" data-handid="${cardB.Id}" style='text-align:center;cursor:pointer;'>
                    <div style='font-size:1.2em;font-weight:bold;'>#${cardB.Id.toString().padStart(3,'0')}</div>
                    <img src="${cardB.img}" alt="${cardB.Name}" title="${cardB.Name}" style="height:56px;width:40px;object-fit:contain;border-radius:8px;box-shadow:0 2px 8px rgba(25,118,210,0.10);">
                </div>
                <span style="font-size:2em;">→</span>
                <div style='text-align:center;'>
                    <img src="${result.img}" alt="${result.Name}" title="${result.Name}" style="height:80px;width:56px;object-fit:contain;border-radius:10px;border:2px solid #1976d2;box-shadow:0 2px 12px rgba(25,118,210,0.18);">
                    <div style='font-size:1.18em;font-weight:bold;margin-top:2px;'>#${result.Id.toString().padStart(3,'0')}</div>
                    <div style='font-size:1.05em;color:#1976d2;'>ATK/${result.Attack} DEF/${result.Defense}</div>
                </div>
                <span style='margin-left:12px;color:#1976d2;font-weight:bold;'>Fusion</span>
            </div>
        </li>`;
    },
    // Merge list item (equip)
    mergeEquip: function(cardA, cardB) {
        return `<li class="merge-list-item" data-a="${cardA.Id}" data-b="${cardB.Id}" style="margin-bottom:16px;padding:8px 0;">
            <div style="display:flex;align-items:center;gap:18px;justify-content:flex-start;">
                <div class="merge-card-thumb" data-handid="${cardA.Id}" style='text-align:center;cursor:pointer;'>
                    <div style='font-size:1.2em;font-weight:bold;'>#${cardA.Id.toString().padStart(3,'0')}</div>
                    <img src="${cardA.img}" alt="${cardA.Name}" title="${cardA.Name}" style="height:56px;width:40px;object-fit:contain;border-radius:8px;box-shadow:0 2px 8px rgba(255,152,0,0.10);">
                </div>
                <span style="font-size:2em;">+</span>
                <div class="merge-card-thumb" data-handid="${cardB.Id}" style='text-align:center;cursor:pointer;'>
                    <div style='font-size:1.2em;font-weight:bold;'>#${cardB.Id.toString().padStart(3,'0')}</div>
                    <img src="${cardB.img}" alt="${cardB.Name}" title="${cardB.Name}" style="height:56px;width:40px;object-fit:contain;border-radius:8px;box-shadow:0 2px 8px rgba(255,152,0,0.10);">
                </div>
                <span style="font-size:2em;">→</span>
                <span style="font-size:1.25em;color:#ff9800;font-weight:bold;">Equip</span>
            </div>
        </li>`;
    },
    // Graveyard card
    graveyardCard: function(card) {
        return `<li class="collection-item"><img src="${card.img}" alt="" style="height:32px;width:32px;object-fit:contain;margin-right:8px;vertical-align:middle;">#${card.Id.toString().padStart(3,'0')} - ${card.Name}</li>`;
    },
    // Deck card
    deckCard: function(card, count = 1) {
        let badge = count > 1 ? `<span class='badge blue white-text'>x${count}</span>` : '';
        return `<li class="collection-item"><img src="${card.img}" alt="" style="height:32px;width:32px;object-fit:contain;margin-right:8px;vertical-align:middle;">#${card.Id.toString().padStart(3,'0')} - ${card.Name} ${badge}</li>`;
    }
};

if (typeof window !== 'undefined') {
    window.CardTemplates = CardTemplates;
}
