import { gql } from '@apollo/client';

export const GET_CONTATOS = gql`
  query Show{
  contatos {
    id nome email telefone
  }
}
`