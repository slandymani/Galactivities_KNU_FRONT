import { Activity } from '@models/activities/Activity';

import { Segment } from 'semantic-ui-react';
import ActivityItemFooter from './ActivityItemFooter.component';
import ActivityItemHeader from './ActivityItemHeader.component';
import ActivityItemInfo from './ActivityItemInfo.component';

interface Props {
  activity: Activity;
}

function ActivityItem({ activity }: Props) {
  return (
    <Segment.Group>
      <ActivityItemHeader activity={activity} />
      <ActivityItemInfo activity={activity} />
      <ActivityItemFooter activity={activity} />
    </Segment.Group>
  );
}

export default ActivityItem;
