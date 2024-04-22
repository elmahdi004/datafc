import React from 'react'
import ClientLayout from '@/Layouts/ClientLayout'

import HeroIngenierieformation from '../Hero/HeroIngenierieformation'
import IngenierieFformation from './IngenierieFformation'

function Ingn() {
  return (
        <ClientLayout title={"INGÉNIERIE DE FORMATION"}>
          <HeroIngenierieformation/>
         <IngenierieFformation/>
        </ClientLayout>
  )
}

export default Ingn
