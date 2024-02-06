import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Base from '../../Components/Struct/Base'
import TabelaPacote from '../../Components/TabelaPacote'

function ConsultarTodosFilial() {
  const [pacotes, setPacotes] = useState([])
  const [localizacoes, setLocalizacoes] = useState([])
  const [filial, setFilial] = useState('')

  useEffect(() => {
    fetch("/consultarFilial").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setPacotes(JSON.parse(data))
      }
    )

    fetch('/localizacoes').then(
      response => response.json()
    ).then(
      data => {
        setLocalizacoes(data)
      }
    )
  }, [])

  function handlerFilial(event)
  {
    setFilial(event.target.value)
  }

  return (
    <Base role={'admin'}>
      <h1 className='display-6 text-center'>Consultar Por Filial</h1>
      <div className="bg-light rounded p-4">
        <h5 className="mb-4">Filtar por Endereço</h5>
        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="floatingSelectO"
            aria-label="Floating label select example"
            onChange={handlerFilial}
            name='origem'
            value={filial}
          >
            <option value='' selected>Escolha a filial</option>
            {localizacoes.map( (local, index) => <option value={local.location_name} id={'1' + index}>{local.location_name}</option>)}
          </select>
          <label htmlFor="floatingSelectO">Filial</label>
        </div>

      </div>
      <div className='d-flex bg-light rounded'>
        <TabelaPacote pacotes={pacotes} filial={filial}/>
      </div>
    </Base>
  )
}

export default ConsultarTodosFilial