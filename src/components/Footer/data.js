import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from 'react-icons/fa6';

export const FooterTexts = {
  underLogoText: 'We will win when we want',
  quickLinks: {
    caption: 'CATEGORIES',
    links: [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'About Us',
        url: '/about-us',
      },
      {
        name: 'Our squad',
        url: '/our-team',
      },
      {
        name: 'Production',
        url: '/gallery',
      },
      {
        name: 'Games',
        url: '/news',
      },
      {
        name: 'Shop',
        url: '/contact',
      },
      {
        name: 'Blog',
        url: '/contact',
      },
      {
        name: 'Contacts',
        url: '/contact',
      },
    ],
  },
  contacts: {
    caption: 'RECENT POSTS',
    names: [
      // {
      //   name: 'Address: No.1, Vo Van Ngan, Thu duc, HCMC',
      // },
      {
        name: 'Email: contactme@levelupstudio.asia',
      },
      // {
      //   name: 'Phone: +1 424-248-8496',
      // },
    ],
  },
  recentPosts: {
    caption: 'RECENT POSTS',
    names: [
      {
        img: 'https://themebeyond.com/demo/haldalive/wp-content/uploads/2022/03/blog_img03.jpg',
        name: 'A COMPLETE GUIDE TO MOBILE APP',
        createAt: 'MARCH 27, 2022',
      },
      {
        img: 'https://themebeyond.com/demo/haldalive/wp-content/uploads/2022/03/blog_img04.jpg',
        name: 'IMPROVING THE CDO FLOW FOR YOUR',
        createAt: 'MARCH 27, 2022',
      },
    ],
  },
  followUs: {
    caption: 'FOLLOW US',
    names: [
      {
        icon: <FaFacebookF />,
        color: '#3b5992',
      },
      {
        icon: <FaInstagram />,
        color: '#55acee',
      },
      {
        icon: <FaPinterestP />,
        color: '#d71e18',
      },
      {
        icon: <FaLinkedinIn />,
        color: '#1565c0',
      },
    ],
  },

  copyright: 'Copyright 2023. All Right Reserved',
};
export const Text = ({ className, children, as = 'div' }) => {
  const Component = as || 'div';
  return <Component className={className}>{children}</Component>;
};
export const List = ({ className, children, ...rest }) => {
  return (
    <>
      <li className={className} {...rest}>
        {children}
      </li>
    </>
  );
};
