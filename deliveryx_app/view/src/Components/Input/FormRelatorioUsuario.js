import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormRelatorio ({ handleOrigem, handleDestino, handleInicio, handleFim, inicio, fim, localizacoes, emailDestinatario, noDiv }) {

  return (
    <div className={noDiv ? "" : "col-sm-12 col-xl-6"}>
      <div className="bg-light rounded h-100 p-4">
        <h5 className="mb-4">Rota e Destinatário</h5>
        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="floatingSelectO"
            aria-label="Floating label select example"
            onChange={handleOrigem}
            name='origem'
          >
            <option selected>Escolha a filial de origem</option>
            {localizacoes.map( (local, index) => <option value={index} id={'1' + index}>{local.location_name}</option>)}
          </select>
          <label htmlFor="floatingSelectO">Filial de Origem</label>
        </div>
        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="floatingSelectD"
            aria-label="Floating label select example"
            onChange={handleDestino}
            name='destino'
          >
            <option selected>Escolha a filial de destino</option>
            {localizacoes.map( (local, index) => <option value={index} id={'1' + index}>{local.location_name}</option>)}
          </select>
          <label htmlFor="floatingSelectD">Filial de Destino</label>
        </div>
        <div className="mb-3">
        </div>
        <div className="mb-3">
          <label htmlFor="InputDataInicio" className="form-label">Data Início</label>
          <DatePicker selected={inicio} onChange={handleInicio} className="form-control"
            id="InputAltura"/>
        </div>
        <div className="mb-3">
          <label htmlFor="InputDataFim" className="form-label">Data Fim</label>
          <DatePicker selected={fim} onChange={handleFim} className="form-control"
            id="InputAltura"/>
        </div>
      </div>
    </div>
  )
}

export default FormRelatorio