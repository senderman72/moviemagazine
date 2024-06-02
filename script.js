document.addEventListener("DOMContentLoaded", () => {
  const movies = [
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      length: "142 min",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      year: 1994,
      cover: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    },
    {
      title: "The Godfather",
      genre: "Crime, Drama",
      length: "175 min",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      year: 1972,
      cover: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
    },
    {
      title: "The Dark Knight",
      genre: "Action, Crime, Drama",
      length: "152 min",
      description:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      year: 2008,
      cover: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      title: "Pulp Fiction",
      genre: "Crime, Drama",
      length: "154 min",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      year: 1994,
      cover: "https://image.tmdb.org/t/p/w500/plnlrtBUULT0rh3Xsjmpubiso3L.jpg",
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      genre: "Action, Adventure, Drama",
      length: "201 min",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      year: 2003,
      cover: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    },
    {
      title: "Forrest Gump",
      genre: "Drama, Romance",
      length: "142 min",
      description:
        "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
      year: 1994,
      cover: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    },
    {
      title: "Inception",
      genre: "Action, Adventure, Sci-Fi",
      length: "148 min",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      year: 2010,
      cover: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    },
    {
      title: "Fight Club",
      genre: "Drama",
      length: "139 min",
      description:
        "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      year: 1999,
      cover: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    },
    {
      title: "Interstellar",
      genre: "Adventure, Drama, Sci-Fi",
      length: "169 min",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      year: 2014,
      cover: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    },
    {
      title: "The Matrix",
      genre: "Action, Sci-Fi",
      length: "136 min",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      year: 1999,
      cover: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    },
    {
      title: "The Empire Strikes Back",
      genre: "Action, Adventure, Fantasy",
      length: "124 min",
      description:
        "After the Rebels are overpowered by the Empire on their newly established base, Luke Skywalker begins Jedi training with Yoda.",
      year: 1980,
      cover: "https://image.tmdb.org/t/p/w500/7BuH8itoSrLExs2YZSsM01Qk2no.jpg",
    },
    {
      title: "The Silence of the Lambs",
      genre: "Crime, Drama, Thriller",
      length: "118 min",
      description:
        "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      year: 1991,
      cover: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
    },
    {
      title: "Se7en",
      genre: "Crime, Drama, Mystery",
      length: "127 min",
      description:
        "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      year: 1995,
      cover: "https://image.tmdb.org/t/p/w500/69Sns8WoET6CfaYlIkHbla4l7nC.jpg",
    },
    {
      title: "Gladiator",
      genre: "Action, Adventure, Drama",
      length: "155 min",
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      year: 2000,
      cover: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    },
    {
      title: "The Lion King",
      genre: "Animation, Adventure, Drama",
      length: "88 min",
      description:
        "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
      year: 1994,
      cover: "https://image.tmdb.org/t/p/w500/2ltadt0HtHS8qD3xREVds3PDxkP.jpg",
    },
    {
      title: "Fight Club",
      genre: "Drama",
      length: "139 min",
      description:
        "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      year: 1999,
      cover: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    },
  ];

  const container = document.getElementById("movie-container");

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
          <div class="img-container">
              <img src="${movie.cover}" alt="${movie.title}">
          </div>
          <div class="movie-details">
              <h3>${movie.title}</h3>
              <p><span>Genre:</span> ${movie.genre}</p>
              <p><span>Length:</span> ${movie.length}</p>
              <p><span>Description:</span> ${movie.description}</p>
              <p><span>Year:</span> ${movie.year}</p>
          </div>
      `;

    container.appendChild(movieCard);
  });
});
