import React from 'react'
import { Link } from '@inertiajs/react'
function ContentFormation() {
  let data = [
    {
      "question": "Vous cherchez à développer vos compétences et améliorer la compétitivité de votre entreprise ?",
      "answer": "La formation est le moyen idéal pour y aboutir, elle constitue l’un des principaux leviers de management de votre capital humain."
    },
    {
      "question": "Vous cherchez l’outil essentiel d’évolution de votre entreprise ?",
      "answer": "Le meilleur moyen c’est d’adopter une meilleure prise en charge de la formation de vos collaborateurs."
    },
    {
      "question": "Vous voulez faire de votre entreprise une entreprise innovante ?",
      "answer": "Attachez de l’importance à la formation de vos employés."
    },
    {
      "question": "Vous voulez générer de la valeur ajoutée dans votre entreprise et atteindre les objectifs visés ?",
      "answer": "La formation est l’investissement le plus sûr pour y arriver ."
    },
    {
      "question": "Vous cherchez à contribuer à la progression des performances du capital humain de votre entreprise ?",
      "answer": "Adopter une politique de formation continue est la solution."
    }
  ]
  return (
    <section className="bg-white relative z-10 overflow-hidden">
      <img className='absolute top-0 left-0 z-[-1] opacity-20' alt='' src='/images/464.svg' />
      <div className=" py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-primary/80">
          <div>
            {data.map((item, i) => <div key={i} className="mb-10">
              <h3 className="flex items-center mb-4 text-2xl font-medium text-primary/75 dark:text-white">
                <svg className="flex-shrink-0 mr-2 w-5 h-5 max-sm:hidden text-primary dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                {item.question}
              </h3>
              <p className="text-gray-500  text-lg mt-5 dark:text-gray-400">{item.answer}</p>
            </div>)}
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/formations-interentreprises"
                    className="animatecss animatecss-bounceInUp rounded-md bg-primary py-4 px-8 text-base font-semibold text-white animate-fade-up  duration-300  hover:bg-primary/80"
                  >
                    Formations interentreprises
                  </Link>
                  <Link
                    herf="/nos-formations"
                    className="animatecss animatecss-bounceInUp rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black animate-fade-up hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    Nos formations
                  </Link>
                </div>
        </div>
      </div>
    </section>
  )
}

export default ContentFormation
