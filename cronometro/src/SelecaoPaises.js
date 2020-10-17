import React from 'react';
import Contador from './Contador'
import Botao from './Botao'
import './App.css';
import LabelCronometro from './LabelCronometro';

class CronometroFuncionando extends React.Component {
  constructor(props){
    super(props);
    this.state={
      horat: 0,
      segundost: 0,
      minutost: 0,
      hora: 0,
      milisegundos: 0,
      segundos: 0,
      minutos: 0,
      stop: true,
      
      nameStop: "Start",     
      parcial: "",
      dif: "",
      a: 0,
      b: 0,
      e: 0
    };
  }

render(){

    return (
     <>
     
     </>
    );
  }
}
export default SelecaoPai;