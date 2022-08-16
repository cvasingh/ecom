import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";
// import required modules
import { Autoplay, Keyboard, Navigation } from "swiper";
import Itemcard from "../../Elements/Itemcard";

export default function App({ arr }) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    420: {
                        slidesPerView: 2
                    },
                    640: {
                        slidesPerView: 3
                    },
                    920: {
                        slidesPerView: 4
                    },
                    1024: {
                        slidesPerView: 5
                    },
                }}
                loop={true}
                autoplay={false
                //     {
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }
            }
                keyboard={{
                    enabled: true,
                }}
                navigation={true}
                modules={[Autoplay, Keyboard, Navigation]}
                className="mySwiper"
            >
                {arr.map((ele, i) => (
                    <SwiperSlide key={i}>
                        <Itemcard img={ele.img} price={ele.price} title={ele.title} item={ele}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
