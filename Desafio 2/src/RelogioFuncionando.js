import React, {useEffect, useState} from 'react';
import {utcToZonedTime} from "date-fns-tz"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import RestoreIcon from '@material-ui/icons/Restore';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import ScheduleIcon from '@material-ui/icons/Schedule';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelRelogio from './LabelRelogio' 

function RelogioFuncionando() {
  const [myDate, setmyDate] = useState(Date.now());
  

  useEffect(() => {
    let tempoDeAtualizar = setInterval(() => {
      setmyDate(Date.now());
    }, 1000);

    return () => clearInterval(tempoDeAtualizar);
    
  }, []);
  
  
  return (
    <div>
      <LabelRelogio namer={"Relógio"} />
      <br></br> 
      <ButtonGroup size="large" color="" aria-label="large outlined primary button group">
      <Button>Brasília</Button>          
      </ButtonGroup>
      <br></br>
      <h2>{utcToZonedTime(new Date(myDate), "America/Sao_Paulo").toString().substring(16,25)}</h2>               
      <br></br> 
      <ButtonGroup size="large" color="" aria-label="large outlined primary button group">
      <Button>Nova York</Button>          
      </ButtonGroup>
      <br></br>
      <h2>{utcToZonedTime(new Date(myDate), "America/New_York").toString().substring(16,25)}</h2>    
      <br></br> 
      <ButtonGroup size="large" color="" aria-label="large outlined primary button group">
      <Button>Berlin</Button>          
      </ButtonGroup>
      <br></br>
      <h2>{utcToZonedTime(new Date(myDate), "Europe/Berlin").toString().substring(16,25)}</h2>       
      <br></br> 
      <ButtonGroup size="large" color="" aria-label="large outlined primary button group">
      <Button>Casablanca</Button>          
      </ButtonGroup>
      <br></br>
      <h2>{utcToZonedTime(new Date(myDate), "Africa/Casablanca").toString().substring(16,25)}</h2>       
      <br></br> 
      <ButtonGroup size="large" color="" aria-label="large outlined primary button group">
      <Button>Roma</Button>          
      </ButtonGroup>
      <br></br>
      <h2>{utcToZonedTime(new Date(myDate), "Europe/Rome").toString().substring(16,25)}</h2>      
      <br></br> 
      <ButtonGroup size="large" color="" aria-label="large outlined primary button group">
      <Button>Madri</Button>          
      </ButtonGroup>
      <br></br>
      <h2>{utcToZonedTime(new Date(myDate), "Europe/Madrid").toString().substring(16,25)}</h2>      
      <br></br> 
      <ButtonGroup size="large" color="" aria-label="large outlined primary button group">
      <Button>Lisboa</Button>          
      </ButtonGroup>
      <br></br>
      <h2>{utcToZonedTime(new Date(myDate), "Europe/Lisbon").toString().substring(16,25)}</h2>          
      <br></br> 
      <ButtonGroup size="large" color="" aria-label="large outlined primary button group">
      <Button>Guadalajara</Button>          
      </ButtonGroup>
      <br></br>
      <h2>{utcToZonedTime(new Date(myDate), "America/Mexico_City").toString().substring(16,25)}</h2>      
      <br></br> 
      <ButtonGroup size="large" color="" aria-label="large outlined primary button group">
      <Button>Guadalajara</Button>          
      </ButtonGroup>
      <br></br>
      <h2>{utcToZonedTime(new Date(myDate), "Asia/Tokyo").toString().substring(16,25)}</h2>       
     
    </div>
  );

}
export default RelogioFuncionando;