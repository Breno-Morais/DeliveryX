import React, { useEffect, useState } from 'react'
import Base from '../../Components/Struct/Base'
import Solicitacao from '../../Components/Solicitacao'
import Frame from '../../Components/Input/Frame'

import { toast } from 'react-toastify'

function CriarRota() {
  const [pedidosRota, setPedidosRota] = useState([])
  const [solicitacoes, setSolicitacoes] = useState([])

  useEffect(() => {
    fetch('/pacotesProntos').then(
      response => response.json()
    ).then(
      data => {
        setSolicitacoes(data)
      }
    )
  }, [])

  function adicionar(id) {
    if (!pedidosRota.includes(id))
      if(pedidosRota.length < 15)
        setPedidosRota([...pedidosRota, id])
      else
        toast.warning('Limite de 15 entregas por Rota')
    else
      setPedidosRota((current) => current.filter((pedido => pedido !== id)))
  }

  function handleCriar() {
    fetch('/criarRota', {
      method: 'POST',
      body: JSON.stringify(pedidosRota),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(
        response => response.json()
      )
      .then(
        data => {
          if (data) {
            toast.success('Rota criada com successo')
            window.location.reload()
          }
          else
            toast.error('Erro ao criar a rota')
        }
      )
      .catch(
        error => console.error(error)
      )
  }

  return (
    <Base visitante={true} background={{ background: 'linear-gradient(90deg, #FFFF 40%, #F3F6F9 45%)' }} role={'admin'}>
      <div className='d-flex flex-sm-column-reverse flex-xl-row'>
        {(solicitacoes.length) ?
          <div className='d-flex flex-column col-sm-12 col-xl-6' style={{ gap: 10 }}>
            {solicitacoes.map((solicitacao, index) =>
              <Solicitacao
                key={index}
                id={solicitacao.shipping_id}
                origem={solicitacao.origin_name}
                destino={solicitacao.destiny_name}
                dimensoes={[solicitacao.package_width, solicitacao.package_height, solicitacao.package_depth, solicitacao.package_weight]}
                adicionar={adicionar}
                adicionado={pedidosRota.includes(solicitacao.shipping_id)}
              />)}
          </div> :
          <h3 style={{ fontWeight: 300, lineHeight: 1.2 }}><small className='text-muted'>Sem pacotes prontos para entrega</small></h3>
        }
        <div style={{ width: '100%' }}>
          {(solicitacoes.length) ?
            <h3 className='text-center' style={{ fontWeight: 300, lineHeight: 1.2 }}>Pacotes da Rota</h3> :
            <></>
          }
          <div className='d-flex flex-wrap' style={{ gap: 10, justifyContent: 'center' }}>
            {pedidosRota.map((pedidoId, index) => <Frame key={index} style={{ width: '6rem', height: '6rem' }} noPad={true}>
              <div style={{ textAlign: 'center' }}>
                <h5>Pedido</h5>
                {pedidoId}
              </div>
            </Frame>)}
          </div>
        </div>
      </div>
      {(pedidosRota.length) ? 
        <button className="btn btn-lg btn-primary back-to-top rounded-pill" style={{ display: 'inline-block', fontSize: '1.5rem' }} onClick={handleCriar}>Criar Rota</button> :
        <></>
      }
    </Base>
  )
}

export default CriarRota