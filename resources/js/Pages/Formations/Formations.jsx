import React from 'react'
import CardFormation from './CardFormation'
import ClientLayout from '@/Layouts/ClientLayout'


function Formations() {
  return (
    <div >
      <ClientLayout title={"Formations Interentreprises"}>
      <div className='mt-20 container mx-auto '>
        <CardFormation />
      </div>
      </ClientLayout>
    </div>
  )
}

export default Formations
