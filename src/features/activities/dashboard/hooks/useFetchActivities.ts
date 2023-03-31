import { useEffect } from 'react';
import { useMobXStore } from 'app/store/root.store';

export default function useFetchActivities() {
  const {
    activityStore: { fetchActivities },
  } = useMobXStore();

  useEffect(() => {
    fetchActivities().then();
  }, [fetchActivities]);
}
