import React from 'react'

function FeatureCards() {
    return (
        <div className="bg-[#b8e1e3]  p-4">
            <div className="container mx-auto pt-12 pb-20">
                <h1 className="text-4xl font-bold text-primary text-center mb-8">
                    Notre vivier de compétences
                </h1>
                <p className="text-primary/80 text-lg text-center mb-12">
                    Nous disposons d’un ensemble d’intervenants composés de
                </p>
                <div  className="grid grid-cols-1 md:grid-cols-3 gap-8" >
                    <div className="bg-white  rounded-lg shadow-lg p-8" data-aos="fade-left" >
                        <h2 className="text-xl font-bold text-primary mb-4">Formation</h2>
                        <p className="text-primary/80">
                            Formateurs expérimentés dans le domaine de la formation continue .</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
                        <h2 className="text-xl font-bold text-primary mb-4">Consultants</h2>
                        <p className="text-primary/80">
                            Consultants en Droit, marketing, ressources humaines, communication, recrutement, informatique, ingénierie, management
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-right">
                        <h2 className="text-xl font-bold text-primary mb-4">Enseignants</h2>
                        <p className="text-primary/80">
                            Enseignants universitaires expérimentés dans les domaines de la formation l’accompagnement et d’interventions formatives.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureCards
