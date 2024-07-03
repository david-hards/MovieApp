import { searchForMoviesByTitle } from "/js/omdb/movieInfo.js";

const searchButton = document.getElementById('btn-search-submit');
const searchInput = document.getElementById('search-input');
const searchForm = document.querySelector('.search-container');
const errorText = document.getElementById('search-error-text');

searchButton.addEventListener('click', submitSearch);

searchForm.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        submitSearch();
        searchInput.value = '';
    }
});

function submitSearch(){
    let title = searchInput.value;

    if(title != ''){
        errorText.innerText = '';
        searchForMoviesByTitle(title);
    }
    else {
        errorText.innerText = 'Please enter a value.';
        return;
    }
    searchInput.value = '';

}

