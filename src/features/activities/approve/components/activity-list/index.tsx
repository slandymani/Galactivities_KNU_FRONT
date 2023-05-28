import { observer } from 'mobx-react-lite';
import { useMobXStore } from '@app/store';

import { format } from 'date-fns';
import { DATE_FORMAT } from '@shared/constants';

import { Fragment } from 'react';
import { Header, SemanticCOLORS } from 'semantic-ui-react';
import ActivityItem from '../activity-list-item';

interface Props {
  groupColor?: SemanticCOLORS;
  groupSize?: any;
}

function ActivityList({ groupColor = 'violet', groupSize = 'huge' }: Props) {
  const {
    approveStore: { groupedActivities },
  } = useMobXStore();

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header sub color={groupColor} size={groupSize} style={{ fontSize: '1.2rem' }}>
            {format(Date.parse(group), DATE_FORMAT.MONTH_ABBR_UPPERCASE)}
          </Header>
          {activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </Fragment>
      ))}
    </>
  );
}

export default observer(ActivityList);
