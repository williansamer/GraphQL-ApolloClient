import React, { createContext, useContext} from 'react';
import {useQuery} from '@apollo/client';

import { GET_CONTATOS } from '../graphql';

const MyContext = createContext();

export default function ContatosContextProvider({children}) {

  const {data, loading} = useQuery(GET_CONTATOS);

  return (
    <MyContext.Provider value={
      {contatos: {itens: data ? data.contatos : [], loading}}
    }>
      {children}
    </MyContext.Provider>
  )
}

export function useContatosContext(){
  const context = useContext(MyContext); // pega o contexto do provider e retorna o valor dele
  return context;
}