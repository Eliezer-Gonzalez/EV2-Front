import React, { Component } from "react";
import "../global.css";
import { NavBar } from "./NavBar";
import logo from '../../assets/logo.png';

export class Header extends Component {
    render() {
        return (
        <header className="z-50 fixed bg-cuarto py-3 w-full">
            <div className="contenedor mx-auto flex items-center justify-between px-10 lg:px-20">
                {/* Logo y título */}
                <div className="flex items-center space-x-4 w-72">
                    <img src={logo} alt="Logo Municipalidad de Cholchol" className="h-22" />
                    <span className="text-white text-2xl font-bold italic">Municipalidad Cholchol</span>
                </div>
                {/* NavBar centrado */}
                <div className="flex justify-end md:px-0 w-full">
                    <NavBar />
                </div>
            </div>
        </header>
        );
    }
}

export default Header;
