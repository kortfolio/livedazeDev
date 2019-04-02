import { mdiBlackMesa } from '@mdi/js';

const drawerWidth = 180;

const theme = (theme) => ({
	root: {
		display: 'flex'
	},
	drawer: {
		background: 'yellow',
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
			background: 'yellow'
		}
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`
		}
	},
	menuButton: {
		marginRight: 20,
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: '#2e2f41'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`
		}
	}
});
export default theme;
