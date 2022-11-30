async function onSearchChange(event) {
    const title = (event.target.value)
    const users = await fetch(`http://www.omdbapi.com/?apikey=d5e9a71c&s=${title}`)
    const data = await users.json()
    const movieList = document.querySelector(".movie__list")
    movieList.innerHTML = data.map((movie) => `<div class="movie">
    <figure class="movie__img--wrap">
      <img src="${movie.poster}">
    </figure>
    <p class="movie__title">${movie.title}</p>
</div>`).join("")
}
