// Path for retrieving images
const imagePrefix = 'https://image.tmdb.org/t/p/original';

class MovieCardLarge {
    constructor(movie) {
        this.movie = movie;
    }

    createCardLarge() {
        const { backdrop_path, budget, id, overview, release_date, revenue, runtime, tagline, title, vote_average } = this.movie;

        // Create main movie card container
        const card = document.createElement('div');
        card.classList.add('movie-card-large'); // Adjust class name as needed

        // Title element
        const movieTitle = document.createElement('h2');
        movieTitle.textContent = title;
        movieTitle.classList.add('large-card-title');

        // Tagline element
        const movieTagline = document.createElement('p');
        movieTagline.textContent = tagline;
        movieTagline.style.fontStyle = 'italic';
        movieTagline.classList.add('large-card-tagline');

        // Year element
        const movieYear = document.createElement('p');
        //movieYear.textContent = release_date.substring(0, 4);
        movieYear.textContent = release_date.substring(0, 4);
        movieYear.classList.add('large-card-year');

        // Runtime element
        const movieRuntime = document.createElement('p');
        movieRuntime.textContent = `${runtime} mins`;
        movieRuntime.classList.add('large-card-runtime');

        // Score element
        const movieScore = document.createElement('p');
        // Format the vote_average to 1 decimal place
        const formattedVoteAverage = parseFloat(vote_average).toFixed(1);
        movieScore.textContent = 'Rating: ' + formattedVoteAverage;
        movieScore.classList.add('large-card-score');

        // Summary element
        const movieSummary = document.createElement('p');
        movieSummary.textContent = overview;
        movieSummary.classList.add('large-card-summary');

        // Backdrop image element
        const backdropImage = document.createElement('img');
        backdropImage.src = imagePrefix + backdrop_path;
        backdropImage.alt = `${title} backdrop`;
        backdropImage.classList.add('large-card-backdrop');

        // Add button
        const addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.classList.add('large-card-btn-add');
        addButton.addEventListener('click', () => {
            console.log(`Add button was clicked for ${id} ${title}`);
        });

        // // ID element
        // const movieId = document.createElement('p');
        // movieId.textContent = 'Movie ID: ' + id;
        // movieId.classList.add('large-card-id');
        //
        // // Budget element
        // const movieBudget = document.createElement('p');
        // movieBudget.textContent = `Budget: $${budget}`; // Format budget if needed
        // movieBudget.classList.add('large-card-budget');
        //
        // // Revenue element
        // const movieRevenue = document.createElement('p');
        // movieRevenue.textContent = `Revenue: $${revenue}`; // Format revenue if needed
        // movieRevenue.classList.add('large-card-revenue');

        // Append elements to the card
        card.appendChild(movieTitle);
        card.appendChild(movieYear);
        //card.appendChild(movieId);
        card.appendChild(movieScore);
        card.appendChild(movieSummary);
        card.appendChild(movieRuntime);
        card.appendChild(movieTagline);
        //card.appendChild(movieBudget);
        //card.appendChild(movieRevenue);
        card.appendChild(addButton)
        //card.appendChild(backdropImage);

        return card; // Return the created card element
    }
}

export default MovieCardLarge; // Export the class as default
