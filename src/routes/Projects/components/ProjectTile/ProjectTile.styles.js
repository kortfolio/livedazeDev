export default theme => ({
  root: {
    margin:'10px',
   },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    background: "linear-gradient(315deg, rgb(249, 209, 183) 0%, rgb(248, 148, 164) 74%)",
    

  },
  name: {
    color:"white",
    fontSize: '1.4rem',
    padding:'10px',
    margin:'3px',
    //cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 800ms cubic-bezier(0.25,0.1,0.25,1) 0ms',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    
  }
})
