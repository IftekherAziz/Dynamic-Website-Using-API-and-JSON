const user = { id: 1, name: 'John', age: 25, job: 'Developer' };
//console.log(user);
// {id: 1, name: 'John', age: 25, job: 'Developer'}

/* ----------------------------------------------- */

// JavaScript Object Notation (JSON)
// const json = JSON.stringify(user);
// console.log(json);
// "{"id":1,"name":"John","age":25,"job":"Developer"}"

const shop = {
    owner: 'Aziz Chy',
    address: {
        street: 'Main',
        city: 'Dhaka',
        country: 'BD'
    },
    products: ['Product 1', 'Product 2', 'Product 3'],
    revenew: 5000,
    isOpen: true,
    isNew: false,
};
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);

const shopObj = JSON.parse(shopJson);
console.log(shopObj);

// JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
// JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.