import Loadable from 'react-loadable';
import LoadingSpinner from 'components/LoadingSpinner';
import { DASHBOARD_PATH as path } from 'constants/paths';

export default {
	path,
	component: Loadable({
		loader: () => import(/* webpackChunkName: 'NotFound' */ './components/DashboardPage'),
		loading: LoadingSpinner
	})
};
