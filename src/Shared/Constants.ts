const STRING: string = 'Test';
export { STRING };

const ROUTES = {
  HOMEPAGE: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ABOUT: '/about-us',
  RESET_PASSWORD: '/reset-password',
  TOURS: '/tours'
};

const WILDCARD_ROUTES = {
  PUBLIC: ROUTES.HOMEPAGE,
  PRIVATE: ROUTES.LOGIN,
};

const ROUTES_CONFIG = {
  HOMEPAGE: {
    path: ROUTES.HOMEPAGE,
    title: 'Master Plan',
  },
  LOGIN: {
    path: ROUTES.LOGIN,
    title: 'Login',
  },
  REGISTER: {
    path: ROUTES.REGISTER,
    title: 'Register',
  },
  ABOUT: {
    path: ROUTES.ABOUT,
    title: 'About us',
  },
  RESET_PASSWORD:{
    path: ROUTES.RESET_PASSWORD,
    title:'Reset Password',
  },
  TOURS:{
    path:ROUTES.TOURS,
    title:'Tours',
  }

};

export { ROUTES, WILDCARD_ROUTES, ROUTES_CONFIG };
