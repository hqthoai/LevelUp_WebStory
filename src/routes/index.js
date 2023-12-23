import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';
import HomePage from '../pages/HomePage';
const publicRoutes = [{ path: '/', component: HomePage, layout: DefaultLayout }];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
