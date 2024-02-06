import React, { useEffect, useState } from 'react'
import Base from '../../Components/Struct/Base'
import Rota from '../../Components/Rota'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

function EscolherRota() {
  const [userEmail, setUserEmail] = useState(useSelector((state) => state.auth.userData.email))
  const [rotas, setRotas] = useState([])

  useEffect(() => {
    fetch('/consultaRotas?courier=' + userEmail).then(
      response => response.json()
    ).then(
      data => {
        setRotas(data)
      }
    )
  }, [])

  function escolher(idRoute, escolha) {
    fetch('/escolher', {
      method: 'POST',
      body: JSON.stringify({ email: userEmail, idRoute: idRoute, escolha: escolha }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(
        response => response.json()
      )
      .then(
        data => {
          if (escolha) {
            if (data.sucess) {
              toast.success('Aceitação bem sucedida')
              window.location.reload()
            } else
              toast.error('Aceitação mal sucedida')
          } else {
            if (data.sucess) {
              toast.success('Recusa bem sucedida')
              window.location.reload()
            } else
              toast.error('Recusa mal sucedida')
          }
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
    <Base role={'entregador'}>
      {(rotas.length) ?
      <div className='d-flex align-items-start' style={{ gap: 5 }}>
        <div className='d-flex flex-column col-sm-12 col-xl-4' style={{ gap: 10 }}>
          {rotas.map((rota, index) => <Rota key={index} id={rota.id} filiais={rota.filiais} entregas={rota.entregas} escolher={escolher} />)}
        </div>
      </div> : <h3 style={{ fontWeight: 300, lineHeight: 1.2 }}><small className='text-muted'>Sem Rotas atribuidas a você</small></h3>}
    </Base>
  )
}

export default EscolherRota