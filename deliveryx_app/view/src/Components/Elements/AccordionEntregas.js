import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'

function AccordionEntregas({ entregas, filialAtual, filialSelecionada, handleColeta, handleEntrega }) {
  const entregasDaFilial = entregas.filter((entrega) => {
    return (entrega.destiny_location_name === filialSelecionada) || (entrega.origin_location_name === filialSelecionada)
  })

  return (
    <div className={'d-flex bg-light rounded h-100' + ((entregasDaFilial.length > 7) ? ' w-100' : ' w-50')}>
      <Accordion flush className={(entregasDaFilial.length < 7) ? 'w-100' : 'w-50'}>
        {entregasDaFilial.slice(0, 7).map((entrega, index) =>
          <Accordion.Item key={index} eventKey={index}>
            <Accordion.Header>Entrega {entrega.shipping_id}</Accordion.Header>
            <AccordionEntrega 
              entrega={entrega} 
              coleta={entrega.origin_location_name === filialSelecionada} 
              handleColeta={handleColeta} 
              handleEntrega={handleEntrega} 
              disabled={filialAtual !== filialSelecionada}/>
          </Accordion.Item>)}
      </Accordion>
      {(entregasDaFilial.length > 7) ?
        <Accordion flush className='w-50'>
          {entregasDaFilial.slice(7).map((entrega, index) =>
            <Accordion.Item key={index} eventKey={index}>
              <Accordion.Header>Entrega {entrega.shipping_id}</Accordion.Header>
              <AccordionEntrega 
                entrega={entrega} 
                coleta={entrega.origin_location_name === filialSelecionada} 
                handleColeta={handleColeta} 
                handleEntrega={handleEntrega} 
                disabled={filialAtual !== filialSelecionada}/>
            </Accordion.Item>)}
        </Accordion> : <></>}
    </div>
  )
}

export default AccordionEntregas

function AccordionEntrega({ entrega, coleta, handleColeta, handleEntrega, disabled }) {

  return (
    <Accordion.Body>
      <div className='d-flex justify-content-between'>
        <div>
          <p style={{ marginBottom: 1 }}>Altura: {entrega.package_height}</p>
          <p style={{ marginBottom: 1 }}>Largura: {entrega.package_width}</p>
          <p style={{ marginBottom: 1 }}>Comprimento: {entrega.package_depth}</p>
          <p style={{ marginBottom: 1 }}>Peso: {entrega.package_weight}</p>
        </div>
        {(coleta) ?
          <button
            className={'btn' + ((entrega.estado === '' && !disabled) ? ' btn-primary' : ' btn-secondary')}
            onClick={() => handleColeta(entrega.shipping_id)}
            style={{ width: 90 }}
            disabled={entrega.estado !== '' || disabled}>
            Coletar
          </button> :
          <button
            className={'btn' + ((entrega.estado !== 'entregue' && !disabled) ? ' btn-primary' : ' btn-secondary')}
            onClick={() => handleEntrega(entrega.shipping_id)}
            style={{ width: 90 }}
            disabled={entrega.estado === 'entregue' || disabled}>
            Entregar
          </button>
        }
      </div>
    </Accordion.Body>
  )
}