import React from 'react';
export default function CardFormation({ titre, image }) {
    return (
        <div
            className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <img
                className="rounded-t-lg  bg-center  "
                src={`/images/OrongeUL/${image}`}
                alt=""
            />
            <div className="p-6 mt-25 ">
                <h5
                    className="absolute bottom-3 mb-2  text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 ">
                    {titre}
                </h5>
            </div>
        </div>
    );
}