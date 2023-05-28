import 'react-calendar/dist/Calendar.css';
import './ReactCalendar.styles.scss';

import { useMobXStore } from '@app/store';
import { FilterType } from '@store/activity.store';

import Calendar from 'react-calendar';
import { Header } from 'semantic-ui-react';

import ActivityFilterItem from './sidebar-items/ActivityFilters.component';
import ActivitySortItem from './sidebar-items/ActivitySorts.component';

function DashboardSidebar() {
  const { activityStore } = useMobXStore();
  const { activityFilter, setFilter } = activityStore;

  return (
    <>
      <ActivityFilterItem />
      <ActivitySortItem />
      <Header />
      <Calendar
        onClickDay={(date) => setFilter(FilterType.BY_DATE, date)}
        value={activityFilter.get(FilterType.BY_DATE) || new Date()}
        tileClassName="underlined"
      />
    </>
  );
}

export default DashboardSidebar;
