import React from 'react'

function FormRastreio({ handleIdChange, idPacote, handleConsulta, noW25}) {
  return (
    <div className={(noW25 ? "" : "col-sm-12 col-xl-6 w-25")}>
      <div className="bg-light rounded h-100 p-4">
        <div className="mb-3">
          <label htmlFor="InputAltura" className="form-label text-truncate">ID do Envio do Pacote</label>
          <input
            type="number"
            name="id"
            className="form-control"
            id="InputAltura"
            onChange={handleIdChange}
            value={(idPacote < 0)? '' : idPacote}
          />
        </div>
        <button className="btn btn-primary" onClick={handleConsulta}>Rastrear</button>
      </div>
    </div>
  )
}

export default FormRastreio