import React from 'react'
import { FaCheck, FaXmark } from 'react-icons/fa6'

function Rota({ id, filiais, entregas, handleAtribuir, atribuido, type, escolher }) {
  return (
    <div className="bg-light rounded h-100">
      <div className='d-flex justify-content-between'>
        <div className='p-4'>
          <h4 style={{ fontWeight: 300, lineHeight: 1.2 }}>Rota <small className='text-muted'>ID {id}</small></h4>
          <div style={{ marginLeft: '10px', lineHeight: '10px' }}>
            <div className='d-flex' style={{ gap: 15 }}>
              <div>
                <h6 className='text-muted'>Filiais</h6>
                <ul style={{ listStyle: 'none', lineHeight: '1rem' }}>
                  {filiais.map((filial, index) => <li key={index}>{filial}</li>)}
                </ul>
              </div>
              <div>
                <h6 className='text-muted'>Entregas</h6>
                <ul style={{ listStyle: 'none', lineHeight: '1rem' }}>
                  {entregas.map((entrega, index) => <li key={index}>{entrega}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {(type === 'atribuir') ?
          <Atribuir atribuido={atribuido} handleAtribuir={handleAtribuir} /> :
          <Aceitar escolher={(escolha) => escolher(id, escolha)}/>}
      </div>
    </div>
  )
}

function Atribuir({ atribuido, handleAtribuir }) {
  if (atribuido)
    return <button
      type="button"
      className="btn btn-secondary"
      style={{ width: '20%', borderTopLeftRadius: 0, borderBottomLeftRadius: 0, textAlign: 'center', padding: 0 }}
      onClick={handleAtribuir}
    >
      Atribuir Entregador
    </button>
  else
    return <button
      type="button"
      className="btn btn-primary"
      style={{ width: '20%', borderTopLeftRadius: 0, borderBottomLeftRadius: 0, textAlign: 'center', padding: 0 }}
      onClick={handleAtribuir}
    >
      Atribuir Entregador
    </button>
}

function Aceitar({ escolher }) {
  return (
    <div className='d-flex align-items-center btn-group-vertical'>
      <button type='button' className='btn btn-success' style={{fontSize: '3rem', borderTopLeftRadius: 0}} onClick={() => escolher(true)}>
        <FaCheck/>
      </button>
      <button type='button' className='btn btn-danger' style={{fontSize: '3rem', borderBottomLeftRadius: 0}} onClick={() => escolher(false)}>
        <FaXmark />
      </button>
    </div>
  )
}

export default Rota