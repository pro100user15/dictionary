import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid
} from '@mui/material';
import { CustomTextField } from '../../ui/custom-fields/custom-outlined-text-field.component';
import { useForm, useFormState } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserState, updateUserThunk } from '../../redux/user';
import { phoneValidation } from '../../helper/validation/auth.validation';

const AccountProfileDetails = () => {
  const user = useSelector(selectUserState);
  const [isChanged, setChanged] = useState(false);

  const { control, handleSubmit, setValue } = useForm({
    mode: 'onBlur'
  });
  const { errors } = useFormState({ control });

  const dispatch = useDispatch();

  useEffect(() => {
    setChanged(false);
    setValue('name', user.name);
    setValue('surname', user.surname);
    setValue('username', user.username);
    setValue('phone', user.phone);
  }, [user]);

  const onChange = () => setChanged(true);

  const onSubmit = async (request) => {
    dispatch(updateUserThunk(request));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader title="Profile" subheader="Information may be updated" />
        <CardContent sx={{ pt: 0, height: 145 }}>
          <Box>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={6}>
                <CustomTextField
                  control={control}
                  name={'name'}
                  rules={{ required: 'The name cannot be empty' }}
                  label={'Name'}
                  onChange={onChange}
                  error={errors.name}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomTextField
                  control={control}
                  name={'surname'}
                  rules={{ required: 'The surname cannot be empty' }}
                  label={'Surname'}
                  onChange={onChange}
                  error={errors.surname}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomTextField
                  control={control}
                  name={'username'}
                  rules={{ required: 'Username cannot be empty' }}
                  label={'Username'}
                  onChange={onChange}
                  error={errors.username}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomTextField
                  control={control}
                  name={'phone'}
                  rules={phoneValidation}
                  label={'Phone'}
                  onChange={onChange}
                  error={errors.phone}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button type="submit" variant="contained" disabled={!isChanged}>
            Update
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
