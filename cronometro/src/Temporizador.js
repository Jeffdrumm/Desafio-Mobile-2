import React from 'react';
import './App.css';


const Relogio = (props) => (
    <h1 class="my-title">{props.horat}:{props.minutost}:{props.segundost}</h1>
)

export default Relogio