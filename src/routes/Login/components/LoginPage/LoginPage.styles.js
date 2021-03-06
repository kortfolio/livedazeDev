export default theme => ({
  root: {
    ...theme.flexColumnCenter,
    justifyContent: 'flex-start',
    height: '100%',
  
    fontWeight: 400,
    paddingTop: '1.5rem'
  },
  panel: {
    ...theme.flexColumnCenter,
    justifyContent: 'center',
    flexGrow: 1,
    padding: '1.25rem',
    minWidth: '250px',
    minHeight: '270px'
  },
  orLabel: {
    marginTop: '1rem',
    marginBottom: '.5rem'
  },
  signup: {
    ...theme.flexColumnCenter,
    display: "block",
    textAlign: "right",
    marginBottom: "2rem",
    marginTop: "1rem"

  },
  signupLabel: {
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  signupLink: {
    fontSize: '1.2rem'
  },
  providers: {
    marginTop: '1rem'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
})
