import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./SingleSwiper.css";
// import required modules
import { Autoplay, Keyboard, Navigation } from "swiper";
import Itemcard from "../../Elements/Itemcard";

let arr = [{
    id: 1,
    title: "Clair",
    price: 10,
    img: "http://dummyimage.com/1200x400.png/5fa2dd/ffffff"
}, {
    id: 2,
    title: "Tam",
    price: 10,
    img: "http://dummyimage.com/1200x400.png/ff4444/ffffff"
}, {
    id: 3,
    title: "Onida",
    price: 10,
    img: "http://dummyimage.com/1200x400.png/dddddd/000000"
}]
export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                keyboard={{
                    enabled: true,
                }}
                navigation={true}
                modules={[Autoplay, Keyboard, Navigation]}
                className="mySwiper"
            >
                {arr.map((ele, i) => (
                    <SwiperSlide key={i}>
                        <img src={ele.img} className='w-100' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
