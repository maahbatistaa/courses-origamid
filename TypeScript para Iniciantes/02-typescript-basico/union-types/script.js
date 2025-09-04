"use strict";
let total = 200;
function isNumber(value) {
    if (typeof value === "number")
        return true;
    else
        return false;
}
console.log(isNumber("200"));
const button = document.querySelector("button");
function toNumber(value) {
    if (typeof value === "number")
        return value;
    else if (typeof value === "string")
        return Number(value);
    else
        throw "value deve ser um number | string";
}
console.log(toNumber("100"));
