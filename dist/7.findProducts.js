"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findProducts = (type, category) => {
    let filteredProducts = type.filter((product) => category === product.category);
    return filteredProducts;
};
const products = [
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" },
];
console.log(findProducts(products, "phone"));
//# sourceMappingURL=7.findProducts.js.map