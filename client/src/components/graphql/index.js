import { gql } from "@apollo/client";

export const GET_CONTATOS = gql`
  query Show {
    contatos {
      id
      nome
      email
      telefone
    }
  }
`

export const ADD_CONTATO = gql`
  mutation criarContato($nome: String!, $email: String!, $telefone: String) {
    criarContato(data: { nome: $nome, email: $email, telefone: $telefone }) {
      nome
      email
      telefone
    }
  }
`
