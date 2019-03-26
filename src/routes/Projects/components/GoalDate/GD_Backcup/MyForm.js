import React from 'react'
import { Field, reduxForm } from 'redux-form'
// import moment from 'moment'
import { DatePickerField } from '../DatePickerField'

import Button from '@material-ui/core/Button'
    export const MyForm = ({ handleSubmit,handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
        <Field
          id="deadline"
          name="deadline"
          type="text"
          label="Deadline"
          placeholder="Deadline"
          component={DatePickerField}
          //dateFormat='YYYY-MM-DD'
          // if you want normalize before store on redux...
          // normalize={value => (value ? moment(value).format('DD/MM/YYYY') : null)}
        />

<Button type="submit" color="primary">
                Update
              </Button>
    </form>
  )
}