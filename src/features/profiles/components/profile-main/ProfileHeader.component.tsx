import { observer } from 'mobx-react-lite';
import { IMAGE_URIS } from '@shared/constants';
import { UserProfile } from '@models/index';

import { Divider, Grid, Header, Item, Segment, Statistic } from 'semantic-ui-react';
import FollowButton from '../helper/FollowButton.component';

interface Props {
  profile: UserProfile;
}

function ProfileHeader({ profile }: Props) {
  return (
    <Segment>
      <Grid>
        <Grid.Column width={12}>
          <Item.Group>
            <Item>
              <Item.Image avatar size="small" src={profile.imageUri || IMAGE_URIS.USER_DEFAULT} />
              <Item.Content verticalAlign="middle">
                <Header as="h1" content={profile.displayName} />
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column width={4}>
          <Statistic.Group widths={2}>
            <Statistic label="followers" value={profile.followersCount} />
            <Statistic label="following" value={profile.followingCount} />
          </Statistic.Group>
          <Divider />
          <FollowButton profile={profile} />
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default observer(ProfileHeader);
