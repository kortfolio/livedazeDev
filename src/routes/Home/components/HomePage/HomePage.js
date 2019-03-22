import React from 'react'
import PropTypes from 'prop-types'

export const Home = ({ classes }) => (
  <div className={classes.root}>
  
  
    <div className="flex-row-center">
      <h2>UNDER DEVELOPMENT</h2>
    </div>
    <div className="flex-row-center">
      
  </div>
      
  </div>
)

Home.propTypes = {
  classes: PropTypes.object.isRequired // from enhancer (withStyles)
}

export default Home
