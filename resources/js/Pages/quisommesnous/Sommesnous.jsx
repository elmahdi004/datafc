import {useEffect} from 'react'
import HeroQuiSomeNos from '../Hero/HeroQuiSomeNos'
import Sectionquisomsnous from './Sectionquisomsnous'
import ClientLayout from '@/Layouts/ClientLayout'


function Sommesnous() {

  return (
    <ClientLayout title={"Qui sommes nous ?"}>
        <section>
            <HeroQuiSomeNos/>
        </section>
        <section>
            <Sectionquisomsnous/>
        </section>
    </ClientLayout>
  )
}

export default Sommesnous
