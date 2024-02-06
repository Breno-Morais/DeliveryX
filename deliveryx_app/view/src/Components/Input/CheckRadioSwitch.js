import React from 'react'

function CheckRadioSwitch() {
  return (
    <div className="col-sm-12 col-xl-6">
      <div className="bg-light rounded h-100 p-4">
        <h6 className="mb-4">Check, Radio & Switch</h6>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Checked checkbox
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
          <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
          <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"
            disabled />
          <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
        </div>
        <hr />
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault"
            id="flexRadioDefault1" />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Default radio
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault"
            id="flexRadioDefault2" checked />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Default checked radio
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
            value="option1" />
          <label className="form-check-label" htmlFor="inlineRadio1">1</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
            value="option2" />
          <label className="form-check-label" htmlFor="inlineRadio2">2</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
            value="option3" disabled />
          <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
        </div>
        <hr />
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch"
            id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox
            input</label>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch"
            id="flexSwitchCheckChecked" checked />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox
            input</label>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch"
            id="flexSwitchCheckDisabled" disabled />
          <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Disabled switch checkbox
            input</label>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch"
            id="flexSwitchCheckCheckedDisabled" checked disabled />
          <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Disabled checked
            switch checkbox input</label>
        </div>
      </div>
    </div>
  )
}

export default CheckRadioSwitch