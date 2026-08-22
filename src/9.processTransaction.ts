//Deposit:
interface Deposit {
  type: "deposit";
  amount: number;
}

//Withdraw:
interface Withdraw {
  type: "withdraw";
  amount: number;
}

const processTransaction = (balance: number, transaction: Deposit | Withdraw): number | string => {
  if (transaction.type === "deposit") {
    return balance + transaction.amount;
  }
  if (transaction.type === "withdraw" && transaction.amount <= balance) {
    return balance - transaction.amount;
  }
  return `insufficient balance`;
};

console.log(processTransaction(5000, { type: "deposit", amount: 2000 }));
console.log(processTransaction(5000, { type: "withdraw", amount: 2000 }));
console.log(processTransaction(5000, { type: "withdraw", amount: 7000 }));
