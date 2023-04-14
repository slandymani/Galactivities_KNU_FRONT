import 'react-datepicker/dist/react-datepicker.css';

import { useField } from 'formik';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';

import { Form } from 'semantic-ui-react';
import ErrorLabel from './helpers/ErrorLabel';

function DateInput({ name, ...rest }: Partial<ReactDatePickerProps>) {
  const [field, meta, helpers] = useField(name!);

  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <ReactDatePicker
        {...field}
        name={name}
        {...rest}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value) => helpers.setValue(value)}
        calendarStartDay={1}
      />
      <ErrorLabel meta={meta} />
    </Form.Field>
  );
}

export default DateInput;
