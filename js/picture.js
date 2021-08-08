const key = "XhfIlavRVFvocHGnqbWHCfS5VIS9ETSz81ar14KqXhg";
const api = `https://api.unsplash.com/photos/random?client_id=${key}`

fetch(api).then(response => response.json()).then(data => {
    const showImg = document.querySelector('.showImg');
    const picture = document.createElement("img");
    picture.src = data.urls.small;
    picture.classList.add('image');
    
    showImg.appendChild(picture);
});