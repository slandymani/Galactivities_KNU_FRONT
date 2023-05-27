import 'react-calendar/dist/Calendar.css';
import './ReactCalendar.styles.scss';

import { useMobXStore } from '@store/index';
import { FilterType } from '@store/activity.store';

import Calendar from 'react-calendar';
import { Header, Segment } from 'semantic-ui-react';

function DashboardSidebar() {
  const { approveStore } = useMobXStore();
  const { activityFilter, setFilter } = approveStore;

  return (
    <>
      <Header />
      <Segment style={{ marginTop: '2rem' }}>
        <Calendar
          onClickDay={(date) => setFilter(FilterType.BY_DATE, date)}
          value={activityFilter.get(FilterType.BY_DATE) || new Date()}
          tileClassName="underlined"
        />
      </Segment>
    </>
  );
}

export default DashboardSidebar;
