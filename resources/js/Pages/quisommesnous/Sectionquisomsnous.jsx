import React from 'react'

function Sectionquisomsnous() {
    const styles = { color: "transparent" };
    let liste = [
        "L’Ingénierie de formation et l’assistance conseil en recrutement",
        "La Formation continue",
        "L’Assistance conseil en création et pilotage des entreprises",
        "L’Assistance technique dans le domaine informatique",
      //  "Le placement ou l’externalisation de ressources humaines",
        "Le Management des organisations",
       // "La Fourniture du personnel intérimaire"
    ];
    let liste2 = [
        "Accompagner ses clients via une approche innovante à booster les performances de leurs entreprises et à contribuer à la réussite de leurs projets.",
        "Proposer aux entreprises clientes des solutions efficaces contribuant à leur évolution et à l’amélioration de leur compétitivité, en faisant preuve d’éthique et de confidentialité.",
        "Entretenir une relation durable et personnalisée avec ses clients, en faisant preuve de transparence et de disponibilité"
    ];
    return (
        <div className="relative overflow-hiddenpt-16 pb-32 space-y-24">
            <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                    <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                        <div>
                            <div className="mt-6 ">
                                <h2 className="text-3xl font-bold tracking-tight text-primary/80">
                                    Fondée en 2019, DATA FC est spécialisée dans :
                                </h2>
                                <div className=" w-full my-4">
                                    <ul>
                                        {liste.map((el, index) => {
                                            return <ListItem key={index} text={el} />
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <div className="pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                            <img alt='' className="w-full  rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute  lg:left-0 lg:h-full lg:w-auto lg:max-w-none" style={styles} src={"/images/H5.jpg"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                    <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                        <div>
                            <div className="mt-6">
                                <h2 className="text-3xl font-bold   text-primary/80">
                                    DATA FC dispose des outils particulièrement utiles et d’un processus de gestion efficace pour :
                                </h2>
                                <div className='w-full my-4'>
                                    <ul>
                                        {liste2.map((el, index) => {
                                            return <ListItem key={index} text={el} />
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className=" pl-6  md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0" >
                            <img alt="Inbox user interface"
                                className="w-full  rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                style={styles} src={"/images/h15.jpg"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectionquisomsnous






const ListItem = ({ text }) => {
    return (
        <li  className=" text-gray-600 mb-4 flex text-base">
            <span className="bg-primary mr-2 mt-2 flex h-[10px] w-full max-w-[10px] items-center justify-center rounded-full text-base"></span>
            {text}
        </li>
    );
};
