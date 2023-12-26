import ProductionCard from '../components/ProductionCard/ProductionCard';
import MainBanner from '../components/MainBanner/index.js';
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout.js';

const publicRoutes = [
  { path: '/', component: MainBanner, layout: DefaultLayout },
  { path: '/about-us', component: MainBanner, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
