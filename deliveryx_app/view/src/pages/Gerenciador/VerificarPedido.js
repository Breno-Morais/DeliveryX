import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Base from '../../Components/Struct/Base'
import FormRastreio from '../../Components/Input/FormRastreio'
import FormPackage from '../../Components/Input/FormPackage'
import FormFilial from '../../Components/Input/FormFilial'

function VerificarPedido() {
  const [idPacote, setIdPacote] = useState(-1)
    
  const [pacote, setPacote] = useState({ id: -1, email: '', altura: -1, largura: -1, comprimento: -1, peso: -1, destino: '', origem: '', preco: -1, emailDestinatario: '' })
  const [desatualizado, setDesatualizado] = useState(false)
  const [achado, setAchado] = useState(false)

  // Cria um estado para guardar os dados mandados do backend
  const [localizacoes, setLocalizacoes] = useState([{}])
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

  function handleIdChange(event) {
    // Não aceite Ids negativos
    if (event.target.value >= 0)
      setIdPacote(event.target.value)
  }

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

  function handleConsulta(event) {
    event.preventDefault() // Não roda o componente novamente, reiniciando os estados
    if (event.target.value === undefined)
      return

    // Faz um request ao server consultando o pacote
    fetch("/consultaPedido?shoppingId=" + idPacote + "&type=inspection").then(
      response => response.json()
    ).then(
      data => {
        if (data === '[]') {
          toast.warn('Pedido não Achado')
          setPacote({ id: -1, email: '', altura: -1, largura: -1, comprimento: -1, peso: -1, destino: '', origem: '', preco: -1, emailDestinatario: '' })
          setAchado(false)
        }
        else {
          setPacote(JSON.parse(data))
          setAchado(true)
        }
        setDesatualizado(false)
      }
    )
  }

  function handleAlterar(event) {
    event.preventDefault() // Não roda o componente novamente, reiniciando os estados
    //const original = JSON.parse(JSON.stringify(pacote)) // Deep Copy 

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
    fetch('/atualizarSolicitacao', {
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
          setDesatualizado(false)
          toast.success('Solicitação Atualizada')
        }
      )
      .catch(
        error => {
          console.error(error)
          toast.error('Erro no banco de dados')
        }
      )
  }

  function handleAutorizar(event) {
    event.preventDefault() // Não roda o componente novamente, reiniciando os estados

    fetch("/autorizarPedido?shoppingId=" + pacote.id)
    .then(
      response => response.json()
    )
    .then(
      data => {
        if(data)
          toast.success('Solicitação Autorizada')
        else
          toast.warn('Autorização Negada')
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
    <Base role={'admin'}>
      <h1 className='display-6 text-center'>Inspecionar Pacote</h1>
      <div className={'d-flex rounded justify-content-between flex-sm-column flex-xl-row align-items-start'}>
        <div className='d-flex'>
          <FormRastreio handleIdChange={handleIdChange} handleConsulta={handleConsulta} idPacote={idPacote} noW25={true} />
          {achado ?
            <div className="rounded h-100" style={{ backgroundColor: '#dddddd' }}>
              <div className='p-4'>
                <h4 style={{ fontWeight: 300, lineHeight: 1.2 }}>Solicitação de Envio <small className='text-muted'>ID {pacote.id}</small></h4>
                <div style={{ marginLeft: '10px', lineHeight: '10px' }}>
                  <p>Email: {pacote.email}</p>
                  <p>Origem: {pacote.origem.nome}</p>
                  <p>Destino: {pacote.destino.nome}</p>
                  <p>Dimensões: [{pacote.altura}, {pacote.largura}, {pacote.comprimento}]cm</p>
                  <p>Peso: {pacote.peso}g</p>
                  <p>Preço: R${pacote.preco}</p>
                </div>
              </div>
            </div> :
            <></>}
        </div>
        {desatualizado ?
          <div className="d-flex g-4 mb-4 bg-light rounded" style={{ flexWrap: 'nowrap' }}>
            <FormPackage handlePacote={handlePacoteChange} pacote={pacote} noDiv={true} />
            <div className='w-50'>
              <FormFilial handlePacoteChange={handlePacoteChange} localizacoes={localizacoes} emailDestinatario={pacote.emailDestinatario} noDiv={true} />
              <button 
              className="btn btn-primary" 
              style={{ float: 'right', marginTop: '-1.5rem', marginRight: '1.5rem' }}
              onClick={handleAlterar}
              >
                Atualizar
              </button>
            </div>
          </div>
          :
          <></>}
      </div>
      {achado ? <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='btn-group-vertical' role='group' style={{ margin: '40px auto 20px auto' }}>
          {desatualizado ? <></> :
            <button
              type="button"
              className="btn btn-warning"
              style={{ width: '165px' }}
              onClick={() => setDesatualizado(true)}
            >
              Alterar Pacote
            </button>}
          <button
            type="button"
            className="btn btn-success"
            style={{ width: '165px', height: '70px', fontSize: '1.7rem' }}
            onClick={handleAutorizar}
          >
            Autorizar
          </button>
        </div>
      </div> :
      <></>}
    </Base>
  )
}

export default VerificarPedido

function localToPacoteFilial(local) {
  return {
    nome: local.location_name,
    id: local.location_id,
    idCidade: local.fk_city_id,
    idEstado: local.fk_state_id,
    idPais: local.fk_country_id,
  }
}