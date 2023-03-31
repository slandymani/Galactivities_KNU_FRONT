import './HomePage.styles.scss';

import { observer } from 'mobx-react-lite';
import { useMobXStore } from '@store/index';

import { Link } from 'react-router-dom';
import { APP_NAME, IMAGE_URIS, ROUTES } from '@shared/constants';

import { Button, Container, Header, Image, Segment } from 'semantic-ui-react';
import { LoginForm, RegisterForm } from '@features/authentication';

function HomePage() {
  const { userStore, modalStore } = useMobXStore();

  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header inverted as="h1">
          <Image
            size="massive"
            src={IMAGE_URIS.MAIN_LOGO}
            alt="logo"
            style={{ marginBottom: '.75rem' }}
          />
          {APP_NAME}
        </Header>
        {userStore.isLoggedIn ? (
          <>
            <Header as="h2" inverted content={`Welcome to ${APP_NAME}`} />
            <Button as={Link} to={ROUTES.ACTIVITIES.LIST} size="huge" inverted>
              Go to Activities!
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => modalStore.openModal(<LoginForm />)}
              size="huge"
              inverted
              style={{ marginRight: '2rem' }}
            >
              Login
            </Button>
            <Button onClick={() => modalStore.openModal(<RegisterForm />)} size="huge" inverted>
              Register
            </Button>
          </>
        )}
      </Container>
    </Segment>
  );
}

export default observer(HomePage);
