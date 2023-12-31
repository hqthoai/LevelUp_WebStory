import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';
import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
import Production from '../pages/Production';
import OurMission from '../pages/OurMission';
import OurTeam from '../pages/OurTeam';
const publicRoutes = [
  { path: '/', component: HomePage, layout: DefaultLayout },
  { path: '/our-mission', component: OurMission, layout: DefaultLayout },

  { path: '/about-us', component: AboutUs, layout: DefaultLayout },
  { path: '/production', component: Production, layout: DefaultLayout },
  { path: '/our-team', component: OurTeam, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
