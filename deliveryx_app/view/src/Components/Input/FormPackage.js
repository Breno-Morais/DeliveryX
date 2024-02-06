import React from 'react'

function FormPackage({ handlePacote, pacote, noDiv }) {
  return (
    <div className={noDiv ? "w-50" : "col-sm-12 col-xl-6"}>
      <div className="bg-light rounded h-100 p-4">
        <h5 className="mb-4">Dimensões do Pacote</h5>
        <div className="mb-3">
          <label htmlFor="InputAltura" className="form-label">Altura</label>
          <input
            type="number"
            name="altura"
            className="form-control"
            id="InputAltura"
            onChange={handlePacote}
            value={(pacote.altura < 0) ? '' : pacote.altura}
          />
          <div id="heightHelp" className="form-text">Em centímetros.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="InputLargura" className="form-label">Largura</label>
          <input
            type="number"
            className="form-control"
            name="largura"
            id="InputLargura"
            onChange={handlePacote}
            value={(pacote.largura < 0) ? '' : pacote.largura}
          />
          <div id="widthHelp" className="form-text">Em centímetros.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="InputComprimento" className="form-label">Comprimento</label>
          <input
            type="number"
            className="form-control"
            name="comprimento"
            id="InputComprimento"
            onChange={handlePacote}
            value={(pacote.comprimento < 0) ? '' : pacote.comprimento}
          />
          <div id="lengthHelp" className="form-text">Em centímetros.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="InputPeso" className="form-label">Peso</label>
          <input
            type="number"
            className="form-control"
            name="peso"
            id="InputPeso"
            onChange={handlePacote}
            value={(pacote.peso < 0) ? '' : pacote.peso}
          />
          <div id="weightHelp" className="form-text">Em gramas.
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormPackage