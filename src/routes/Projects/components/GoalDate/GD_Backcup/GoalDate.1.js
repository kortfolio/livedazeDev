import React from 'react'

import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { Fragment, useState } from "react";
 import moment from 'moment'
import { Field,reduxForm } from 'redux-form'
import { TextField, DatePicker} from 'redux-form-material-ui'
import { required } from 'utils/form'
//import { NEW_GOALDATE_FORM_NAME } from 'constants/formNames'
//import DatePicker from "react-datepicker";
//import MomentUtils from '@date-io/moment';
//import { DatePicker, } from "material-ui-pickers";
import YearMonthPicker from './YearMonthPicker';
//import TimePicker from 'material-ui/TimePicker';

//import DatePicker from 'redux-form-material-ui';
//import DateFnsUtils from '@date-io/date-fns';
//import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
//import DatePicker from '@material-ui/';
//import 'date-fns';
//import DateTimePicker from 'react-widgets/lib/DateTimePicker';
//import { DatePicker, InlineDatePicker,MuiPickersUtilsProvider  } from "material-ui-pickers";
import { DateTextField } from 'material-ui-pickers/_shared/DateTextField';
import { DatePickerField } from './DatePickerField';


//const [selectedDate, handleDateChange] = useState(new Date());


export const GoalDate = ({ handleSubmit }) => (
  
  <React.Fragment>
      yo buddy when is yo goal date bro
       <form onSubmit={handleSubmit}>
      {/*
        <Field name="agreeToTerms" component={DatePickerField}/
        >
        */}
         <Field
          id="deadline"
          name="deadline"
          type="text"
          label="Deadline"
          placeholder="Deadline"
          component={DatePickerField}
          dateFormat='YYYY-MM-DD'
          // if you want normalize before store on redux...
           normalize={value => (value ? moment(value).format('DD/MM/YYYY') : null)}
        />
 
          <Button type="submit" color="primary">
                Update
              </Button>

      </form>

{/*
  <Field
        name='start_time'
        component={DatePicker}
        format={null}
    />
         <Field name="eventDate" component={DatePicker} format={null} hintText="What day is the event?"/>

 <Field name="date" component={DatePicker}
format={(value, name) => value === '' ? null : value}
hintText="Pick a Date" />

}


<Field 
  name="expiresOn" 
  component={DatePicker} 
  value="3"
  format={(component, name) => { 
    console.log('value being passed:', component);
    console.log('is of type:', typeof component);
    return component === '' ? null : component 
}} />


*/}


     
   
    {/*
    <form onSubmit={handleSubmit}>
        <Field
          name="plz write yo goal date!!"
          component={TextField}
          label="Project Name"
          validate={[required]}
        />
        
    </form>
    */}
    </React.Fragment>

)


GoalDate.propTypes = {
  handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
  
}


export default GoalDate