import React from 'react'

import { useContatosContext} from '../context/ContatosContext';

const initialValue = {nome: "", email: "", telefone: ""};

export default function Form() {
  const [inputs, setInputs] = React.useState(initialValue);
  const {contatos} = useContatosContext();

  function handleSubmit(event) {
    event.preventDefault();

    contatos.criarContato({
      variables: inputs, //variables é o objeto que vai ser enviado para o servidor(no caso será enviado nome, email e telefone do estaco inputs)
    })
    //contatos.refetch(); //>>>1ª<<< FORMA DE ATUALIZAR A TELA COM O QUANDO O CONTATO É CRIADO
    setInputs(initialValue)
  }
  function handleChange(input) {
    setInputs({...inputs, [input.target.name]: input.target.value})
  }


  return (
      <form onSubmit={handleSubmit} className="container-form">
        <label className="label-form"> 
          <h3>Nome</h3>
          <input onChange={handleChange} name="nome" value={inputs.nome} type="text" placeholder="Digite o nome"/>
        </label>
        <label className="label-form"> 
          <h3>Email</h3>
          <input onChange={handleChange} name="email" value={inputs.email} type="email" placeholder="Digite o email"/>
        </label>
        <label className="label-form"> 
          <h3>Telefone</h3>
          <input onChange={handleChange} name="telefone" value={inputs.telefoe} type="text" placeholder="Digite o telefone"/>
        </label>
        <button type="submit">Enviar</button>
      </form>
  )
}
