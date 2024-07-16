//imports
import {getFullMovieInfo} from "../moviedatabase/database.js";

class movieCardSmall {
    constructor(movie) {
        this.movie = movie;
    }

    createCard() {
        const { backdrop_path, id, overview, release_date, title, vote_average } = this.movie;

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
        // Format the vote_average to 1 decimal place
        const formattedVoteAverage = parseFloat(vote_average).toFixed(1);
        score.textContent = 'Rating: ' + formattedVoteAverage;
        score.classList.add('card-score');

        // Summary element
        const summary = document.createElement('p');
        summary.textContent = overview;
        summary.classList.add('card-summary');

        // More info button
        const moreInfoButton = document.createElement('button');
        moreInfoButton.textContent = 'More info';
        moreInfoButton.classList.add('card-btn-more');
        moreInfoButton.addEventListener('click', () => {
            console.log(`More info button was clicked for ${id} ${title}`);
            getFullMovieInfo(id);
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
        card.appendChild(summary);
        card.appendChild(moreInfoButton);
        card.appendChild(addButton);

        //console.log(`Title = ${title}, year = ${release_date}, score = ${vote_average}, id = ${id}, summary = ${overview}`);

        return card;
    }


}

export default movieCardSmall; // Export the class as default
