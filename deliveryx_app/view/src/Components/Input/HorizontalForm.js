import React from 'react'

function HorizontalForm() {
  return (
    <div className="col-sm-12 col-xl-6">
      <div className="bg-light rounded h-100 p-4">
        <h6 className="mb-4">Horizontal Form</h6>
        <form>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Senha</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" />
            </div>
          </div>
          <fieldset className="row mb-3">
            <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios"
                  id="gridRadios1" value="option1" checked />
                <label className="form-check-label" htmlFor="gridRadios1">
                  First radio
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios"
                  id="gridRadios2" value="option2" />
                <label className="form-check-label" htmlFor="gridRadios2">
                  Second radio
                </label>
              </div>
            </div>
          </fieldset>
          <div className="row mb-3">
            <legend className="col-form-label col-sm-2 pt-0">Checkbox</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Check me out
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default HorizontalForm