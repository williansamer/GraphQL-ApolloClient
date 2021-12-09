import React, { useEffect } from "react";

export default function Item({ item }) {
  useEffect(() => {
    console.log(item);
  }, []);

  return (
    <div className="container-item">
      <div className="header-item">
        <h4>{item.nome}</h4>
        <button type="button" className="close">
          <a className="link">
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
