const words = ["spray", "limit", "elite", "exuberant"];

// Con un ciclo for:

const newArray = [];
for (let index = 0; index < words.length; index++) {
  const item = words[index];
  if (item.length >= 5) {
    newArray.push(item);
  }
}

// Con el método filter

const nuevo = words.filter((item) => item.length >= 6);

///

// Ejemplo con Filter

const array = ["Amorcito", "Corazon", "Sol", "Alma"];

export function filterByLength(array) {
  return array.filter((item) => item.length >= 4);
}

console.log(filterByLength(array));

//

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
  {
    customerName: "Keky",
    total: 444,
    delivered: false,
  },
];

const ordersFiltered = orders.filter((item) => !item.delivered);

const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};
