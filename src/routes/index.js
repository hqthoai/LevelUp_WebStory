import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';
import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
const publicRoutes = [
  { path: '/', component: HomePage, layout: DefaultLayout },
  { path: '/about-us', component: AboutUs, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
