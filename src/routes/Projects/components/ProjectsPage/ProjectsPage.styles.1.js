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
	tiles: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		'-webkit-flex-flow': 'row wrap'
	},
	CardTitleTextDecorator: {
		display: 'flex',
		flexDirection: 'column',
		color: 'white',
		fontFamily: 'isotonicBold',
		textTransform: 'uppercase',
		fontSize: '1.25rem'
	},
	cardDecorator: {
		maxHeight: '100%',
		minHeight: '200px',
		padding: '16px',
		display: 'flex',
		backgroundColor: '#bdd4e7',
		backgroundImage: 'linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)',
		borderRadius: '8px',
		webkitBoxShadow:
			'0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)',
		boxShadow:
			'0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)'
	},
	content: {
		height: '100%',
		padding: '0',
		width: '100%'
	},
	displayStat: {
		display: 'flex',
		flexDirection: 'column',
		fontSize: '12px !important',
		color: 'white',
		fontFamily: 'isotonicBold'
	}
});
