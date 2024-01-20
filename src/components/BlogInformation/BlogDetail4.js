import React from 'react';
import AboutUs from '../../pages/AboutUs';
import articleImage1 from '../../assets/images/article4-1.png';
import articleImage2 from '../../assets/images/article4-2.png';
import articleImage3 from '../../assets/images/article4-3.png';
import articleImage4 from '../../assets/images/article4-4.png';

const BlogDetail4 = () => {
  return (
    <div>
      <AboutUs title={'METAVERSE AND MONEY'} textSize="text-[30px]" />
      <div className="text-white flex flex-col text-justify mt-16 ml-36 mr-36">
        <h1 className="text-[35px] font-bold mb-4">METAVERSE AND MONEY: DECRYPTING THE FUTURE</h1>
        <p className="text-[24px] font-bold italic mb-4">
          Today, the most popular way to experience the Metaverse is via a video game played on a
          virtual reality (VR) headset. But in the report that follows, we discuss the possibility
          that the Metaverse is moving towards becoming the next iteration of the internet, or Web3.
          This “Open Metaverse” would be community-owned, community-governed, and a freely
          interoperable version that ensures privacy by design.
        </p>
        <p className="text-[18px] mt-3 mb-4">
          Users should increasingly be able to access a host of use cases, including commerce, art,
          media, advertising, healthcare, and social collaboration. A device-agnostic Metaverse
          would be accessible via personal computers, game consoles, and smartphones, resulting in a
          large ecosystem. Using this broad definition, the total addressable market for the
          Metaverse could be between $8 trillion and $13 trillion by 2030, with total Metaverse
          users numbering around five billion.
        </p>
        <p className="text-[18px] mt-3 mb-4">
          But getting to that market level is going to require infrastructure investment. The
          content streaming environment of the Metaverse will likely require a computational
          efficiency improvement of over 1,000x today’s levels. Investment will be needed in areas
          such as compute, storage, network infrastructure, consumer hardware, and game development
          platforms.
        </p>
        <p className="text-[18px] mt-3 mb-4">
          The definition of what counts as money in the Open Metaverse is also likely to be very
          different from what counts as money in the real world today. Interoperability and seamless
          exchange between underlying blockchain technology are critical to ensure a frictionless
          user experience. Different forms of cryptocurrency are expected to dominate, but given the
          multi-chain trend in the crypto ecosystem, cryptocurrency will likely coexist with fiat
          currencies, central bank digital currencies (CBDCs), and stablecoins.
        </p>
        <p className="text-[18px] mt-3 mb-4">
          Finally, if the Metaverse is indeed the new iteration of the internet, it will mostly
          likely attract greater scrutiny from global regulators, policymakers, and governments.
          Issues such as anti-money laundering rules for exchanges and wallets, the use of
          decentralized finance (DeFi), crypto assets, and property rights will all have to be
          addressed.
        </p>
        <p className="text-[18px] mt-3 mb-4 font-bold text-20">
          The Metaverse Is Potentially an $8 Trillion to $13 Trillion Opportunity
        </p>
        <img src={articleImage1} alt="Image 1" />
        <p className="text-[18px] mt-3 mb-4">
          We believe the Metaverse may be the next generation of the internet — combining the
          physical and digital world in a persistent and immersive manner — and not purely a Virtual
          Reality world. A device-agnostic Metaverse accessible via PCs, game consoles, and
          smartphones could results in a very large ecosystem. Based on our definition, we estimate
          the total addressable market for the Metaverse economy could grow to between $8 trillion
          and $13 trillion by 2030.
        </p>
        <p className="text-[18px] mt-3 mb-4 font-bold text-20">Metaverse Use Cases</p>
        <img src={articleImage2} alt="Image 2" />
        <p className="text-[18px] mt-3 mb-4">
          Gaming is viewed as a key Metaverse use case for the next several years due to the
          immersive and multi-player experience of the space currently But we believe that the
          Metaverse will eventually help us find new and enhanced ways to do all our current
          activities, including commerce, entertainment and media, education and training,
          manufacturing and enterprise in general. Enterprise use cases of the Metaverse in the
          coming years will likely include internal collaboration, client contact, sales and
          marketing, advertising, events and conference, engineering and design, and workforce
          training.
        </p>
        <p className="text-[18px] mt-3 mb-4 font-bold text-20">
          Still Early: Metaverse Infrastructure Building
        </p>
        <img src={articleImage3} alt="Image 3" />
        <p className="text-[18px] mt-3 mb-4">
          In the current state, the internet infrastructure is unsuitable for building a
          full-immersive, content streaming Metaverse environment, that enables users to go
          seamlessly from one experience to another. To make the vision of Metaverse a reality, we
          expect significant investment in a confluence of technology. Low latency — the time it
          takes a data signal to travel from one point on the internet to another point and then
          come back — is critical to building a more realistic user experience.
        </p>
        <p className="text-[18px] mt-3 mb-4 font-bold text-20">Money in the Metaverse</p>
        <img src={articleImage4} alt="Image 2" />
        <p className="text-[18px] mt-3 mb-4">
          We expect the next generation of the internet, i.e., the Metaverse, would encapsulate a
          range of form factors of money, including the existing/traditional forms of money and also
          upcoming digitally-native forms of money — cryptocurrency, stablecoins, central bank
          digital currencies (CBDCs) — that were out of scope in a pre-blockchain virtual world.
        </p>
        <p className="text-[18px] text-end mt-3 mb-4 italic">Source: Citi GPS</p>
      </div>{' '}
    </div>
  );
};

export default BlogDetail4;
