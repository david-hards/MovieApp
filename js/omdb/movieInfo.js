import movieCardSmall from '/js/components/movieCardSmall.js';

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

            data.Search.forEach((movieData) => {
                const movie = new movieCardSmall(movieData); // Instantiate MovieCard with each movie data
                const card = movie.createCardSmall(); // Call createCard method to create the card
                movieCardsContainer.appendChild(card); // Append the card to the container
            });
        })
        .catch((error) => {
            // Log any errors if the fetch fails
            console.error("There was a problem with the fetch operation:", error);
        });
}

export { searchForMoviesByTitle };
