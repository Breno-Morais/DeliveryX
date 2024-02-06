import React from 'react'

function FileInput() {
  return (
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
  )
}

export default FileInput