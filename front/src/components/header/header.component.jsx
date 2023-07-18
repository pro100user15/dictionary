import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import LogoIcon from '../../ui/icons/logo.icon';
import { ROUTES } from '../../App.constants';
import UserDropDawnMenu from './user-drop-dawn-menu.component';
import AddNewDropDawn from './add-new-drop-dawn.component';

const Header = ({ jwt }) => {
  return (
    <AppBar className={'bg-white fixed z-[100]'}>
      <Container maxWidth="false" className={'px-20'}>
        <Toolbar className={'flex justify-between'} disableGutters>
          <div className={'flex items-center'}>
            <NavLink to={ROUTES.home} className={'flex items-center no-underline'}>
              <LogoIcon style={{ marginRight: '5px' }} />
              <Typography
                variant="h5"
                noWrap
                className={'mr-2 text-black font-semibold no-underline'}>
                Dictionary
              </Typography>
            </NavLink>
          </div>

          <Box>
            {jwt?.roles ? (
              <>
                <AddNewDropDawn />
                <UserDropDawnMenu />
              </>
            ) : (
              <>
                <NavLink to={ROUTES.signIn} className={'no-underline text-[30px] mr-5'}>
                  <Button variant={'contained'}>Sign in</Button>
                </NavLink>
                <NavLink to={ROUTES.signUp} className={'no-underline text-[30px] mr-5'}>
                  <Button variant={'contained'}>Sign up</Button>
                </NavLink>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
