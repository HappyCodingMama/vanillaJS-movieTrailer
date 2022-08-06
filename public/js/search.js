const form = document.getElementById('form');
const search = document.getElementById('search');
const popular = document.getElementById('popular');

getMovies(movie_popular_http);
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  popularMovies(data.results);
  console.log(data.results);
}

function popularMovies(movies) {
  popular.innerHTML = '';
  movies.forEach((movie) => {
    const { title, poster_path, id, vote_average } = movie;
    const moviesElement = document.createElement('div');
    moviesElement.classList.add('popularmovie');
    moviesElement.innerHTML = `
    <div class='popularmovie_list'>
    <div class='popularmovie_poster' onclick= "location.href ='/${id}'">
    <img src="${poster_url + poster_path}" alt="${title}" />
    <div class="popularmovie-info">
    <small><i class='bx bxs-star'></i>${vote_average}</small>
    <h3>${title}</h3>
    </div>
    </div>
    </div>
    `;
    popular.appendChild(moviesElement);

    populerSetupScrolling();
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  searchValue = search.value;
  if (searchValue && searchValue !== '') {
    getMovies(search_url + searchValue);
    searchValue = '';
  } else {
    window.location.reload();
  }
});
