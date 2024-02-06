import React from 'react'
import { Link } from 'react-router-dom'

function SideBar({ open }) {
  return (
    <div className={"sidebar pe-4 pb-3" + (open ? " open" : "")}>
      <nav className="navbar bg-light navbar-light">
        <Link to="/" className="navbar-brand mb-3" alt="" style={{ paddingLeft: '24px' }} >
          <img className="mb-1" src="DeliveryX.png" alt="" style={{ width: '100%' }} />
        </Link>
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
  )
}

export default SideBar