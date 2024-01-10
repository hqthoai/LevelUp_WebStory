function AboutUsText() {
  return (
    <section className="pt-[110px] pb-[120px] font-display">
      <div className="about-container px-[15px] mx-[64px]">
        <div className="flex">
          <div className="flex flex-col justify-center items-center px-[15px]">
            <div className="about-title flex justify-center  mx-[-15px] mb-10">
              <h2 className="title text-[40px] font-extrabold text-center uppercase  w-[83.33333333%] text-[#ff8503]">
                Level Up Studio is the the leading game development studios in Vietnam and has been
                active since 2019.
              </h2>
            </div>

            <div className="flex flex-col font-pop font-light w-[85%] ">
              <div className="about-content justify-center  text-justify flex flex-row">
                {/* <p className="text-white text-[18px]">
                  Starting as a freelance team in 2019 with a group of four specialists, we worked
                  on game projects for the Activision. Level Up Studio is ready to embrace every
                  challenge and strives to build brand value in the technology industry with our
                  gaming applications and other products.
                   <br />
                  <br /> 
                  We have created the succeed in many games: Multiverse Defender, essence FUN PARK,
                  PetBalloon... A popular app is E-Wallet CasperDash, which is highly ranked in
                  several countries with over _ installs.
                  <br />
                  <br />
                  Are you ready to embark on a gaming journey like no other? Let LEVEL UP STUDIO be
                  your trusted partner in creating a game that's not just entertaining but an
                  immersive celebration of rich culture and uniqueness.
                  <br />
                  <br />
                  Join us in making gaming history! Contact us today to turn your dream game into a
                  reality.
                </p> */}
                <p className="text-white text-[18px]">
                  Starting as a freelance team in 2019 with a group of four specialists, we worked
                  on game projects for the Activision. Level Up Studio is ready to embrace every
                  challenge and strives to build brand value in the technology industry with our
                  gaming applications and other products.
                  <br />
                  <br />
                  Are you ready to embark on a gaming journey like no other? Let LEVEL UP STUDIO be
                  your trusted partner in creating a game that's not just entertaining but an
                  immersive celebration of rich culture and uniqueness.
                </p>
              </div>
              <br />
              <p className="text-white text-[18px] font-bold italic">
                Join us in making gaming history! Contact us today to turn your dream game into a
                reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsText;
