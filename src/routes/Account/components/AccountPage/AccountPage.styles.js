export default (theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		[theme.breakpoints.up('sm')]: {
			marginLeft: 200,
			marginTop: '28px',
			width: `calc(100% - ${200}px)`
		}
	},
	pane: {
		...theme.flexColumnCenter,
		justifyContent: 'space-around',
		flexBasis: '60%',
		padding: theme.spacing.unit
	},
	settings: {
		...theme.flexRowCenter
	},
	avatarCurrent: {
		width: '100%',
		maxWidth: '13rem',
		marginTop: '3rem',
		height: 'auto',
		cursor: 'pointer'
	},
	meta: {
		...theme.flexColumnCenter,
		flexBasis: '60%',
		marginBottom: '3rem',
		marginTop: '2rem'
	}
});
