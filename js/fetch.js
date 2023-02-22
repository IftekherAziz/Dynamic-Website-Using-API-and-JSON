// .json() returns a promise, so we can chain it with .then()

/* fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json)); 
  
*/


// To work with button we need to create a function and call it in the button

function loadData () {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}