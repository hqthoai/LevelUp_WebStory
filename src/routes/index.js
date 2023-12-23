import ProductionCard from '../components/ProductionCard/ProductionCard';
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout.js';

const publicRoutes = [{ path: '/', component: ProductionCard, layout: DefaultLayout }];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
