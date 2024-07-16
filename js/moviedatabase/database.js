//imports
import movieCardSmall from "../components/movieCardSmall.js";
import movieCardLarge from "../components/movieCardLarge.js";

const api = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODhhYjZlNjMxMjUxZWI3NTVjZTk0ZDBhMjFlNmJiMCIsIm5iZiI6MTcyMDc1NDEwNC44MjkzNCwic3ViIjoiNjYwOWY5MWVhMGJlMjgwMTYzNzE1OWQ4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.nvkg0W4FUwy3VNBB90LnSo1n0CoAyFjcnvsvAZMezmE';
const urlPrefix = 'https://api.themoviedb.org/3/';

function getMovieSummary(query){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${api}`
        }
    };
    fetch(`${urlPrefix}search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Make sure 'data' is what you expect

            const movieCardsContainer = document.getElementById('search-results-container');
            movieCardsContainer.innerHTML = '';

            data.results.forEach(movieData => {
                const movie = new movieCardSmall(movieData); // Instantiate MovieCard with each movie data
                const card = movie.createCard(); // Call createCard method to create the card
                movieCardsContainer.appendChild(card); // Append the card to the container
            });
        })
        .catch(err => console.error(err));
}

function getFullMovieInfo(id){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${api}`
        }
    };
    fetch(`${urlPrefix}movie/${id}?language=en-US`, options)
        .then(response => response.json())
        .then(data => {
            const movieCardsContainer = document.getElementById('search-results-container');
            movieCardsContainer.innerHTML = '';

            const movie = new movieCardLarge(data); // Instantiate MovieCard with each movie data
            const card = movie.createCardLarge(); // Call createCard method to create the card
            movieCardsContainer.appendChild(card); // Append the card to the container

        })
        .catch(err => console.error(err));
}

export {getMovieSummary};
export {getFullMovieInfo};

