// Load data dynamically from the API:

/**
 * It fetches the data from the API and displays it on the page.
 */
function loadUser2() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => displayUser2(data));
}
/* ----------------------------------------------------------------------- */
/* 
function displayUser2(data) {
  for(const user of data){
    console.log(user); // this will print the whole object
    console.log(user.name); // this will print the name of the user
    console.log(user.email); // this will print the email of the user
    console.log(user.name,' - ', user.email);
  }
} */

/* ----------------------------------------------------------------------- */

/**
 * It creates a list item for each user in the data array, and appends it to the ul element.
 * @param data - The data that you want to display.
 */

function displayUser2(data) {
    const ul = document.getElementById("users-list");
    for (const user of data) {
        const li = document.createElement("li"); // create a li element
        li.innerText = `Name: ${user.name} -  Email: ${user.email}`; // set the text of the li element
        ul.appendChild(li); // append the li element to the ul element
    }
    }

/* ----------------------------------------------------------------------- */


function deletePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

/* ----------------------------------------------------------------------- */

function patchPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "New Title",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

/* ----------------------------------------------------------------------- */

function postPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "New Title",
      body: "New Body",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}