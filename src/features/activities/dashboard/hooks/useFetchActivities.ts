import { useEffect } from 'react';
import { useMobXStore } from '@store/index';

export default function useFetchActivities() {
  const {
    activityStore: { fetchActivities },
  } = useMobXStore();

  useEffect(() => {
    fetchActivities().then();
  }, [fetchActivities]);
}
