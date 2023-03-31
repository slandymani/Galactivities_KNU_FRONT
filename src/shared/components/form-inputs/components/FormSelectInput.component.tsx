import { useField } from 'formik';
import { Form, Select } from 'semantic-ui-react';
import ErrorLabel from './helpers/ErrorLabel';

interface Props {
  name: string;
  placeholder: string;
  options: any;
  label?: string;
}

function SelectInput({ label, name, options, placeholder }: Props) {
  const [field, meta, helpers] = useField(name);

  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label htmlFor="select">{label}</label>
      <Select
        id="select"
        value={field?.value}
        options={options}
        onChange={(_, data) => helpers.setValue(data.value)}
        onBlur={() => helpers.setTouched(true)}
        placeholder={placeholder}
        closeOnEscape
      />
      <ErrorLabel meta={meta} />
    </Form.Field>
  );
}

export default SelectInput;
