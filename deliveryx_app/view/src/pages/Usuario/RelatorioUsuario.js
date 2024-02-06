import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import Base from '../../Components/Struct/Base'
import FormRelatorioUsuario from '../../Components/Input/FormRelatorioUsuario'

function RelatorioUsuario() {
  // Cria um estado para guardar os dados mandados do backend
  const [localizacoes, setLocalizacoes] = useState([{}])
  const [origem, setOrigem] = useState(-1)
  const [destino, setDestino] = useState(-1)
  const [inicio, setInicio] = useState(new Date())
  const [fim, setFim] = useState(new Date())
  const [userEmail, setUserEmail] = useState(useSelector((state) => state.auth.userData.email))

  // Faz o request GET para a porta '/api' do servidor e guarda esses dados em backendData
  useEffect(() => {
    fetch('/localizacoes').then(
      response => response.json()
    ).then(
      data => {
        setLocalizacoes(data)
      }
    )
  }, [])

  function handleOrigem(event) {
    setOrigem(event.target.value)
  }

  function handleDestino(event) {
    setDestino(event.target.value)
  }

  function handleInicio(event) {
    setInicio(event)
  }

  function handleFim(event) {
    setFim(event)
  }

  async function handleEnviar(event) {
    event.preventDefault() // Não roda o componente novamente, reiniciando os estados

    // Tratamento de Erros
    // Campo Vazio
    if (
      origem === "" || destino === ""
    ) {
      toast.warn('Preencha todos os campos')
      return
    }

    // Mesma Filial
    if (origem === destino) {
      toast.warn('Escolha um destino diferente da filial de origem')
      return
    }

    fetch('/relatorioUsuario', {
      method: 'POST',
      body: JSON.stringify({ inicio: inicio, fim: fim, origem: origem, destino: destino }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
  }

  return (
    <Base role='usuario'>
      <h1 className='display-6 text-center' style={{ marginBottom: '24px' }}>Gerar relatório de Pacotes</h1>
      <div className="row g-4 mb-4">
        <FormRelatorioUsuario handleEnviar={handleEnviar} handleOrigem={handleOrigem} inicio={inicio} fim={fim} handleDestino={handleDestino} handleInicio={handleInicio} handleFim={handleFim} localizacoes={localizacoes} emailDestinatario={userEmail} />
      </div>
      <button
        className="btn btn-lg btn-primary back-to-top"
        style={{ display: 'inline-block', fontSize: '1.5rem' }}
        onClick={handleEnviar}
      >Gerar Relatório
      </button>
    </Base>
  )
}

export default RelatorioUsuario