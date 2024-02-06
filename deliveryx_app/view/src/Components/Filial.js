import React from 'react'

function Filial({ location_name, address, seleciona, filialAtual}) {
  return (
    <button className={'btn' + ((location_name === filialAtual) ? ' btn-primary' : ' btn-outline-secondary')} onClick={seleciona}>
      <p>{location_name}</p>
      <p>{address}</p>
    </button>
  )
}

export default Filial