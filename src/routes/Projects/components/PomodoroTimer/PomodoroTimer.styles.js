export default (theme) => ({
	root: {
		padding: theme.spacing.unit * 2,
		display: 'flex',
		backgroundColor: '#89d8d3',
		backgroundImage: 'linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%)',
		height: '200px',
		borderRadius: '8px',
		webkitBoxShadow:
			'0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)',
		boxShadow:
			'0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)'
	},
	inputs: {
		...theme.flexColumnCenter
	},
	buttons: {
		...theme.flexColumnCenter
	},

	details: {
		padding: theme.spacing.unit,
		display: 'flex',
		flexDirection: 'column',
		width: '100%'
	},

	content: {
		height: '100%',
		padding: '0',
		width: '100%'
	},
	iconContent: {
		padding: 0
	},

	card: {
		display: 'flex',
		background: '#4c89db',
		backgroundColor: '#045de9',
		backgroundImage: 'linear-gradient(315deg, #4c89db 0%, #85b9ff 74%)',
		height: '100%'
	},

	goalDayTitle: {
		display: 'flex',
		flexDirection: 'column',
		color: 'white',
		fontFamily: 'isotonicBold',
		textTransform: 'uppercase',
		fontSize: '1.25rem'
	},
	outLinedBtn: {
		margin: theme.spacing.unit,
		color: 'white',
		backgroundColor: '#222',
		borderColor: 'black',
		textDecoration: 'none',
		alignSelf: 'center',
		letterSpacing: '0.1rem',
		fontFamily: 'isotonic',
		fontSize: '12px',
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
