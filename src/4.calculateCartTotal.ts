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

  let total = products.reduce((acc, item) => acc + item.price, 0);

  return total;
};

const products: Product[] = [];

console.log(calculateCartTotal(products));
