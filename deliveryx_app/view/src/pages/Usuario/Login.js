import React, { useEffect } from 'react'
import { useState } from 'react'
import 'react-phone-number-input/style.css'
import { Link } from 'react-router-dom'

import { validacaoLogin } from '../../utils/validation'

import { getToken } from '../../utils/HelperFunctions';
import { login } from '../../store/slices/authThunk'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function Login() {
  const [user, setUser] = useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (token || getToken())
      navigate('/menuUsuario')
  }, [token])

  function handleUserChange(event) {
    setUser(prevUser => {
      return {
        ...prevUser,
        [event.target.name]: event.target.value
      }
    })
  }

  async function handleLogin(event) {
    event.preventDefault() // Não roda o componente novamente, reiniciando os estados

    if (!validacaoLogin(user))
      return

    dispatch(login(user))
  }

  return (
    <div className="container-fluid">
      <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
            <Link to="/" className="">
              <img className="mb-5" src="DeliveryX.png" alt="" style={{ width: '320px', height: '40px' }} />
            </Link>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' onChange={handleUserChange} value={user.email} />
              <label htmlFor="floatingInput">Endereço de Email</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' onChange={handleUserChange} value={user.password} />
              <label htmlFor="floatingPassword">Senha</label>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
              {/*<Link to="">Forgot Password</Link>*/}
            </div>
            <button type="submit" className="btn btn-primary py-3 w-100 mb-4"  onClick={handleLogin}>Login</button>
            <p className="text-center mb-0">Não tem uma Conta? <Link to="/signUp">Inscreva-se</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login