import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, useFormState } from 'react-hook-form';
import { Button, Divider, Grid, Typography } from '@mui/material';
import {
  CustomCheckBox,
  CustomPasswordTextField,
  CustomTextField
} from '../../../ui/custom-fields/custom-outlined-text-field.component';
import { loginThunk, selectAuthStateError, setInitialAuthState } from '../../../redux/auth';
import { handleAuthError } from '../../../helper/error-handler/auth-error.handler';
import { emailValidation } from '../../../helper/validation/auth.validation';
import { API_ROUTES, ROUTES } from '../../../App.constants';

const SignInForm = () => {
  const { state } = useLocation();

  const { control, handleSubmit, getValues, setValue, setError, clearErrors } = useForm({
    mode: 'onBlur'
  });
  const { errors } = useFormState({ control });

  const error = useSelector(selectAuthStateError);
  const { description, field } = handleAuthError(error);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof field === 'string') {
      setError(field, { type: 'custom', message: description });
    } else if (field instanceof Map) {
      //todo: fix error: after set error started cycle re-rendering page
      //field.forEach((value, key) => setError(key, { type: 'custom', message: value }));
    }
  }, [field]);

  useEffect(() => {
    dispatch(setInitialAuthState());
    clearErrors();
    if (state && state.type && state.login) {
      setValue('login', state.login);
      window.history.replaceState({}, document.title);
    }
  }, []);

  const onSubmit = (request) => {
    dispatch(loginThunk(request));
  };

  return (
    <div>
      <Typography variant="h5" component="div" className={'mb-1'}>
        Login
      </Typography>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <CustomTextField
          control={control}
          name={'login'}
          label={'Email'}
          rules={emailValidation}
          error={errors.login}
        />
        <CustomPasswordTextField
          control={control}
          name={'password'}
          label={'Password'}
          error={errors.password}
        />
        <Grid container>
          <Grid item>
            <CustomCheckBox
              control={control}
              name={'remember'}
              label="Remember me"
              setValue={setValue}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          className={'mt-1'}>
          Sign In
        </Button>
        <Grid container>
          <Grid item xs={12} className={'flex justify-end'}>
            <Typography
              variant="body2"
              className="form-link cursor-pointer"
              onClick={() =>
                navigate(ROUTES.forgotPassword, {
                  state: { login: getValues('login') }
                })
              }>
              Forgot Password?
            </Typography>
          </Grid>
        </Grid>
      </form>
      <Divider orientation="horizontal" className={'mb-2'}>
        <Typography component="div">OR</Typography>
      </Divider>
      <a
        type="button"
        className="google-btn"
        href={`http://localhost:8080${API_ROUTES.loginViaGoogle}`}>
        Sign in with Google
      </a>
      <Grid container>
        <Grid item xs={12} className={'mt-3'}>
          <Typography
            variant="body2"
            className="form-link cursor-pointer"
            onClick={() =>
              navigate(ROUTES.signUp, {
                state: { login: getValues('login') }
              })
            }>
            {"Don't have an account? Sign up"}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignInForm;
