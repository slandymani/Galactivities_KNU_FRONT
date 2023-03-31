import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import { IMAGE_URIS, ROUTES } from '@shared/constants';
import { UserProfile } from '@models/index';

import { Button, ButtonGroup, Card, Divider, Icon, Image, SemanticSIZES } from 'semantic-ui-react';
import FollowButton from '../helper/FollowButton.component';

interface Props {
  profile: UserProfile;
  size?: SemanticSIZES;
}

const truncate = (str?: string, upTo: number = 50): string => {
  if (str) {
    return str.length > upTo ? `${str.substring(0, upTo - 3)}...` : str;
  }
  return '';
};

function ProfileCard({ profile, size = 'medium' }: Props) {
  return (
    <Card>
      <Image src={profile.imageUri || IMAGE_URIS.USER_DEFAULT} />
      <Card.Content style={{ textAlign: 'center' }}>
        <ButtonGroup size={size}>
          <Button
            style={{ marginRight: '1rem', borderRadius: '4px' }}
            as={Link}
            to={`${ROUTES.PROFILE.BASE}/${profile.username}`}
          >
            <Icon name="user" />
            Profile
          </Button>
          <FollowButton profile={profile} />
        </ButtonGroup>
      </Card.Content>
      <Card.Content>
        <Card.Header>{profile.displayName}</Card.Header>
        <Card.Description>
          {profile.biography ? truncate(profile.biography) : <em>No biography</em>}
        </Card.Description>
        <Divider />
        <Card.Content extra>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>
              <Icon name="pencil" /> {profile.followersCount} followers
            </span>
            <span>
              <Icon name="address book" /> {profile.followingCount} followings
            </span>
          </div>
        </Card.Content>
      </Card.Content>
    </Card>
  );
}

export default observer(ProfileCard);
