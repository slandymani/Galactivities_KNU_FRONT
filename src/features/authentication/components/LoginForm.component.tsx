import { observer } from 'mobx-react-lite';
import { useMobXStore } from '@store/index';

import { APP_NAME } from '@shared/constants';
import { ErrorMessage, Form, Formik } from 'formik';

import { Button, Header } from 'semantic-ui-react';
import { TextInput } from '@shared/components/form-inputs';
import { ValidationErrorList } from '@features/errors';

function LoginForm() {
  const {
    userStore: { login },
  } = useMobXStore();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        error: null,
      }}
      onSubmit={(values, { setErrors }) =>
        login(values).catch((_) => setErrors({ error: 'Invalid e-mail or password' }))
      }
    >
      {({ handleSubmit, isSubmitting, errors }) => (
        <Form className="ui form error" onSubmit={handleSubmit}>
          <Header as="h2" content={`Login to ${APP_NAME}`} color="teal" textAlign="center" />
          <TextInput name="email" placeholder="Email" />
          <TextInput name="password" placeholder="Password" type="password" />
          <ErrorMessage name="error" render={() => <ValidationErrorList errors={errors.error} />} />
          <Button fluid positive content="Login" type="submit" loading={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
}

export default observer(LoginForm);
