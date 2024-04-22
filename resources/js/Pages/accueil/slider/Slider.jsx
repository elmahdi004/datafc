import { Link } from "@inertiajs/react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Slider = () => {
  return (
    <div className="">
      <div className="flex  h-48 bg-primary/10 items-center justify-center">
        <span className="font-semibold uppercase text-4xl  text-primary">
          Nos Formations
        </span>
      </div>
      <HorizontalScrollCarousel />

    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-80%"]);

  return (
    <section className="relative ">
      <div ref={targetRef} className=" h-[200vh]  bg-hero-pattern bg-no-repeat bg-auto " >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 mx-auto">
          {cards.map((card,i) => {
            return <Card card={card} key={i} />;
          })}
        </motion.div>
      </div>
      </div>

    </section>
  );
};

const Card = ({ card }) => {
  return (
   
    <div  key={card.id} className="relative  flex w-96 flex-col rounded-xl bg-white/50 bg-clip-border text-primary/80 shadow-md">
  <div className="relative  mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img
      src={`${card.url}`}
  className="w-full h-full"
      alt="img-blur-shadow"
      layout="fill"
    />
  </div>
  <div className="p-6 ">
    <h5 className="mb-2 block  text-center font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {card.title}
    </h5>
    <p className="block pb-4 font-sans text-base font-light leading-relaxed text-inherit antialiased">
      {/* {card.text} */}
    </p>
  </div>
  <div className="p-6 pt-0">
    <Link href={card.link}
      className="absolute left-24 bottom-5 w-1/2 select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#0c4457] focus:opacity-[1.52] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      En savoir plus
    </Link>
  </div>
</div>
  );
};

export default Slider;



const cards = [
  {
    url: "/images/formation-adulte.jpg",
    title: "INGÉNIERIE DE FORMATION",
    text:"Les actions de formation continue n’ont de sens que si elles sont étroitement intégrées dans un processus visant l'atteinte des orientations stratégiques de l’entreprise (ou de l’organisation) .",
    link:"/ingenierie-de-formation"
  },
  {
    url: "/images/1_TL90rUtcYZX_6UuhQGl-Vw.jpg",
    title: "FORMATION",
    text:"Vous cherchez à développer vos compétences et améliorer la compétitivité de votre entreprise ? La formation est le moyen idéal pour y aboutir, elle constitue l’un des principaux leviers de management de votre capital humain",
    link:"/formation"
  },
  {
    url: "/images/conseil-assistance.jpg",
    title: "ASSISTANCE CONSEIL EN RECRUTEMENT",
    text:"Disposant des outils et des compétences nécessaires, DATA FC vous apporte conseil et soutien lors de votre processus de recrutement pour vous aider dans le cadre de votre stratégie de développement, à optimiser la gestion de vos ressources humaines.",
    link:"/assistance-conseil-en-recrutement"
  },
  {
    url: "/images/domiciliation-entreprise.jpg",
    title: "DOMICIALIATION",
    text:"Disposant des outils et des compétences nécessaires, DATA FC vous apporte conseil et soutien lors de votre processus de recrutement pour vous aider dans le cadre de votre stratégie de développement, à optimiser la gestion de vos ressources humaines.",
    link:"/domiciliation"
  },
  {
    url: "/images/planifstrat.jpg",
    title: "ÉTUDE STRATEGIQUE",
    text:"Disposant des outils et des compétences nécessaires, DATA FC vous apporte conseil et soutien lors de votre processus de recrutement pour vous aider dans le cadre de votre stratégie de développement, à optimiser la gestion de vos ressources humaines.",
    link:"/etude_stratigique"
  },
];

