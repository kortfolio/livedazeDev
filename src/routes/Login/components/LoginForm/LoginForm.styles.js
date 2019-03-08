export default theme => ({
  root: {
    ...theme.flexColumnCenter,
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    textAlign: 'right'
  },
  submit: {
    ...theme.flexColumnCenter,
    justifyContent: 'right',
    textAlign: 'right',
    minWidth: '192px',
    marginTop: '1.5rem',
    width: '100%',
    display: "block",

  }
})
