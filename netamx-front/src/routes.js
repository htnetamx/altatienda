import Index from 'views/Index.js';
import Profile from 'views/examples/Profile.js';
//import Maps from 'views/examples/Maps.js';
//import Register from 'views/examples/Register.js';
//import Login from 'views/examples/Login.js';
//import Upload from 'views/examples/upload.js';
import UploadProducts from 'views/examples/upddateProducts';
//import UpdateSKUStatus from 'views/tools/UpdateSKU';
import UpdateSProcurement from 'views/tools/updateProcurement';
//import Tables from 'views/examples/Tables.js';
//import Icons from 'views/examples/Icons.js';

var routes = [
  {
    path: '/index',
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: Index,
    layout: '/admin',
  },
  {
    path: '/update-products',
    name: 'Alta de productos',
    icon: 'ni ni-cart text-primary',
    component: UploadProducts,
    layout: '/admin',
  },

  {
    path: '/update-procurement',
    name: 'Inventario',
    icon: 'ni ni-delivery-fast text-primary',
    component: UpdateSProcurement,
    layout: '/admin',
  },

  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },

  {
    /*
 {
    path: '/update-sku',
    name: 'Estatus por SKU',
    icon: 'ni ni-bullet-list-67 text-primary',
    component: UpdateSKUStatus,
    layout: '/admin',
  },
  {
    path: '/user-profile',
    name: 'Registro',
    icon: 'ni ni-single-02 text-primary',
    component: Profile,
    layout: '/auth',
  },
  
  
     {
    path: '/update-products',
    name: 'Actualizar productos',
    icon: 'ni ni-cart text-info',
    component: UploadProducts,
    layout: '/admin',
  },
  {
    path: '/upload',
    name: 'Test',
    icon: 'ni ni-key-25 text-info',
    component: Upload,
    layout: '/admin',
  },
  
  
  
  {
    /*{
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },*/
  },
];
export default routes;
