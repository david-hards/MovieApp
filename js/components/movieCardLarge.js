class MovieCardLarge {
    constructor(movie) {
        this.movie = movie;
    }

    createCardLarge() {
        const { Title, Year, imdbID, Metascore, Runtime, imdbRating } = this.movie;

        // Create main movie card container
        const card = document.createElement('div');
        card.classList.add('movie-card');

        const title = document.createElement('h2');
        title.textContent = Title;
        title.classList.add('card-title');

        const year = document.createElement('p');
        year.textContent = `Year: ${Year}`;
        year.classList.add('card-year');

        const imdbId = document.createElement('p');
        imdbId.textContent = `IMDb ID: ${imdbID}`;
        imdbId.classList.add('card-imdb-id');

        const metascore = document.createElement('p');
        metascore.textContent = `Metascore: ${Metascore}`;
        metascore.classList.add('card-metascore');

        const imdbRatingText = document.createElement('p');
        imdbRatingText.textContent = `IMDb Rating: ${imdbRating}`;
        imdbRatingText.classList.add('card-imdb-rating');

        const runtime = document.createElement('p');
        runtime.textContent = `Runtime: ${Runtime}`;
        runtime.classList.add('card-runtime');

        // Append elements to the card
        card.appendChild(title);
        card.appendChild(year);
        card.appendChild(imdbId);
        card.appendChild(metascore);
        card.appendChild(imdbRatingText);
        card.appendChild(runtime);

        return card; // Return the created card element
    }
}

export default MovieCardLarge; // Export the class as default
