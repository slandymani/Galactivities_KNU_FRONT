import { observer } from 'mobx-react-lite';
import { useMobXStore } from '@store/index';
import { UserProfile } from '@models/index';

import * as Yup from 'yup';
import { Formik } from 'formik';

import { Button, Form } from 'semantic-ui-react';
import { TextInput, TextArea } from '@shared/components/form-inputs';

interface Props {
  setEditMode: (value: boolean) => void;
}

const validationSchema = Yup.object({
  displayName: Yup.string().required(),
});

function ProfileEditForm({ setEditMode }: Props) {
  const { profileStore } = useMobXStore();
  const { profile, updateProfile } = profileStore;

  const onSubmit = async (values: Partial<UserProfile>) => {
    await updateProfile(values);
    setEditMode(false);
  };

  return (
    <Formik
      initialValues={{
        displayName: profile?.displayName,
        biography: profile?.biography,
      }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, isSubmitting, isValid, dirty }) => (
        <Form className="ui form" onSubmit={handleSubmit}>
          <TextInput name="displayName" placeholder="Display Name" />
          <TextArea rows={3} name="biography" placeholder="Add your bio" />
          <Button
            positive
            type="submit"
            floated="right"
            content="Update profile"
            loading={isSubmitting}
            disabled={!isValid || !dirty}
          />
        </Form>
      )}
    </Formik>
  );
}
export default observer(ProfileEditForm);
