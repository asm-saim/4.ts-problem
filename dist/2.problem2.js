"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStockStatus(stock) {
    if (stock === 0) {
        return "Out of Stock";
    }
    else if (stock >= 1 && stock <= 5) {
        return "Almost Sold Out";
    }
    else if (stock >= 6 && stock <= 20) {
        return "Available";
    }
    return "In Stock";
}
console.log(getStockStatus(12));
// Stock             Status
// 0                 "Out of Stock"
// 1–5               "Almost Sold Out"
// 6–20              "Available"
// More than 20      "In Stock"
//# sourceMappingURL=2.problem2.js.map