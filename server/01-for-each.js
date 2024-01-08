const letters = ["a", "b", "c"];

letters.forEach((item) => console.log("con for each", item));

////////

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log("Con ciclo for", element);
}
