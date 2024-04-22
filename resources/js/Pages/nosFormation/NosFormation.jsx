import React from 'react'
import ClientLayout from '@/Layouts/ClientLayout'

import HerosNosFormation from '../Hero/HerosNosFormation'
import CardFormation from './cardFormation'

function FormationCard() {
const data=[
    {
       "svg":"Workchat-amico.svg",
        "titre":"Formation en Communication"
    },
    {
       "svg":"BusinessPlan-cuate.svg",
        "titre":"Formation en finance, comptabilité et assurance"
    },
    {
       "svg":"Projections-amico.svg",
        "titre":"Formation en Gestion des ressources humaines"
    },
    {
       "svg":"Dronesurveillance-amico.svg",
        "titre":"Formation en Qualité, Hygiène, Sécurité et Environnement (QHSE)"
    },
    {
       "svg":"Team-pana.svg",
        "titre":"Formation en Management"
    },
    {
       "svg":"Attheoffice-bro.svg",
        "titre":"Formation en Technologie de l’Information et de Communication (TIC)"
    },
    {
       "svg":"marketing.svg",
        "titre":"Formation en techniques de Vente et Marketing"
    },
    {
       "svg":"MainPic.svg",
        "titre":"Formation en sécurité routière"
    },
    {
       "svg":"driving.svg",
        "titre":"Formation des Conducteurs routiers"
    },
    {
       "svg":"Telecommuting-rafiki.svg",
        "titre":"Formation de reconversion"
    },
    {
       "svg":"Pairprogramming-pana.svg",
        "titre":"Formation en Informatique"
    },
    {
       "svg":"systeminfo.svg",
        "titre":"Formation en Management des systèmes d’Information"
    },
    {
       "svg":"Memorystorage-amico.svg",
        "titre":"Formation en Bases de données et Big Data"
    },
    {
       "svg":"BusinessPlan-cuate.svg",
        "titre":"Formation en Business Intelligence"
    },
    {
       "svg":"Team-bro.svg",
        "titre":" Formation en gestion des Projets"
    },
    {
       "svg":"gne.svg",
        "titre":"Formation industrielle (Dessin industriel : bâtiment, Génie Civil, électrique, Electronique mécanique, Maintenance,automatisme, Froid et climatisation)"
    }
]
return (
    <ClientLayout title={"Nos Fromation"}>
        <HerosNosFormation/>
        <section className='grid lg:grid-cols-3 max-sm:grid-cols-1 sm:grid-cols-2 container mx-auto gap-8 my-10' >
            {data.map(( value,i)=>  <CardFormation key={i}  image={value.svg}  titre={value.titre}/>)}
        </section>
    </ClientLayout>
)
}

export default FormationCard
