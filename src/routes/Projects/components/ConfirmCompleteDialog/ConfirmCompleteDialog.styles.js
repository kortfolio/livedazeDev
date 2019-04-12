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
		fontFamily: 'isotonicBold',
		backgroundColor: '#9ed166',
		'&:hover': {
			backgroundColor: '#739a48'
		},
		textDecoration: 'none',
		fontSize: '10px',
		marginRight: '0px',
		paddingLeft: '10px !important',
		paddingRight: '10px !important'
	},
	confirmDeleteFab: {
		margin: theme.spacing.unit,
		color: 'white',
		cursor: 'pointer !important',
		fontFamily: 'isotonicBold',
		backgroundColor: '#dd000b',
		textDecoration: 'none',
		fontSize: '10px',
		marginRight: '0px',
		paddingLeft: '10px !important',
		paddingRight: '10px !important',
		'&:hover': {
			backgroundColor: '#9f0008'
		}
	},
	outlinedConfirmDeleteFab: {
		margin: theme.spacing.unit,
		color: '#9fa6ab',
		borderColor: '#dee3e9',
		border: '1px solid',
		backgroundColor: 'white',
		cursor: 'pointer !important',
		fontFamily: 'isotonicBold',
		textDecoration: 'none',
		fontSize: '10px',
		marginRight: '0px',
		paddingLeft: '10px !important',
		paddingRight: '10px !important',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: '#fafafa'
		}
	},
	outlinedBtn: {
		margin: theme.spacing.unit,
		cursor: 'pointer',
		color: '#32325d',
		background: 'white',
		fontFamily: 'isotonicBold',
		paddingLeft: '10px',
		borderColor: '#9ed166',
		paddingRight: '10px',
		textDecoration: 'none',
		fontSize: '10px',
		marginRight: '0px',
		'&:hover': {
			backgroundColor: '#f3ffe4',
			borderColor: '#9ed166'
		}
	}
});
