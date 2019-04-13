export default (theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		[theme.breakpoints.up('sm')]: {
			marginLeft: 200,
			marginTop: '28px',
			width: `calc(100% - ${200}px)`
		}
	},
	tiles: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		'-webkit-flex-flow': 'row wrap'
	},
	toolbar: theme.mixins.toolbar,
	CardTitleTextDecorator: {
		display: 'flex',
		flexDirection: 'column',
		color: 'white',
		fontFamily: 'isotonicBold',
		textTransform: 'uppercase',
		fontSize: '1.25rem'
	}
});
