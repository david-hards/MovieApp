class newMovieCard {
    constructor(movie) {
        this.movie = movie;
    }

    createCard() {
        const { backdrop_path, id, overview, release_date, title, movie_score } = this.movie;

        // Create main movie card container
        const card = document.createElement('div');
        card.classList.add('movie-card');

        // Title element
        const movieTitle = document.createElement('h2');
        movieTitle.textContent = title;
        movieTitle.classList.add('card-title');

        // Year element
        const year = document.createElement('p');
        year.textContent = release_date.substring(0, 4);
        year.classList.add('card-year');

        // Score element
        const score = document.createElement('p');
        score.textContent = movie_score;
        score.classList.add('card-score');

        // Score element
        const summary = document.createElement('p');
        summary.textContent = overview;
        summary.classList.add('card-score');

        // Image element
        // const image = document.createElement('img');
        // image.src = Poster;
        // image.classList.add('card-image');

        // More info button
        const moreInfoButton = document.createElement('button');
        moreInfoButton.textContent = 'More info';
        moreInfoButton.classList.add('card-btn-more');
        moreInfoButton.addEventListener('click', () => {
            console.log(`More info button was clicked for ${id} ${title}`);
        });

        // Add button
        const addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.classList.add('card-btn-add');
        addButton.addEventListener('click', () => {
            console.log(`Add button was clicked for ${id} ${title}`);
        });

        // Append elements to movie card
        card.appendChild(movieTitle);
        card.appendChild(year);
        card.appendChild(score);
        //card.appendChild(summary);
        card.appendChild(moreInfoButton);
        card.appendChild(addButton);

        console.log(`Title = ${title}, year = ${release_date}, score = ${movie_score}, id = ${id}, summary = ${overview}`);

        return card;
    }
}

export default newMovieCard; // Export the class as default
