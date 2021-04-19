let userSearch = document.getElementById("userSearch")

function getFilmName() {
    getFilm()
}

function getFilm() {

    fetch(`https://api.jikan.moe/v3/search/anime?q=${userSearch.value}`)
    fetch(`https://api.jikan.moe/v3/search/anime?q=${userSearch.value}`)
        .then((response) => response.json())
        .then((data) => {
            let listFilm = document.getElementsByClassName("film__item")
            let filmData = data.results

            for (let i = 0; i < listFilm.length; i++) {
                listFilm[i].innerHTML =
                    `                              
                    <div class="film__thumb">
                    <img src="${filmData[i].image_url}" alt="poster">
                </div>
                <div class="film__meta">
                    <div class="film__title">
                    ${filmData[i].title.toUpperCase()}
                    </div>
                    <div class="film__desc">
                        <div class="film__time">${filmData[i].episodes} Eps</div>
                        <div class="film__tag"><i class="fas fa-bookmark"></i> Action, Adventure</div>
                    </div>
                `
            }
        })
}