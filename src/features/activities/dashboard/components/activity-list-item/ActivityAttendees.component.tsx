import { observer } from 'mobx-react-lite';
import { useMobXStore } from '@store/index';

import { Link } from 'react-router-dom';
import { UserProfile } from '@models/index';
import { IMAGE_URIS, ROUTES } from '@shared/constants';

import { Image, List, Popup, Segment } from 'semantic-ui-react';
import ProfileCard from '@features/profiles/components/profile-main';

interface Props {
  attendees: UserProfile[];
}

const attendeeImageStyles = {
  borderColor: 'orange',
  borderWidth: 'medium',
};

function ActivityAttendees({ attendees }: Props) {
  const {
    userStore: { user },
  } = useMobXStore();

  return (
    <Segment secondary>
      <List horizontal>
        {attendees.map((attendee) => (
          <Popup
            hoverable
            key={attendee.username}
            trigger={
              <List.Item
                key={attendee.username}
                as={Link}
                to={`${ROUTES.PROFILE.BASE}/${attendee.username}`}
              >
                <Image
                  size="mini"
                  circular
                  style={
                    attendee.username === user?.username
                      ? { ...attendeeImageStyles, borderColor: 'teal' }
                      : attendee.isFollowing
                      ? attendeeImageStyles
                      : null
                  }
                  bordered
                  src={attendee.imageUri || IMAGE_URIS.USER_DEFAULT}
                />
              </List.Item>
            }
          >
            <Popup.Content>
              <ProfileCard profile={attendee} />
            </Popup.Content>
          </Popup>
        ))}
      </List>
    </Segment>
  );
}

export default observer(ActivityAttendees);
