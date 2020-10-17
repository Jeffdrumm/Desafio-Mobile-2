import React from 'react';
import './App.css';


const Relogio = (props) => (
    <h1 class="my-title">{props.hora}:{props.minutos}:{props.segundos}:{props.milisegundos}</h1>
)

export default Relogio