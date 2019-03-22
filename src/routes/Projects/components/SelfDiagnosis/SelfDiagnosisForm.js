import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Fab, Grid } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  /* START Radio Button Color Controller */
  root: {
    color: "#beb0f4",
    '&$checked': {
      color: "#8f6ed5", 
    },
    "&:hover": {
      color: "#8f6ed5",
      transition: "1s"
    },
  },
  /* END Radio Button Color Controller */
  
  /* START Radio Button Label Color Controller */
  selfDiagnosisLabel: {
    fontFamily: "isotonic",
    fontWeight: 800,
    color: "#6b7c93",
    "&:hover": {
      color: "#424770"
    },
    '&$checked': {
      color: "#8f6ed5", 
    },
  /* End Radio Button Label Color Controller */
},
  
  buttonStyle: {
    textDecoration: 'none',
    alignSelf: 'center',
    letterSpacing: '0.1rem',
    fontFamily: 'isotonic',
    fontSize: '12px',
    margin: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    backgroundImage: 'radial-gradient(circle at 12.3% 19.3%, rgb(94, 104, 226) 0%, rgb(166, 171, 241) 100.2%)'
  },

  radio: {
    '&$checked': {
      color: 'black'
    }
  },
  checked: {
color:"yellow"

  }
});

export class SelfDiagnosisForm extends React.Component {
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  state = {
    value: ""
  };
  render(){
    const { classes } = this.props;
    const buttonStyle = {
      textDecoration: 'none',
      alignSelf: 'center',
      letterSpacing: '0.1rem',
      fontFamily: 'isotonic',
      fontSize: '12px',
      margin: '10px',
      paddingLeft: '20px',
      paddingRight: '20px',
      backgroundImage: 'radial-gradient(circle at 12.3% 19.3%, rgb(94, 104, 226) 0%, rgb(166, 171, 241) 100.2%)',
      justifyContent: 'center'
    }
    return (
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="position"
          name="position"
          value={this.state.value}
          onChange={this.handleChange}
          row
        >
          <FormControlLabel
            value="GreatProgress"
            control={<Radio  classes={{
              root: classes.root,
              checked: classes.checked,
            }} />}
            label="Great. i've been productive and focused."
            labelPlacement="end"
            style={{ margin: "0" }}
            classes={{ label: classes.selfDiagnosisLabel }}
          />
          <FormControlLabel
            value="Fine"
            control={<Radio  classes={{
              root: classes.root,
              checked: classes.checked,
            }} />}
            label="IT’s FINE. I AM FOCUSING BUT
            I AM NOT REALLY SURE."
            labelPlacement="end"
            style={{ margin: "0" }}
            classes={{ label: classes.selfDiagnosisLabel }}
        
          />
          <FormControlLabel
            value="Hate"
            control={<Radio  classes={{
              root: classes.root,
              checked: classes.checked,
            }} />}
            label="I hate doing this. literally."
            labelPlacement="end"
            style={{ margin: "0" }}
            classes={{ label: classes.selfDiagnosisLabel }}
        
          />
          <FormControlLabel
            value="Abandonment"
            control={<Radio  classes={{
              root: classes.root,
              checked: classes.checked,
            }} />}
            label="YOLO! I Didn't Do Anything."
            labelPlacement="end"
            style={{ margin: "0" }}
            classes={{ label: classes.selfDiagnosisLabel }}
        
          />
        </RadioGroup>
        <Grid container alignItems="center" justify="center">
        <Fab
          style={ buttonStyle}
          variant="extended"
          size="small"
          color="primary"
          aria-label="Add"
          className="btnMargin"
          type="submit"
        >
          Update
        </Fab>
        </Grid>
      </FormControl>
    );
  }
}

export default withStyles(styles)(SelfDiagnosisForm);
