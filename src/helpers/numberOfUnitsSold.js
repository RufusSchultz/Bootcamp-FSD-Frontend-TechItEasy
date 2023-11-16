import {bestSellingTv, inventory} from "../constants/inventory.js";

export function numberOfUnitsSold() {
    let total = bestSellingTv.sold;
    for (let i = 0; i < inventory.length; i++) {
        total += inventory[i].sold;
    }
    return total
}