export default (theme) => ({
	root: {
		padding: theme.spacing.unit * 2
	},

	inputs: {
		...theme.flexColumnCenter
	},
	buttons: {
		...theme.flexColumnCenter
	},
	card: {
		display: 'flex',
		backgroundColor: '#8ae9b3',
		backgroundImage: 'linear-gradient(315deg, rgb(90, 184, 141) 0%, rgb(140, 199, 115) 74%)'
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%'
	},
	cardTitleText: {
		display: 'flex',
		flexDirection: 'column',
		color: 'white',
		fontFamily: 'isotonicBold',
		textTransform: 'uppercase',
		fontSize: '1.25rem'
	},
	content: {
		flex: '1 0 auto',
		width: '100%'
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing.unit,
		paddingBottom: theme.spacing.unit
	},
	playIcon: {
		height: 38,
		width: 38
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
		margin: '10px',
		paddingLeft: '20px !important',
		paddingRight: '20px !important'
	},
	fab: {
		margin: theme.spacing.unit * 2
	},
	absolute: {
		position: 'absolute',
		bottom: theme.spacing.unit * 2,
		right: theme.spacing.unit * 3
	},
	buttonStyle: {
		textDecoration: 'none',
		letterSpacing: '0.1rem',
		fontFamily: 'isotonic',
		fontSize: '12px',
		marginRight: '0px',
		paddingLeft: '20px',
		paddingRight: '20px',
		backgroundColor: 'black'
	}
});
