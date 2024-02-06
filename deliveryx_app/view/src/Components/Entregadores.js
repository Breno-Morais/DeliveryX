import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'

function Entregadores({ entregadores, selecionar, selecionado }) {
  return (
    <div className="bg-light rounded h-100">
      <h5 className='m-4 text-center'>Entregadores na Área</h5>
      <Accordion flush onSelect={(eventKey) => selecionar(eventKey)} activeKey={selecionado}>
        {entregadores.map((entregador, index) => 
        <Accordion.Item key={index} eventKey={index}>
          <Accordion.Header>{entregador.name}</Accordion.Header>
        </Accordion.Item>)}
      </Accordion>
    </div>
  )
}

export default Entregadores