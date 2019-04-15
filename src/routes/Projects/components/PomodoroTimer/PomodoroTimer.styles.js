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

	cardTitleText: {
		display: 'flex',
		flexDirection: 'column',
		color: 'white',
		fontFamily: 'isotonicBold',
		textTransform: 'uppercase',
		fontSize: '1.25rem'
	},
	outLinedBtn: {
		padding: '0px 20px 0px 20px !important',
		//margin: '10px 0px, 0px 0px !important',
		margin: theme.spacing.unit,
		letterSpacing: '0.1rem',
		backgroundColor: '#222',
		textDecoration: 'none',
		fontFamily: 'isotonic',
		alignSelf: 'center',
		fontSize: '12px',
		color: 'white',
		'&:hover': {
			backgroundColor: 'black'
		},
		'&:disabled': {
			backgroundColor: '#f5f5f5',
			color: '#333',
			cursor: 'not-allowed'
		}
	},
	outLinedBtn2: {
		display: 'none',
		color: 'red,'
	},
	disabledBtn: {
		padding: '0px 20px 0px 20px !important',
		//margin: '10px 0px, 0px 0px !important',
		boxShadow: 'none',
		margin: theme.spacing.unit,
		letterSpacing: '0.1rem',
		backgroundColor: '#f5f5f5',
		textDecoration: 'none',
		fontFamily: 'isotonic',
		alignSelf: 'center',
		fontSize: '12px',
		color: '#333',
		disabled: 'true',
		cursor: 'not-allowed',
		'&:hover': {
			backgroundColor: '#f5f5f5'
		},
		'&:disabled': {
			backgroundColor: '#f5f5f5',
			color: '#333',
			cursor: 'not-allowed'
		}
	}
});
