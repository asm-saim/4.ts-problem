"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCartTotal = (products) => {
    //   let total = 0;
    //   for (let product of products) {
    //     total += product.price;
    //   }
    //   return total;
    let total = products.reduce((acc, item) => acc + item.price, 0);
    return total;
};
// const products: Product[] = [];
const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 },
];
console.log(calculateCartTotal(products));
//# sourceMappingURL=4.calculateCartTotal.js.map