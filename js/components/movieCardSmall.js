import { searchForMovieByID } from '/js/omdb/movieInfo.js';

class MovieCardSmall {
    constructor(movie) {
        this.movie = movie;
    }

    createCardSmall() {
        const { Title, Year, imdbID, Poster } = this.movie;
        let score = 85;
    
        // Create main movie card container
        const card = document.createElement('div');
        card.classList.add('movie-card');
    
        // Title element
        const title = document.createElement('h2');
        title.textContent = Title;
        title.classList.add('card-title');
    
        // Year element
        const year = document.createElement('p');
        year.textContent = `Year: ${Year}`;
        year.classList.add('card-year');

        // Image element
        const image = document.createElement('img');
        image.src = Poster;
        image.classList.add('card-image');
    
        // More info button
        const moreInfoButton = document.createElement('button');
        moreInfoButton.textContent = 'More info';
        moreInfoButton.classList.add('card-btn-more');
        moreInfoButton.addEventListener('click', () => {
            searchForMovieByID(imdbID);
        });
    
        // Add button
        const addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.classList.add('card-btn-add');
        addButton.addEventListener('click', () => {
            //this.addToList(imdbID);
            console.log('ADD: Movie ID: ', imdbID);
        });
    
        // Append elements to movie card
        card.appendChild(title);
        card.appendChild(year);
        card.appendChild(image);
        card.appendChild(moreInfoButton);
        card.appendChild(addButton);

        return card;
    }    
}

export default MovieCardSmall; // Export the class as default
