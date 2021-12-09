import React, { createContext, useContext} from 'react';
import {useMutation, useQuery} from '@apollo/client';

import { GET_CONTATOS, ADD_CONTATO} from '../graphql';

const MyContext = createContext();

export default function ContatosContextProvider({children}) {

  const {data, loading, refetch} = useQuery(GET_CONTATOS); //USANDO O 'refetch' >>>1ª<<< FORMA DE ATUALIZAR A TELA COM O QUANDO O CONTATO É CRIADO
  const [criarContato] = useMutation(ADD_CONTATO);

  return (
    <MyContext.Provider value={
      {contatos: 
        {itens: data ? data.contatos : [], 
        loading,
        criarContato,
        refetch //>>>1ª<<< FORMA DE ATUALIZAR A TELA COM O QUANDO O CONTATO É CRIADO
      }}
    }>
      {children}
    </MyContext.Provider>
  )
}

export function useContatosContext(){
  const context = useContext(MyContext); // pega o contexto do provider e retorna o valor dele
  return context;
}