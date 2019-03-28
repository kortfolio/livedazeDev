export default theme => ({
    root: {
      padding: theme.spacing.unit * 2
    },
    inputs: {
      ...theme.flexColumnCenter
    },
    buttons: {
      ...theme.flexColumnCenter
    },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
    card: {
      display: "flex",
      background: "#4c89db",
      backgroundColor: "#045de9",
      backgroundImage: "linear-gradient(315deg, #045de9 0%, #09c6f9 74%)"
    },
    details: {
      display: "flex",
      flexDirection: "column",
      width: "100%"
    },
    goalDayTitle: {
      display: "flex",
      flexDirection: "column",
      color: "white",
      fontFamily: "isotonicBold",
      textTransform: "uppercase",
      fontSize: "1.25rem"
    },
    content: {
      flex: "1 0 auto",
      width: "100%"
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    playIcon: {
      height: 38,
      width: 38
    }
  });
  