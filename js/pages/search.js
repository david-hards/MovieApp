import { getMovieSummary } from "../moviedatabase/database.js";

const searchButton = document.getElementById('btn-search-submit');
const searchInput = document.getElementById('search-input');
const searchForm = document.querySelector('.search-container');
const errorText = document.getElementById('search-error-text');
const searchResultsContainer = document.getElementById('search-results-container');

searchButton.addEventListener('click', submitSearch);

searchForm.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        submitSearch();
        searchInput.value = '';
    }
});

async function submitSearch() {
    let title = searchInput.value.trim(); // Trim whitespace

    if (title !== '') {
        errorText.innerText = '';

        try {
            await getMovieSummary(title); // Wait for data to load
        } catch (error) {
            console.error('Error fetching data:', error);
            errorText.innerText = 'Error fetching data. Please try again later.';
            return;
        }

        // Scroll the search results container to the top
        searchResultsContainer.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: smooth scrolling animation
        });

    } else {
        errorText.innerText = 'Please enter a value.';
        return;
    }

    searchInput.value = '';
}
