import React from 'react'

import data from '../../Data';
import Item from '../Item'

export default function Contato() {

  return (
    <div className="container-contato">
      {data.map((item, index)=>{
        return <Item key={index} item={item} />
      })} 
    </div>
  )
}
