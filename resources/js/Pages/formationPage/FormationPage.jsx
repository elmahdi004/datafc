import React from 'react'
import ClientLayout from '@/Layouts/ClientLayout'

import HeroFormation from '../Hero/HeroFormation'
import ContentFormation from './ContentFormation'
function FormationPage() {
  return (
    <>
        <ClientLayout title={"Formation"}>
            <HeroFormation/>
            <ContentFormation/>
        </ClientLayout>
    </>
  )
}

export default FormationPage
