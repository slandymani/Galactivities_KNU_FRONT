import { useField } from 'formik';
import { Form } from 'semantic-ui-react';
import ErrorLabel from './helpers/ErrorLabel';

interface Props {
  name: string;
  placeholder: string;
  label?: string;
  type?: string;
}

function TextInput(props: Props) {
  const { label } = props;
  const [field, meta] = useField(props);

  const isErrorState = meta.touched && !!meta.error;

  return (
    <Form.Field error={isErrorState}>
      <label htmlFor="textInput">{label}</label>
      <input id="textInput" {...field} {...props} />
      <ErrorLabel meta={meta} />
    </Form.Field>
  );
}

export default TextInput;
