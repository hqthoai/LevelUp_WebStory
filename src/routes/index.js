import ProductionCard from '../components/ProductionCard/ProductionCard';
import MainBanner from '../components/MainBanner/index.js';
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout.js';
import HomePage from '../pages/HomePage.js';

const publicRoutes = [{ path: '/', component: HomePage, layout: DefaultLayout }];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
