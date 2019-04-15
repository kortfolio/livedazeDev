import Loadable from 'react-loadable'
import LoadingSpinner from 'components/LoadingSpinner'
import { FOCUSTIME_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'NotFound' */ './components/FocusTimePage'),
    loading: LoadingSpinner
  })
}


