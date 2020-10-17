import React from 'react';
import Contador from './Contador'
import './App.css';
import LabelCronometro from './LabelCronometro';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Alert from '@material-ui/lab/Alert';
import AddIcon from '@material-ui/icons/Add';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class TemporizadorFuncionando extends React.Component {
  constructor(props){
    super(props);
    this.state={
      horat: 0,
      segundost: 0,
      minutost: 0,
      stopt: true,
      stoppt: true,
      nameStopt: "Start",     
      parcial: "",
      dif: "",
      a: 0,
      b: 0,
      e: 0
    };
  }
  decrementar () {
    if (this.state.stopt === false){
      this.setState(
         function (state, props) {
            if (state.segundost > 0){
            this.diminuirSegundost(state);
            }
            if (state.segundost == 0 && state.minutost > 0){
                this.tornar59Segundost(state);
                this.diminuirMinutost(state);
            }
            if (state.segundost == 0 && state.minutost == 0 && state.horat > 0){
                this.diminuirHorast(state);
                this.tornar59Segundost(state);
                this.tornar59Minutost(state);
            }
            if (state.segundost == 0 && state.minutost == 0 && state.horat == 0){
              this.pararTemporizador();
             
            }    
            })
    }
  }
  pararTemporizador(){
    this.setState({      
      stopt: !this.state.stopt
      })    
  }
   
tornar59Segundost(state) {
    this.setState(() => {
    return {segundost: state.segundost +59}
    })
  }
  tornar59Minutost(state) {
    this.setState(() => {
    return {minutost: state.minutost +59}
    })
  }
  diminuirSegundost (state) {
    this.setState(() => {        
      return {segundost: state.segundost -1}
     
    })
  };
  diminuirMinutost (state) {
    this.setState(() => { 
      return {minutost: state.minutost -1}
    })
  };
  diminuirHorast (state) {
    this.setState(() => { 
      return {horat: state.horat -1}
    })
  };

   

  componentDidMount(){
        this.timer = setInterval(        
        () => this.decrementar(), 1000
        );
  }

  diminuirSegundost (state) {
    this.setState(() => { 
      return {segundost: state.segundost -1}
    })
  };

   incrementarHorat () {
     this.setState ({ 
         ...this.state,
         horat : this.state.horat +1
     })
    }

     incrementarMinutost() {
        this.setState ({ 
            ...this.state,
            minutost : this.state.minutost +1
        })
       }
 
  incrementarSegundost() {
    this.setState ({ 
        ...this.state,
        segundost : this.state.segundost +1
    })
   }
  
  decrementarHorat () {
    this.setState ({ 
        ...this.state,
        horat : this.state.horat == 0 ? 0 : this.state.horat -1
    })
   }
   decrementarMinutost () {
    this.setState ({ 
        ...this.state,
        minutost : this.state.minutost == 0 ? 0 : this.state.minutost -1
    })
   }
  decrementarSegundost() {
    this.setState ({ 
        ...this.state,
        segundost : this.state.segundost == 0 ? 0 : this.state.segundost -1
    })
   }

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
 
  render(){
          
    return (
      <div>
       <LabelCronometro namec={"Temporizador"} />
       <div>          
       <Contador hora={this.state.horat} minutos={this.state.minutost} segundos={this.state.segundost} milisegundos={null}/>
      
       <IconButton color="" onClick={() => this.incrementarHorat()} aria-label={"+ H"}>
        <ExposurePlus1Icon/>
        </IconButton>
        
        <IconButton color="" onClick={() => this.decrementarHorat()} aria-label={"-H"}>
        <ExposureNeg1Icon/>        
        </IconButton>
        <IconButton color="" aria-label={""}>
        </IconButton> 
       
                
       <IconButton color="" onClick={() => this.incrementarMinutost()} aria-label={"+ H"}>
        <ExposurePlus1Icon/>
        </IconButton>
        <IconButton color="" onClick={() => this.decrementarMinutost()} aria-label={"-M"}>
        <ExposureNeg1Icon/>
        </IconButton>
        <IconButton color="" aria-label={""}>
        </IconButton> 
        
        <IconButton color="" onClick={() => this.incrementarSegundost()} aria-label={"+ S"}>
        <ExposurePlus1Icon/>
        </IconButton>            
        <IconButton color="" onClick={() => this.decrementarSegundost()} aria-label={"- S"}>
        <ExposureNeg1Icon/>
        </IconButton>

        <br></br>
      <ButtonGroup size="large" color="" aria-label="large outlined primary button group">
      <Button>+ | - Horas</Button>
      <Button>+ | - Minutos</Button> 
      <Button>+ | - Segundos</Button>          
      </ButtonGroup>
      <br></br>
      <br></br>    
        <IconButton color="" onClick={() => this.pararTemporizador()} aria-label={this.state.nameStopt}>
        <TimerOffIcon/> <AlarmOnIcon/>
        </IconButton>
        <IconButton color="" aria-label={""}>
        </IconButton> 
        <IconButton color="" aria-label={""}>
        </IconButton>

        <IconButton color="" onClick={() => this.zerarHorat()}  aria-label={""}>
        <TimelapseIcon></TimelapseIcon>
        </IconButton>
        <br></br>
        <ButtonGroup size="large" color="" aria-label="large outlined primary button group">
        <Button>Start/Stop</Button>
        <Button>Reiniciar</Button>                
      </ButtonGroup>  
        <LabelCronometro namec={this.state.parcial} />
        <LabelCronometro namec={this.state.dif} /> 
       
       
        
              
        </div>  
          <h1><br></br></h1>
          {(() => {
        if (this.state.stopt == false && this.state.segundost == 0 && this.state.horat == 0 && this.state.minutost == 0) {
          return (
            <div> <Alert variant="filled" severity="success">
            Temporizador Finalizado!
          </Alert> </div>

          
          )
        } 
      })()}
       </div>  
       
      );
     
      
    }    
}
export default TemporizadorFuncionando;