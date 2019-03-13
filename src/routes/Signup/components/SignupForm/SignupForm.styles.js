export default theme => ({
  root: {
    ...theme.flexColumnCenter,
    justifyContent: 'flex-start',
    flexGrow: 1,
    height: '100%',
    width: '100%',
    margin: '.2rem',
    fontSize: '1.4rem'
  },
  submit: {
    ...theme.flexColumnCenter,
    justifyContent: 'right',
    textAlign: 'right',
    minWidth: '192px',
    marginTop: '1.5rem',
    width: '100%',
    display: "block"
  },
  textField: {
    [`& fieldset`]: {
      borderRadius: 40,
      backgroundColor: '#ffffff6b',
      color:'black'
    },
  }
})
