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

const innerJoinFistMethod = (arrayA, arrayB) => {
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

    return Array.from(innerJoinMap.values());
}



console.log(JSON.stringify(innerJoinArray));

/* ---------------------------------------------------------------------------------------------- */

const arrayC = [
    { id: 4, name: "Dani" },
    { id: 1, name: "David" },
    { id: 2, name: "John" },
    { id: 3, name: "Matt" },
];

const arrayD = [
    { id: 5, name: "Pepe", position: "1" },
    { id: 6, name: "Jose", position: "2" },
    { id: 2, name: "John", position: "2" },
    { id: 3, name: "Matt", position: "2" },
];

const elementsCNotInD = arrayC.filter(
    ({ id: idArrayC }) => arrayD.every(
        ({ id: idArrayD }) => idArrayC !== idArrayD )
);

const newArrJoined = arrayD.concat(elementsCNotInD).map(
    (arrayItem) => arrayItem.position ? arrayItem : { ...arrayItem, position: null }
);

console.log(JSON.stringify(newArrJoined));