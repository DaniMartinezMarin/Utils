people = [
    { id: 1, name: "Dani", carid: 1 },
    { id: 2, name: "Pepe", carid: 1 },
    { id: 3, name: "Jose", carid: 2 },
];

cars = [
    { id: 1, name: "Ford Fiesta", color: "blue" },
    { id: 2, name: "Ferrari", color: "red" },
    { id: 3, name: "Seat Ibiza", color: "white" },
];


const leftJoin = (objArr1, objArr2, key1, key2) => {

    return objArr1.map(
        anObj1 => (
            {
                ...objArr2.find( anObj2 => anObj1[key1] === anObj2[key2] ), ...anObj1
            }
        )
    );
}
