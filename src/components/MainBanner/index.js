import React from 'react';
import './MainBanner.css';
import { FaCirclePlay } from 'react-icons/fa6';
import { useForm, Controller } from 'react-hook-form';

const MainBanner = () => {
  // handle contact form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // You can handle form submission here
    console.log(data);
  };
  return (
    <div className="w-full h-fit bg-[#151212]">
      <div
        className="w-full h-screen flex justify-center items-center "
        style={{
          backgroundImage:
            'url("https://themebeyond.com/demo/haldalive/wp-content/uploads/2022/04/banner_bg.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-white text-center">
          <h2 className="text-[120px] leading-loose font-bold font-refault">LEVEL UP STUDIO</h2>

          <h4 className="text-white uppercase text-2xl font-semibold tracking-wide ml-5 font-oswald ">
            We will win when we want.
          </h4>
          <button className=" clip-custom select-none bg-orange-500 border-0 mt-5 hover:bg-black text-white cursor-pointer inline-flex text-lg font-semibold tracking-wide leading-none mb-0 py-6 px-10 text-center uppercase   relative font-oswald">
            ABOUT US {'   '}
            <FaCirclePlay className="ml-3" />
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-[15%] ">
        <div className="grid grid-cols-2 h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.485398972338!2d106.76704217655366!3d10.850637630263792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1697007169514!5m2!1svi!2s"
            className="w-[95%] h-[95%] border-0 basis-[50%] mx-auto"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="basis-[50%] space-y-3 text-pink-500">
            <label className="text-2xl leading-8 font-semibold uppercase">Mail box</label>
            <p className="text-white italic ">
              Join us in making gaming history! Contact us today to turn your dream game into a
              reality.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div>
                <label>
                  Name <span className="text-[#00838f]">(Required)</span>
                </label>
                <div className="flex w-[90%] justify-between">
                  <div className=" w-[48%] space-y-2">
                    <label className="text-[#18ffff]">First Name</label>
                    <input
                      type="text"
                      className="w-full p-2  text-black"
                      placeholder="First Name"
                      {...register('firstName', {
                        required: 'Name is required',
                      })}
                    />
                    {errors.firstName && (
                      <p className="text-[#18ffff]">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className=" w-[48%] space-y-2">
                    <label className="text-[#18ffff]">Last Name</label>
                    <input
                      type="text"
                      className="w-full p-2  text-black"
                      placeholder="Last Name"
                      {...register('lastName', {
                        required: 'Name is required',
                      })}
                    />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                  </div>
                </div>
              </div>
              <div className=" w-[90%] space-y-2">
                <label>
                  Company Name <span className="text-[#00838f]">(Required)</span>
                </label>
                <input
                  type="text"
                  className="w-full p-2  text-black"
                  placeholder="Company Name"
                  {...register('companyName', {
                    required: 'Company Name is required',
                  })}
                />
                {errors.companyName && <p>{errors.companyName.message}</p>}
              </div>
              <div className="  w-[90%] space-y-2">
                <label>
                  Email <span className="text-[#00838f]">(Required)</span>
                </label>
                <input
                  type="text"
                  className="w-full p-2   text-black"
                  placeholder="Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div className="w-[90%] space-y-2">
                {' '}
                <label>
                  Message <span className="text-[#00838f]">(Required)</span>
                </label>
                <textarea
                  className="w-full p-2  text-black"
                  placeholder="Message"
                  {...register('message', {
                    required: 'Message is required',
                  })}
                />
                {errors.message && <p>{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="submitButton flex mx-auto py-4 uppercase font-extrabold justify-center w-[120px]  hover:border hover:border-white text-white bg-pink-500   my-6 text-base leading-6 "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
