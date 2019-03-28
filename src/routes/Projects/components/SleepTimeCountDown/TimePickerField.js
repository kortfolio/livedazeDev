import React from 'react'
import { compose, withHandlers, withState, lifecycle, setDisplayName } from 'recompose'
import moment from 'moment'
import { Form, Label } from 'semantic-ui-react'
import DatePickerComponent from 'react-datepicker'
import TimePickerComponent from 'react-datepicker'

const withLabel = (Component) => setDisplayName('withLabel')(
  ({ id, label, ...props }) => (
    <React.Fragment>
      {label && <label htmlFor={id} >{label}</label>}
      <Component id={id} {...props} />
    </React.Fragment>
  )
)

const withFormField = (Component) => setDisplayName('withFormField')(
  ({ meta: { touched, error }, ...props }) => (
    <Form.Field error={!!(touched && error)}>
      <Component {...props} />

      {touched && error ? (
        <Label basic color="red" pointing>
          {error}
        </Label>
      ) : null}
    </Form.Field>
  )
)

const withFormLabelField = compose(
  withFormField,
  withLabel
)

/**
 * DatePicker Input
 */
export const TimePicker = compose(
  withState('selectedTime', 'setSelectedTime', null),
  withHandlers({
    handleChange: ({ input, setSelectedTime }) => (date) => {
      setSelectedTime(date)
      input.onChange(date)
    }
  }),
  lifecycle({
    componentWillMount () {
      if (this.props.input.value) {
        this.props.setSelectedTime(moment(this.props.input.value, 'h:mm aa'))
      }
    }
  })
)(({ input, meta, selectedTime, handleChange, ...rest }) => (
  <TimePickerComponent
    selected={selectedTime}
    onChange={handleChange}
    showTimeSelect
    showTimeSelectOnly
    timeIntervals={15}
    dateFormat="h:mm aa"
    timeCaption="Time"
    {...rest}
  />
))

/**
 * DatePicker Field
 */
export const TimePickerField = withFormLabelField(TimePicker)