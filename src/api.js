const API_KEY = "99ec03e130df43becfc18058d18e89fc";


const categories = [
  {
    name: "trending",
    title: "Em alta",
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    isLarge: true,
  },
  {
    name: "netflixOriginals",
    title: "Originais Netflix",
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`,
    isLarge: false,
  },
  {
    name: "topRated",
    title: "Populares",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    isLarge: false,
  },
  {
    name: "comedy",
    title: "Comédias",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=35&language=pt-BR`,
    isLarge: false,
  },
  {
    name: "romance",
    title: "Romances",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=10749&language=pt-BR`,
    isLarge: false,
  },
  {
    name: "documentaries",
    title: "Documentários",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=99&language=pt-BR`,
    isLarge: false,
  },
];

export const getMovies = async (path) => {
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return await response.json();

    } catch (error){
        console.log('Ocorreu um erro :', error);
    }
}
export default categories;