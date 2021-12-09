import React from "react";

export default function Item({ item }) {

  return (
    <div className="container-item">
      <div className="header-item">
        <h4>{item.nome}</h4>
        <button type="button" className="close">
          <a href="button" className="link">
            <span>&times;</span>
          </a>
        </button>
      </div>
      <div className="main-item">
        <p>{item.email}</p>
        <p>{item.telefone}</p>
      </div>
    </div>
  );
}
