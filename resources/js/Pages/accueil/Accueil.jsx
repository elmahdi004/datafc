
import FeatureCards from "./FeatureCards/FeatureCards";
import Hero from "../Hero";
/* import { Statistic } from "./Statistic/Statistic"; */
import NosClient from "./client/NosClient";
import Engagement from "./engagment/Engagement";
import Slider from "./slider/Slider";
import Desc from './desc/Desc';
import { Statistic } from './Statistic';
import SectionDirecteur from './sectionDirecteur/SectionDirecteur';
import ClientLayout from '@/Layouts/ClientLayout'

function Accueil() {

  return (
    <ClientLayout title={"Accueil"}>
      <Hero />
      <section  >
        <Slider />
      </section>
      <section>
        <SectionDirecteur/>
      </section>
      <section className='bg-white'>
        <Engagement />
      </section>
      <Statistic/>
      <section className='overflow-hidden '>

        <FeatureCards />
      </section>
         <section>
        <NosClient />
      </section>
      <Desc />
      </ClientLayout>
  );
}

export default Accueil;
