//import { Link, Navigate, Outlet, NavLink, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import Footer from "./../Pages/footer/Footer";
import Header from "./../Pages/header/Header.jsx"
import { Link, Head } from '@inertiajs/react';

import AOS from "aos";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css'


export default function ClientLayout({ title, children = "" }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <Head title={title} />
            <Header />
            {children}
            <Footer />
            <ToastContainer
                style={{ zIndex: "20000000" }}
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
}
