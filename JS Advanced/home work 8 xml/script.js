
    const more_info = `https://www.omdbapi.com/?apikey=1a09f488&s=${Title}&plot=full`;

async function getData() {
    
    const name = document.querySelector('#first_serch_fild').value;
    const url_for_serch = `https://www.omdbapi.com/?apikey=1a09f488&s=${name}`;
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
        
        const {Poster, Title, Year, imdbID, overview, id} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
             <img src="${Poster}" alt="${Title}">
            <div class="movie-info">
                <h3>${Title}</h3>
                <span class="yers">Year of release: ${Year}</span> <br>
                <span class="yers">IMDb ID: ${imdbID}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
                <br/> 
                <button class="know_more" id="${id}">More...</button
            </div>
        
        `;
        main.appendChild(movieEl);
    });
}

