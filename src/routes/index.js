import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';
import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
import Production from '../pages/Production';
import OurMission from '../pages/OurMission';
import OurTeam from '../pages/OurTeam';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import BlogDetail1 from '../components/BlogInformation/BlogDetail1';
import BlogDetail2 from '../components/BlogInformation/BlogDetail2';
import BlogDetail3 from '../components/BlogInformation/BlogDetail3';
import BlogDetail4 from '../components/BlogInformation/BlogDetail4';

const publicRoutes = [
  { path: '/', component: HomePage, layout: DefaultLayout },
  { path: '/our-mission', component: OurMission, layout: DefaultLayout },

  { path: '/about-us', component: AboutUs, layout: DefaultLayout },
  { path: '/production', component: Production, layout: DefaultLayout },
  { path: '/our-team', component: OurTeam, layout: DefaultLayout },
  { path: '/blog', component: Blog, layout: DefaultLayout },
  { path: '/blog/1', component: BlogDetail1, layout: DefaultLayout },
  { path: '/blog/2', component: BlogDetail2, layout: DefaultLayout },
  { path: '/blog/3', component: BlogDetail3, layout: DefaultLayout },
  { path: '/blog/4', component: BlogDetail4, layout: DefaultLayout },
  { path: '/contact', component: Contact, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
