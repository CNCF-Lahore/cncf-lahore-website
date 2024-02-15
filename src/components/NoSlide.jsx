import React, { useState, useEffect } from "react";
import SpeakerDetailModal from "./SpeakerDetailModal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Container from "./Container";

const NoSlide = ({ className = "", title, data }) => {
  const hasData = data && data.length > 0;
  const [modalDisplay, setModalDisplay] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getSlidesPerView() {
    // Logic to dynamically set slidesPerView based on window width
  }

  return (
    <>
      {modalDisplay && <SpeakerDetailModal onClose={() => setModalDisplay(false)} />}
      <Container className={className}>
        <h2 className="text-white font-medium md:text-3xl z-[-1] relative">
          {title}
        </h2>
      </Container>
      {hasData ? (
        <Swiper
          // Swiper properties
        >
          <div>
            {data.map((item, index) => (
              <SwiperSlide key={index} className="z-[-1] hover:z-[1000]" style={{
                transition: 'transform .5s ease', 
                position: 'relative'
              }}>
                <div className="relative group inline-block w-[314px] border border-[#292929] rounded-[12px] m-1"
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div className="container mx-auto p-8 relative ">
                    <div className="relative flex items-center justify-between ">
                      <div
                        className="text-[#b20710] text-9xl font-bold z-0 transform-y-150"
                        style={{
                          textShadow:
                            "0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff",
                        }}
                      >
                        {index + 1}
                      </div>
                      <div
                        className={`ImgDiv absolute top-[-45px] ${
                          index + 1 >= 10 ? "left-[120px]" : "left-[48px]"
                        } z-10`}
                      >
                        {item?.image ? (
                          <img
                            className="h-40 w-auto object-cover rounded-[7px] relative"
                            src={item.image}
                            alt={item.title}
                            style={{ transition: 'transform .5s ease' }}
                          />
                        ) : (
                          <div className="w-[100px] h-[180px] bg-[#222222] rounded-[7px]"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      ) : (
        <div className="bg-[#222222] text-center m-2">
          <h2 className="p-2">Coming Soon</h2>
        </div>
      )}
    </>
  );
};

export default NoSlide;
