function add(a, b) {
    let sum = a + b;
    return sum;
}
const sub = (a, b) => {
    let diff = 0;
    if (a >= b) {
        diff = a - b;
    }
    else {
        diff = b - a;
    }
    return diff;
}
const mul = (a, b) => {
    let product = a * b;
    return product
}
module.exports = { add, sub, mul }