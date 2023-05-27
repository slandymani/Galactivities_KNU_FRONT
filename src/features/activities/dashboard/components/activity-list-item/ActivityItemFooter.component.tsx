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
    activityStore,
    userStore: { user },
  } = useMobXStore();
  const { deleteActivity, isSubmitMode } = activityStore;

  const handleActivityDelete = async (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setTarget(e.currentTarget.name);
    await deleteActivity(id);
  };

  if (activity.hostUsername === user?.username) {
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
          onClick={(e) => handleActivityDelete(e, activity.id)}
          color="red"
          floated="right"
          content="Delete"
          disabled={false}
        />
      </Segment>
    );
  }

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
    </Segment>
  );
}

export default observer(ActivityItemFooter);
