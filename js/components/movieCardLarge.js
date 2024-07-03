document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const imdbID = urlParams.get('imdbID');
    console.log('IMDB ID is ', imdbID);
    
    createCardLarge(imdbID);
});

class MovieCardLarge {
    constructor(movie) {
        this.movie = movie;
    }

    createCardLarge(imdbID) {
        const { Title, Year, imdbID, Poster } = this.movie;
        let score = 85;
    
        let container = document.getElementById('movie-container');
        id.innerHTML = imdbID;

        // // Create main movie card container
        // const card = document.createElement('div');
        // card.classList.add('movie-card');
    
        // // Title element
        // const title = document.createElement('h2');
        // title.textContent = Title;
        // title.classList.add('card-title');
    
        // // Year element
        // const year = document.createElement('p');
        // year.textContent = `Year: ${Year}`;
        // year.classList.add('card-year');
    
        // // Score element
        // const scoreElement = document.createElement('p');
        // scoreElement.textContent = `${score}%`;
        // scoreElement.classList.add('card-score');
    
        // // Details element
        // const details = document.createElement('p');
        // details.textContent = 'Details are written here';
        // details.classList.add('card-details');
    
        // // More info button
        // const moreInfoButton = document.createElement('button');
        // moreInfoButton.textContent = 'More info';
        // moreInfoButton.classList.add('card-btn-more');
        // moreInfoButton.addEventListener('click', () => {
        //     //this.showCard(imdbID);
        //     console.log('MORE: Movie ID: ', imdbID);
        // });
    
        // // Add button
        // const addButton = document.createElement('button');
        // addButton.textContent = '+';
        // addButton.classList.add('card-btn-add');
        // addButton.addEventListener('click', () => {
        //     //this.addToList(imdbID);
        //     console.log('ADD: Movie ID: ', imdbID);
        // });
    
        // // Append elements to movie card
        // card.appendChild(title);
        // card.appendChild(year);
        // card.appendChild(scoreElement);
        // card.appendChild(details);
        // card.appendChild(moreInfoButton);
        // card.appendChild(addButton);

        // return card;
    }    
}

//export default MovieCardLarge; // Export the class as default
