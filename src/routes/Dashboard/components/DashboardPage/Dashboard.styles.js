export default (theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		[theme.breakpoints.up('sm')]: {
			marginLeft: 200,
			marginTop: '28px',
			width: `calc(100% - ${200}px)`
		}
	}
});
