import { useField } from 'formik';
import { Form } from 'semantic-ui-react';
import ErrorLabel from './helpers/ErrorLabel';

interface Props {
  name: string;
  placeholder: string;
  rows?: number;
  label?: string;
}

function TextArea(props: Props) {
  const [field, meta] = useField(props.name);
  console.log(field);

  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label>{props.label}</label>
      <textarea {...field} {...props} rows={props.rows ?? 3} />
      <ErrorLabel meta={meta} />
    </Form.Field>
  );
}

export default TextArea;
