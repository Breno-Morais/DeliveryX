import React, { useState } from 'react'

function GoTop() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button className="btn btn-lg btn-primary btn-lg-square back-to-top" onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}>
      <i className="bi bi-arrow-up"></i>
    </button>
  )
}

export default GoTop