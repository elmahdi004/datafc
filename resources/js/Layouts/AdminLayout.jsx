//import { Link, Navigate, Outlet, NavLink, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import "./styleadmin.css";
import { router } from '@inertiajs/core';
import { Link, Head } from '@inertiajs/react';
import useRoute from '@/Hooks/useRoute';
import { usePage } from '@inertiajs/react'
import useTypedPage from '@/Hooks/useTypedPage';
import Dropdown from '@/Components/Dropdown';
import DropdownLink from '@/Components/DropdownLink';
import Banner from '@/Components/Banner';
function NavLink({ active, href, children, }) {
    const classes = active
        ? 'inline-flex items-center px-1 pt-1 border-b-2 border-blue-chill-400 dark:border-blue-chill-600 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-chill-700 transition duration-150 ease-in-out'
        : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-primary/80 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-primary/80 focus:outline-none focus:text-primary/80 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-primary/80 transition duration-150 ease-in-out';
    return (<Link href={href}
    >
        {children}
    </Link>);
}
export default function AdminLayout({ title,children }) {
    function logout(e) {
        e.preventDefault();
        router.post(route('logout'));
    }
    const page = useTypedPage();
    const route = useRoute();
    const { url, component } = usePage()
    const [openModelParameter, setopenModelParameter] = useState(false);
    const [open, setOpen] = useState(
        localStorage.getItem("Sidebar") === "true" ? true : false
    );
    const [open2, setOpen2] = useState(open);
    useEffect(() => {
        localStorage.setItem("Sidebar", open);
        setOpen2(open);
    }, [open]);
    const Menus = [
        {
            title: "Dashboard",
            src: "/admin",
            icon: "fa-solid fa-chart-line",
        },
        { title: "Demande de devis", src: "/admin/Demande", icon: "fa-solid fa-file-invoice" },
        {
            title: "Formations",
            src: "/admin/Formtion",
            icon: "fa-solid fa-graduation-cap",
        },
        {
            title: "Informations",
            src: "/admin/info",
            gap: false,
            icon: "fa-solid fa-sliders",
        },
        {
            title: "Utilisateurs",
            src: "/admin/users",
            gap: false,
            icon: "fa-solid fa-users",
        },
        {
            title: "Message",
            src: "/admin/message",
            gap: false,
            icon: "fa-regular fa-envelope",
        },
        /*   {
              title: "certificate",
              src: "/admin/certificat",
              gap: false,
              icon: "fa-solid fa-certificate",
          }, */
    ];
    return (
        <>
                    <Head title={title} />

            <div className="w-screen bg-primary/80">
                <div
                    className={`fixed z-39 overflow-hidden ${open ? "w-56" : "w-20 "
                        }  bg-white h-screen p-[14px] shadow duration-300`}
                >
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="157.478"
                            height="62.816"
                            viewBox="0 0 770.2 142.706">
                            <g id="Rectangle-2" transform="translate(-8.6 -122.294)">
                                <path id="Path_2" d="M9,126.2c-.2,1.1-.4,32.8-.4,70.4V265l120.3-.2,120.2-.4.2-70.2.1-70h-120C20.5,124.2,9.4,124.3,9,126.2Zm112.8,26.5c12,.7,14.9,1.2,16.6,3l2,2.2v24.9l3.3-.4,3.3-.4.2-15.3.2-15.2H210l1.8,3.4c.9,1.9,1.8,3.7,1.8,4.4,0,.5-11.2,1-25,1h-25l.4,7.6c.2,4.2.4,9.3.4,11.2v3.6h49.9l2.5,5c1.6,3.2,2.4,5.6,2.1,7a42.126,42.126,0,0,0-.4,6.2v4.2H200.9V192.6H163.7v39.9H193c18.4,0,29.3.5,29.3,1.2,0,3.4-3.5,3.7-37.4,3.7-34.2,0-35,0-36.3-2.5-1.1-2.2-1.3-4.1-1.3-22.4V192.6h-6.9V234l-2.2,1.9c-1.8,1.5-9.1,1.7-45.8,1.7H48.6l.2-24.1c.2-32.1.3-33.8,2.8-36.9,3.5-4.2,8.5-6.4,15.1-6.4h6.2l.1,28.9.2,29,22.3.4,22.2.2V163.9h-86l1.5-3.2c1.9-3.8,4.3-6.6,6.9-8.1C42.1,151.6,102.2,151.5,121.8,152.7Z" fill="#20787c" />
                                {open ?
                                    <><g id="Group_1">
                                        <path id="Path_1" d="M735.4,122.5c-13.8,2.2-23.6,9-30,20.7-5.2,9.3-6.4,24.5-3.2,37.6,3.8,15.6,14.2,25.2,30.6,28.3,8.5,1.7,20.7-.1,28-4.1,5-2.6,11.7-9.5,14.5-14.5,1.5-2.9,3.5-9.7,3.5-12.1,0-.4-2.5-.6-5.4-.6H768l-2.6,5.7c-5.4,12.2-11.4,16.1-24.4,16-12.7-.2-19.4-4.1-24.4-14.5-7.1-14.5-4.4-36.5,5.5-45.6,6.3-5.7,10.1-7,20.2-7,12.7,0,17.6,2.6,22.7,12.5,2.2,4.1,2.3,4.2,7.8,4.2,6.3,0,6.7-.9,3.7-7.9-3.3-7.5-11.1-14.2-19.6-16.8C752.2,123,739.6,121.8,735.4,122.5Z" fill="#20787c" />
                                        <path id="Path_3" d="M283.4,165.9v41.9l23.8-.5c19.2-.4,24.6-.9,28.1-2.5,9.1-4.4,17.1-15,19.9-26.4,1.7-7.1,1.8-19.2.1-26.2a36.293,36.293,0,0,0-19.1-24.4c-4.8-2.5-7.4-2.7-29-3.2l-23.8-.6ZM331.3,137c5.1,3,8.9,8.2,11.1,15.1,4.1,13.2,1.8,29.3-5.3,37.8-5.5,6.6-10,7.9-26.8,7.9H295.4V134l16.3.6C323.9,134.9,328.7,135.5,331.3,137Z" fill="#20787c" />
                                        <path id="Path_4" d="M383.4,165.2c-9.2,22.7-16.8,41.4-16.8,41.7s2.7.7,6,.7h6l4.8-12.5,4.9-12.5h18.5c16.6,0,18.5.2,18.5,2,0,1.1,1.8,6.7,3.9,12.5l3.9,10.5h6.2c4,0,6.2-.5,6.2-1.4,0-.7-4.3-12.3-9.6-25.7-9.7-24.5-14.2-36.1-19.4-49.3l-2.7-7.1H400.1Zm30.2-9.6,6.7,17.8-7.4.4c-4,.1-10.4.1-14.1,0l-6.8-.4,6.9-17.8c3.8-9.7,7.2-17.7,7.4-17.7C406.7,137.9,409.9,145.9,413.6,155.6Z" fill="#20787c" />
                                        <path id="Path_5" d="M440.8,125.1c-.3.4-.4,2.6-.4,5v4.1h30.3v73.5h12.6V134.2h30.3v-10H477.5C457.5,124.2,441,124.6,440.8,125.1Z" fill="#20787c" />
                                        <path id="Path_6" d="M525.9,164.1c-9,21.9-16.4,40.7-16.6,41.7-.3,1.6.5,1.9,5.5,1.9h5.9l4.7-12.5,4.7-12.3H566l4.5,12.5,4.6,12.3h6c4.7,0,6-.4,6-1.7,0-.9-7.1-19.6-15.6-41.4L556,124.8l-6.9-.4-6.9-.2Zm26.4-17.5a65.6,65.6,0,0,0,3.5,8.5,2.86,2.86,0,0,1,.5,1.7,66.942,66.942,0,0,0,2.8,8.5,62.7,62.7,0,0,1,2.8,8c0,.4-6.2.7-13.9.7-7.6,0-13.8-.5-13.7-1,.6-3.1,14.1-36.1,14.4-35.4.4.6,1.9,4.5,3.6,9Z" fill="#20787c" />
                                        <path id="Path_7" d="M629.2,125.8c-.2.9-.3,19.4-.2,41.4l.2,39.9,5.9.4,5.8.4V170.4H685v-10H640.9V134.2h50.4v-10H660.4C636.1,124.2,629.4,124.6,629.2,125.8Z" fill="#20787c" />
                                    </g>
                                        <g id="Group_2">
                                            <path id="Path_8" d="M567.9,221.5c-5.2,1.2-9,5.4-10.5,11.5-1,4.2-1.1,5.2-.3,9.3,1.8,9.2,7.1,13.2,16.6,12.5,6.7-.5,10.9-3.4,12.3-8.3.9-3.6.8-3.9-1.6-3.9-1.4,0-2.3.7-2.8,2.4-1.7,6.1-10.5,8.5-15.8,4.4-5.9-4.7-5.7-17.8.3-22.3,4.2-3.1,12.4-2.2,14.4,1.6,1.1,1.9,2.4,2.8,3.8,2.7,2.1,0,2.3-.2,1.8-2.4C584.5,223.3,575.8,219.7,567.9,221.5Z" fill="#0c0d0d" />
                                            <path id="Path_9" d="M283.4,238.2V255h4.4V240h8.5c8.1,0,8.5-.1,8.5-2.5s-.4-2.5-8.5-2.5h-8.5v-8.7h9.8c9.3,0,9.8-.1,9.8-2.5s-.4-2.5-12-2.5h-12v16.9Z" fill="#0c0d0d" />
                                            <path id="Path_10" d="M434.7,223.9c0,2,.4,2.5,2.2,2.5s2.2-.5,2.2-2.5-.4-2.5-2.2-2.5S434.7,221.9,434.7,223.9Z" fill="#0c0d0d" />
                                            <path id="Path_11" d="M519.4,222.5c-4.2,2.1-5.2,6.9-2.4,11.1,1.8,2.7,1.7,3-1.8,5.2-4.8,3-5.2,10.7-.8,14.5,2.9,2.4,10.7,2.2,14.4-.2,2.6-1.7,3-1.7,4.3,0a5.687,5.687,0,0,0,4.3,2h2.8l-2.8-3.4c-1.6-1.7-2.9-3.4-3-3.5a24.046,24.046,0,0,1,1.2-4.9l1.3-4.5h-2.3c-1.3,0-2.3.4-2.3.9a10.713,10.713,0,0,1-.6,2.7c-.4,1.5-1.1,1.1-3.5-1.6l-2.9-3.5,2.7-2.6c3.3-3.4,3.8-7.2,1.5-10.2C527.8,222.1,522.3,221,519.4,222.5Zm7.1,4.4c1.1,1.6,1.1,2,.3,3.7-1.7,3.5-4.4,3.7-6.2.6-1.4-2.6-1.4-2.9-.3-4.5A3.742,3.742,0,0,1,526.5,226.9Zm1,22.8c-2.8,2.5-9.2,2-10.9-.7-1.4-2.4-1.4-2.5-.4-4.7a11.235,11.235,0,0,1,3.1-3.6c1.8-1.1,2.5-.9,6,3.1l4,4.5Z" fill="#0c0d0d" />
                                            <path id="Path_12" d="M697,238.2V255h3.8V221.4H697Z" fill="#0c0d0d" />
                                            <path id="Path_13" d="M720.9,223.9c0,2,.4,2.5,2.2,2.5s2.2-.5,2.2-2.5-.4-2.5-2.2-2.5S720.9,221.9,720.9,223.9Z" fill="#0c0d0d" />
                                            <path id="Path_14" d="M422.1,227c0,2.5-.3,3.1-1.6,3.1-1,0-1.6.7-1.6,1.9,0,1.1.6,1.9,1.6,1.9,1.5,0,1.6.2,1.6,9.3,0,10.7.5,11.8,5.3,11.8,2.1,0,2.9-.5,2.9-1.9a1.693,1.693,0,0,0-1.9-1.9h-1.9V233.8h1.9a1.9,1.9,0,1,0,0-3.8c-1.6,0-1.9-.5-1.9-3.1,0-2.7-.3-3.1-2.2-3.1C422.4,223.9,422.1,224.3,422.1,227Z" fill="#0c0d0d" />
                                            <path id="Path_15" d="M708.3,227c0,2.6-.3,3.1-1.9,3.1a1.9,1.9,0,1,0,0,3.8h1.9v9.3c0,10.7.5,11.8,5.3,11.8,2.1,0,2.9-.5,2.9-1.9a1.693,1.693,0,0,0-1.9-1.9h-1.9V233.8h1.9a1.9,1.9,0,1,0,0-3.8c-1.6,0-1.9-.5-1.9-3.1,0-2.7-.3-3.1-2.2-3.1S708.3,224.3,708.3,227Z" fill="#0c0d0d" />
                                            <path id="Path_16" d="M314.3,232.9c-5.5,5.6-5.9,14.2-.6,19.3,3.7,3.7,11.6,4,15.6.5,6.1-5.5,5.2-17.6-1.6-21.2C323.5,229.1,317.4,229.8,314.3,232.9Zm12.9,3.6c2.1,3.4,2.1,8.5.1,12.3-1.3,2.4-2.3,2.9-5.2,2.9-2,0-4.3-.6-5-1.5-3.2-3.4-3.4-11.1-.3-14.3C319.4,233,325.2,233.4,327.2,236.5Z" fill="#0c0d0d" />
                                            <path id="Path_17" d="M338.9,242.6V255h3.8v-7.5c0-9.1,1.1-11.7,5.3-13,1.9-.6,2.9-1.5,2.9-2.7,0-2.4-3.2-2.4-6,0-2,1.6-2.2,1.6-2.2,0,0-1.1-.6-1.7-1.9-1.7h-1.9v12.5Z" fill="#0c0d0d" />
                                            <path id="Path_18" d="M354.7,242.6V255h4.4v-8.6c0-10.1.6-11.5,5-12.3,4.5-.9,5,.5,5,11.7V255h4.4v-8.6c0-6,.3-9,.9-10.1,1.1-1.9,5.4-3,7.5-2,1.6.7,1.6,1.1,1.6,10.7v10h5v-8c0-10.5-.7-13.8-3.2-15.6-2.8-1.9-7.8-1.7-10.3.4-1.9,1.6-2.4,1.6-3.9.1-2.3-2.4-6.9-2.4-10.1-.1-2.3,1.6-2.5,1.6-2.2,0,.3-1.2-.3-1.7-2-1.7h-2.3v12.5Z" fill="#0c0d0d" />
                                            <path id="Path_19" d="M398.6,231.4c-2,1.2-3.6,3.5-3.6,5.1,0,1.7,3.3,1.2,4.7-.7,1.4-2.1,8.3-2.6,9.8-.7a3.84,3.84,0,0,1,.5,2.9c-.3,1.4-2,2.1-6.1,2.7-9.1,1.4-12.1,4.7-9.6,10.8,1,2.4,1.9,3,5.7,3.4a15.619,15.619,0,0,0,7.4-.9c2-1.1,3.1-1.1,3.5-.2,1.1,2.2,6.1,1.7,6.1-.5,0-1-.6-1.9-1.3-1.9-1.1,0-1.3-.9-1.3-8.1,0-7.4-.1-8.2-1.6-10.2C411,230.6,401.6,229.5,398.6,231.4Zm11.5,13.7c0,4.6-3.6,7-9.6,6.4-1.8-.1-2.9-3.2-1.8-5.4.3-.6,2.7-1.6,5.2-2.2,2.6-.5,5-1,5.5-1.1C409.8,242.7,410.1,243.7,410.1,245.1Z" fill="#0c0d0d" />
                                            <path id="Path_20" d="M434.7,242.6V255h4.4V230.1h-4.4Z" fill="#0c0d0d" />
                                            <path id="Path_21" d="M448,232.9c-5.4,5.5-5.8,14-.9,19.3,5.1,5.7,17.2,2.9,19.2-4.4,1.1-4,.8-9.6-.5-12C462.2,229.6,452.8,228.1,448,232.9Zm12.8,3.6c2,3.1,2.1,7.4.2,11.7-1.3,3-1.9,3.4-5.3,3.5-5.6,0-8.4-4-7.5-11,.6-4.2,3.2-6.7,7.4-6.9C458.2,233.9,459.6,234.5,460.8,236.5Z" fill="#0c0d0d" />
                                            <path id="Path_22" d="M471.9,242.6V255h4.4v-7.9c0-10,1.1-12.2,5.9-13.1,5.4-.9,6.1.5,6.1,11.6v9.3h4.4v-8.8a78.641,78.641,0,0,0-.6-11.1c-1.3-4.7-8.6-6.6-13.4-3.2-2,1.5-2.4,1.5-2.4,0,0-1.1-.8-1.7-2.2-1.7h-2.2v12.5Z" fill="#0c0d0d" />
                                            <path id="Path_23" d="M595.9,231.9c-4.6,3.2-6.3,9.1-4.6,15.6,1.4,5.1,5,7.6,11.2,7.6,7.7,0,11.3-4.2,11.3-13.2,0-7.1-4.4-11.6-11.3-11.6A12.9,12.9,0,0,0,595.9,231.9Zm11.1,3.3c4.2,4.5,2.5,14.7-2.7,16.6-4.5,1.5-9.5-3.2-9.5-8.8a17.12,17.12,0,0,1,1.8-5.5c1.6-3.1,2.3-3.6,5.4-3.6A9.089,9.089,0,0,1,607,235.2Z" fill="#0c0d0d" />
                                            <path id="Path_24" d="M619.4,242.6V255h1.9c1.9,0,1.9,0,1.9-7.4,0-10.1,1.2-12.8,5.8-13.6,5.5-.9,6.2.5,6.2,11.6v9.3h4.4v-9.7c0-8.2-.2-10.2-1.3-12.1-1.7-3.1-8.9-4-12.4-1.5-2.3,1.5-2.7,1.5-2.7.1,0-1.1-.7-1.7-1.9-1.7h-1.9Z" fill="#0c0d0d" />
                                            <path id="Path_25" d="M647.8,232.4c-2.5,2.4-3.3,6.9-1.4,8.7.6.7,3.4,1.9,6.2,2.6,7.6,2.2,8.5,2.6,8.5,4.5,0,4.4-10.3,5.4-12,1.1-.8-1.9-4.3-2.5-4.3-.7,0,2.7,2.8,5.5,6.4,6.5,6.9,1.6,14.4-1.9,14.4-6.9,0-1.7-1.6-5.6-2.4-5.6-1.9-.2-12.9-3.7-13.2-4.2a5.708,5.708,0,0,1,0-2.6c.6-2.6,7.9-2.6,9.6,0a4.6,4.6,0,0,0,3.3,1.9c1.9,0,2-.2,1.3-2.1C661.7,230,652.1,228,647.8,232.4Z" fill="#0c0d0d" />
                                            <path id="Path_26" d="M669.8,239.8c0,12.6.8,14.3,6.9,15,2.4.2,5.3-.1,6.4-.9,1.4-1,2.1-1,2.3-.1.1.6,1.2,1.2,2.4,1.2h2.1V230.1h-4.4v7.5c0,6.4-.3,8.1-1.6,10.6-1.2,2.5-2.1,3.1-4.9,3.1-1.8,0-3.7-.6-4.1-1.5s-.8-5.2-.8-10.6v-9.1h-4.4v9.7Z" fill="#0c0d0d" />
                                            <path id="Path_27" d="M720.9,242.5V255h4.5l-.2-12.2-.2-12.1-2-.4-2.1-.4Z" fill="#0c0d0d" />
                                            <path id="Path_28" d="M731.6,242.6V255h1.9c1.9,0,1.9-.1,1.9-6.7a85.062,85.062,0,0,1,.4-8.8c.9-4.7,7.4-7.5,10.4-4.4,1,1.1,1.2,2.7,1.2,10.6V255h4.4v-9.7c0-8.2-.2-10.2-1.3-12.1-1.7-3.1-8.9-4-12.4-1.5-2.3,1.5-2.7,1.5-2.7.1,0-1.1-.7-1.7-1.9-1.7h-1.9v12.5Z" fill="#0c0d0d" />
                                            <path id="Path_29" d="M761.6,232c-3.5,2.5-5,5.9-5,11.3,0,3.2.4,5.2,1.4,6.9,3,4.9,10.2,6.4,14.2,3.1,2.1-1.7,2.2-1.7,2.2.5,0,3-1.5,6-3.5,7-2.3,1.1-8.6-.1-9-1.7-.3-1.7-4.5-2-4.5-.2a9.488,9.488,0,0,0,1.7,3.4c1.3,1.7,3,2.2,7.4,2.2,6.6,0,8.4-.7,10.3-4.4,1.3-2.4,1.4-3.7,1.4-15.6V231.4h-1.9c-1,0-1.9.5-1.9,1.1,0,.7-1,.4-2.2-.6C769.6,229.6,764.8,229.8,761.6,232Zm11.6,5c1.6,2.9,1.6,7.8.2,10.9-.1.1-.1.2-.2.4-1.4,2.4-6.5,3.9-9.1,2.6-2.2-1-3.6-5.3-3.1-9.7a10.73,10.73,0,0,1,2-5.4C765.3,233.1,771.5,233.9,773.2,237Z" fill="#0c0d0d" />
                                        </g>
                                    </>
                                    : ""}
                            </g>
                        </svg></Link>
                    <ul>
                        {Menus?.map((Menu, index) => (
                            <NavLink key={index} href={Menu.src} >
                                <li
                                    className={`flex rounded p-1 cursor-pointer   hover:bg-primary  hover:text-white text-md font-medium items-center gap-x-4
                                        ${Menu.gap ? "mt-9" : "mt-2"}
                                        ${!open ? "justify-center" : "justify-start"} first-letter:
                                        ${url == Menu.src
                                            ? "bg-primary text-white"
                                            : "text-primary"
                                        }
                                        ` }>
                                    <span
                                        className={`${!open ? "p-1  text-2xl" : "p-2 text-2xl"}`}
                                    >
                                        <i className={Menu.icon}></i>
                                    </span>
                                    <span
                                        className={`${!open && "hidden"} origin-left duration-200`}>
                                        {Menu.title}
                                    </span>
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                </div>
                <div
                    className={` ${open ? "left-56 " : "left-20 "
                        } w-screen  absolute  duration-300  `}
                    style={{ width: `calc(100% - ${open ? "14rem" : "5rem"})` }}
                >
                    <nav className="sticky shadow z-40 top-0 bg-white w-full  items-center justify-between py-2 text-neutral-500  hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 ">
                        <div className="flex w-full items-center justify-between px-3">
                            <i
                                className={`  fa-solid ${!open2 ? " fa-bars" : " fa-chevron-left"} cursor-pointer duration-300 ${open && "rotate-[360deg]"}`}
                                onClick={() => setOpen(!open)}
                            ></i>
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                {page.props.auth.user?.name} (Admin)
                                {/* <!-- Settings Dropdown --> */}
                                <div className="ml-3 relative">
                                    <Dropdown align="right" width="48" renderTrigger={() => page.props.jetstream.managesProfilePhotos ? (<button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                                        <img className="h-8 w-8 rounded-full object-cover" src={page.props.auth.user?.profile_photo_url} alt={page.props.auth.user?.name} />
                                    </button>) : (<span className="inline-flex rounded-md">
                                        <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-primary hover:text-primary/80 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-primary/80 active:bg-gray-50 dark:active:bg-primary/80 transition ease-in-out duration-150">
                                            {page.props.auth.user?.name}
                                            <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </button>
                                    </span>)}>
                                        {/* <!-- Account Management --> */}
                                        <div className="block px-4 py-2 text-xs text-gray-400">
                                            Gérer son compte
                                        </div>
                                        <DropdownLink href={"/admin"}>
                                            Dashboard
                                        </DropdownLink>
                                        <DropdownLink href={route('profile.show')}>
                                            Mon Compte
                                        </DropdownLink>
                                        {page.props.jetstream.hasApiFeatures ? (<DropdownLink href={route('api-tokens.index')}>
                                            API Tokens
                                        </DropdownLink>) : null}
                                        <div className="border-t border-gray-200 dark:border-gray-600"></div>
                                        {/* <!-- Authentication --> */}
                                        <form onSubmit={logout}>
                                            <DropdownLink as="button">Se déconnecter</DropdownLink>
                                        </form>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="p-2 h-100">
                        <Banner />

                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
