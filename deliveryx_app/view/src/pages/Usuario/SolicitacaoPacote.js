import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import Base from '../../Components/Struct/Base'
import FormPackage from '../../Components/Input/FormPackage'
import FormFilial from '../../Components/Input/FormFilial'
import Frame from '../../Components/Input/Frame'

function SolicitacaoPacote() {
  // Cria um estado para guardar os dados mandados do backend
  const [localizacoes, setLocalizacoes] = useState([{}])
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

  const [pacote, setPacote] = useState({ email: userEmail, altura: -1, largura: -1, comprimento: -1, peso: -1, destino: {}, origem: {}, preco: -1, emailDestinatario: '' })
  const [idEnvio, setIdEnvio] = useState(0)
  const [enviado, setEnviado] = useState(false)

  // Atuliza os estados do pacote de acordo com o formulário
  function handlePacoteChange(event) {
    if (event.target.value < 0 || event.target.value === undefined)
      return

    setPacote(prevPacote => {
      return {
        ...prevPacote,
        [event.target.name]: (event.target.tagName === 'INPUT') ? event.target.value : localToPacoteFilial(localizacoes[event.target.value])
      }
    })
  }

  async function handleEnviar(event) {
    event.preventDefault() // Não roda o componente novamente, reiniciando os estados

    // Tratamento de Erros
    // Campo Vazio
    if (pacote.altura <= 0 ||
      pacote.largura <= 0 ||
      pacote.peso <= 0 ||
      pacote.comprimento <= 0 ||
      pacote.destino === '' ||
      pacote.origem === '' || 
      pacote.emailDestinatario === ''
    ) {
      toast.warn('Preencha todos os campos')
      return
    }

    // Mesma Filial
    if (pacote.origem.id === pacote.destino.id) {
      toast.warn('Escolha um destino diferente da filial de origem')
      return
    }

    // Valores fora de escopo
    if (pacote.altura > 220 ||
      pacote.largura > 220 ||
      pacote.peso > 2000000 ||
      pacote.comprimento > 550
    ) {
      toast.warn('Coloque valores dentro do Limite')
      return
    }

    // Faz o request POST para mandar as informações do Pacote para o server e imprime no console os dados que o servidor recebeu
    await fetch('/solicitarPedido', {
      method: 'POST',
      body: JSON.stringify(pacote),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(
        response => response.json()
      )
      .then(
        data => {
          setPacote(prevPacote => {
            return {
              ...prevPacote,
              preco: Math.round(data.preco * 100) / 100
            }
          })
          setIdEnvio(data.id)
          setEnviado(true)
        }
      )
      .catch(
        error => {
          console.error(error)
          toast.error('Erro no banco de dados')
        }
      )
  }

  return (
    <Base role={'usuario'}>
      <h1 className='display-6 text-center' style={{marginBottom: '24px'}}>Solicitação de Envio</h1>
      <div className="row g-4 mb-4">
        <FormPackage handlePacote={handlePacoteChange} pacote={pacote} />
        <FormFilial handlePacoteChange={handlePacoteChange} localizacoes={localizacoes} emailDestinatario={pacote.emailDestinatario} />
      </div>
      {enviado ?
        <Frame style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', width: '526px', marginBottom: '20px' }}>
          <h3>Pacote Enviado</h3>
          <h5 style={{marginBottom: '0px'}}>ID do Pedido: {idEnvio}</h5>
          <h5 style={{marginBottom: '0px'}}>Preço do Envio: R${pacote.preco}</h5>
        </Frame> : <></>
      }
      {!enviado ?
        <div style={{ textAlign: 'center' }}>
          <button className="btn btn-primary" style={{ width: '165px', height: '70px', fontSize: '1.7rem', marginBottom: '20px' }} onClick={handleEnviar}>Enviar</button>
        </div> : <></>
      }
    </Base>
  )
}

export default SolicitacaoPacote

function localToPacoteFilial(local) {
  return {
    nome: local.location_name,
    id: local.location_id,
    idCidade: local.fk_city_id,
    idEstado: local.fk_state_id,
    idPais: local.fk_country_id,
  }
}