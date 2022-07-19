const arrayA = [
    { id: 4, name: "Dani", position: "1" },
    { id: 1, name: "David" },
    { id: 2, name: "John" },
    { id: 3, name: "Matt" },
];

const arrayB = [
    { id: 5, name: "Dani" },
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

/* ---------------------------------------------------------------------------------------------- */

const innerJoinSecondMethod = (arrayA, arrayB) => {
    const elementsANotInB = arrayA.filter(
        ({ id: idArrayA }) => (arrayB.every(
            ({ id: idArrayB }) => idArrayA !== idArrayB ) )
    );

    const arrayJoined = arrayB.concat(elementsANotInB).map(
        (arrayItem) => arrayItem.position ? arrayItem : { ...arrayItem, position: null }
    );

    return arrayJoined;
}

/* ---------------------------------------------------------------------------------------------- */

const innerJoinByKey = (arrayA, arrayB, key) => {
    const innerJoinMap = new Map();

    arrayA.forEach( (arrayAItem) => {
        innerJoinMap.set(arrayAItem[key], arrayAItem);
    });

    arrayB.forEach( (arrayBItem) => {
        let existing = innerJoinMap.get(arrayBItem[key]);
        if (existing == undefined) innerJoinMap.set(arrayBItem[key], arrayBItem);
        else Object.assign(existing, arrayBItem);
    });

    return Array.from(innerJoinMap.values());
}

/*  console.log( innerJoinFistMethod(arrayA, arrayB) ); */
/*console.log( innerJoinSecondMethod(arrayA, arrayB) ); */
console.log( innerJoinByKey(arrayA, arrayB, 'id') );