// Quiz:

1. API stands for-

- Application Programming Interface

2. Fill in the gap. fetch('https://jsonplaceholder.typicode.com/todo/1') .then(response => response ____?___ ).then(json => console.log(json))

- .json()

3. ____?____('https://jsonplaceholder.typicode.com/posts/1')
   .then(res => res.json())
   .then(json => console.log(json));

- fetch

4. What will be the output? 
const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name);

- undefined

5. What is the full form of JSON ? 

- JavaScript Object Notation

6. What do you think about why we use the POST method ?

- to send some data to a server 

7. headers: { 'Content-type':___?___  },
 What will be “Content-Type ” if you want to send data in JSON format?

 - 'application/json'

 8. Which method will you use if you need to update a particular data?

 - Patch

 9. What status code will you get If the API is not available?

 - 404

 10. What status code will you get for a successful API call? 

 - 200