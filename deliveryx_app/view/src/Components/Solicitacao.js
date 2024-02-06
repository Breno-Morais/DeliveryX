import React from 'react'

function Solicitacao({ id, origem, destino, dimensoes, adicionar, adicionado }) {

  return (
    <div className="bg-light rounded h-100">
      <div className='d-flex justify-content-between'>
        <div className='p-4'>
          <h4 style={{ fontWeight: 300, lineHeight: 1.2 }}>Solicitação de Envio <small className='text-muted'>ID {id}</small></h4>
          <div style={{ marginLeft: '10px', lineHeight: '10px' }}>
            <p style={{ lineHeight: '20px' }}>Origem: {origem}</p>
            <p style={{ lineHeight: '20px' }}>Destino: {destino}</p>
            <p>Dimensões: [{dimensoes[0]} , {dimensoes[1]} , {dimensoes[2]}] cm</p>
            <p>Peso: {dimensoes[3]}g</p>
          </div>
        </div>
        <div>
          {(adicionado) ?
            <button
              type="button"
              className="btn btn-secondary"
              style={{ width: '100%', height: '100%', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              onClick={() => adicionar(id)}
            >
              Remover da Rota
            </button> :
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%', height: '100%', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              onClick={() => adicionar(id)}
            >
              Adicionar a Rota
            </button>
          }
        </div>
      </div>
    </div>
  )
}

export default Solicitacao