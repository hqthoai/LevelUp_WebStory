import React from 'react';

const GamingDefined = () => {
  return (
    <div>
      <div className="w-full bg-yellow-200 h-[700px] flex ">
        <img
          src="https://cdn.tgdd.vn/GameApp/4/221941/Screentshots/lien-minh-huyen-thoai-game-moba-pho-bien-nhat-the-gioi-21-05-2020-2.jpg"
          className="h-[100%] w-[55%]"
        />
        <div className="h-[100%] w-[45%] flex flex-col items-center justify-start">
          <div className="w-[70%]  space-y-6 mt-12">
            <label className=" text-black text-[45px] font-extrabold ">GAMING REDEFINED!</label>
            <p className="text-left text-black space-y-3 text-base font-normal">
              LEVEL UP STUDIO is more than just a game studio – we're pioneers, visionaries, and
              creators of exceptional experiences. As the first game studio in Vietnam, we've set
              out on a journey to redefine the industry's standards and expectations.
              <br />
              <br />
              Our commitment to innovation and efficiency allows us to break barriers by lowering
              the cost of making games without compromising on quality. Each of our creations
              embracing global diversity, which tells a unique story. Through our games, players can
              explore the depth of culture like never before.
              <br />
              <br />
              We're dedicated to redefine game value in the community! We understand the concerns
              that adults may have about the impact of gaming, and we're here to shatter those
              preconceptions. Our games offer not only entertainment but also education, fostering
              skills and creativity in players of all ages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingDefined;
