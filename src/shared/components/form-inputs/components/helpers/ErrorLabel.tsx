import { Label } from 'semantic-ui-react';
import { FieldMetaProps } from 'formik';

interface Props {
  meta: FieldMetaProps<any>;
}

function ErrorLabel({ meta }: Props) {
  return (
    <>
      {meta.touched && meta.error && (
        <Label basic color="red" style={{ marginTop: '.5rem' }}>
          {meta.error}
        </Label>
      )}
    </>
  );
}

export default ErrorLabel;
