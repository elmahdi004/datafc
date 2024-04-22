/* import { useEffect } from "react";
import AOS from "aos"; */

function Engagement() {

    let data2 = [
        {
            'data': 'Garantir des prestations de qualité répondant aux exigences de nos clients',
            'icon': '/img/guarante.064e8674.png'
        },
        {
            'data': 'Etre un partenaire d’excellence de nos clients',
            'icon': '/img/cooperation.5771fcfd.png'
        },
        {
            'data': 'Fournir des solutions innovantes et sur mesure pour chaque entreprise cliente',
            'icon': '/img/idea.3cd775cc.png'
        },
        {
            'data': 'Satisfaire nos clients dans le but de maintenir une relation confirmée et durable',
            'icon': '/img/like.8c5ba07f.png'
        },
        {
            'data': 'Proposer des services novateurs, un accompagnement privilégié et des conseils personnalisés',
            'icon': '/img/technology.613296a2.png'
        },
        {
            'data': 'Assurer une déontologie de travail dans toutes nos interventions',
            'icon': '/img/balance-scale.986edf8e.png'
        },
        {
            'data': 'Viser l’excellence et la perfection dans la réalisation de toutes nos prestations',
            'icon': '/img/consult.11209db2.png'
        },
        {
            'data': 'Adopter des pratiques responsables et un comportement éthique avec nos clients',
            'icon': '/img/authorized-dealer.0940a82a.png'
        }
    ]
    return (
<div className="container mx-auto px-4  py-8">
<h2 data-aos="zoom-in" className="mb-5 text-3xl font-bold text-center leading-tight text-primary sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">Nos engagements</h2>

    <div className="relative wrap overflow-hidden">
        <div className="border-2-2 absolute border-opacity-20 border-primary/80 h-full border left-1/2"></div>
{data2.map((e,i)=><div key={i} className={`mb-8 flex justify-between items-center w-full ${i%2?'flex-row-reverse':''}`}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                <h3 className="mx-auto font-semibold text-lg text-white"><img src="/images/icons8-étoile-24.png"/> </h3>
            </div>
            <div data-aos={i % 2 ? 'zoom-in-left' : 'zoom-in-right'} className="order-1 text-center bg-primary/10 rounded-lg shadow-xl w-5/12 px-2 py-2">
                <p className="mb-3 font-bold text-primary text-xl max-sm:text-lg ">{e.data}</p>
            </div>
        </div>)}
    </div>
</div>

    )
}
export default Engagement;
