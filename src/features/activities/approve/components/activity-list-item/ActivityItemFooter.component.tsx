import { useState, SyntheticEvent } from 'react';

import { observer } from 'mobx-react-lite';
import { useMobXStore } from '@store/index';

import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/constants';
import { Activity } from '@models/index';

import { Button, Segment } from 'semantic-ui-react';

interface Props {
  activity: Activity;
}

function ActivityItemFooter({ activity }: Props) {
  const [target, setTarget] = useState('');

  const {
    approveStore,
    userStore: { user },
  } = useMobXStore();
  const { approveActivity, rejectActivity, isSubmitMode } = approveStore;

  const handleActivityApprove = async (
    e: SyntheticEvent<HTMLButtonElement>,
    activity: Activity,
  ) => {
    setTarget(e.currentTarget.name);
    await approveActivity(activity);
  };

  const handleActivityReject = async (e: SyntheticEvent<HTMLButtonElement>, activity: Activity) => {
    setTarget(e.currentTarget.name);
    await rejectActivity(activity);
  };

  return (
    <Segment clearing>
      <span>{activity.description}</span>
      <Button
        as={Link}
        to={`${ROUTES.ACTIVITIES.LIST}/${activity.id}`}
        color="teal"
        floated="right"
        content="View"
      />
      <Button
        name={activity.id}
        loading={isSubmitMode && target === activity.id}
        onClick={(e) => handleActivityReject(e, activity)}
        color="red"
        floated="right"
        content="Reject"
        // disabled={activity.hostUsername !== user?.username}
      />
      <Button
        name={activity.id}
        loading={isSubmitMode && target === activity.id}
        onClick={(e) => handleActivityApprove(e, activity)}
        color="green"
        floated="right"
        content="Approve"
        // disabled={activity.hostUsername !== user?.username}
      />
    </Segment>
  );
}

export default observer(ActivityItemFooter);
