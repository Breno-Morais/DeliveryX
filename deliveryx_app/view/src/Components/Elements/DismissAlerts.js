import React from 'react'

function DismissAlerts() {
  return (
    <div className="col-sm-12 col-xl-6">
      <div className="bg-light rounded h-100 p-4">
        <h6 className="mb-4">Icons & Dismissing Alerts</h6>
        <div className="alert alert-primary alert-dismissible fade show" role="alert">
          <i className="fa fa-exclamation-circle me-2"></i>An icon & dismissing primary alert—check it out!
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div className="alert alert-secondary alert-dismissible fade show" role="alert">
          <i className="fa fa-exclamation-circle me-2"></i>An icon & dismissing secondary alert—check it out!
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <i className="fa fa-exclamation-circle me-2"></i>An icon & dismissing success alert—check it out!
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <i className="fa fa-exclamation-circle me-2"></i>An icon & dismissing danger alert—check it out!
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <i className="fa fa-exclamation-circle me-2"></i>An icon & dismissing warning alert—check it out!
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div className="alert alert-info alert-dismissible fade show" role="alert">
          <i className="fa fa-exclamation-circle me-2"></i>An icon & dismissing info alert—check it out!
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div className="alert alert-light alert-dismissible fade show" role="alert">
          <i className="fa fa-exclamation-circle me-2"></i>An icon & dismissing light alert—check it out!
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div className="alert alert-dark alert-dismissible fade show mb-0" role="alert">
          <i className="fa fa-exclamation-circle me-2"></i>An icon & dismissing dark alert—check it out!
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    </div>
  )
}

export default DismissAlerts