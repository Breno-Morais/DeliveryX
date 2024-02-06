import React from 'react'
import BasicForm from '../Input/BasicForm'
import HorizontalForm from '../Input/HorizontalForm'
import InputGroup from '../Input/InputGroup'
import FloatingLabel from '../Input/FloatingLabel'
import FileInput from '../Input/FileInput'
import Select from '../Input/Select'
import CheckRadioSwitch from '../Input/CheckRadioSwitch'
import Sizing from '../Input/Sizing'
import Base from './Base'

function FormTemplate() {
  return (
    // Com Componentes 
    <Base options="quad">
      <BasicForm />
      <HorizontalForm />
      <FloatingLabel />
      <FileInput />
      <Select />
      <CheckRadioSwitch />
      <InputGroup />
      <Sizing />
    </Base>
  )
}

export default FormTemplate

/* Base sem Componentes
    <div>
      <div className="container-fluid position-relative bg-white d-flex p-0">
        <div className="sidebar pe-4 pb-3">
          <nav className="navbar bg-light navbar-light">
            <a href="index.html" className="navbar-brand mx-4 mb-3">
              <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>DASHMIN</h3>
            </a>
            <div className="d-flex align-items-center ms-4 mb-4">
              <div className="position-relative">
                <img className="rounded-circle" src="user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
              </div>
              <div className="ms-3">
                <h6 className="mb-0">Jhon Doe</h6>
                <span>Admin</span>
              </div>
            </div>
            <div className="navbar-nav w-100">
              <a href="index.html" className="nav-item nav-link"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Elements</a>
                <div className="dropdown-menu bg-transparent border-0">
                  <a href="button.html" className="dropdown-item">Buttons</a>
                  <a href="typography.html" className="dropdown-item">Typography</a>
                  <a href="element.html" className="dropdown-item">Other Elements</a>
                </div>
              </div>
              <a href="widget.html" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Widgets</a>
              <a href="form.html" className="nav-item nav-link active"><i className="fa fa-keyboard me-2"></i>Forms</a>
              <a href="table.html" className="nav-item nav-link"><i className="fa fa-table me-2"></i>Tables</a>
              <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Charts</a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2"></i>Pages</a>
                <div className="dropdown-menu bg-transparent border-0">
                  <a href="signin.html" className="dropdown-item"> Conecte-se</a>
                  <a href="signup.html" className="dropdown-item">Inscreva-se</a>
                  <a href="404.html" className="dropdown-item">404 Error</a>
                  <a href="blank.html" className="dropdown-item">Blank Page</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="content">
          <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
            <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
              <h2 className="text-primary mb-0"><i className="fa fa-hashtag"></i></h2>
            </a>
            <a href="#" className="sidebar-toggler flex-shrink-0">
              <i className="fa fa-bars"></i>
            </a>
            <form className="d-none d-md-flex ms-4">
              <input className="form-control border-0" type="search" placeholder="Search" />
            </form>
            <div className="navbar-nav align-items-center ms-auto">
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="fa fa-envelope me-lg-2"></i>
                  <span className="d-none d-lg-inline-flex">Message</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                  <a href="#" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <img className="rounded-circle" src="user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                      <div className="ms-2">
                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                        <small>15 minutes ago</small>
                      </div>
                    </div>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <img className="rounded-circle" src="user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                      <div className="ms-2">
                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                        <small>15 minutes ago</small>
                      </div>
                    </div>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <img className="rounded-circle" src="user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                      <div className="ms-2">
                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                        <small>15 minutes ago</small>
                      </div>
                    </div>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item text-center">See all message</a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="fa fa-bell me-lg-2"></i>
                  <span className="d-none d-lg-inline-flex">Notificatin</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                  <a href="#" className="dropdown-item">
                    <h6 className="fw-normal mb-0">Profile updated</h6>
                    <small>15 minutes ago</small>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <h6 className="fw-normal mb-0">New user added</h6>
                    <small>15 minutes ago</small>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <h6 className="fw-normal mb-0">Password changed</h6>
                    <small>15 minutes ago</small>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item text-center">See all notifications</a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <img className="rounded-circle me-lg-2" src="user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                  <span className="d-none d-lg-inline-flex">John Doe</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                  <a href="#" className="dropdown-item">My Profile</a>
                  <a href="#" className="dropdown-item">Settings</a>
                  <a href="#" className="dropdown-item">Log Out</a>
                </div>
              </div>
            </div>
          </nav>
          <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
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
              <div className="col-sm-12 col-xl-6">
                <div className="bg-light rounded h-100 p-4">
                  <h6 className="mb-4">File Input</h6>
                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Default file input example</label>
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formFileMultiple" className="form-label">Multiple files input example</label>
                    <input className="form-control" type="file" id="formFileMultiple" multiple />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formFileSm" className="form-label">Small file input example</label>
                    <input className="form-control form-control-sm" id="formFileSm" type="file" />
                  </div>
                  <div>
                    <label htmlFor="formFileLg" className="form-label">Large file input example</label>
                    <input className="form-control form-control-lg" id="formFileLg" type="file" />
                  </div>
                </div>
              </div>
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
              <div className="col-sm-12 col-xl-6">
                <div className="bg-light rounded h-100 p-4">
                  <h6 className="mb-4">Input Group</h6>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                      aria-describedby="basic-addon1" />
                  </div>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Recipient's username"
                      aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                  </div>
                  <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">$</span>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                    <span className="input-group-text">.00</span>
                  </div>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" placeholder="Server" aria-label="Server" />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">With textarea</span>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                  </div>
                </div>
              </div>
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
            </div>
          </div>
          <div className="container-fluid pt-4 px-4">
            <div className="bg-light rounded-top p-4">
              <div className="row">
                <div className="col-12 col-sm-6 text-center text-sm-start">
                  &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                </div>
                <div className="col-12 col-sm-6 text-center text-sm-end">
                  Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
      </div>
    </div>
*/