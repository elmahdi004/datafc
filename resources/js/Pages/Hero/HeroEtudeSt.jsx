import React from 'react'

function HeroEtudeSt() {
  return (
    
    <section className="relative overflow-hidden">
        <div className=" w-full flex items-center h-[50vh]  bg-hero-etudeSt opacity-90 bg-cover bg-center bg-fixed   " >
            <div className=" absolute bg-gradient-to-b from-white to-gray-900 opacity-60  w-full h-full   ">
            </div>
            <figure className="mx-auto max-w-4xl ">
                <blockquote className="relative font-display text-3xl  tracking-tight  sm:text-4xl">
                    <h1 className="mb-4 text-3xl font-semibl drop-shadow-lg leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
                    Étude stratégique
                    </h1>
                </blockquote>
                <figcaption className="mt-10">
                </figcaption>
            </figure>
        </div>
    </section>
  )
}

export default HeroEtudeSt