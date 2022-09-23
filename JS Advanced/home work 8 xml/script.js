
async function getData() {
    
    const name = document.querySelector('#first_serch_fild').value;
    // const url_for_serch = `https://www.omdbapi.com/?apikey=1a09f488&s=${name}&plot=ful`;
    const url_for_serch = `http://www.omdbapi.com/?apikey=1a09f488&s=${name}&plot=full`;
    
    try {
       
        const response = await fetch(url_for_serch);
        const data = await response.json();

        console.log(data.Search);
        let dataArray = data.Search;
        
        showMovies(dataArray);

    } catch (e) {
        console.log(e);
    }
}

const getSerch = document.querySelector('.btn-get_by_serch');
getSerch.addEventListener('click', ()=> {

    getData();

});

function showMovies(obj) {
    const main = document.querySelector('.main_section');
    main.innerHTML = '';

   obj.forEach( movie => {
        
        const {Poster, Title, Year, imdbID, Plot} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${Poster}" alt="${Title}">
            <div class="movie_info">
                <h2>${Title}</h2>
                <span class="year">Year of release: ${Year}</span> <br>
                <span class="id">IMDb ID: ${imdbID}</span>
            </div>
            <div class="overview">
                <h3>Overview :</h3>
                <p>${Plot}</p>
                <br/> 
                <button class="know_more" id="${imdbID}">More...</button
            </div>
            `;
        main.appendChild(movieEl);
    });
}

