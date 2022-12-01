const movieList = document.querySelector(".movie__list")
const results = document.querySelector(".movie__search")


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
    <img src="${movie.Poster}"> 
  </figure> 
  <p class="movie__title">${movie.Title}</p>
</div>`
}

function result(title) {
  results.innerHTML = `Search Results For ${title}`
}