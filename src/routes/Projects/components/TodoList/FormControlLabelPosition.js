import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Fab } from '@material-ui/core';





class FormControlLabelPosition extends React.Component {
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  state = {
    value: 'female',
  };

 
  
  render() {
    const divStyle = {
      color: 'blue'
    };

    return (
      
      <FormControl component="fieldset" >
        <RadioGroup
          aria-label="position"
          name="position"
          value={this.state.value}
          onChange={this.handleChange}
          row
        >
          <FormControlLabel
            value="GreatProgress"
            control={<Radio color="primary" />}
            label="Great. i am very focused
            and productive."
            labelPlacement="end"
            style={{ margin: '0' }}
          />
          <FormControlLabel
            value="Fine"
            control={<Radio color="primary" />}
            label="IT’s FINE. I AM FOCUSING BUT
            I AM NOT REALLY SURE."
            labelPlacement="end"
            style={{ margin: '0' }}
          />
          <FormControlLabel
            value="Hate"
            control={<Radio color="primary" />}
            label="I hate doing this. literally."
            labelPlacement="end"
            style={{ margin: '0' }}
          />
          <FormControlLabel
            value="Abandonment"
            control={<Radio color="primary" />}
            label="YOLO! I Didn't Do Anything."
            labelPlacement="end"
            style={{ margin: '0' }}
          />
        </RadioGroup>
        <Fab
          
          variant="extended"
          size="small"
          color="primary"
          aria-label="Add"
          className="btnMargin"
          type="submit"
        >
          Update
        </Fab>
      </FormControl>
    );
  }
}

export default FormControlLabelPosition;