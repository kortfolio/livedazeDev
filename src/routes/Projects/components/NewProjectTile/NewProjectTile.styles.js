export default (theme) => ({
	root: {
		...theme.flexRowCenter,
		alignItems: 'center',
		cursor: 'pointer',
		height: '200px',
		width: '300px',
		margin: theme.spacing.unit * 0.5,
		padding: theme.spacing.unit * 1.3,
		overflow: 'hidden'
	},
	addTaskTxt: {
		fontSize: '18px',
		color: 'white',
		fontFamily: 'isotonicBold',
		textTransform: 'uppercase',
		textAlign: 'right'
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
