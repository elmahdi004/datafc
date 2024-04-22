import React from 'react'
import ClientLayout from '@/Layouts/ClientLayout'

import HeroEtudeSt from '../Hero/HeroEtudeSt'

function EtudeSt() {
    const data = [
        {
            text: "Identifier l’ensemble des facteurs internes et externes  et toutes les informations nécessaires pour anticiper les évolutions futures, positives ou néfastes.",
            image: "/images/gagnon_penser_facon_strategique.jpg"
        },
        {
            text: "orienter sa stratégie d’entreprise en fonction des potentielles menaces et opportunités.",
            image: "/images/veille-visuel-retouche.jpg"
        },
        {
            text: "d’identifier tous les éléments qui ont un impact sur l’activité de l'entreprise dans le futur",
            image: "/images/planifstrat.jpg"
        },
    ]
    return (
        <div>
            <ClientLayout title={"Étude Stratégique"}>
            <HeroEtudeSt />
            <section className='container mx-auto mt-10'>
                <h2 className=" text-4xl mb-10 lg:text-4xl sm:text-2xl max-sm:text-2xl font-extrabold leading-8 text-primary/80 dark:text-white  ">
                    Toute entreprise qui cherche à se positionner de manière durable dans un marché de plus en plus concurrentiel, doit passer par une étude stratégique afin de :
                </h2>
                {data.map((val, key) => {
                    return <div key={key} style={{ direction: key % 2 ? "rtl" : " " }} className='grid p-5 lg:grid-cols-2 ms:grid-cols-1 max-sm:grid-cols-1'>
                        <div>
                            <img src={val.image} className=" h-full   rounded-lg" alt="image description" />
                        </div>
                        <div className='flex items-center justify-center h-full container mx-auto'>
                            <p className=" text-3xl mt-7 text-center text-gray-600">
                                {val.text}
                            </p>
                        </div>
                    </div>
                })}
            </section>
            </ClientLayout>
        </div>
    )
}

export default EtudeSt
