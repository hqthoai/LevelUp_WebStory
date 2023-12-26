import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';
import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
import Production from '~/pages/Production';
const publicRoutes = [
  { path: '/', component: HomePage, layout: DefaultLayout },
  { path: '/about-us', component: AboutUs, layout: DefaultLayout },
  { path: '/production', component: Production, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
