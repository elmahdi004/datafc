import React from 'react'
import ClientLayout from '@/Layouts/ClientLayout'

import HeroAssistancconseil from '../Hero/HeroAssistancconseil'
import ContentAssistance from './ContentAssistance'

function Assistancconseil() {
  return (

      <ClientLayout title={"Assistance Conseil"}>
      <HeroAssistancconseil />
      <ContentAssistance />
    </ClientLayout>
  )
}
export default Assistancconseil
