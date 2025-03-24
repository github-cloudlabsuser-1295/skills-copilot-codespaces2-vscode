const data = [
    [
       { name: 'John', age: 25 },
       { name: 'Jane', age: 30 }
    ],
    [
       { name: 'Bob', age: 40 }
    ]
];

// Extract names from the data array
const names = data.map(group => group.map(person => person.name)).flat();

console.log(names); // Output: ['John', 'Jane', 'Bob']