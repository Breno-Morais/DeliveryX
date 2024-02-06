import React from 'react'

function Frame({ children, style, noPad}) {
  const innerStyle = (noPad) ? { display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF'} : {}
  return (
    <div className="col-sm-12 col-xl-6 " style={style}>
      <div className={"border bg-light rounded h-100" + ((noPad)? '' : ' p-4')} style={innerStyle}>
        {children}
      </div>
    </div>
  )
}

export default Frame