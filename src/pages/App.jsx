import { useEffect, useState } from "react";

import logo from "../assets/devflix.png"
import searchIcon from "../assets/search.svg"
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"

import "./App.css";
import MovieCard from "../components/MovieCard/movieCard";
import Footer from "../components/footer/footer";

const App = () => {
const [searchTerm,setSearchTerm]= useState("");
const [movies, setMovies] = useState([]);

const apiKey = "e4d577fa";
    const apiUrl =`https://omdbapi.com/?apikey=${apiKey}`;


    useEffect(() => {
        searchMovies("Batman");
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${apiUrl}&s=${title}`)
        const data = await response.json();

        console.log(data);
        setMovies(data.Search);
    };

    

// JEITO MAIS COMPLEXO DE FAZER A API 

// fetch(apiUrl)
// .then((response) => response.json())
// .then((data) => console.log(data));
    
const handleKeyPress = (e) => {
  e.key ==="Enter" && searchMovies(searchTerm)
};

  return (
    <div id="app">
      <div className="logo">
        <img src={logo} alt="logo devflix" />
      </div>
      <div className="search">
        <input 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Pesquise por filmes"
        />
        <img src={searchIcon} 
        alt="Icone de pesquisa"
        onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (<div className="container">
        {movies.map((movie) => (<MovieCard key={movie.imdbID} movies={movie} />))}
    </div>
      ) : (
        <div className="empty">
          <h2>Nenhum filme encontrado 😢</h2>
        </div>
      )}
      <Footer link={"https:github.com.br"}>VictorMatoso</Footer>
      </div>
  );
};

export default App;
