import { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';
import { useMobXStore } from '@app/store';

import { PagingParams } from '@models/index';

import InfiniteScroll from 'react-infinite-scroller';
import { Grid, Loader } from 'semantic-ui-react';
import ActivityList from './activity-list';
import DashboardSidebar from './dashboard-sidebar';
import ActivityPlaceholder from './activity-list/ActivityPlaceholder.component';

import useFetchActivities from '../hooks/useFetchActivities';
import NoActivitiesFound from './activity-list/NoActivitiesFound.component';

function ApproveActivityDashboard() {
  const [loadingNext, setLoadingNext] = useState(false);

  const { approveStore } = useMobXStore();
  const { fetchActivities, isLoadingInitial, activityRegistry, pagination, setPagingParams, clearStore, setLastPage } =
    approveStore;

  useFetchActivities(0);

  const handleGetNext = async () => {
    setLoadingNext(true);

    setPagingParams(new PagingParams(pagination!.currentPage + 1));
    await fetchActivities(true, 0);

    setLoadingNext(false);
  };

  return (
    <Grid>
      <Grid.Column width="10">
        {approveStore.isLoadingInitial && !loadingNext ? (
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

export default observer(ApproveActivityDashboard);
