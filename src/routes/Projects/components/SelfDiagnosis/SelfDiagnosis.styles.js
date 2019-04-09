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
		flexGrow: 1,
		padding: theme.spacing.unit * 3
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
	}
});
