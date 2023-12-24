import { Link } from 'react-router-dom';
import { Text } from './data';
import { Barbell, EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react';
import { FooterTexts } from './data';
import { List } from './data';
import { useCallback } from 'react';
import { FaRegClock, FaRocket } from 'react-icons/fa6';

const Footer = () => {
  const renderIcon = useCallback((element) => {
    switch (element) {
      case 0:
        return <MapPin size={20} color="currentColor" />;
      case 1:
        return <EnvelopeSimple size={20} color="currentColor" />;
      case 2:
        return <Phone size={20} color="currentColor" />;
      default:
        return null;
    }
  }, []);

  return (
    <div className="w-full bg-[#151212] h-[500px] mt-[20%] flex self-end p-3">
      <footer
        className="w-full flex flex-col text-white h-fit "
        style={{
          backgroundImage:
            'url("https://themebeyond.com/demo/haldalive/wp-content/uploads/2022/03/footer_bg.jpg")',
        }}
      >
        <main className="w-full lg:pt-28 lg:pb-12 pt-20 pb-12 px-4 grid md:grid-cols-4 lg:gap-8 md:gap-5 gap-8 lg:px-32">
          <div className="flex flex-col gap-6 ">
            <Link
              to={`/`}
              className="font-extrabold flex items-center relative md:text-3xl text-2xl"
            >
              <Text as="span" className="text-orange-700 absolute -top-5 md:left-5 left-3">
                <Barbell size={35} color="currentColor" weight="fill" />
              </Text>
              <Text as="span" className="text-white">
                LEVELUP
              </Text>
              <Text as="span" className="bg-orange-700 bg-clip-text text-transparent">
                STUDIO
              </Text>
            </Link>
            <Text as="p" className="text-zinc-400 text-justify">
              {FooterTexts.underLogoText}
            </Text>
            {/* <Text as="h1" className="text-zinc-300 text-2xl font-bold">
              {FooterTexts.contacts.caption}
            </Text> */}
            <ul className="flex flex-col gap-4">
              {FooterTexts.contacts.names.map((name, index) => (
                <List className="text-zinc-400 flex items-start gap-2" key={index}>
                  <Text as="span" className="text-orange-700 mt-1">
                    {renderIcon(index)}
                  </Text>
                  <Text as="span" className="">
                    {name.name}
                  </Text>
                </List>
              ))}
            </ul>
          </div>

          {/* CATEGORIES  */}
          <div className="flex flex-col  gap-6">
            <Text
              as="h1"
              className="text-zinc-300 text-2xl font-bold border-solid border-orange-700 border-r-8"
            >
              {FooterTexts.quickLinks.caption}
            </Text>
            <ul className="flex flex-col gap-2">
              {FooterTexts.quickLinks.links.map((link, index) => (
                <List className="text-zinc-400" key={index}>
                  <Link
                    to={link.url}
                    className="transition-all duration-200 hover:text-orange-700 font-medium text-base"
                  >
                    {link.name}
                  </Link>
                </List>
              ))}
            </ul>
          </div>

          {/* RECENT POSTS */}
          <div className="flex flex-col  gap-6">
            <Text
              as="h1"
              className="text-zinc-300 text-2xl font-bold  border-solid border-orange-700 border-r-8"
            >
              {FooterTexts.recentPosts.caption}
            </Text>
            <ul className="flex flex-col gap-4">
              {FooterTexts.recentPosts.names.map((name, index) => (
                <div className="flex space-x-3">
                  <img className="w-[35%]" src={name.img} />
                  <div>
                    <label className="font-semibold leading-4 text-base hover:text-orange-700">
                      {name.name}
                    </label>
                    <div className="flex items-center space-x-2">
                      <FaRegClock className="text-orange-700" />
                      <p className="text-zinc-400 text-sm text-inline">{name.createAt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          {/* FOLLOW US  */}
          <div className="flex flex-col  gap-4">
            <Text
              as="h1"
              className="text-zinc-300 text-2xl font-bold  border-solid border-orange-700 border-r-8"
            >
              {FooterTexts.followUs.caption}
            </Text>
            <ul className="flex gap-2">
              {FooterTexts.followUs.names.map((link, index) => (
                <div
                  className={`text-white flex justify-center rounded-sm items-center h-[40px] w-[40px] hover:text-orange-700`}
                  style={{ backgroundColor: link.color }}
                  key={index}
                >
                  {link.icon}
                </div>
              ))}
            </ul>
            <div className="relative mt-5">
              <input
                type="text"
                class="w-full bg-[#111316] border-0 py-4 px-5 text-white pr-12 text-base rounded-md"
                placeholder="Enter your email..."
              ></input>
              <div className="bg-orange-700 absolute flex justify-center items-center right-0 top-0 h-full w-[60px]  rounded-md">
                <FaRocket className="text-xl" />
              </div>
            </div>
          </div>
        </main>
        <div className="text-center py-3 bg-orange-700">
          <Text as="p" className="text-zinc-200 md:text-sm text-xs font-bold">
            {FooterTexts.copyright}
          </Text>
        </div>
      </footer>
    </div>
  );
};

export default Footer;