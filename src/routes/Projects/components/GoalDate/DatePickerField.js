import React from 'react'
import { compose, withHandlers, withState, lifecycle, setDisplayName } from 'recompose'
import moment from 'moment'
import { Form, Label } from 'semantic-ui-react'
import DatePickerComponent from 'react-datepicker'

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
export const DatePicker = compose(
  withState('selectedDate', 'setSelectedDate', null),
  withHandlers({
    handleChange: ({ input, setSelectedDate }) => (date) => {
      setSelectedDate(date)
      input.onChange(date)
    }
  }),
  lifecycle({
    componentWillMount () {
      if (this.props.input.value) {
        this.props.setSelectedDate(moment(this.props.input.value, 'DD/MM/YYY'))
      }
    }
  })
)(({ input, meta, selectedDate, handleChange, ...rest }) => (
  <DatePickerComponent
    selected={selectedDate}
    onChange={handleChange}
    minDate={new Date()}
    {...rest}
  />
))

/**
 * DatePicker Field
 */
export const DatePickerField = withFormLabelField(DatePicker)