import {inventory} from "../constants/inventory.js";

// Opdracht 1a:
const unitTypeArray = inventory.map((unit) => {
    return unit.type
});

console.log(unitTypeArray);
console.log("--------------------------");

// Opdracht 1b:
const soldOutUnitsArray = inventory.filter((unit) => {
    return unit.originalStock - unit.sold === 0;
});

console.log(soldOutUnitsArray);
console.log("--------------------------");

//Opdracht 1c:
const oneSpecificUnit = inventory.find((unit) => {
    return unit.type === "NH3216SMART";
});

console.log(oneSpecificUnit);
console.log("--------------------------");

//Opdracht 1d:
const unitsSuitedForSports = inventory.map((unit) => {
    return {
        name: unit.brand + " " + unit.name,
        suitable: unit.refreshRate > 99
    };
});

console.log(unitsSuitedForSports);
console.log("--------------------------");

//Opdracht 1e:
const unitsWithAvailableSizeBiggerThan64Inch = inventory.filter((unit) => {
    return unit.availableSizes.some((x) => x > 64);
});

console.log(unitsWithAvailableSizeBiggerThan64Inch);
console.log("--------------------------");

//Opdracht 1f:
const unitHasAmbiLight = inventory.filter((unit) => {
    return unit.options.some((x) => x.name === "ambiLight" && x.applicable === true);
});

console.log(unitHasAmbiLight);