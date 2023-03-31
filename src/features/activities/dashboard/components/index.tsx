import { useState } from 'react';

import { observer } from 'mobx-react-lite';
import { useMobXStore } from 'app/store/root.store';

import { PagingParams } from 'models/Pagination';

import InfiniteScroll from 'react-infinite-scroller';
import { Grid, Loader } from 'semantic-ui-react';
import ActivityList from './activity-list';
import DashboardSidebar from './dashboard-sidebar';
import ActivityPlaceholder from './activity-list/ActivityPlaceholder.component';

import useFetchActivities from '../hooks/useFetchActivities';
import NoActivitiesFound from './activity-list/NoActivitiesFound.component';

function ActivityDashboard() {
  const [loadingNext, setLoadingNext] = useState(false);

  const { activityStore } = useMobXStore();
  const { fetchActivities, isLoadingInitial, activityRegistry, pagination, setPagingParams } =
    activityStore;

  useFetchActivities();

  const handleGetNext = async () => {
    setLoadingNext(true);

    setPagingParams(new PagingParams(pagination!.currentPage + 1));
    await fetchActivities(false);

    setLoadingNext(false);
  };

  return (
    <Grid>
      <Grid.Column width="10">
        {activityStore.isLoadingInitial && !loadingNext ? (
          <>
            <ActivityPlaceholder />
            <ActivityPlaceholder />
          </>
        ) : (
          <>
            {activityRegistry.size === 0 ? (
              <NoActivitiesFound />
            ) : (
              <InfiniteScroll
                pageStart={0}
                loadMore={handleGetNext}
                hasMore={
                  !isLoadingInitial &&
                  !!pagination &&
                  pagination.currentPage < pagination.totalPages
                }
                initialLoad={false}
              >
                <ActivityList />
              </InfiniteScroll>
            )}
          </>
        )}
      </Grid.Column>
      <Grid.Column width="6" style={{ marginTop: '.3rem' }}>
        <DashboardSidebar />
      </Grid.Column>
      <Grid.Column width="10" style={{ margin: '1.5rem 0' }}>
        <Loader active={loadingNext} content="Loading next batch of activities" />
      </Grid.Column>
    </Grid>
  );
}

export default observer(ActivityDashboard);
