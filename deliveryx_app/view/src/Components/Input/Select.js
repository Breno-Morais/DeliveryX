import React from 'react'

function Select() {
  return (
    <div className="col-sm-12 col-xl-6">
      <div className="bg-light rounded h-100 p-4">
        <h6 className="mb-4">Select</h6>
        <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select className="form-select mb-3" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select className="form-select" multiple aria-label="multiple select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  )
}

export default Select