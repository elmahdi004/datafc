import React from 'react'
import ClientLayout from '@/Layouts/ClientLayout'

import ClientTable from './ClientTable'

function PagesClient() {
  return (
    <div>
        <ClientLayout title={"Mes Demandess"}>
            <div className='mt-32 container mx-auto' >
                <ClientTable/>
            </div>
        </ClientLayout>
    </div>
  )
}

export default PagesClient
