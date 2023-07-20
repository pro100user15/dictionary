export const ROUTES = {
  home: '/',
  user: '/user',
  about: '/about',
  //auth
  signIn: '/sign-in',
  signUp: '/sign-up',
  activateRedirect: '/activate-redirect',
  oauth2Redirect: '/oauth2-redirect',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  resetPasswordRedirect: '/reset-password-redirect'
};

export const API_ROUTES = {
  //auth
  login: '/api/auth/login',
  loginViaGoogle: `/api/auth/oauth2?redirect_uri=http://localhost:3000${ROUTES.oauth2Redirect}`,
  forgotPassword: (login) => `/api/auth/forgot-password?login=${login}`,
  resetPassword: '/api/auth/reset-password',
  registration: '/api/user',
  userInfo: (email, token) => `/api/auth/user?email=${email}&token=${token}`,
  //user
  user: '/api/user',
  userAvatar: '/api/user/avatar',
  userPassword: '/api/user/password',
  //themes
  adminThemes: '/api/theme_admin',
  themes: (dictionaryId) => `/api/themes?dictionary=${dictionaryId}`
};
