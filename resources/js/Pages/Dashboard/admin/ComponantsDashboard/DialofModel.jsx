import { useEffect, useState } from "react";
import DialogModal from "../../../../Components/DialogModal"
import axios from "axios";

//import DialogModal from "../../Components/DialogModal";
export default function DialogModel({id}) {
    const [action, setaction] = useState(false)
    const [data, setData] = useState({})
    function gethData() {
        axios.get("/Api/Formation/"+id).then(res => { setData(res.data) })

    }
    useEffect(()=>{gethData()},[])
    function closeModal() {
        setaction(false);
        intState()
    }

    return (
        <>
            <button
                type="button"
                onClick={(e) => setaction(true)}
                className=" inline-flex w-11 h-11 justify-center items-center bg-primary hover:bg-primary/100 text-pink-50 hover:text-white rounded-full transition duration-150"
            >
             <i className="fa-solid fa-eye"></i>{" "}
            </button>
            <DialogModal isOpen={action} onClose={closeModal} maxWidth={'6xl'}>
                <DialogModal.Content >

                </DialogModal.Content>
                <div id="accordionExample" className="container mx-auto mb-6">
            <div className="  " >
                <div className=" w-full lg:max-w-full mt-2   ">
                    <div className=" lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >
                    </div>
                    <div className=" relative  border-primary border-2 rounded-lg  overflow-hidden  bg-green-50   p-4 flex flex-col justify-between leading-normal">
                        <img src="/images/hero-shape-2.svg" alt="" className='absolute top-0 right-0 ' />
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center">
                                {data?.Code}
                            </p>
                            <div className="text-primary font-bold text-xl mb-2">{data?.Titre}</div>
                            <p className="text-primary/80 text-base">{data?.Objectifs} </p>
                        </div>
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src="/images/days-counter-svgrepo-com.svg" alt="Avatar of Jonathan Reinink" />
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">Durée </p>
                                <p className="text-gray-600">{data?.Duree}</p>
                            </div>
                        </div>
                 
                     
                            <div className=" py-4">
                                <div className="border-primary bg-white/50  overflow-hidden mb-14 shadow rounded-lg border">

                                    <div className="border-t border-gray-200 px-4 py-5   sm:p-0">
                                        <dl className="sm:divide-y sm:divide-gray-200">
                                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    code de formation
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {data.Code}
                                                </dd>
                                            </div>
                                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    intitulé de
                                                    formation
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {data.Titre}
                                                </dd>
                                            </div>
                                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Objictifs
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                   {data.Objectifs}
                                                </dd>
                                            </div>
                                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Popilarité
                                                    cible
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {data.Population_cible}
                                                </dd>
                                            </div>
                                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Programme
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    <ul className="list-disc">
                                                        {<ul>
                                                            {data?.programme_formation?.map((item, index) => (
                                                                <li key={index} className="text-body-color ms-2 my-2 text-sm">
                                                                    <span className="flex">
                                                                        <span className="text-primary mr-2 rounded-full text-base">
                                                                            <svg width={20} height={20} viewBox="0 0 20 20" className="fill-current">
                                                                                <path
                                                                                    d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"
                                                                                />
                                                                                <path
                                                                                    d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {item.Titre}
                                                                    </span>
                                                                    <ul className="ps-5">
                                                                        {item?.sous_programmes?.map((line, x) => (
                                                                            <li key={x} className="text-body-color mb-1 flex text-base">
                                                                                <span className="text-primary mr-2 flex items-center rounded-full text-base">
                                                                                    <svg width="20" height="8" viewBox="0 0 20 8" className="fill-current">
                                                                                        <path
                                                                                            d="M19.2188 2.90626L17.0625 0.343758C16.875 0.125008 16.5312 0.0937583 16.2812 0.281258C16.0625 0.468758 16.0312 0.812508 16.2188 1.06251L18.25 3.46876H0.9375C0.625 3.46876 0.375 3.71876 0.375 4.03126C0.375 4.34376 0.625 4.59376 0.9375 4.59376H18.25L16.2188 7.00001C16.0312 7.21876 16.0625 7.56251 16.2812 7.78126C16.375 7.87501 16.5 7.90626 16.625 7.90626C16.7812 7.90626 16.9375 7.84376 17.0312 7.71876L19.1875 5.15626C19.75 4.46876 19.75 3.53126 19.2188 2.90626Z"
                                                                                        ></path>
                                                                                    </svg>
                                                                                </span>
                                                                                {line}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </li>
                                                            ))}
                                                        </ul>}
                                                    </ul>
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>     
                    </div>
                </div>
            </div>
        </div>
                <DialogModal.Footer>
                    <button
                        className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded transition text-base"
                        onClick={closeModal}
                    >
                        Fermer
                    </button>
                    
                </DialogModal.Footer>
            </DialogModal>
        </>
    )
}
