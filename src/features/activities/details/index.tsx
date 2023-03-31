import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { observer } from 'mobx-react-lite';
import { useMobXStore } from '@store/index';

import { Grid } from 'semantic-ui-react';
import Spinner from '@shared/components/loaders';

import ActivityInfo from './ActivityInfo.component';
import ActivitySideBar from './side-bar';
import ActivityHeader from './header';
import ActivityChat from './chat';

function ActivityDetails() {
  const { id } = useParams<{ id: string }>();
  const { activityStore } = useMobXStore();
  const { selectedActivity, fetchActivity, clearSelectedActivity } = activityStore;

  useEffect(() => {
    if (id) {
      fetchActivity(id).then();
    }
    return () => clearSelectedActivity();
  }, [id, fetchActivity, clearSelectedActivity]);

  if (!selectedActivity) return <Spinner content="Loading activity..." />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityHeader activity={selectedActivity} />
        <ActivityInfo activity={selectedActivity} />
        <ActivityChat activityId={selectedActivity.id} />
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivitySideBar activity={selectedActivity} />
      </Grid.Column>
    </Grid>
  );
}

export default observer(ActivityDetails);
