const arrayA = [
  { id: 4, name: "Greg" },
  { id: 1, name: "David" },
  { id: 2, name: "John" },
  { id: 3, name: "Matt" },
];

const arrayB = [
  { id: 5, name: "Mathew", position: "1" },
  { id: 6, name: "Gracia", position: "2" },
  { id: 2, name: "John", position: "2" },
  { id: 3, name: "Matt", position: "2" },
];

var m = new Map();

a.forEach((x) => {
  x.position = null;
  m.set(x.id, x);
});

b.forEach((x) => {
  let existing = m.get(x.id);
  if (existing == undefined) m.set(x.id, x);
  else Object.assign(existing, x);
});

// Extract resulting combined objects from the Map as an Array
var result = Array.from(m.values());

console.log(JSON.stringify(result));
