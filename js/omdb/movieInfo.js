import movieCardSmall from '/js/components/movieCardSmall.js';
import movieCardLarge from '/js/components/movieCardLarge.js';


const apiKey = "af3045bd";

function searchForMoviesByTitle(title) {
    console.log("searchForTitle called");
    console.log(`Title is ${title}`);
    let url = `https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`;
    fetch(url)
        .then((response) => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            // Parse the JSON data
            return response.json();
        })
        .then((data) => {
            console.log(data);

            const movieCardsContainer = document.getElementById('search-results-container');
            movieCardsContainer.innerHTML = '';

            data.Search.forEach((data) => {
                const movie = new movieCardSmall(data); // Instantiate MovieCard with each movie data
                const card = movie.createCardSmall(); // Call createCard method to create the card
                movieCardsContainer.appendChild(card); // Append the card to the container
            });
        })
        .catch((error) => {
            // Log any errors if the fetch fails
            console.error("There was a problem with the fetch operation:", error);
        });
}

async function searchForMovieByID(id) {
    console.log("searchForMovieByID called");
    console.log(`ID is ${id}`);
    let url = `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error("Network response was not ok");
        }
        const data = await response.json();
        console.log('Movie Data:', data);

        const movieCardsContainer = document.getElementById('search-results-container');
        movieCardsContainer.innerHTML = '';

        const movie = new movieCardLarge(data); // Instantiate MovieCardLarge with the movie data
        const card = movie.createCardLarge(); // Create the large card
        movieCardsContainer.appendChild(card); // Append the card to the container
    } catch (error) {
        // Log any errors if the fetch fails
        console.error("There was a problem with the fetch operation:", error);
        return null; // Return null or handle error as needed
    }
}

export { searchForMovieByID, searchForMoviesByTitle };

