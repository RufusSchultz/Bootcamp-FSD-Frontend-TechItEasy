import {inventory} from "../constants/inventory.js";

export function totalStockPurchased() {
    let total = 0;
    for (let i = 0; i < inventory.length; i++) {
        total += inventory[i].originalStock;
    }
    return total
}