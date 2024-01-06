import React from 'react';
import { FaCirclePlay } from 'react-icons/fa6';
import { useForm, Controller } from 'react-hook-form';

const MailBox = () => {
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
    <div className="font-display">
      {' '}
      <div className="container mx-auto px-4 py-12 h-fit">
        {/* <div className="grid grid-cols-2 col-span-2 "> */}
        <div className="flex items-center justify-center ">
          <div className="basis-[50%] space-y-3  text-[#ff8530]">
            <label className="text-2xl  leading-8 font-semibold uppercase text-[#ff8530] flex items-center justify-center ">Mail box</label>
            <p className="text-white italic font-pop font-light">
              Join us in making gaming history! Contact us today to turn your dream game into a
              reality.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div>
                <label>
                  Name <span className="text-[#00838f]">(Required)</span>
                </label>
                <div className="flex w-[100%] justify-between">
                  <div className=" w-[48%] space-y-2">
                    <label className="text-[#18ffff]">First Name</label>
                    <input
                      type="text"
                      className="w-full p-2 text-black font-light font-pop"
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
                      className="w-full p-2 text-black font-light font-pop"
                      placeholder="Last Name"
                      {...register('lastName', {
                        required: 'Name is required',
                      })}
                    />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                  </div>
                </div>
              </div>
              <div className=" w-[100%] space-y-2">
                <label>
                  Company Name <span className="text-[#00838f]">(Required)</span>
                </label>
                <input
                  type="text"
                  className="w-full p-2 text-black font-light font-pop"
                  placeholder="Company Name"
                  {...register('companyName', {
                    required: 'Company Name is required',
                  })}
                />
                {errors.companyName && <p>{errors.companyName.message}</p>}
              </div>
              <div className="  w-[100%] space-y-2">
                <label>
                  Email <span className="text-[#00838f]">(Required)</span>
                </label>
                <input
                  type="text"
                  className="w-full p-2 text-black font-light font-pop"
                  placeholder="Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div className="w-[100%] space-y-2">
                {' '}
                <label>
                  Message <span className="text-[#00838f]">(Required)</span>
                </label>
                <textarea
                  className="w-full p-2 text-black font-light font-pop"
                  placeholder="Message"
                  {...register('message', {
                    required: 'Message is required',
                  })}
                />
                {errors.message && <p>{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="submitButton flex mx-auto py-4 uppercase font-extrabold justify-center w-[120px]  hover:border hover:border-white text-white bg-[#ff8530]   my-6 text-base leading-6 "
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


export default MailBox;
