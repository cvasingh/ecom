import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import logoimage from '../img/ms_logo.png';
// import ScrollToTop from "react-scroll-to-top";
import { FaUserEdit,FaShoppingCart } from 'react-icons/fa'
import { BsBoxArrowRight } from 'react-icons/bs'
import { useCart } from "react-use-cart";


export default function Navbar({ cartOnOff, setCartOnOff }) {
    const { totalItems } = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("firstname");
        sessionStorage.removeItem("org_id");
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("dp");
        navigate('')
    }


    return (<nav className="navbar navbar-expand-lg navbar-light text-center fixed-top top-navbar">
        <div className="container-xxl">
            <Link className="navbar-brand" to="">
                <div className='h4'>E-commerce</div>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-right" id="navbarNavAltMarkup">
                <div className="nav navbar-nav ms-auto">
                    <ul className="navbar-nav mb-lg-0">
                        <li className="nav-item mx-1">
                            <Link className="nav-link" to='/dashboard'>Dashboard</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="nav-link" to='/reports'>Reports</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="nav-link" to='/devices'>Devices</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="nav-link" to='/users'>Users</Link>
                        </li>
                        <li className="nav-item mx-1 cart me-3">
                            <a className="nav-link "
                                onClick={() => setCartOnOff(!cartOnOff)}>Cart
                                <FaShoppingCart/><span className='noOfCart'>{totalItems}</span></a>
                        </li>
                        {
                            // sessionStorage.getItem('email') &&
                            // <li className="nav-item">
                            //     <div class="dropdown">
                            //         <Link className="nav-link  rounded-circle bg-cfs-secondary text-cfs-primary" style={{ textDecoration: 'none', width: '40px', margin: 'auto' }}
                            //             id="dropdownMenuLink" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">
                            //             {sessionStorage['firstname'] ? sessionStorage['firstname'].slice(0, 1).toUpperCase() : <img src={sessionStorage['dp']}/>}
                            //         </Link>
                            //         <ul class="cfs-box dropdown-menu px-0" aria-labelledby="dropdownMenuLink">
                            //             <li>
                            //                 <Link className="dropdown-item" to='/profile'>
                            //                     Update Profile <FaUserEdit />
                            //                 </Link>
                            //             </li>
                            //             <li>
                            //                 <button className="dropdown-item" onClick={handleLogout}>
                            //                     Log Out <BsBoxArrowRight />
                            //                 </button>
                            //             </li>
                            //         </ul>
                            //     </div>
                            // </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    </nav>);
}
