import React, { Suspense, useState } from 'react';
import Navbar from '../Components/Navbar';
import Cart from '../Components/Cart';
import LazySingleSwiper from '../Components/SingleSwiper/LazySingleSwiper'
import LazySwiper from '../Components/Swiper/LazySwiper'


const SingleSwiper = React.lazy(() => import('../Components/SingleSwiper/SingleSwiper'));
const Swiper = React.lazy(() => import('../Components/Swiper/Swiper'));

let arr = [{
    id: 1,
    title: "Clair",
    price: 10,
    img: "http://dummyimage.com/200x200.png/5fa2dd/ffffff"
}, {
    id: 2,
    title: "Tam",
    price: 10,
    img: "http://dummyimage.com/200x200.png/ff4444/ffffff"
}, {
    id: 3,
    title: "Onida",
    price: 10,
    img: "http://dummyimage.com/200x200.png/dddddd/000000"
}, {
    id: 4,
    title: "Reg",
    price: 10,
    img: "http://dummyimage.com/200x200.png/ff4444/ffffff"
}, {
    id: 5,
    title: "Dulcine",
    price: 10,
    img: "http://dummyimage.com/200x200.png/dddddd/000000"
}, {
    id: 6,
    title: "Parke",
    price: 10,
    img: "http://dummyimage.com/200x200.png/cc0000/ffffff"
}, {
    id: 7,
    title: "Wilden",
    price: 10,
    img: "http://dummyimage.com/200x200.png/dddddd/000000"
}, {
    id: 8,
    title: "Dionisio",
    price: 10,
    img: "http://dummyimage.com/200x200.png/ff4444/ffffff"
}, {
    id: 9,
    title: "Isac",
    price: 10,
    img: "http://dummyimage.com/200x200.png/cc0000/ffffff"
}, {
    id: 10,
    title: "Monah",
    price: 10,
    img: "http://dummyimage.com/200x200.png/dddddd/000000"
}]
function Main() {
    const [cartOnOff, setCartOnOff] = useState(false)
    return (<div>
        <Navbar cartOnOff={cartOnOff} setCartOnOff={setCartOnOff} />
        {cartOnOff ? <Cart /> : <div>
            <div className='mt-5 pt-3'>
                <Suspense fallback={<LazySingleSwiper />}>
                    <SingleSwiper/>
                </Suspense>
            </div>
            <div className=''>
                <div className='h5 text-center'>Our Trend Setters</div>
                <Suspense fallback={<LazySwiper />}>
                    <Swiper arr={arr} />
                </Suspense>
            </div>
            <div className=''>
                <div className='h5 text-center'>Wedding Store</div>
                <Suspense fallback={<LazySwiper />}>
                    <Swiper arr={arr} />
                </Suspense>
            </div>
        </div>}
    </div>)
}

export default Main;