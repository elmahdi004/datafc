function HeroFormationInfo({CodeFormation,Titre,imgFormation}) {
    return (
        <div>
            <section className="relative overflow-hidden">
                <div className={`w-full flex items-center h-[50vh] opacity-90 bg-cover bg-fixed bg-hero-info-formation`}
                style={{
                    backgroundImage: `url('/storage/${imgFormation}'),url('/images/hero-info-formation-Management.jpg')`,
                }}
                >
                    <div className=" absolute  backdrop-grayscale w-full h-full   ">
                    </div>
                    <figure className="mx-auto max-w-4xl ">
                        <blockquote className="relative font-display text-3xl font-medium tracking-tight  sm:text-4xl">
                            <h1 className="mb-4 text-3xl font-bold drop-shadow-lg leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
                                {Titre}
                            </h1>
                        </blockquote>
                        <figcaption className="mt-10">
                        </figcaption>
                    </figure>
                </div>
            </section>
        </div>
    )
}

export default HeroFormationInfo
