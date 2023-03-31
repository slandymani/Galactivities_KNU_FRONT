/* eslint-disable react/jsx-no-useless-fragment */
import { FieldMetaProps } from 'formik';
import { Label } from 'semantic-ui-react';

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
