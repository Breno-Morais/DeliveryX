import React from 'react'

function FloatingLabel() {
  return (
    <div className="col-sm-12 col-xl-6">
      <div className="bg-light rounded h-100 p-4">
        <h6 className="mb-4">Floating Label</h6>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput"
            placeholder="name@example.com" />
          <label htmlFor="floatingInput">Endereço de Email</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="floatingPassword"
            placeholder="Password" />
          <label htmlFor="floatingPassword">Senha</label>
        </div>
        <div className="form-floating mb-3">
          <select className="form-select" id="floatingSelect"
            aria-label="Floating label select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label htmlFor="floatingSelect">Works with selects</label>
        </div>
        <div className="form-floating">
          <textarea className="form-control" placeholder="Leave a comment here"
            id="floatingTextarea" style={{ height: '150px' }}></textarea>
          <label htmlFor="floatingTextarea">Comments</label>
        </div>
      </div>
    </div>
  )
}

export default FloatingLabel