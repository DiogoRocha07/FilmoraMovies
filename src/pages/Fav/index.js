import "./fav.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Fav() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@filmora");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });

    setFilmes(filtroFilmes);
    localStorage.setItem("@filmora", JSON.stringify(filtroFilmes));
    toast.success("Movie removed successfully");
  }

  return (
    <div className="meus-filmes">
      <h1>My movies</h1>

      {filmes.length === 0 && <span>You don´t have any movies!</span>}

      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>See details</Link>
                <button onClick={() => excluirFilme(item.id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Fav;
