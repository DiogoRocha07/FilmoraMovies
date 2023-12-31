import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./home.css";

//https://api.themoviedb.org/3/movie/popular?api_key=2881b1906adce8ef8216032d6bd2a195&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/popular", {
        params: {
          api_key: "2881b1906adce8ef8216032d6bd2a195",
          language: "en-US",
          page: 1,
        },
      });

      console.log(response.data.results.slice(0, 10));
      setFilmes(response.data.results.slice(0, 10));
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading movies...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Detalhes Filme</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
