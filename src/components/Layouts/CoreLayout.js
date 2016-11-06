import React from 'react'
import Header from '../Header/Header'
import '../../styles/CoreLayout.scss'
import '../../styles/core.scss'

const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <div className='core-layout__viewport'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout