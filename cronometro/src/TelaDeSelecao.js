import React from 'react'
import Conometro from './CronometroFucionando'
import TemporizadorFuncionando from './TemporizadorFuncionando'
import RelogioFuncionando from './RelogioFuncionando'
const TelaDeSelecao = (props) => {
   switch (props.type) {
    case 1:
  return (
    <>      
      <Conometro/>
    </>
  )
  case 2:
  return (
  <>
      <TemporizadorFuncionando />
  </>
  )

  case 3:
  return (
  <>
    <RelogioFuncionando/>
  </>
  )
  
 }
}
export default TelaDeSelecao