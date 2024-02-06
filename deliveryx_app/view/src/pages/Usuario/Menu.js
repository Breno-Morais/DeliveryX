import { FaCompass, FaBook, FaCubes, FaReadme } from "react-icons/fa6"
import { useSelector } from 'react-redux'
import Base from '../../Components/Struct/Base'
import { useNavigate } from 'react-router-dom'
import filiais from '../../img/filiais.jpeg'
import React, { useEffect, useState } from 'react'

function MenuUsuario() {
  const userName = useSelector((state) => state.auth.userData.name)
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState(useSelector((state) => state.auth.userData.email))
  return (
    <Base role={'usuario'}>
      <h1 style={{textAlign: 'center'}}>Bem vindo {userName}!</h1>
      <h5 style={{textAlign: 'center'}}>Serviços disponíveis: </h5> 
      <div className='d-flex' style={{justifyContent: 'center', gap: '10px', flexDirection: "column"}}>
        <button className="btn btn-primary" onClick={() => navigate('/solicitacao')} style={{ height: '40px', margin:'auto' }}>
          <FaCubes style={{scale: "150%"}}/>
          &nbsp; Solicitar Pacote
        </button>
        <button className="btn btn-primary" onClick={() => navigate('/rastrear')} style={{ height: '40px', margin:'auto' }}>
          <FaCompass style={{scale: "150%"}}/>
          &nbsp;  Rastrear Pedido
        </button>
        <button className="btn btn-primary" onClick={() => navigate('/consultar')} style={{ height: '40px', margin:'auto' }}>
          <FaReadme style={{scale: "150%"}} />
          &nbsp;  Consultar Envios
        </button>
        <button className="btn btn-primary" onClick={() => navigate('/relatorioUsuario')} style={{ height: '40px', margin:'auto' }}>
          <FaBook style={{scale: "150%"}} />
          &nbsp; Gerar relatório
        </button>
      </div>
      <br />
      <div className= "container">
        <div className= "m-2">
          <img src={filiais} alt="asda" className="figure-img img-fluid"/>
        </div>
      </div>
    </Base>
  )
}

export default MenuUsuario