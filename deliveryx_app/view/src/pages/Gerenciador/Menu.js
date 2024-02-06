import React from 'react'
import { FaArrowsSplitUpAndLeft, FaBook, FaRightFromBracket } from "react-icons/fa6"
import Base from '../../Components/Struct/Base'
import { useNavigate } from 'react-router-dom'

function MenuAdmin() {
  const navigate = useNavigate()
  return (
    <Base role={'admin'}>
      <div className='d-flex' style={{justifyContent: 'center', gap: '10px', flexDirection: "column"}}>
        <button className="btn btn-primary" onClick={() => navigate('/criarRota')} style={{ height: '40px', margin:'auto' }}>
          <FaArrowsSplitUpAndLeft style={{scale:'150%'}} />
          &nbsp; Criar Rota
        </button>
        <button className="btn btn-primary" onClick={() => navigate('/verificar')} style={{ height: '40px', margin:'auto' }}>
          <FaRightFromBracket style={{scale:'150%'}} />
          &nbsp; Autorizar Pedido
        </button>
        <button className="btn btn-primary" onClick={() => fetch('/relatorioUsuario?userEmail=').then(response => response.json())} style={{ height: '40px', margin:'auto' }}>
          <FaBook style={{scale:'150%'}} />
          &nbsp; Gerar relatório
        </button>
      </div>
    </Base>
  )
}

export default MenuAdmin