function HerosNosFormation() {
    return (
      
            <section className="relative overflow-hidden " >
                <div className={`w-full flex items-center h-[50vh]   opacity-90 bg-cover bg-fixed bg-hero-info-formation`}
               /*  style={{
                    backgroundImage: `url('/storage/${imgFormation}')`,
                }} */
                >
                    <div className=" absolute  backdrop-grayscale w-full h-full   ">
                    </div>
                    <figure className="mx-auto max-w-4xl ">
                        <blockquote className="relative font-display text-3xl font-medium tracking-tight  sm:text-4xl">
                            <h1 className="mb-4 text-3xl font-bold drop-shadow-lg leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
                             Nos Fromation
                            </h1>
                        </blockquote>
                        <figcaption className="mt-10">
                        </figcaption>
                    </figure>
                </div>
            </section>
     
    )
}

export default HerosNosFormation
