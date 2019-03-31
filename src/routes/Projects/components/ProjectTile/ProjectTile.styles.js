export default (theme) => ({
	root: {
		padding: theme.spacing.unit * 2
	},
	todoItemTab: {
		// display: 'flex',
		justifyContent: 'space-between',
		width: '90%',
		// background: "linear-gradient(315deg, rgb(249, 209, 183) 0%, rgb(248, 148, 164) 74%)",
		//background: "linear-gradient(315deg, rgb(249, 209, 183) 0%, rgb(248, 148, 164) 74%)",
		// background: "white"
		backgroundColor: 'white',
		margin: 10,
		borderRadius: 10
	},
	todoItem: {
		color: 'black',
		fontSize: '1.4rem',
		padding: '10px',
		marginBottom: '3px',
		//cursor: 'pointer',
		textDecoration: 'none',
		transition: 'all 800ms cubic-bezier(0.25,0.1,0.25,1) 0ms',
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		whiteSpace: 'nowrap'
	},
	inputs: {
		...theme.flexColumnCenter
	},
	buttons: {
		...theme.flexColumnCenter
	},
	card: {
		display: 'flex',
		background: '#4c89db',
		backgroundColor: '#ff7878',
		backgroundImage: 'linear-gradient(315deg, #ff7878 0%, #ff0000 74%)',
		minHeight: '180px',
		maxHeight: '180px'
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%'
	},
	goalDayTitle: {
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
		paddingLeft: '20px',
		paddingRight: '20px'
	},
	fab: {
		margin: theme.spacing.unit * 2
	},
	absolute: {
		position: 'absolute',
		bottom: theme.spacing.unit * 2,
		right: theme.spacing.unit * 3
	}
});
