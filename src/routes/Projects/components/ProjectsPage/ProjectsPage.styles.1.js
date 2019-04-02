export default (theme) => ({
	root: {
		...theme.flexColumnCenter,
		paddingTop: theme.spacing.unit * 4,
		flexGrow: '2',
		boxSizing: 'border-box',
		overflowY: 'scroll'
	},
	tiles: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		'-webkit-flex-flow': 'row wrap'
	},

	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 4,
		marginLeft: 0,
		[theme.breakpoints.up('sm')]: {
			marginLeft: 200,
			width: `calc(100% - ${200}px)`
		}
	},
	goalDatePaper: {
		background: 'red'
	},
	toolbar: theme.mixins.toolbar,
	CardTitleTextDecorator: {
		display: 'flex',
		flexDirection: 'column',
		color: 'white',
		fontFamily: 'isotonicBold',
		textTransform: 'uppercase',
		fontSize: '1.25rem'
	}
});
