import React from 'react'
import { useState, useEffect } from 'react'
import { signOut } from '../../store/slices/authThunk'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function NavBar({ type }) {
  const [isToggled, setIsToggled] = useState([false, false, false, false])
  let userName = useSelector((state) => state.auth.userData.name)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let menu
  switch (type) {
    case 'entregador':
      menu = '/menuCourier'
      break;
    case 'usuario':
      menu = '/menuUsuario'
      break;
    case 'admin':
      menu = '/menuAdmin'
      break;
    default:
      menu = '/'
      break;
  }

  /* Problema demais
  useEffect(() => {
    const splitName = (userName) ? userName.split(' ') : '' 
    if(splitName.length > 1) 
      userName = (splitName[0] + ' ' + splitName[splitName.length - 1]) 
  }, []) */

  function handleToggle(toggle) {
    setIsToggled(isToggled.map((t, i) => {
      return (i === toggle) ? !t : t
    }))
  }

  return (
    <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
      <Link to={menu} className="navbar-brand d-flex d-lg-none me-4">
        <h2 className="text-primary mb-0"><img src='logoX.png' style={{ height: '27px' }} /></h2>
      </Link>
      <Link to={menu} className="navbar-brand d-flex d-none d-lg-block me-3" alt="" style={{ width: '250px' }} >
        <img className="mb-1" src="DeliveryX.png" alt="" style={{ width: '100%' }} />
      </Link>
      <div className="navbar-nav align-items-center ms-auto">
        <div className="nav-item dropdown">
          <button href="#" className={"nav-link dropdown-toggle" + (isToggled[2] ? " show" : "")} data-bs-toggle="dropdown" onClick={() => handleToggle(2)} style={{ backgroundColor: '#F3F6F9', flexDirection:"row", flex:1 }}>
            <img className="rounded-circle me-lg-2" src="user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
            <span className="d-none d-lg-inline-flex">{userName}</span>
          </button>
          <div className={"dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0" + (isToggled[2] ? " show" : "")}>
            <button className="dropdown-item" onClick={() => {dispatch(signOut());navigate('/')}}>Sair</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar