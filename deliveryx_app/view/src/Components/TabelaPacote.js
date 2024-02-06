import React from 'react'

function TabelaPacote({ pacotes, filial }) {
  const headers = ['Filial', 'Altura', 'Largura', 'Comprimento', 'Peso', 'Data de Cadastro', 'Data de Entrega']
  const envios = pacotes.filter((pacote) => (filial === '') || (pacote.filial === filial))

  return (
    <div className="col-sm-12 col-xl-12">
      <div className="bg-light rounded h-100 p-4">
        <table className="table table-hover">
          <thead>
            <tr>
              {headers.map( header => <th scope='col'>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {envios.map( row => {
              return <tr>
                <td>{row.filial}</td>
                <td>{row.altura}</td>
                <td>{row.largura}</td>
                <td>{row.comprimento}</td>
                <td>{row.peso}</td>
                <td>{row.dataCadastro}</td>
                <td>{row.dataEntrega}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TabelaPacote