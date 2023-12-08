'use strict'

let userInput = document.querySelector('#s');
const result = document.querySelector('#result');
const butt = document.querySelector('button');

async function getInfo() {

const api = "https://www.omdbapi.com/?apikey=a2b07930&s=" + userInput.value;
let res = await (await fetch(api)).json();
    res.Search.forEach(film => {
        showInfo(film);
    });
}

butt.addEventListener('click', function () {
    clearPosters();    
    getInfo();  
})

function showInfo(film) {
        const searchResult = document.querySelector('#posters'); 
        const t = document.querySelector('#fragment');
        const titleText = t.content.querySelector('#title');
              titleText.textContent = film.Title;
        const yearText = t.content.querySelector('#year');
              yearText.textContent = film.Year;
        const filmPoster = t.content.querySelector('#img');
              filmPoster.src = film.Poster;
        searchResult.append(t.content.cloneNode(true));      
}
function clearPosters() {
    const article = document.getElementById("posters");
    while(article.firstChild){
    article.removeChild(article.firstChild);
}
}
