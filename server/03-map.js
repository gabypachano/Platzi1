const orders = [
  {
    customerName: "Gaby",
    total: 111,
    delivered: true,
  },
  {
    customerName: "Ale",
    total: 222,
    delivered: false,
  },
  {
    customerName: "Kay",
    total: 333,
    delivered: false,
  },
];

const nuevo = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});

console.log(nuevo);
console.log(orders);
