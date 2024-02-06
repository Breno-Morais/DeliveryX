import React from 'react'

function Sizing() {
  return (
    <div className="col-sm-12 col-xl-6">
      <div className="bg-light rounded h-100 p-4">
        <h6 className="mb-4">Sizing</h6>
        <input className="form-control form-control-lg mb-3" type="text" placeholder=".form-control-lg"
          aria-label=".form-control-lg example" />
        <input className="form-control mb-3" type="text" placeholder="Default input"
          aria-label="default input example" />
        <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm"
          aria-label=".form-control-sm example" />
      </div>
    </div>
  )
}

export default Sizing