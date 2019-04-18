export default (theme) => ({
	root: {
		padding: theme.spacing.unit * 2,
		display: 'flex',
		backgroundColor: '#67a0b4',
		backgroundImage: 'linear-gradient(315deg, #67a0b4 0%,  #b1d2d8 74%)',
		height: '200px',
		borderRadius: '8px',
		webkitBoxShadow:
			'0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)',
		boxShadow:
			'0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)'
	},
	tiles: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		'-webkit-flex-flow': 'row wrap'
	},

	layout: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		width: '100%',
		// marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
			width: `calc(100% - 210px)`,
			marginLeft: 210,
			marginRight: 'auto'
		}
	},
	card: {
		display: 'flex',
		backgroundColor: '#000000',
		backgroundImage: 'linear-gradient(147deg, #000000 0%, #434343 74%)'
	},
	content: {
		height: '100%',
		padding: '0',
		width: '100%'
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
	},
	starRatingComponent: {
		fontSize: '30px'
	},
	buttonStyle: {
		textDecoration: 'none',
		alignSelf: 'center',
		letterSpacing: '0.1rem',
		fontFamily: 'isotonic',
		fontSize: '12px',
		margin: '10px',
		paddingLeft: '20px',
		paddingRight: '20px',
		justifyContent: 'center'
	},
	outLinedBtn: {
		color: 'white',
		backgroundColor: 'black',
		borderColor: 'white',
		textDecoration: 'none',
		alignSelf: 'center',
		letterSpacing: '0.1rem',
		fontFamily: 'isotonic',
		fontSize: '12px',
		paddingLeft: '20px',
		paddingRight: '20px'
	},
	outLinedBtn2: {
		margin: theme.spacing.unit,
		color: 'white',
		backgroundColor: '#222',
		borderColor: 'black',
		textDecoration: 'none',
		alignSelf: 'center',
		letterSpacing: '0.1rem',
		fontFamily: 'isotonic',
		fontSize: '10px',
		paddingLeft: '20px !important',
		paddingRight: '20px !important',
		'&:hover': {
			backgroundColor: 'black'
		},
		'&:disabled': {
			backgroundColor: 'black',
			color: 'white',
			style: { cursor: 'no-drop' }
		},
		marginRight: '0px',
		marginTop: '10px'
	}
});
