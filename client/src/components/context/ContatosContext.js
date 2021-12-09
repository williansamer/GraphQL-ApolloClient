import React, { createContext, useContext} from 'react';
import {useMutation, useQuery} from '@apollo/client';

import { GET_CONTATOS, ADD_CONTATO} from '../graphql';

const MyContext = createContext();

export default function ContatosContextProvider({children}) {

  const {data, loading} = useQuery(GET_CONTATOS);
  const [criarContato] = useMutation(ADD_CONTATO); //criarContato é uma função

  return (
    <MyContext.Provider value={
      {contatos: 
        {itens: data ? data.contatos : [], 
        loading,
        criarContato
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