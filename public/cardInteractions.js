// cardInteractions.js
// Library for Yu-Gi-Oh card interactions

/**
 * Checks if two cards can fuse.
 * @param {number} cardAId
 * @param {number} cardBId
 * @param {object} fusionData
 * @returns {object|null} Fusion result object or null
 */
function canFuse(cardAId, cardBId, fusionData) {
    if (!fusionData[cardAId]) return null;
    const fusion = fusionData[cardAId].find(f => f.card === cardBId);
    return fusion || null;
}

/**
 * Checks if cardA can equip cardB.
 * @param {number} cardAId
 * @param {number} cardBId
 * @param {object} equipsData
 * @returns {boolean}
 */
function canEquip(cardAId, cardBId, equipsData) {
    return Array.isArray(equipsData[cardAId]) && equipsData[cardAId].includes(cardBId);
}

/**
 * Merges a sequence of cards using fusion/equip rules.
 * @param {number[]} cardIds
 * @param {object[]} cards
 * @param {object} fusionData
 * @param {object} equipsData
 * @returns {object|null} Result card object or null
 */
function merge(cardIds, cards, fusionData, equipsData) {
    if (!Array.isArray(cardIds) || cardIds.length === 0) return null;
    let result = cards.find(c => c.Id === cardIds[0]);
    for (let i = 1; i < cardIds.length; i++) {
        const nextId = cardIds[i];
        // Try fusion
        const fusion = canFuse(result.Id, nextId, fusionData);
        if (fusion) {
            result = cards.find(c => c.Id === fusion.result);
            continue;
        }
        // Try equip
        if (canEquip(result.Id, nextId, equipsData)) {
            // For equip, keep the same card (extend logic if needed)
            continue;
        }
        // If neither, fail
        return null;
    }
    return result;
}

/**
 * Returns all possible fusions/equips in a hand.
 * @param {Array} hand Array of card IDs
 * @param {object[]} cards
 * @param {object} fusionData
 * @param {object} equipsData
 * @returns {Array} Array of possible merges
 */
function getPossibleMerges(hand, cards, fusionData, equipsData) {
    let foundMerges = [];
    for (let i = 0; i < hand.length; ++i) {
        if (!hand[i]) continue;
        const cardA = cards.find(c => c.Id === hand[i]);
        if (!cardA) continue;
        // Fusions
        if (fusionData[cardA.Id]) {
            for (let j = 0; j < hand.length; ++j) {
                if (i === j || !hand[j]) continue;
                const cardB = cards.find(c => c.Id === hand[j]);
                if (!cardB) continue;
                const fusion = canFuse(cardA.Id, cardB.Id, fusionData);
                if (fusion) {
                    const result = cards.find(c => c.Id === fusion.result);
                    if (result && !foundMerges.some(m => m.type==='fusion' && ((m.a===cardA.Id && m.b===cardB.Id) || (m.a===cardB.Id && m.b===cardA.Id)))) {
                        foundMerges.push({type:'fusion', a:cardA.Id, b:cardB.Id, result:result.Id});
                    }
                }
            }
        }
        // Equips
        if (equipsData[cardA.Id]) {
            for (let j = 0; j < hand.length; ++j) {
                if (i === j || !hand[j]) continue;
                const cardB = cards.find(c => c.Id === hand[j]);
                if (!cardB) continue;
                if (canEquip(cardA.Id, cardB.Id, equipsData)) {
                    if (!foundMerges.some(m => m.type==='equip' && ((m.a===cardA.Id && m.b===cardB.Id) || (m.a===cardB.Id && m.b===cardA.Id)))) {
                        foundMerges.push({type:'equip', a:cardA.Id, b:cardB.Id});
                    }
                }
            }
        }
    }
    return foundMerges;
}

// Export functions for use in other scripts
if (typeof window !== 'undefined') {
    window.CardInteractions = {
        canFuse,
        canEquip,
        merge,
        getPossibleMerges
    };
}
