import React, { createContext, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { GET_CONTATOS, ADD_CONTATO } from "../graphql";

const MyContext = createContext();

export default function ContatosContextProvider({ children }) {
  const { data, loading } = useQuery(GET_CONTATOS);
  const [criarContato] = useMutation(ADD_CONTATO, { //criarContato é uma função. 

    //>>>3ª<<< Forma de atualizar a página ao criar um novo contato. O melhor método entre os 3 apresentados, pois utiliza menos memória já que pega os dados do cache.

    //Podemos colocar um outro parâmetro depois do ADD_CONTATO, que é um objeto
    update(cache, { data }) { //update é uma função que recebe o cache e o data. É utilizado para atualizar o cache.
      //Qdo criar o contato, ele vai atualizar o cache, e o data vai ser o que está dentro do cache
      const newContactResponse = data?.criarContato; //data.criarContato é o retorno ao ser executado o mutation
      const existingContacts = cache.readQuery({ query: GET_CONTATOS }); //Pegando os contatos do cache

      cache.writeQuery({ //Atualizando o cache
        query: GET_CONTATOS, //Pegando o query que está no GET_CONTATOS
        data: {
          contatos: [...existingContacts.contatos, newContactResponse], //Pegando os contatos do cache, e adicionando o novo contato
        },
      });
    },
  });

  return (
    <MyContext.Provider
      value={{
        contatos: { itens: data ? data.contatos : [], loading, criarContato },
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function useContatosContext() {
  const context = useContext(MyContext); // pega o contexto do provider e retorna o valor dele
  return context;
}
