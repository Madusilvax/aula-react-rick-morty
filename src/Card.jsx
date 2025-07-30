import React from 'react'
import './Card.css'

function Card(props){
    return (
        <>
<div className="card">
        <h2>{props.nome}</h2>
        <img src={props.foto}/>
      </div>
        </>
    )
}

export default Card