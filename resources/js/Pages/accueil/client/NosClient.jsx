import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import axios from "axios";


const NosClient = () => {
    const [listClient, setListClient] = useState([]);
    async function getData() {
        await axios.get("/Api/Noslient").then(res => setListClient(res.data))
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            {/* ====== Brands Section Start */}
            <section className="bg-white py-32">
                <h3 className="sm:text-3xl sm:leading-tight text-center pt-5 md:text-4xl md:leading-tight dark:text-white">Nos Clients</h3>
                <div className="container flex h-[30vh] justify-center items-center">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full px-4">
                            <div className="flex flex-wrap items-center justify-center">
                                {listClient?.map((c, i) => <SingleImage
                                    key={i + "c"}
                                    href={c.href}
                                    Alt={c.Alt}
                                    imgSrc={c.imgSrc}
                                />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== Brands Section End */}
        </>
    );
};

export default NosClient;

const SingleImage = ({ href, imgSrc, Alt }) => {
    return (
        <a href={href} className="mx-4 flex w-[80px] items-center justify-center  2xl:w-[160px]  ease-in-out delay-150 duration-700 transition-opacity	 opacity-70  hover:opacity-100">
            <img src={`/storage/${imgSrc}`} alt={Alt} className="w-full " />
        </a>
    );
};
