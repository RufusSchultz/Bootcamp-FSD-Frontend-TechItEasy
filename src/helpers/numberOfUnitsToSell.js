import {totalStockPurchased} from "./totalStockPurchased.js";
import {numberOfUnitsSold} from "./numberOfUnitsSold.js";

export function numberOfUnitsToSell() {
    return totalStockPurchased() - numberOfUnitsSold();
}