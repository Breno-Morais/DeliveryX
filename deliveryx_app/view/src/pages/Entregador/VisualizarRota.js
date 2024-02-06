import React, { useEffect, useState } from 'react'
import Base from '../../Components/Struct/Base'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import Filial from '../../Components/Filial'
import AccordionEntregas from '../../Components/Elements/AccordionEntregas'

function VisualizarRota() {
  const [userEmail, setUserEmail] = useState(useSelector((state) => state.auth.userData.email))
  const [rota, setRota] = useState({ filiais: [], entregas: [] })
  const [filialSelecionada, setFilialSelecionada] = useState('')
  const [filialAtual, setFilialAtual] = useState('')
  
  useEffect(() => {
    fetch('/consultaRotas?courier=' + userEmail + '&unico=' + true).then(
      response => response.json()
    ).then(
      data => {
        if (data.filiais === undefined)
          setRota({ filiais: [], entregas: [] })
        else
          setRota(data)
      }
    )
  }, [])

  function handleSelecao(name) {
    if (name === filialSelecionada)
      setFilialSelecionada('')
    else
      setFilialSelecionada(name)
  }

  function handleColeta(id) {
    setRota({ filiais: [...rota.filiais], entregas: rota.entregas.map((entrega) => (entrega.shipping_id === id ? { ...entrega, estado: 'coletado' } : entrega)) })
    toast.success('Coletado')
  }

  function handleEntrega(id) {
    if (rota.entregas.filter(entrega => entrega.shipping_id === id)[0].estado !== 'coletado')
      toast.warn(`Colete o pacote ${id} antes de entregar-lo`)
    else {
      setRota({ filiais: [...rota.filiais], entregas: rota.entregas.map((entrega) => (entrega.shipping_id === id ? { ...entrega, estado: 'entregue' } : entrega)) })
      fetch('/entregar?id=' + id).then(
        response => response.json()
      ).then(
        data => {
          toast.success('Entregue')
        }
      ).catch(error => {
        console.log(error)
        toast.error('Erro no Banco de Dados')
      })
    }
  }

  function mudarFilialAtual() {
    setFilialAtual(filialSelecionada)

    fetch('/atualizarLocal', {
      method: 'POST',
      body: JSON.stringify({ shippings: rota.entregas.filter((entrega) => entrega.estado === 'coletado').map((entrega) => entrega.shipping_id), filialId: rota.filiais.find((filial) => filial.location_name === filialSelecionada).location_id }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then(
      response => response.json()
    ).then(
      data => {
        toast.success('Posição Atual Atualizada')
      }
    ).catch(error => {
      console.log(error)
      toast.error('Erro no Banco de Dados')
    })
  }

  return (
    <Base role={'entregador'}>
      {(rota.filiais.length) ?
        <div>
          <h1 className='display-6 text-center' style={{ marginBottom: '1.5rem' }}>Rota {rota.route_id}</h1>
          <div className='bg-light h-100 rounded p-2'>
            <h3 className='text-center text-secondary' style={{ fontWeight: 300 }}>Filiais</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="btn-group" role="group">
                {rota.filiais.map((filial, index) => <Filial key={index} filialSelecionada={filialSelecionada} filialAtual={filialAtual} location_name={filial.location_name} address={filial.address} seleciona={() => handleSelecao(filial.location_name)} />)}
              </div>
            </div>
            {(filialSelecionada !== '') ?
              <div>
                <h3 className='m-3 text-center text-secondary' style={{ fontWeight: 300 }}>Entregas</h3>
                <AccordionEntregas entregas={rota.entregas} filialSelecionada={filialSelecionada} filialAtual={filialAtual} handleColeta={handleColeta} handleEntrega={handleEntrega} />
              </div> : <></>}
          </div>
          {((rota.entregas.length === 0) || (rota.entregas.filter((entrega) => entrega.estado === 'entregue' || entrega.estado === 'carregado').length !== 0)) ?
            <button
              className="btn btn-lg btn-primary back-to-top"
              style={{ display: 'inline-block', fontSize: '1.5rem' }}
              onClick={() => window.location.reload()}
            >Finalizar Rota
            </button> : ((filialAtual !== filialSelecionada) ?
              <button
                className="btn btn-lg btn-primary back-to-top"
                style={{ display: 'inline-block', fontSize: '1.5rem' }}
                onClick={mudarFilialAtual}
              >Mudar Filial Atual
              </button> : <></>)}
        </div> :
        <h3 style={{ fontWeight: 300, lineHeight: 1.2 }}><small className='text-muted'>Sem Nenhuma Rota Atual</small></h3>
      }
    </Base>
  )
}

/*
<div class="btn-group" role="group">
<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"
    checked/>
<label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

<input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
<label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

<input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
<label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
</div>

      <div className='d-flex' style={{ gap: 5 }}>
        {rota.filiais.map((filial, index) => <Filial key={index} filialAtual={filialAtual} location_name={filial.location_name} address={filial.address} seleciona={() => handleSelecao(filial.location_name)} />)}
      </div>
*/

export default VisualizarRota