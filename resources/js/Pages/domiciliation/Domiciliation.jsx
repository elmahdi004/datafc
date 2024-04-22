import React from 'react'
import ClientLayout from '@/Layouts/ClientLayout'

import Herodomiciliation from '../Hero/Herodomiciliation'



function Domiciliation() {
  const reponse = [
    "Une adresse administrative pour donner une image prestigieuse à votre entreprise.",
    "Une adresse de prestige qui figurera sur tous vos documents administratifs, courriers, contrats de l’entreprise ; de quoi donner une image plus professionnelle pour vos clients, fournisseurs ou partenaires.",
    "Maximiser votre référencement au sein d’un quartier d’affaires et donc paraître plus crédible.",
    "La gestion efficace de votre courrier ainsi que la prise en charge de vos appels téléphoniques.",
    "Une salle de réunion à votre disposition ainsi que des bureaux bien équipés.",
    "Une bonification sous forme de séances de coaching et formation gratuite pour le pilotage du démarrage de votre entreprise.",
  ]
  return (
    <div>
      <ClientLayout title={"Domiciliation"}>
      <Herodomiciliation />
      <section className='container mx-auto'>
        <div className="mt-8">
          <h2 className="mt-2 text-center lg:text-4xl font-extrabold leading-8 text-primary/80 dark:text-white sm:text-3xl sm:leading-9">
            Domiciliez votre entreprise chez nous et bénéficiez de :
          </h2>
          <ul className="mt-10 space-y-3  font-medium">
            {reponse.map((rep, i) => <li key={i} className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-primary mt-6 me-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
              <p className=" text-2xl mt-7  text-gray-600">
                {rep}
              </p>
            </li>)}
          </ul>
        </div>
      </section>
      </ClientLayout>
    </div>
  )
}

export default Domiciliation
