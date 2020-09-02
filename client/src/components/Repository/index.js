import React from "react";

import { FaStar, FaCode, FaIdCard } from "react-icons/fa";

import "./styles.css";

function Repository(props) {
  return (
    <div className="repo">
      <a className="name" href={props.repo.svn_url}>
        {props.repo.name}
      </a>
      <div className="description">{props.repo.description}</div>
      {props.repo.language && (
        <div className="language">
          <b> Linguagem:</b> {props.repo.language}
        </div>
      )}
      <div className="about">
        {props.repo.license && (
          <div className="license">
            <FaIdCard />
            {props.repo.license.name}
          </div>
        )}
        {props.repo.stargazers_count !== 0 && (
          <div className="stars">
            <FaStar /> {props.repo.stargazers_count}
          </div>
        )}
        {props.repo.forks_count !== 0 && (
          <div className="forks">
            <FaCode />
            {props.repo.forks_count}
          </div>
        )}
      </div>
      <div className="updated">
        <b> Última modificação: </b>
        {props.repo.pushed_at}
      </div>
    </div>
  );
}

export default Repository;
