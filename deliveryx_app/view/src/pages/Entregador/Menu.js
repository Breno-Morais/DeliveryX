import React from 'react'
import { FaTruckArrowRight, FaBook, FaRoute } from "react-icons/fa6"
import Base from '../../Components/Struct/Base'
import { useNavigate } from 'react-router-dom'

function MenuAdmin() {
  const navigate = useNavigate()
  return (
    <Base role={'entregador'}>
      <div className='d-flex' style={{justifyContent: 'center', gap: '10px', flexDirection: "column"}}>
        <button className="btn btn-primary" onClick={() => navigate('/escolher')} style={{ height: '40px', margin:'auto' }}>
        <FaRoute style={{scale:'150%'}} />
          &nbsp; Escolher Rota
        </button>
        <button className="btn btn-primary" onClick={() => navigate('/visualizar')} style={{ height: '40px', margin:'auto' }}>
        <FaTruckArrowRight style={{scale:'150%'}} />
          &nbsp; Visualizar Rota Atual
        </button>
      </div>
    </Base>
  )
}

export default MenuAdmin