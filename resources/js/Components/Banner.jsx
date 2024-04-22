import React, { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTypedPage from '@/Hooks/useTypedPage';
export default function Banner() {
    const { props } = useTypedPage();
    const style = props.jetstream.flash?.bannerStyle || 'success';
    const message = props.jetstream.flash?.banner || '';
    useEffect(()=>{
        if (message && style) {
            toast[style](message);
        }
    },[message,style])
    return (

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
        );
}
