import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/constants';

import { Button, Header, Icon, Segment } from 'semantic-ui-react';

function NotFound() {
  return (
    <Segment placeholder textAlign="center" size="huge">
      <Header icon>
        <Icon name="search" />
        Oops - we&apos;ve looked everywhere and could not find your request.
      </Header>
      <Segment.Inline>
        <Button as={Link} to={ROUTES.ACTIVITIES.LIST} primary>
          Return to activities page
        </Button>
      </Segment.Inline>
    </Segment>
  );
}

export default NotFound;
