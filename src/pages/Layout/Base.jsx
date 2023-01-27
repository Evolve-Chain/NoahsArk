import React from 'react'
import Header from './Header'
// import Footer from './Footer'

const Base = (props) => {
  return (
    <div className='d-flex flex-column'>
      <Header />
      {props.children}
    </div>
  )
}

export default Base
