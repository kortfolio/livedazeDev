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
		background: '#9ed166',
		fontFamily: 'isotonic',
		paddingLeft: '10px',
		paddingRight: '10px'
	}
});
