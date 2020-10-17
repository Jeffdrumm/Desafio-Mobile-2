import React from 'react';
import Contador from './Contador'
import './App.css';
import LabelCronometro from './LabelCronometro';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import RestoreIcon from '@material-ui/icons/Restore';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

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
      parcialf: "",
      a: 0,
      b: 0,
      e: 0,
      h: 0,
      i: 0,
      k: 0
    };
  }

  incrementar () {
    if (this.state.stop === false){
      this.setState(
         function (state, props) {
           if (state.milisegundos >= 99 ){
            this.zerarMilisegundos();
            this.incrementarSegundos(state);
          }
          if (state.segundos >= 60 ){
            this.zerarSegundos();
            this.incrementarMinuto(state); 
          }
          if (state.minutos >= 60 ){
            this.zerarMinutos();
            this.incrementarHora(state); 
          }
          return({milisegundos: state.milisegundos +1})                                       
          })
    }
  }
  
  parcial(){
    let p = this.state.hora+ ":"+ this.state.minutos+ ":"+ this.state.segundos + ":"+ this.state.milisegundos + "\n\n"
    this.state.a = this.state.hora * 60*60*100 + this.state.minutos * 60 * 100 + this.state.segundos * 100 + this.state.milisegundos - this.state.b;

    if (this.state.a >= 100) {
      let c = this.state.a%100;
      let d = this.state.a - c;
      this.state.e = d/100;

      if (this.state.e >= 59) {
        let f = this.state.e%60;
        let g = this.state.e - f;
        this.state.h = g/60;

        if(this.state.h >= 59) {
          this.state.i = this.state.h%60;
          let j = this.state.h - this.state.i;
          this.state.k = j/60;
        }
        else {
          this.state.k = 0;
          this.state.i = this.state.h;
        }            
          if(f < 10) {
            f = "0" + f;
          }
          if(this.state.i < 10) {
            this.state.i = "0" + this.state.i;
          }
          this.state.dif = this.state.dif + " " + this.state.k + ":" + this.state.i + ":" + f + ":" + c;
        }
      else {
        if (this.state.e < 10) {
          this.state.e = "0" + this.state.e;
        }
        this.state.k = 0;
        this.state.dif = this.state.dif + " " + this.state.k + ":00:" + this.state.e + ":" + c;
      }
    }
    else {
      this.state.dif = this.state.dif + " " + "00:" + "00:" +"00:" + this.state.a;
    }

    this.state.parcial = this.state.parcial + " " + this.state.minutos+ ":" + this.state.segundos + ":" + this.state.milisegundos;
    this.state.b = this.state.hora * 60*60*100 + this.state.minutos * 60*100 + this.state.segundos*100 + this.state.milisegundos;
    if(this.state.minutos <10 && this.state.segundos <10) {
      this.state.parcialf = this.state.parcialf + " " + this.state.hora + ":" + "0" + this.state.minutos + ":" + "0" + this.state.segundos + ":" + this.state.milisegundos;
    } else if(this.state.minutos <10) {
        this.state.parcialf = this.state.parcialf + " " + this.state.hora + ":" + "0" + this.state.minutos + ":" + this.state.segundos + ":" + this.state.milisegundos;
      }
      else if (this.state.segundos <10) {
        this.state.parcialf = this.state.parcialf + " " + this.state.hora + ":" + this.state.minutos + ":" + "0" + this.state.segundos + ":" + this.state.milisegundos;
      }
      else {
        this.state.parcialf = this.state.parcialf + " " + this.state.hora + ":" + this.state.minutos + ":" + this.state.segundos + ":" + this.state.milisegundos;
      }
  }
 
  pararTempo(){
    this.setState({ 
        stop: !this.state.stop 
      })
    if (this.state.stop)
      this.state.nameStop = "Stop"
    else
      this.state.nameStop = "Start"
  }
  pararTemporizador(){
    this.setState({ 
        stopt: !this.state.stopt
      })
    if (this.state.stopt)
      this.state.nameStopt = "Stop"
    else
      this.state.nameStopt = "Start"
  }
  componentDidMount(){
    this.timer = setInterval(
      () => this.incrementar(), 10
      );    
  }
 

  incrementarHora (state) {
    this.setState(() => { 
      return {hora: state.hora +1}
    })
  };

    incrementarMinuto (state) {
    this.setState(() => { 
      return {minutos: state.minutos +1}
    })
  };
  incrementarSegundos(state) {
    this.setState(() => {
      return {segundos: state.segundos +1}
    })
  };
  incrementarMilisegundos (state) {
    this.setState(() => { 
      return {milisegundos: state.milisegundos}
    })
  };


  incrementarHorat (state) {
    this.setState(() => { 
      this.state.horat = this.state.horat +1
    })
  };
  incrementarMinutost(state) {
    this.setState(() => {
      this.state.minutost = this.state.minutost +1
    })
  };
 
  incrementarSegundost(state) {
    this.setState(() => {
      this.state.segundost = this.state.segundost +1
    })
  };

  decrementarHorat (state) {
    this.setState(() => { 
      this.state.horat = this.state.horat -1
    })
  };

    decrementarMinutot (state) {
    this.setState(() => { 
      this.state.minutost = this.state.minutost -1
    })
  };
  decrementarSegundost(state) {
    this.setState(() => {
      this.state.segundost = this.state.segundost -1
    })
  };
  zerarMilisegundos () {
    this.setState({ 
      milisegundos: 0
    })
  }
  zerarSegundos () {
    this.setState({ 
      segundos: 0,
      milisegundos: 0
    })
  }

  zerarMinutos () {
    this.setState({ 
      minutos: 0,
      segundos: 0,
      milisegundos: 0
    })
  }
  zerarCronometro() {
    this.state.segundos = 0
    this.state.hora = 0
    this.state.milisegundos = -1
    this.state.minutos = 0      
    this.state.parcial = ""
    this.state.dif = ""
    this.state.a = 0
    this.state.b = 0
 }

 zerarSegundost () {
  this.setState({ 
    segundost: 60    
  })
}

zerarMinutost () {
  this.setState({ 
    minutost: 0,
    segundost: 0,
  
  })
}
zerarHorat () {
  this.setState({ 
    minutost: 0,
    segundost: 0,
    horat: 0  
  })
}
zerarTemporizadort() {
  this.state.segundost = 0
  this.state.horat = 0
  this.state.minutost = 0      
}
  fazerCinco () {
    this.setState({ 
      segundos: 5 
    })
  }

  decrementarMinuto (state) {
    this.setState(() => { 
      return {minutos: state.minutos -1}
    })
  };

render(){

    return (
      <div>
       <LabelCronometro namec={"Cronômetro"} />
       <div>        
        <Contador hora={this.state.hora} minutos={this.state.minutos} segundos={this.state.segundos} milisegundos={this.state.milisegundos}/>
        <IconButton color="" onClick={() => this.zerarCronometro()} aria-label={"Zerar"}>
        <RestoreIcon></RestoreIcon>
        <IconButton color="" aria-label={""}>
        </IconButton>
        </IconButton>
        <IconButton color="" aria-label={""}>
        </IconButton>
        
        
        <IconButton color="" onClick={() => this.pararTempo()} aria-label={this.state.nameStop}>
        <TimerOffIcon/> <AlarmOnIcon/>
        </IconButton>
        <IconButton color="" aria-label={""}>
        </IconButton>
        <IconButton color="" aria-label={""}>
        </IconButton>

        <IconButton color="" onClick={() => this.parcial()} aria-label={"Parcial"}>
        <TimelapseIcon></TimelapseIcon>
        </IconButton>
        
        <br></br>
        <ButtonGroup size="large" color="" aria-label="large outlined primary button group">
        <Button>Reiniciar</Button>
        <Button>Start/Stop</Button>        
        <Button>Parcial</Button>              
      </ButtonGroup> 
        
      <h3>Parciais</h3>
        <LabelCronometro namec={this.state.parcialf} />
        <h3>Diferenças de Parciais</h3>
        <LabelCronometro namec={this.state.dif} />
          </div>
          <h1><br></br></h1>
       </div>
    );
  }
}
export default CronometroFuncionando;