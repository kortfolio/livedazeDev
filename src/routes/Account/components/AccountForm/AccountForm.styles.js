export default (theme) => ({
	avatarCurrent: {
		width: '50px',
		//margin: '10px',
		textAlign: 'center',
		maxWidth: '13rem',
		height: 'auto',
		cursor: 'pointer'
	},

	updateBtn: {
		width: '100% !important',
		paddingLeft: '20px !important',
		paddingRight: '20px !important',
		color: 'white',
		cursor: 'pointer',
		background: '#434343',
		fontFamily: 'isotonicBold',
		'&:hover': {
			background: 'black'
		},
		textDecoration: 'none',
		fontSize: '10px',
		marginRight: '0px'
	},
	root: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	margin: {
		margin: theme.spacing.unit
	},
	cssLabel: {
		'&$cssFocused': {
			color: 'red'
		}
	},
	cssFocused: {},
	cssUnderline: {
		'&:after': {
			borderBottomColor: 'red'
		}
	},
	cssOutlinedInput: {
		'&$cssFocused $notchedOutline': {
			borderColor: 'red'
		}
	},
	notchedOutline: {},
	bootstrapRoot: {
		'label + &': {
			marginTop: theme.spacing.unit * 3
		}
	},
	bootstrapInput: {
		borderRadius: 4,
		position: 'relative',
		backgroundColor: '#f6f9fc',
		//backgroundColor: 'transparent',
		border: '1px solid #96a4b4',
		fontSize: 14,
		color: '#8898aa',
		//	color: '#32325d',
		width: '100%',
		padding: '5px 6px',
		margin: '5px 5px',
		//	boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
		transition: theme.transitions.create([ 'border-color', 'box-shadow' ]),
		// Use the system font instead of the default Roboto font.
		fontFamily: [ 'isotonicBold' ].join(','),
		'&:focus': {
			borderRadius: 4,
			backgroundColor: 'white',
			borderColor: '#80bdff',
			color: '#32325d',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
		}
	},
	bootstrapFormLabel: {
		fontSize: 18
	}
});
