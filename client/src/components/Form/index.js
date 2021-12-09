import React from 'react'

export default function Form() {
  return (
      <form className="container-form">
        <label className="label-form"> 
          <h3>Nome</h3>
          <input name="nome" placeholder="Digite o nome"/>
        </label>
        <label className="label-form"> 
          <h3>Email</h3>
          <input name="email" placeholder="Digite o email"/>
        </label>
        <label className="label-form"> 
          <h3>Telefone</h3>
          <input name="telefone" placeholder="Digite o telefone"/>
        </label>
        <button type="submit">Enviar</button>
      </form>
  )
}
