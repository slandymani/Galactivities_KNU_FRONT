import { observer } from 'mobx-react-lite';
import { useMobXStore } from '@store/index';

import { UserProfile } from '@models/index';
import { Tab } from 'semantic-ui-react';

import ProfileImages from '../profile-tabs/photos/ProfilePhotos.component';
import ProfileAbout from '../profile-tabs/about/ProfileAbout.component';
import ProfileActivities from '../profile-tabs/activities/ProfileActivities.component';
import ProfileFollowings from '../profile-tabs/followers[ings]/ProfileFollowings.component';

interface Props {
  profile: UserProfile;
}

function ProfileContent({ profile }: Props) {
  const {
    profileStore: { setActiveTab },
  } = useMobXStore();

  const panes = [
    { menuItem: 'About', render: () => <ProfileAbout /> },
    { menuItem: 'Photos', render: () => <ProfileImages profile={profile} /> },
    { menuItem: 'Events', render: () => <ProfileActivities /> },
    { menuItem: 'Followers', render: () => <ProfileFollowings /> },
    { menuItem: 'Following', render: () => <ProfileFollowings /> },
  ];

  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition="right"
      panes={panes}
      onTabChange={(_, data) => setActiveTab(data.activeIndex as number)}
    />
  );
}

export default observer(ProfileContent);
