import React from 'react';
import { compose, withHandlers, withState, lifecycle, setDisplayName } from 'recompose';
import moment from 'moment';
import { Form, Label } from 'semantic-ui-react';

import TimePickerComponent from 'react-datepicker';

const today = new Date();

const withLabel = (Component) =>
	setDisplayName('withLabel')(({ id, label, ...props }) => (
		<React.Fragment>
			{label && <label htmlFor={id}>{label}</label>}
			<Component id={id} {...props} />
		</React.Fragment>
	));

const withFormField = (Component) =>
	setDisplayName('withFormField')(({ meta: { touched, error }, ...props }) => (
		<Form.Field error={!!(touched && error)}>
			<Component {...props} />

			<Label className='validateLabel'>{touched && error ? error : '*required'}</Label>
		</Form.Field>
	));

const withFormLabelField = compose(withFormField, withLabel);

/**
 * DatePicker Input
 */
export const TimePicker = compose(
	withState('selectedTime', 'setSelectedTime', null),
	withHandlers({
		handleChange: ({ input, setSelectedTime }) => (date) => {
			setSelectedTime(date);
			input.onChange(date);
		}
	}),
	lifecycle({
		componentWillMount() {
			if (this.props.input.value) {
				this.props.setSelectedTime(moment(this.props.input.value));
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
		dateFormat='hh:mm a'
		//dateFormat : handles the output of the on change and selected to the end user.
		// DO not touch. it is working fine. does not affect anything else.
		timeCaption='Time'
		minTime={today}
		maxTime={new Date(today.getYear(), today.getMonth(), today.getDay(), 23, 50, 0, 0)}
		{...rest}
	/>
));

/**
 * DatePicker Field
 */
export const TimePickerField = withFormLabelField(TimePicker);
