import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import AccountProfileDetails from '../../components/user/account-profile-details.component';
import AccountProfile from '../../components/user/account-profile.component';
import UpdatePassword from '../../components/user/update-password.component';

const UserPage = () => {
  return (
    <Box component="main" className={'pt-5'}>
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <div>
            <Typography variant="h4">Profile</Typography>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <AccountProfile />
              </Grid>
              <Grid item xs={12} md={6} lg={8}>
                <AccountProfileDetails />
              </Grid>
            </Grid>
          </div>
          <div>
            <UpdatePassword />
          </div>
        </Stack>
      </Container>
    </Box>
  );
};

export default UserPage;
