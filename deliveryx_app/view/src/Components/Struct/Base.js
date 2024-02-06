import React from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
import Footer from './Footer'
import GoTop from './GoTop'
import { useState } from 'react'
 
function Base(props) {
  return (
    <div>
      <div className="container-fluid position-relative bg-white d-flex p-0">
        {/*<SideBar open={open}/>*/}
        <div className={"content" + ((props.dark) ? " dark" : "")} style={props.background}>
          <NavBar type={props.role}/>
          <div className="container-fluid pt-4 px-4">
            <div className={(props.options === 'quad') ? "row g-4" : ""}>
              {props.children}
            </div>
          </div>
          {/* <Footer  /> */}
        </div>
        <GoTop />
      </div>
    </div>
  )
}

export default Base