import React, { useState } from "react";

import { FaGithub, FaExclamationTriangle } from "react-icons/fa";

import api from "../../services/api";

import Repository from "../../components/Repository";

import "./styles.css";

function ListRepos() {
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);
  const [err, setErr] = useState(false);

  async function getRepos(e) {
    e.preventDefault();

    try {
      const response = await api.get("repos", { params: { user } });
      setErr(false);
      setRepos(response.data);
    } catch (err) {
      setErr(true);
      setRepos([]);
    }
  }

  return (
    <div className="pageListRepos">
      <form onSubmit={getRepos}>
        <h1>Desafio - RLX UFC </h1>
        Entre um usuário do Github <FaGithub />
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </form>

      <main>
        {repos.length !== 0 &&
          repos.map((repo) => {
            return <Repository key={repo.id} repo={repo}></Repository>;
          })}
      </main>

      <div className="error">
        {err && (
          <div>
            <FaExclamationTriangle size="6rem" color="#FA1D11" />
            <h1>Erro! O usuário não foi encontrado!</h1>
            <h1>Insira um usuário válido!</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListRepos;
