import React from 'react';
import './App.css';


const Contador = (props) => {
    const showValue = (val) => (val < 10 ? `0${val}`: val);
    return (
        <h1>{`${showValue(props.hora)}:${showValue(props.minutos)}:${showValue(props.segundos)}${props.milisegundos != null ?`:${showValue(props.milisegundos)}`:""}`}</h1>
    )
    }
export default Contador