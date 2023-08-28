import React from "react";
import "./filmo.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

function Filmo() {
  const { id } = useParams();
  const navigation = useNavigate();

  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "2881b1906adce8ef8216032d6bd2a195",
            language: "en-US",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("filme não encontrado");
          navigation("/", { replace: true });
          return;
        });
    }

    loadFilme();

    return () => {
      console.log("component was disassembled");
    };
  }, [navigation, id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@filmora");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some(
      (filmesSalvo) => filmesSalvo.id === filme.id
    );

    if (hasFilme) {
      toast.warn("This movie is already saved");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@filmora", JSON.stringify(filmesSalvos));
    toast.success("Saved successfully");
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Loading details</h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Overview</h3>
      <span>{filme.overview}</span> <br />
      <strong>assessment: {filme.vote_average.toFixed(1)} /10</strong>
      <div className="area-buttons">
        <button onClick={salvarFilme}>Saved</button>
        <button>
          <a
            target="blank"
            rel="external"
            href={`https://youtube.com/results?search_query=${filme.title} trailer`}
          >
            trailler
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filmo;
