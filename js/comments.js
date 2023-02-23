function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}
loadComment();

function displayComment(data) {
    const comments = document.getElementById('comments-container');
    for (const comment of data) {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
            <h3 class="comment-id">ID: ${comment.id}</h3>
            <h3 class="comment-name">Name: ${comment.name}</h3>
            <h4 class="comment-email">Email: ${comment.email}</h4>
            <p class="comment-body">Body: ${comment.body}</p>
        `;
        comments.appendChild(div);
    }
}