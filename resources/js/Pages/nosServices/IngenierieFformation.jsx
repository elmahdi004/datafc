import React from 'react'

function IngenierieFformation() {

    return (
        <section className='container mx-auto py-5  my-10  '>
            <div className='grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2  max-sm:grid-cols-1 gap-16'>
                <div data-aos="fade-right" className=' '>
                    <img src="/images/info1.jpg" className='rounded-xl rounded-b-xl shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300' alt="images" />
                </div>
                <div className=' flex items-center justify-center ' data-aos="fade-left" >
                    <p className='text-2xl font-semibold     '>
                        Les actions de formation continue n’ont de sens que si elles sont étroitement intégrées dans un processus visant l'atteinte des orientations stratégiques de l’entreprise (ou de l’organisation)
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2  mt-10 max-sm:grid-cols-1 gap-16'>
                <div data-aos="fade-right" className='flex items-center justify-center'>
                    <p className='text-2xl font-semibold     '>
                        Pour rendre la formation rentable, efficace et
                        utile, il est très recommandé de se donner le temps, les moyens et la capacité d’effectuer
                        un diagnostic des besoins en formation afin
                        de ne pas gaspiller le temps,
                        l’énergie et l’argent.
                    </p>
                </div>
                <div data-aos="fade-left " className=''>
                    <img src="/images/m1.jpg" className='rounded-xl rounded-b-xl shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300' alt="images" />
                </div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2  mt-10 max-sm:grid-cols-1 gap-16'>
                <div data-aos="fade-right" className=''>
                    <img src="/images/m2.jpg" className='rounded-xl rounded-b-xl shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300' alt="images" />
                </div>
                <div data-aos="fade-left" className='flex items-center justify-center'>
                    <p className='text-2xl font-semibold'>C’est dans cette optique que nous vous proposons dans le cadre d’une action d’ingénierie, des interventions de
                        spécialistes pour mettre en œuvre un processus de diagnostic des besoins, allant de l’analyse des besoins, la conception d’un plan de formation à la réalisation et l’évaluation de la formation.</p>
                </div>
            </div>
        </section>
    )
}

export default IngenierieFformation