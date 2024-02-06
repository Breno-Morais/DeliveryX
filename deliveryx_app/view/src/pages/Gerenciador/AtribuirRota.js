import React, { useEffect, useState } from 'react'
import Base from '../../Components/Struct/Base'
import Rota from '../../Components/Rota'
import Entregadores from '../../Components/Entregadores'
import Contato from '../../Components/Contato'

function AtribuirRota() {
  const [rotas, setRotas] = useState([])
  const [entregadores, setEntregadores] = useState([])
  const [selecionado, setSelecionado] = useState(-1)
  const [elementoAtivo, setElementoAtivo] = useState(-1)
  useEffect(() => {
    fetch('/consultaRotas').then(
      response => response.json()
    ).then(
      data => {
        setRotas(data)
      }
    )
  }, [])

  async function updateSeleciondado(id)
  {
    if((id === null) || (id === selecionado))
    {
      setSelecionado(-1)
    } else {
      setSelecionado(id)
    }
  }

  function updateElementoAtivo(id)
  {
    if(elementoAtivo !== id){
      setElementoAtivo(id)
    } else {
      setElementoAtivo(-1)
    }
  }

  async function atribuir(index, rota)
  {  
    setSelecionado(-1)

    // Vou precisar usar um loop para mandar um array por query com GET
    let url = '/consultarEntregador'
    for(let i = 0; i < rota.filiais.length; i++)
    {
      if(url.indexOf('?') === -1){
        url = `${url}?array[]=${rota.filiais[i]}`
      } else {
        url = `${url}&array[]=${rota.filiais[i]}`
      }
    }

    await fetch(url).then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setEntregadores(data)
        updateElementoAtivo(index)
      }
    ).catch(
      error => {
        console.log(error)
        setEntregadores([])
      }
    )  
    
  }

  return (
    <Base role={'admin'}>
      {(rotas.length) ?
      <div className='d-flex align-items-start' style={{gap: 5}}>
        <div className='d-flex flex-column col-sm-12 col-xl-4' style={{ gap: 10 }}>
          {rotas.map((rota, index) => 
          <Rota 
          id={rota.id} 
          filiais={rota.filiais} 
          entregas={rota.entregas} 
          handleAtribuir={() => atribuir(index, rota)} 
          atribuido={index === elementoAtivo}
          key={index}
          type='atribuir'
          />)}
        </div>
        {(elementoAtivo !== -1) ? <div className='d-flex flex-column col-sm-12 col-xl-4' style={{ gap: 10 }}>
          <Entregadores entregadores={entregadores} selecionar={updateSeleciondado} selecionado={selecionado}/>
        </div> : <></>}
        {(selecionado !== -1) ? 
        <div className='d-flex flex-column col-sm-12 col-xl-4' style={{ gap: 10 }}>
          <div className="bg-light rounded h-100">
            <Contato usuario={entregadores[selecionado]} idRota={rotas[elementoAtivo].id}/>  
          </div>
        </div> : <></>}
      </div> : <h3 style={{ fontWeight: 300, lineHeight: 1.2 }}><small className='text-muted'>Sem Rotas para serem atribuidas</small></h3>
      }
    </Base>
  )
}

export default AtribuirRota