const arrayA = [
    { id: 4, name: "Dani" },
    { id: 1, name: "David" },
    { id: 2, name: "John" },
    { id: 3, name: "Matt" },
];

const arrayB = [
    { id: 5, name: "Pepe", position: "1" },
    { id: 6, name: "Jose", position: "2" },
    { id: 2, name: "John", position: "2" },
    { id: 3, name: "Matt", position: "2" },
];

const innerJoinMap = new Map();

arrayA.forEach( (arrayAItem) => {
    arrayAItem.position = null;
    innerJoinMap.set(arrayAItem.id, arrayAItem);
});

arrayB.forEach( (arrayBItem) => {
    let existing = innerJoinMap.get(arrayBItem.id);
    if (existing == undefined) innerJoinMap.set(arrayBItem.id, arrayBItem);
    else Object.assign(existing, arrayBItem);
});

// Extract resulting combined objects from the Map as an Array
const result = Array.from(innerJoinMap.values());

console.log(JSON.stringify(result));
