//imports

//import movieCardSmall from "../components/movieCardSmall";
import newMovieCard from "../components/newMovieCard.js";

const api = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODhhYjZlNjMxMjUxZWI3NTVjZTk0ZDBhMjFlNmJiMCIsIm5iZiI6MTcyMDc1NDEwNC44MjkzNCwic3ViIjoiNjYwOWY5MWVhMGJlMjgwMTYzNzE1OWQ4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.nvkg0W4FUwy3VNBB90LnSo1n0CoAyFjcnvsvAZMezmE';

function showData(query){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${api}`
        }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Make sure 'data' is what you expect

            const movieCardsContainer = document.getElementById('search-results-container');
            movieCardsContainer.innerHTML = '';

            data.results.forEach(movieData => {
                const movie = new newMovieCard(movieData); // Instantiate MovieCard with each movie data
                const card = movie.createCard(); // Call createCard method to create the card
                movieCardsContainer.appendChild(card); // Append the card to the container
            });
        })
        .catch(err => console.error(err));
}

export {showData};

/*
{
  "page": 1,
  "total_pages": 3,
  "total_results": 47,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/8n6ZCFJWwK7UiX7NYuIEvHLRPYG.jpg",
      "genre_ids": [
        28,
        18,
        9648,
        53
      ],
      "id": 9268,
      "original_language": "en",
      "original_title": "Eraser",
      "overview": "U.S. Marshall John Kruger erases the identities of people enrolled in the Witness Protection Program. His current assignment is to protect Lee Cullen, who's uncovered evidence that the weapons manufacturer she works for has been selling to terrorist groups. When Kruger discovers that there's a corrupt agent within the program, he must guard his own life while trying to protect Lee's.",
      "popularity": 19.938,
      "poster_path": "/1FUV5ZmEkbxvqwQW0az4tFFOSmo.jpg",
      "release_date": "1996-06-21",
      "title": "Eraser",
      "video": false,
      "vote_average": 6.056,
      "vote_count": 1749
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        18
      ],
      "id": 1114222,
      "original_language": "ms",
      "original_title": "Eraser",
      "overview": "Depicts perfectly to the concept of unconditional love, mutual respect and patriotism towards beloved country through a Malaysian flag eraser. The journey of how a ruined family survives the broken pieces from the love of a family of different cultural beliefs. As love witnesses no gender, race and religion but respect and humanity actions between individuals.",
      "popularity": 1.677,
      "poster_path": "/q7Xpg2eV96jOUsYveyIQ01FUmcl.jpg",
      "release_date": "2023-06-01",
      "title": "Eraser",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    ],
 }
 */