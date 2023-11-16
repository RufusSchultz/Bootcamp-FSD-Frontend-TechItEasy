import {bestSellingTv, inventory} from "../constants/inventory.js";

export function numberOfUnitsSold() {
    let total = 0;
    for (let i = 0; i < inventory.length; i++) {
        total += inventory[i].sold;
    }
    return total + bestSellingTv.sold;
}