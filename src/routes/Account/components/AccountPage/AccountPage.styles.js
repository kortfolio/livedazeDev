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
		padding: theme.spacing.unit,
		backgroundColor: 'white',
		borderRadius: '8px',
		webkitBoxShadow:
			'0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)',
		boxShadow:
			'0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)'
	},
	settings: {
		...theme.flexRowCenter
	},
	avatarCurrent: {
		width: '100px',
		margin: '5px',
		textAlign: 'center',
		maxWidth: '13rem',
		height: 'auto',
		cursor: 'pointer'
	},
	meta: {
		...theme.flexColumnCenter,
		flexBasis: '60%',
		marginBottom: '3rem',
		marginTop: '2rem'
	},
	displayName: {
		fontFamily: 'isotonicBold',
		textTransform: 'uppercase',
		textAlign: 'center',
		fontSize: '24px'
	},
	email: {
		fontFamily: 'isotonicBold',
		textTransform: 'uppercase',
		textAlign: 'center',
		color: '#00000099'
	},
	accountSummaryTab: {
		//	padding: theme.spacing.unit,
		height: '100%',
		backgroundColor: 'white',
		borderRadius: '8px',
		webkitBoxShadow:
			'0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)',
		boxShadow:
			'0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)'
	},
	accountEditTab: {
		//	padding: theme.spacing.unit,
		backgroundColor: 'white',
		borderRadius: '8px',
		webkitBoxShadow:
			'0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)',
		boxShadow:
			'0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)'
	}
});
