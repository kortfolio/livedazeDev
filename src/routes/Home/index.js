import { Loadable } from 'utils/components';
// Sync route definition
export default {
	path: '/hp',
	component: Loadable({
		loader: () => import(/* webpackChunkName: 'Login' */ './components/HomePage')
	})
};
