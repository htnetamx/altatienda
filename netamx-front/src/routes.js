import Index from 'views/Index.js';
import Profile from 'views/examples/Profile.js';
//import Maps from 'views/examples/Maps.js';
//import Register from 'views/examples/Register.js';
//import Login from 'views/examples/Login.js';
//import Upload from 'views/examples/upload.js';
import UploadProducts from 'views/examples/upddateProducts';
import UpdateSKUStatus from 'views/tools/UpdateSKU';
import UpdateSProcurement from 'views/tools/updateProcurement';
import UpdatePrices from 'views/tools/updatePrices';
import CreatePromotions from 'views/tools/createPromotions';

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
    path: '/update-prices',
    name: 'Actualización de precios',
    icon: 'ni ni-shop text-primary',
    component: UpdatePrices,
    layout: '/admin',
  },
  {
    path: '/create-promotions',
    name: 'Creación de promociones',
    icon: 'ni ni-tag text-primary',
    component: CreatePromotions,
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
    path: '/update-sku',
    name: 'Estatus por SKU',
    icon: 'ni ni-bullet-list-67 text-primary',
    component: UpdateSKUStatus,
    layout: '/admin',
  },

  {
    path: '/update-procurement',
    name: 'Inventario',
    icon: 'ni ni-collection text-primary',
    component: UpdateSProcurement,
    layout: '/admin',
  },
  {
    /*
 
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
