import { useState, useEffect } from 'react'
import axios from 'axios'
import AdminLayout from '@/Layouts/AdminLayout'
import { Link } from '@inertiajs/react'
import DialogModel from '../ComponantsDashboard/DialofModel'
import { TECollapse } from "tw-elements-react";
import UpdateTypeFormation from './Partials/UpdateTypeFormation'
import { toast } from 'react-toastify';

function Formtion() {
    const [datas, setDatas] = useState([])
    const [activeElement, setActiveElement] = useState("");

    async function deletcat(id) {
        const toastP = toast.loading("S'il vous plaît, attendez...")

        await axios.post('/deletCategorie',{"id":id}).then(res => {
            toast.update(toastP, {
                render: "Puis avec succès",
                type: toast.TYPE.SUCCESS,
                isLoading: false,
                autoClose: 5000,
                closeOnClick: true,
            })
 getdata()
        }).catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
                setErrors(response.data.errors)
                toast.update(toastP, {
                    render: err?.response?.data?.message || "Il y a un problème",
                    type: toast.TYPE.ERROR,
                    isLoading: false,
                    autoClose: 5000,
                    closeOnClick: true,
                })
            } else {
                toast.update(toastP, {
                    render: "Il y a un problème",
                    type: toast.TYPE.ERROR,
                    isLoading: false,
                    autoClose: 5000,
                    closeOnClick: true,
                });
            }
        })
    }
    async function deletformation(id) {
        const toastP = toast.loading("S'il vous plaît, attendez...")

        await axios.post('/deletFormation',{"id":id}).then(res => {
            toast.update(toastP, {
                render: "Puis avec succès",
                type: toast.TYPE.SUCCESS,
                isLoading: false,
                autoClose: 5000,
                closeOnClick: true,
            })
 getdata()
        }).catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
                setErrors(response.data.errors)
                toast.update(toastP, {
                    render: err?.response?.data?.message || "Il y a un problème",
                    type: toast.TYPE.ERROR,
                    isLoading: false,
                    autoClose: 5000,
                    closeOnClick: true,
                })
            } else {
                toast.update(toastP, {
                    render: "Il y a un problème",
                    type: toast.TYPE.ERROR,
                    isLoading: false,
                    autoClose: 5000,
                    closeOnClick: true,
                });
            }
        })
    }

    async function getdata() {
        await axios.get('/FormationCategorieData').then(response => setDatas(response.data))
    }
    useEffect(() => {
        getdata()
    }, [])
    const handleClick = (value) => {
        if (value === activeElement) {
            setActiveElement("");
        } else {
            setActiveElement(value);
        }
    };
    return (
        <AdminLayout title={"Toutes les formations"}>
            <main className=" p-8 mx-auto ">
                <div className='py-6 '>
                    <Link href="/admin/Formtion/add" className="relative rounded px-5 py-2.5 overflow-hidden group bg-primary  hover:bg-gradient-to-r hover:from-primary hover:to-primary/75 text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Ajouter Formation</span>
                    </Link>
                </div>



                <div id="accordionExample">


                    {datas?.map((val, key) =>
                        <div key={key} className="rounded-t-lg border border-neutral-200 mt-2 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                            <h2 className="mb-0" id="headingOne">
                                <div
                                    className={`${activeElement === "element1" &&
                                        `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                                        } group relative flex justify-between w-full   items-center rounded-t-[15px] border-0 bg-white px-5 py-4  text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none `}
                                    type="button"

                                >
                                    <span className='select-none' onClick={() => handleClick("element" + key)}>

                                        <span className="text-grey-darkest font-thin text-xl ">
                                            {val.CodeFormation}
                                        </span>
                                        <span className="text-grey-darkest font-thin text-xl ms-10">
                                            {val.Titre}
                                        </span>
                                    </span>
                                    <UpdateTypeFormation idC={val.id} dataF={{ CodeFormation: val.CodeFormation, Titre: val.Titre, imgFormation: val.imgFormation }} />
                                    {val?.formation.length===0?<button
                                        onClick={() => deletcat(val.id)}
                                        type="button"
                                        data-modal-toggle="delete-user-modal"
                                        className="text-white absolute end-20 bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-sm inline-flex items-center px-3 py-2 text-center"
                                    >
                                        <i className="fa-solid fa-trash-can"></i>{" "}
                                    </button>:""}
                                    <span
                                        onClick={() => handleClick("element" + key)}

                                        className={`${activeElement === "element" + key
                                            ? `rotate-[-180deg] -mr-1`
                                            : `rotate-0 fill-[#212529]  dark:fill-white`
                                            } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                    >

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>

                                    </span>

                                </div>
                            </h2>
                            <TECollapse
                                show={activeElement === "element" + key}
                                className="!mt-0 !rounded-b-none !shadow-none"
                            >
                                <div className='grid grid-cols-3 sm:grid-cols-3 max-sm:grid-cols-1'>
                                    {val?.formation?.map((val2, key2) => <div key={key2} className="pl-8 pr-8 pb-5 text-grey-darkest">
                                        <div className="relative h-full bg-green-50 ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1  group  cursor-pointer   rounded-lg shadow-xl p-5 overflow-hidden">
                                            <img src="/images/hero-shape-2.svg" alt="" className='absolute top-0 right-0' />
                                            <div className="relative  transition-all duration-300 pt-[6.25rem] pb-14">
                                                <h3 className="lg:text-4xl text-3xl sm:text-3xl  font-extrabold text-primary/80 leading-snug mb-2">{val2.Titre}</h3>
                                            </div>
                                            <div className="absolute  transition-all duration-300 bottom-6 right-6 text-right">
                                                {/* <Link href={`/info-formation/`} className="  inline-flex w-11 h-11 justify-center items-center bg-primary hover:bg-primary/100 text-pink-50 hover:text-white rounded-full transition duration-150" ><span className="sr-only">Read more</span> <span className="font-bold -mt-px"><svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 207.161 167.124">
                                                    <path id="Path_1" data-name="Path 1" d="M143.25,100.15H17.67C7.67,100.12.56,93.84,0,84.82-.57,74.45,6.7,67,17.67,67H142.9c-1.43-1.67-2.26-2.79-3.23-3.77C128.38,51.9,117,40.64,105.78,29.28,101,24.47,98.85,18.81,100.92,12c1.92-6.32,6.25-10.07,12.55-11.55a15.17,15.17,0,0,1,14.72,4.19c26.33,26.19,52.54,52.5,78.94,78.92l-25.86,25.88q-26,26-52,51.92c-4.8,4.79-10.41,7.08-17.22,4.92a16.13,16.13,0,0,1-11.74-13.55c-1-6.07,1.47-11,5.71-15.24q16.46-16.4,32.87-32.85C140.09,103.49,141.2,102.29,143.25,100.15Z" transform="translate(0.031 0.027)" fill="#fff" />
                                                </svg></span></Link> */}
                                                <DialogModel id={val2.id} />
                                            </div>
                                            <div className="absolute  transition-all duration-300 bottom-6 right-20 text-right">
                                                <Link href={`/admin/formtion/edit/${val2.id}`} className="  inline-flex w-11 h-11 justify-center items-center bg-primary hover:bg-primary/100 text-pink-50 hover:text-white rounded-full transition duration-150" >
                                                    <i className="fa-solid fa-pen-to-square text-center"></i>{" "}
                                                </Link>
                                            </div>

                                            <button onClick={() => deletformation(val2.id)} className=" absolute bottom-6  inline-flex w-11 h-11 justify-center items-center bg-red-400 hover:bg-red-700 text-pink-50 hover:text-white rounded-full transition duration-150" >
                                            <i className="fa-solid fa-trash-can"></i>{" "}
                                            </button>
                                        </div>
                                    </div>)}
                                </div>
                            </TECollapse>
                        </div>)
                    }
                </div>
            </main>
        </AdminLayout>
    )
}

export default Formtion
