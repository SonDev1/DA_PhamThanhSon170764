import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'

function DefaultComponent({children}) {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

DefaultComponent.propTypes = {
  children: PropTypes.object.isRequired
}

export default DefaultComponent
