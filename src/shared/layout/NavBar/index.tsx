import { observer } from 'mobx-react-lite';
import { useMobXStore } from '@app/store';

import { Link, NavLink } from 'react-router-dom';
import { APP_NAME, IMAGE_URIS, ROUTES } from '@shared/constants';
import { Button, Container, Dropdown, Image, Menu } from 'semantic-ui-react';

function NavBar() {
  const {
    userStore: { user, logout },
  } = useMobXStore();

  if (user?.isAdmin) {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to={ROUTES.BASE} header>
            <img src={IMAGE_URIS.MAIN_LOGO} alt="logo" style={{ marginRight: '10px' }} />
            {APP_NAME}
          </Menu.Item>
          <Menu.Item as={NavLink} to={ROUTES.ACTIVITIES.LIST} name="Activities" />
          <Menu.Item as={NavLink} to={ROUTES.ACTIVITIES.APPROVE} name="Approve Activities" />
          <Menu.Item as={NavLink} to={ROUTES.ACTIVITIES.CREATE} content="Create Activity" />
          <Menu.Item position="right">
            <Image src={user?.imageUri || IMAGE_URIS.USER_DEFAULT} avatar spaced="right" />
            <Dropdown pointing="top left" text={user?.displayName}>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to={`${ROUTES.PROFILE.BASE}/${user?.username}`}
                  text="My Profile"
                />
                <Dropdown.Item onClick={logout} text="Logout" icon="power" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to={ROUTES.BASE} header>
          <img src={IMAGE_URIS.MAIN_LOGO} alt="logo" style={{ marginRight: '10px' }} />
          {APP_NAME}
        </Menu.Item>
        <Menu.Item as={NavLink} to={ROUTES.ACTIVITIES.LIST} name="Activities" />
        <Menu.Item as={NavLink} to={ROUTES.ACTIVITIES.CREATE} content="Create Activity" />
        <Menu.Item position="right">
          <Image src={user?.imageUri || IMAGE_URIS.USER_DEFAULT} avatar spaced="right" />
          <Dropdown pointing="top left" text={user?.displayName}>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to={`${ROUTES.PROFILE.BASE}/${user?.username}`}
                text="My Profile"
              />
              <Dropdown.Item onClick={logout} text="Logout" icon="power" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default observer(NavBar);
