
fetch(`https://www.omdbapi.com/?apikey=2e6aad13&t=${inputEl.value.toLowerCase()}`)
.then(res => res.json())
.then(data => {
    if(!data.Title){
        errorMsg.style.display = "flex"
    }else{
        errorMsg.style.display = "none"
        mainContainer.innerHTML += `<div id="movie-container" class="movie-container"><img src="${data.Poster}"/><p class="badge">${data.Genre}</p><h3>${data.Title}, ${data.Year}</h3> <p>${data.Plot}</p> <small class="rating">Rating IMDB: ${data.imdbRating}</small></div>`
    }
})
.catch(err => console.log(err))
inputEl.value = ""