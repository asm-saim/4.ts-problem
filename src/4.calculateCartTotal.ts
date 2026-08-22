interface Product {
  name: string;
  price: number;
}

const calculateCartTotal = (products: Product[]): number => {
  //   let total = 0;
  //   for (let product of products) {
  //     total += product.price;
  //   }
  //   return total;

  let total: number = products.reduce((acc: number, item: Product) => acc + item.price, 0);

  return total;
};

// const products: Product[] = [];

const products = [
  { name: "Keyboard", price: 1500 },
  { name: "Mouse", price: 800 },
  { name: "USB Cable", price: 300 },
];

console.log(calculateCartTotal(products));
