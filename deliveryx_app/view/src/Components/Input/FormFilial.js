import React from 'react'

function FormFilial({ handlePacoteChange, localizacoes, emailDestinatario, noDiv }) {
  return (
    <div className={noDiv ? "" : "col-sm-12 col-xl-6"}>
      <div className="bg-light rounded h-100 p-4">
        <h5 className="mb-4">Rota e Destinatário</h5>
        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="floatingSelectO"
            aria-label="Floating label select example"
            onChange={handlePacoteChange}
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
            onChange={handlePacoteChange}
            name='destino'
          >
            <option selected>Escolha a filial de destino</option>
            {localizacoes.map( (local, index) => <option value={index} id={'1' + index}>{local.location_name}</option>)}
          </select>
          <label htmlFor="floatingSelectD">Filial de Destino</label>
        </div>
        <div className="mb-3">
          <label htmlFor="InputAltura" className="form-label">Email do Destinatário</label>
          <input
            type="email"
            name="emailDestinatario"
            className="form-control"
            id="InputAltura"
            onChange={handlePacoteChange}
            value={emailDestinatario}
          />
          <div id="heightHelp" className="form-text">Email da pessoa que irá receber o pacote.
          </div>
        </div>

      </div>
    </div>
  )
}

export default FormFilial