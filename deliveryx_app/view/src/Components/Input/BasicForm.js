import React from 'react'

function BasicForm() {
  return (
    <div className="col-sm-12 col-xl-6">
      <div className="bg-light rounded h-100 p-4">
        <h6 className="mb-4">Basic Form</h6>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Endereço de Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1"
              aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default BasicForm