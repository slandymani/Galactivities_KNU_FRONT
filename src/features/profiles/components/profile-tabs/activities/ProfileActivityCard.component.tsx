import { format } from 'date-fns';
import { UserActivity } from '@models/index';
import { DATE_FORMAT, IMAGE_URIS, ROUTES } from '@shared/constants';

import { Link } from 'react-router-dom';
import { Card, Divider, Image } from 'semantic-ui-react';

const CardStyles = {
  border: '2px inset rgba(255, 255, 255, .7)',
  boxShadow: '2px 1px 2px 1px rgba(0, 0, 0, .4)',
};

interface Props {
  activity: UserActivity;
}

function ProfileActivityCard({ activity }: Props) {
  const { id, date, title, category, moderationStatus } = activity;
  console.log(moderationStatus);
  let status = '';
  switch (moderationStatus) {
    case 0:
      status = 'Pending';
      break;
    case 1:
      status = 'Approved';
      break;
    case 2:
      status = 'Rejected';
      break;
  }

  return (
    <Card as={Link} to={`${ROUTES.ACTIVITIES.LIST}/${id}`} style={CardStyles}>
      <Image
        src={`${IMAGE_URIS.BASE}/${category}.jpg`}
        style={{ minHeight: '100px', objectFit: 'cover' }}
      />
      <Card.Content>
        <Card.Header textAlign="center">{title}</Card.Header>
        <Divider style={{ margin: '.25rem' }} />
        <Card.Meta textAlign="center">
          <div>{format(new Date(date), DATE_FORMAT.DAY_WITH_MONTH_LOWERCASE)}</div>
          <div>{format(new Date(date), DATE_FORMAT.FULL_TIME_ABBR)}</div>
          <div>{status}</div>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
}

export default ProfileActivityCard;
