import React from 'react'

function ContentAssistance() {
    let  data = [
        {
          "img": "pana1.svg",
          "text": "Disposant des outils et des compétences nécessaires, DATA FC vous apporte conseil et soutien lors de votre processus de recrutement pour vous aider dans le cadre de votre stratégie de développement, à optimiser la gestion de vos ressources humaines."
        },
        {
          "img": "amico1.svg",
          "text": "Les conseillers de DATA FC adoptent les démarches et les outils appropriés pour mener à bien l’action d’assistance au recrutement pour votre entreprise."
        },
        {
          "img": "cuate.svg",
          "text": "Partant de votre demande DATA FC peut intervenir pour tout ou partie du processus de recrutement. De l’analyse des tâches et des missions relatives au poste à pourvoir, la définition des profils du poste recherché à l’évaluation et l’appréciation des candidats."
        },
        {
          "img": "bro.svg",
          "text": "Après chaque action de recrutement, DATA FC vous livre un rapport détaillant les caractéristiques des profils des candidats retenus et s’engage à faire le suivi de recrutement pour s’assurer que l’intégration du candidat dans le poste de travail se déroule bien"
        }
      ];
    return (
        <section className='container mx-auto py-5  my-10 '>
            <div className="grid grid-cols-1 gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-2">
                {data.map((item,i)=>
                <div key={i} className="w-full">
        <div className="wow fadeInUp" data-wow-delay=".15s">
            <div  className="mb-10 flex  items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            <img src={`/images/${item.img}`} alt=''  className='h-80' />

            </div>

            <p className="pr-[10px]   font-semibold text-xl leading-relaxed text-black text-center">{item.text}</p>
        </div>
    </div>)}




</div>
        </section>
    )
}

export default ContentAssistance
