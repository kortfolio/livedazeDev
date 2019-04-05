import React from 'react'
import PropTypes from 'prop-types'
import { compose, withStateHandlers, withHandlers } from 'recompose'
import { withFirebase } from 'react-redux-firebase'

export const SimpleComponent = ({ createTodo, wasSent }) => (
  <div>
    <span>Was sent: {wasSent}</span>
    <button onClick={createTodo}>
      Test Push
    </button>
  </div>
)

SimpleComponent.propTypes = {
  firebase: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  createTodo: PropTypes.func, // from enhancer (withHandlers)
  wasSent: PropTypes.bool, // from enhancer (withStateHandlers)
}

const enhance = compose(
  withFirebase,
  withStateHandlers(
    ({ initialWasSent = false }) => ({
      wasSent: initialWasSent,
    }),
    {
      toggleSent: ({ wasSent }) => () => ({
        wasSent: !wasSent
      })
    }
  }),
  withHandlers({
    createTodo: ({ wasSent, toggleSent }) => event => {
      return props.firebase
        .push('todos', { some: 'data' })
        .then(() => {
          toggleSent()
        })
    }
  })
)

// Export enhanced component
export default enhance(SimpleComponent)
// firebaseConnect can also be used (helpful for creating listeners at the same time)
// export default firebaseConnect()(SimpleComponent)