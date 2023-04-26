import { format } from 'date-fns';

import { Activity } from '@models/index';
import { DATE_FORMAT } from '@shared/constants';

import { Icon, Segment } from 'semantic-ui-react';

interface Props {
  activity: Activity;
}

function ActivityItemInfo({ activity }: Props) {
  return (
    <Segment>
      <span style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Icon name="clock" />
          {format(activity.date, DATE_FORMAT.TIME_ABBR_LOWERCASE)}
        </div>
        <div>
          <Icon name="map marker alternate" />
          {activity.venue}, {activity.location}
        </div>
      </span>
    </Segment>
  );
}

export default ActivityItemInfo;
