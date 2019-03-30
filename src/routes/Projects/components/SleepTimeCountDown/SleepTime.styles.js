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
      minWidth: 275,
        display: "flex",
        background: "#4c89db",
        backgroundColor: "#ff7878",
        backgroundImage: "linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
        minHeight: "180px",
        maxHeight: "180px",
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
      },
      outLinedBtn:
      {
        color:'white',
        backgroundColor:'black',
        borderColor:'white',
        textDecoration: "none",
        alignSelf: "center",
        letterSpacing: "0.1rem",
        fontFamily: "isotonic",
        fontSize: "12px",
        margin: "10px",
        paddingLeft: "20px",
        paddingRight: "20px",
      },
      fab: {
        margin: theme.spacing.unit * 2,
      },
      absolute: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
      },
      
  });
  