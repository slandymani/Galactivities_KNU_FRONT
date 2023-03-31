import { useField } from 'formik';
import { Form } from 'semantic-ui-react';
import ErrorLabel from './helpers/ErrorLabel';

interface Props {
  name: string;
  placeholder: string;
  rows?: number;
  label?: string;
}

function TextArea({ name, label, rows, ...rest }: Props) {
  const [field, meta] = useField(name);

  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label htmlFor="textarea">{label}</label>
      <textarea id="textarea" {...field} name={name} {...rest} rows={rows ?? 3} />
      <ErrorLabel meta={meta} />
    </Form.Field>
  );
}

export default TextArea;
