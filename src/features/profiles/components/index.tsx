import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { observer } from 'mobx-react-lite';
import { useMobXStore } from '@store/index';

import { Grid } from 'semantic-ui-react';
import Spinner from '@shared/components/loaders';

import ProfileHeader from './profile-main/ProfileHeader.component';
import ProfileContent from './profile-main/ProfileContent.component';

function ProfilePage() {
  const { username } = useParams<{ username: string }>();

  const { profileStore } = useMobXStore();
  const { profile, isLoading, fetchProfile, setActiveTab } = profileStore;

  useEffect(() => {
    fetchProfile(username!).then();
    return () => setActiveTab(0);
  }, [fetchProfile, setActiveTab, username]);

  if (isLoading) return <Spinner content="Loading profile..." />;

  return (
    <Grid>
      <Grid.Column width={16}>
        {profile && (
          <>
            <ProfileHeader profile={profile} />
            <ProfileContent profile={profile} />
          </>
        )}
      </Grid.Column>
    </Grid>
  );
}

export default observer(ProfilePage);
