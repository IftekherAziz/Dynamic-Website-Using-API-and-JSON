function loadTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => displayTodos(data));
}
loadTodos();

/* ----------------------------------------------------------------------- */

function displayTodos(todos) {
    // get the todo container
    const todoContainer = document.getElementById("todo-container");
    for(const todo of todos){
        // create a div element
       const todoDiv = document.createElement("div");
         todoDiv.classList.add("todo");
         // set the innerHTML of the div element
            todoDiv.innerHTML = `
            <p>User: ${todo.userId}</p>
            <p>Status: ${todo.completed === true ? 'Completed' : 'Not Complete'}</p>
            <h4>${todo.title}</h4>
            
            `;
        // append the div element to the todo container
        todoContainer.appendChild(todoDiv);
    }
}
