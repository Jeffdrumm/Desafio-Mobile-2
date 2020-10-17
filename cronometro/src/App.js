import React, {useState} from "react"
import TelaDeSelecao from './TelaDeSelecao'
import Botao from './Botao'
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TimerIcon from '@material-ui/icons/Timer';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const App = () => {
  const [type, setType] = useState(1)
 return (
 <>
  
      <br></br>
  <IconButton color="" onClick={() => setType(1)} aria-label="Cronômetro">
        <TimerIcon/>
  </IconButton>
  <IconButton color="" aria-label={""}>
        </IconButton>
        <IconButton color="" aria-label={""}>
        </IconButton>
        <IconButton color="" aria-label={""}>
        </IconButton>
        
  <IconButton color="" onClick={() => setType(2)} aria-label="Temporizador">
        <HourglassEmptyIcon/>
  </IconButton>
  <IconButton color="" aria-label={""}>
        </IconButton>
        <IconButton color="" aria-label={""}>
        </IconButton>
        <IconButton color="" aria-label={""}>
        </IconButton>
    <IconButton color="" onClick={() => setType(3)} aria-label="Relógio">
        <AccessTimeIcon/>
  </IconButton>
  <br></br>
  <ButtonGroup size="large" color="" aria-label="large outlined primary button group">
        <Button>cronômetro</Button>
        <Button>temporizador</Button>        
        <Button>relógio</Button>              
      </ButtonGroup>
  <TelaDeSelecao type={type}/>
 </>
 )
}
export default App