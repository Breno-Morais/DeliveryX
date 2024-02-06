import React from 'react'
import { toast } from 'react-toastify'

function Contato({ usuario, idRota }) {
  function atribuir()
  {
    fetch('/atribuirEntregador', {
      method: 'POST',
      body: JSON.stringify({userId: usuario.id, routeId: idRota}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(
      response => response.json()
    )
    .then(
      data => {
        if(data)
        {
          toast.success('Atribuição Bem Sucedida')
          window.location.reload()
        }
        else
          toast.error('Erro na Atribuição')
      }
    )
    .catch(
      error => console.error(error)
    )
  }

  return (
    <div>
      <img 
      className="rounded-circle" 
      src="user.jpg" 
      alt="" 
      style={{ width: '200px', height: '200px', display: 'block', margin: '20px auto 20px'}} />
      <h2 className='text-center' style={{ fontWeight: 300, lineHeight: 1.2 }}>{usuario.name}</h2>
      <div className='m-4'>
        <p style={{margin: 0}}>Email: {usuario.email}</p>
        <p style={{margin: 0}}>Telefone: {usuario.telephone}</p>
        <button 
        className='btn btn-lg btn-primary'
        style={{display: 'block', margin: '20px auto'}}
        onClick={atribuir}>
          Atribuir
        </button>
      </div>
    </div>
  )
}

export default Contato