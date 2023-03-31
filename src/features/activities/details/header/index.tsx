import { observer } from 'mobx-react-lite';
import { useMobXStore } from '@store/index';

import { Activity } from '@models/index';

import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/constants';

import { Button, Segment } from 'semantic-ui-react';
import ActivityHeaderPhoto from './ActivityHeaderPhoto.component';

interface Props {
  activity: Activity;
}

function ActivityHeader({ activity }: Props) {
  const { activityStore } = useMobXStore();
  const { isLoadingInitial, updateAttendance, cancelActivityToggle } = activityStore;

  return (
    <Segment.Group>
      <ActivityHeaderPhoto activity={activity} />
      <Segment clearing attached="bottom">
        {activity.isHost ? (
          <>
            <Button
              basic
              floated="left"
              color={activity.isCancelled ? 'green' : 'red'}
              content={`${activity.isCancelled ? 'Re-activate' : 'Cancel'} Activity`}
              onClick={cancelActivityToggle}
              loading={isLoadingInitial}
            />
            <Button
              disabled={activity.isCancelled}
              as={Link}
              to={`${ROUTES.ACTIVITIES.EDIT}/${activity.id}`}
              color="orange"
              floated="right"
            >
              Manage Event
            </Button>
          </>
        ) : activity.isGoing ? (
          <Button loading={isLoadingInitial} onClick={updateAttendance}>
            Cancel attendance
          </Button>
        ) : (
          <Button
            disabled={activity.isCancelled}
            loading={isLoadingInitial}
            onClick={updateAttendance}
            color="teal"
          >
            Join Activity
          </Button>
        )}
      </Segment>
    </Segment.Group>
  );
}

export default observer(ActivityHeader);
