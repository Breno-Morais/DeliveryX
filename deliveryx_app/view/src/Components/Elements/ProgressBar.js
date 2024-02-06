import React from 'react'

function ProgressBar({ value, type }) {
  const valueNow = { width: String(value) + '%' }
  const progressType = 'progress-bar progress-bar-striped bg-' + type

  // Possible types: success,info,warning,danger

  return (
    <div className="pg-bar mb-3">
      <div className="progress">
        <div className={progressType} role="progressbar" aria-valuenow={String(value)} aria-valuemin="0" aria-valuemax="100" style={valueNow}></div>
      </div>
    </div>
  )
}

export default ProgressBar