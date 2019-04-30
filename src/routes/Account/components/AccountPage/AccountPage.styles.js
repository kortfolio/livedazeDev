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
	CardTitleTextDecorator: {
		display: 'flex',
		flexDirection: 'column',
		color: '#32325d',
		fontFamily: 'isotonicBold',
		textTransform: 'uppercase',
		fontSize: '1.25rem'
	},

	pane: {
		...theme.flexColumnCenter,
		justifyContent: 'space-around',
		flexBasis: '60%',
		padding: theme.spacing.unit,
		backgroundColor: 'white',
		//backgroundColor: '#d9e4f5',
		//backgroundImage: 'linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%)',
		borderRadius: '8px',
		webkitBoxShadow:
			'0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)',
		boxShadow:
			'0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)'
	},

	avatarCurrent: {
		width: '50px',
		//margin: '10px',
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
		fontSize: '12px'
	},
	email: {
		fontFamily: 'isotonicBold',
		textTransform: 'uppercase',
		textAlign: 'center',
		color: '#00000099'
	},
	accountSummaryTab: {
		//	padding: theme.spacing.unit,
		padding: theme.spacing.unit * 2,
		height: '100%',
		//backgroundColor: 'white',
		borderRadius: '8px',
		backgroundColor: '#ffffff',
		backgroundImage: 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)',
		// 		background-color:
		// background-image: ;
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
	},
	accountSummaryTabBlack: {
		padding: theme.spacing.unit * 2,
		height: '100%',
		borderRadius: '8px',
		//backgroundColor: '#000000',
		//backgroundImage: 'linear-gradient(147deg, #000000 0%, #2c3e50 74%)',
		backgroundColor: '#7f5a83',
		backgroundImage: 'linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)',

		webkitBoxShadow:
			'0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)',
		boxShadow:
			'0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)'
	}
});
