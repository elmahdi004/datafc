import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from '@inertiajs/react';
function CardFormation() {
    const [data, setData] = useState([])
    async function getdata() {
        await axios.get('/FormationInfo').then(response => setData(response.data))
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <section className=" antialiased z-20  text-gray-900 min-h-screen p-4">
            <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3  max-sm:grid-cols-1 gap-5">
                {data?.map((val, i) =>
                    <Link href={`/info-formation/${val.id}`} key={i} className="relative h-full bg-green-50 ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1  group     rounded-lg shadow-xl p-5 overflow-hidden">
                        <img src="/images/hero-shape-2.svg" alt="" className='absolute top-0 right-0' />
                        <div className="relative  transition-all duration-300 pt-[6.25rem] pb-14">
                            <h3 className="lg:text-4xl text-3xl sm:text-3xl  font-extrabold text-primary/80 leading-snug mb-2">{val.Titre}</h3>
                        </div>
                        <div className="absolute  transition-all duration-300 bottom-6 right-6 text-right">
                            <div className="  inline-flex w-11 h-11 justify-center items-center bg-primary hover:bg-primary/100 text-pink-50 hover:text-white rounded-full transition duration-150" ><span className="sr-only">Read more</span> <span className="font-bold -mt-px"><svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 207.161 167.124">
                                <path id="Path_1" data-name="Path 1" d="M143.25,100.15H17.67C7.67,100.12.56,93.84,0,84.82-.57,74.45,6.7,67,17.67,67H142.9c-1.43-1.67-2.26-2.79-3.23-3.77C128.38,51.9,117,40.64,105.78,29.28,101,24.47,98.85,18.81,100.92,12c1.92-6.32,6.25-10.07,12.55-11.55a15.17,15.17,0,0,1,14.72,4.19c26.33,26.19,52.54,52.5,78.94,78.92l-25.86,25.88q-26,26-52,51.92c-4.8,4.79-10.41,7.08-17.22,4.92a16.13,16.13,0,0,1-11.74-13.55c-1-6.07,1.47-11,5.71-15.24q16.46-16.4,32.87-32.85C140.09,103.49,141.2,102.29,143.25,100.15Z" transform="translate(0.031 0.027)" fill="#fff" />
                            </svg></span></div>
                        </div>
                    </Link>)}
            </div>
        </section>
    )
}
export default CardFormation
