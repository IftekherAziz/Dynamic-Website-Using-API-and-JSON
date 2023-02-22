/**
 * It fetches the data from the URL, then converts it to JSON, then passes it to the displayPosts
 * function.
 */
function loadPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => displayPosts(data));
}
loadPosts();

/* ----------------------------------------------------------------------- */

/**
 * It loops through the data and prints the title and body of each post.
 * @param data - This is the data that we are getting from the API.
 */
/* function displayPosts(data){
    for(const post of data){
        console.log(post); // this will print the whole object
        console.log(post.title); // this will print the name of the user
        console.log(post.body); // this will print the email of the user
        console.log(post.title,' - ', post.body); // this will print the email of the user
    }
    } */

/* ----------------------------------------------------------------------- */

/*

How to show the data on the page dynamically: 
1. Get the container element where you want to display the elements
2. Create the elements that you want to display
3. Set the text of the elements
4. Append the elements to the container element

*/

/* ----------------------------------------------------------------------- */

/**
 * It takes the data from the API and displays it on the page.
 * @param data - The data returned from the API.
 */

function displayPosts(data) {
  const postContainer = document.getElementById("post-container");
  for (const post of data) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
            <h4 class="post-id">ID: ${post.id}</h4>
            <h5 class="post-title">Title: ${post.title}</h5>
            <p class="post-body"><b>Description:</b> ${post.body}</p>
        `;
    postContainer.appendChild(div);
  }
}

/* ----------------------------------------------------------------------- */
