import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import AppFooter from '../Footer'

function DefaultComponent({children}) {
  return (
    <div>
        <Header/>
        {children}
        <AppFooter/>
    </div>
  )
}

DefaultComponent.propTypes = {
  children: PropTypes.object.isRequired
}

export default DefaultComponent
