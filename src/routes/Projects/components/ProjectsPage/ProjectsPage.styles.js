export default theme => ({
  root: {
    ...theme.flexColumnCenter,
    paddingTop: theme.spacing.unit * 4,
    //flexGrow: '2',
    boxSizing: 'border-box',
    overflowY: 'scroll',
    display: ""
  },
  tiles: {
    //display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '-webkit-flex-flow': 'row wrap'
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
