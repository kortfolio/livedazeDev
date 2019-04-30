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
	customDialogContent: {
		fontFamily: 'isotonic !important',
		padding: '24px 24px 24px 24px'
	},
	fab: {
		margin: theme.spacing.unit,
		color: 'white',
		cursor: 'pointer',
		fontFamily: 'isotonic',
		backgroundColor: '#8592ab',
		'&:hover': {
			backgroundColor: '#32325d'
		},
		textDecoration: 'none',
		letterSpacing: '0.1rem',
		fontSize: '12px',
		marginRight: '0px',
		paddingLeft: '20px !important',
		paddingRight: '20px !important'
	},
	dialogText: {
		fontFamily: 'isotonicBold',
		color: 'white !important',
		textTransform: 'uppercase',
		background: '#3c3c3c',
		padding: '5px 5px 5px 5px'

		//backgroundImage: 'linear-gradient(315deg, #67a0b4 0%, #b1d2d8 74%)'
	},

	closeButton: {
		position: 'absolute',
		right: theme.spacing.unit,
		top: theme.spacing.unit,
		color: 'grey'
	},
	largeText: {
		fontFamily: 'isotonicBold',
		fontSize: '32px',
		color: 'white'
	}
});
