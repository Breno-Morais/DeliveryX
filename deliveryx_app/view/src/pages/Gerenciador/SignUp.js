import React from 'react'
import { toast } from 'react-toastify'
import { useState } from 'react'
import  PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
  const [user, setUser] = useState({name: '', email: '', password: '', CPF: '', telephone: ''})
  const navigate = useNavigate()

  function handleUserChange(event)
  {
    setUser(prevUser => {
      return {
        ...prevUser,
        [event.target.name]: event.target.value
        }
      })
  }

  function handleTelephoneChange(number)
  {
    setUser(prevUser => {
      return {
        ...prevUser,
        telephone: number
      }
    })
  }

  async function handleSingUp(event)
  {
    event.preventDefault() // Não roda o componente novamente, reiniciando os estados

    // Tratamento de Erros
    // Campo Vazio
    if(user.CPF === '' ||
    user.email === '' ||
    user.telephone === '' ||
    user.password === ''
    ) {
      toast.warn('Preencha todos os campos')
      return
    }

    if(user.password.length > 50)
    {
      toast.warn('A senha só pode ser ter no máximo 50 caracteres')
      return
    }

    // Faz o request POST para mandar as informações do Usuário para o server
    await fetch('/registrarAdmin', {
      method: 'POST',
      body: JSON.stringify(user),
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
          toast.success('Inscrição Bem Sucedida')
          navigate('/loginAdmin')
        }
        else
          toast.error('Erro na Inscrição')
      }
    )
    .catch(
      error => console.error(error)
    )
  }

  return (
    <div className="container-fluid dark">
      <div className="row h-100 align-items-center justify-content-center pad-vh" style={{ minHeight: '100vh'}}>
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3" style={{paddingRight: '1rem', paddingLeft: '1rem', paddingTop:'2.5rem', paddingBottom:'2.5rem'}}>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <Link to="/" className="">
                {/*<h3 className="text-primary">DeliveryX</h3>*/}
                <img src="DeliveryX.png" alt="" style={{ width: '260px'}} />
              </Link>
              <h4 style={{margin: 'auto'}}>Inscreva-se</h4>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingName" placeholder="Name Surname" name='name' onChange={handleUserChange} value={user.name}/>
                <label htmlFor="floatingName">Nome</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' onChange={handleUserChange} value={user.email}/>
                <label htmlFor="floatingInput">Endereço de Email</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' onChange={handleUserChange} value={user.password}/>
                <label htmlFor="floatingPassword">Senha</label>
            </div>
            <div className="form-floating mb-3">
              <input className="form-control" id="floatingCPF" placeholder="CPF" name='CPF' onChange={handleUserChange} value={user.CPF}/>
                <label htmlFor="floatingCPF">CPF</label>
            </div>
            <div className="form-floating mb-3">
              <PhoneInput defaultCountry='BR' id="floatingTelephone" placeholder="Número de Telefone" name='telephone' onChange={handleTelephoneChange} value={user.telephone}/>
            </div>
            <button type="submit" className="btn btn-primary py-3 w-100 mb-4" onClick={handleSingUp}>Inscreva-se</button>
            <p className="text-center mb-0">Já tem uma conta?<Link to="/loginAdmin"> Conecte-se</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp