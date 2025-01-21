import React from "react";
import Logo from "../assets/ipersonic-logo.png";

const Navbar = () => {
    return (
        <>
            <div class="topbar">
        <div class="container">
            <div class="grid">
                <div class="logo">
                    <img src={Logo} />&nbsp;&nbsp;<a href="test.html" class="btn btn-orange">Mulai Tes <i class="fa fa-play icon-xs" aria-hidden="true"></i></a>
                </div>
                <div class="topmenu">
                    <ul>
                        <li>
                            <a href="#">Tipe Kepribadian <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                            <ul>
                                <li><a href="#">Idealis Penyelaras</a></li>
                                <li><a href="#">Idealis Terlibat</a></li>
                                <li><a href="#">Pemikir Dinamis</a></li>
                                <li><a href="#">Pemikir Pendobrak</a></li>
                                <li><a href="#">Idealis Spontan</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Bahasa Indonesia</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Navbar;