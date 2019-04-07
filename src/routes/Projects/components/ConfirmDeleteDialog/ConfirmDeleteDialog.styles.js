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
		background: '#9ed166',
		fontFamily: 'isotonic',
		backgroundColor: '#9ed166',
		'&:hover': {
			backgroundColor: '#739a48'
		},
		textDecoration: 'none',
		letterSpacing: '0.1rem',
		fontSize: '12px',
		marginRight: '0px',
		paddingLeft: '20px !important',
		paddingRight: '20px !important'
	},
	outlinedBtn: {
		margin: theme.spacing.unit,
		cursor: 'pointer',
		color: '#32325d',
		background: 'white',
		fontFamily: 'isotonic',
		paddingLeft: '10px',
		borderColor: '#9ed166',
		paddingRight: '10px',
		'&:hover': {
			backgroundColor: '#f3ffe4',
			borderColor: '#9ed166'
		},
		textDecoration: 'none',
		letterSpacing: '0.1rem',
		fontSize: '12px',
		marginRight: '0px',
		borderRadius: '50px'
	}
});
