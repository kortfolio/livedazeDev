import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { Fab } from '@material-ui/core';


const styles = {
  checked: {
    '&, & + $label': {
      color: '#424770',
      fontFamily: 'isotonicBold'
    },
  },

  label: {
      margin: "0",
      color: '#6b7c93',
      fontSize: '16px',
      fontFamily: 'isotonic',
      '&:hover': {
        color: "#424770",
        
      }
  },
}





handleChange = event => {
    this.setState({ value: event.target.value });
  };

function FormControlTesting(props) {
  const { classes } = props;


  return (
      
    <FormControl component="fieldset" >
     <RadioGroup
          aria-label="position"
          name="position"
          value="kkp"
         onChange={handleChange}
          row
        >
        <FormControlLabel
             classes={{
                label: classes.label,
              }}
              control={
                <Radio
                  classes={{
                    checked: classes.checked
                  }}
                value="checkedA"
                />
                }
                label="Great. i am very focused
                and productive."
                labelPlacement="end" 
                style={{ margin: '0' }}

        />
        <FormControlLabel
             classes={{
                label: classes.label,
              }}
              control={
                <Radio
                  classes={{
                    checked: classes.checked
                  }}
                value="checkedd"
                />
                }
                label="It's Okay. I am trying but it is difficult."
                labelPlacement="end" 
                style={{ margin: '0' }}

        />
        <FormControlLabel
             classes={{
                label: classes.label,
              }}
              control={
                <Radio
                  classes={{
                    checked: classes.checked
                  }}
                value="checkedk"
                />
                }
                label="Bad. I cannot focus and I don't wanna do it."
                labelPlacement="end" 
                style={{ margin: '0' }}

        />
        <FormControlLabel
             classes={{
                label: classes.label,
              }}
              control={
                <Radio
                  classes={{
                    checked: classes.checked
                  }}
                value="checkedc"
                />
                }
                label="idc. I just wasted watching youtube! YOLO."
                labelPlacement="end" 
                style={{ margin: '0' }}

        />
          
          
    </RadioGroup>
    </FormControl>
    
  );
}

FormControlTesting.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormControlTesting);