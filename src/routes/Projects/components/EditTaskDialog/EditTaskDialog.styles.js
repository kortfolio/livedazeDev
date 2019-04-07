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
	}
});
