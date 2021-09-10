
import Login from 'views/examples/Login.js';
import Profile from 'views/examples/Profile.js';

var routeLogin = [
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/access",
  },
  {
    path: '/user-profile',
    name: 'Registro',
    icon: 'ni ni-single-02 text-primary',
    component: Profile,
    layout: '/auth',
  },
];
export default routeLogin;
