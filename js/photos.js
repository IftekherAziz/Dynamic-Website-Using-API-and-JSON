function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) => displayPhotos(data));
}
loadPhotos();

function displayPhotos(data) {
    const photoContainer = document.getElementById("photo-container");
    for (const photo of data) {
      const div = document.createElement("div");
      div.classList.add("photo");
      div.innerHTML = `
              <h4 class="photo-id">ID: ${photo.id}</h4>
              <h4 class="photo-title">Title: ${photo.title}</h4>
              <img class="photo" src="${photo.url}" alt="${photo.title}">
          `;
      photoContainer.appendChild(div);
    }
  }