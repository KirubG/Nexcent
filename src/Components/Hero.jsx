import React from "react";
import { Illustration, Rafiki } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../index.css";
import { Sectionwrapper } from "../hoc";

function Hero() {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]} // Use Autoplay module
        slidesPerView={1} // Show one slide at a time
        loop={true} // Enable infinite loop
        autoplay={{
          delay: 4000, // 4 seconds delay
          disableOnInteraction: false, // Allow autoplay to continue after interaction
          pauseOnMouseEnter: false, // Pause when hovered
        }}

        pagination={{
          el: ".swiper-pagination", // Define pagination element
          clickable: true, // Enable clicking on dots
          dynamicBullets: true, // Allows dynamic bullet styling
        }}
      >
        <SwiperSlide>
          <div className="w-[100%] h-[93vh] flex bg-[#f5f7fa] justify-center items-center">
            <div className=" w-[70%] h-[65vh] ml-32 flex flex-col gap-3 mt-40 mx-auto">
              <h1 className="text-[70px] font-semibold">
                Welcome !!!
                <br />
                <span className="text-[#4caf90]">Register and sign in</span>
              </h1>

              <p className="text-[#4d4d4d]">to get full access of Nexcent</p>

              <button className="bg-[#4caf90] text-white p-4 w-fit rounded-xl">
                Sign Up
              </button>
            </div>

            <div className="illustration w-[30%] h-[65vh] mr-32 ">
              <img
                src={Rafiki}
                alt="illustartion"
                width={800}
                height={800}
                className="mt-20"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[100%] h-[93vh] flex bg-[#f5f7fa] justify-center items-center">
            <div className=" w-[70%] h-[65vh] ml-32 flex flex-col gap-3 mt-40">
              <h1 className="text-[70px] font-semibold">
                Lessons and insights
                <br />
                <span className="text-[#4caf90]">from 8 years</span>
              </h1>

              <p className="text-[#4d4d4d]">
                Where to grow your business as a photographer: site or social
                media?
              </p>

              <button className="bg-[#4caf90] text-white p-4 w-fit rounded-xl">
                Register
              </button>
            </div>

            <div className="illustration w-[30%] h-[65vh] mr-32 ">
              <img
                src={Illustration}
                alt="illustartion"
                width={546}
                height={566}
                className="mt-20"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[100%] h-[93vh] flex bg-[#f5f7fa] justify-center items-center">
            <div className=" w-[70%] h-[65vh] ml-32 flex flex-col gap-3 mt-40">
              <h1 className="text-[70px] font-semibold">
                Go to Hell MFS
                <br />
                <span className="text-[#4caf90]">Don't come back</span>
              </h1>

              <p className="text-[#4d4d4d]">
                Where to grow your business as a photographer: site or social
                media?
              </p>

              <button className="bg-[#4caf90] text-white p-4 w-fit rounded-xl">
                Register
              </button>
            </div>

            <div className="illustration w-[30%] h-[65vh] mr-32 ">
              <img
                src={Illustration}
                alt="illustartion"
                width={546}
                height={566}
                className="mt-20"
              />
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination" style={styles.pagination}></div>
      </Swiper>

      {/* <div className="marque flex gap-10">
        <marquee className="flex gap-10" behavior="" width="100%" direction="">
          <img src={Logo} alt="logo" /> 
          <img src={Logo1} alt="logo1" />
          <img src={Logo2} alt="logo2" />
        </marquee>
      </div> */}
    </div>
  );
}

const styles = {
  pagination: {
    position: "absolute",
    bottom: "0px", // Center the pagination vertically
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
  },
};

export default Sectionwrapper(Hero, "");
