import { SyntheticEvent } from 'react';

import { observer } from 'mobx-react-lite';
import { useMobXStore } from '@store/index';

import { UserProfile } from '@models/index';
import { Button, Reveal } from 'semantic-ui-react';

interface Props {
  profile: UserProfile;
}

function FollowButton({ profile }: Props) {
  const {
    profileStore,
    userStore: { user },
  } = useMobXStore();
  const { updateFollowing, isUploading } = profileStore;

  const handleFollow = async (e: SyntheticEvent<HTMLButtonElement>, username: string) => {
    e.preventDefault();
    await updateFollowing(username, !profile.isFollowing);
  };

  return (
    <Reveal animated="move">
      <Reveal.Content
        disabled={user?.username === profile.username}
        visible
        style={{ width: '100%' }}
      >
        <Button fluid color="teal" content={profile.isFollowing ? 'Following' : 'Not Following'} />
      </Reveal.Content>
      <Reveal.Content hidden style={{ width: '100%' }}>
        <Button
          fluid
          basic
          color={profile.isFollowing ? 'red' : 'green'}
          content={profile.isFollowing ? 'Unfollow' : 'Follow'}
          disabled={user?.username === profile.username}
          loading={isUploading}
          onClick={(e) => handleFollow(e, profile.username)}
        />
      </Reveal.Content>
    </Reveal>
  );
}

export default observer(FollowButton);
