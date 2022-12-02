const movieList = document.querySelector(".movie__list")
const results = document.querySelector(".movie__search")



function loadingMovies(event) {
  event.pr
}

async function onSearchChange(event) {
    const title = event.target.value
    const users = await fetch(`http://www.omdbapi.com/?apikey=d5e9a71c&s=${title}`)
    const data = await users.json()
    movieList.innerHTML = data.Search.map((movie) => userHTML(movie)).join("") 
    result(title)
} 


function userHTML(movie) {
  return `<div class="movie">
  <figure class="movie__img--wrap">
    <img src="${movie.Poster}" class="movie__img"> 
  </figure> 
  <p class="movie__title gold">${movie.Title}</p>
</div>`
}

function result(title) {
  results.innerHTML = `Search Results For <span class="capitalized gold">${title}</span>`
}
setTimeout(() => {

},1000)