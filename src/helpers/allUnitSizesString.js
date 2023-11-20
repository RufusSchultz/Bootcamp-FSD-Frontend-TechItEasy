export function allUnitSizesString(object) {
    let string = "";
    for (let i = 0; i < object.availableSizes.length; i++) {
        if (i === object.availableSizes.length -1) {
            string += `${object.availableSizes[i]} inch (${Math.round(object.availableSizes[i] * 2.54)} cm)`
        } else {
            string += `${object.availableSizes[i]} inch (${Math.round(object.availableSizes[i] * 2.54)} cm) | `
        }
    }
    return string;
}
