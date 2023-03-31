import { Message } from 'semantic-ui-react';

interface Props {
  errors: any;
}

function ValidationErrorList({ errors }: Props) {
  return (
    <Message error>
      {Array.isArray(errors) ? (
        <Message.List>
          {errors.map((error: string, idx) => (
            <Message.Item key={idx}>{error}</Message.Item>
          ))}
        </Message.List>
      ) : (
        <Message.Item>{errors}</Message.Item>
      )}
    </Message>
  );
}

export default ValidationErrorList;
