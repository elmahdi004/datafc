import AdminLayout from '@/Layouts/AdminLayout'
import axios from 'axios'
import { useState,useEffect } from 'react'
import TableDashboard from './ComponantsDashboard/TableDashboard'
import TableDashboardFormation from './ComponantsDashboard/TableDashboardFormation'
import { Link } from '@inertiajs/react'

const Card = ({ title = '', nbr = 0 ,icon="",href="/admin"}) => {
  return (<Link href={href} className="flex items-center relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-lg text-white" >
      <i className={icon} />
    </div>

    <div className="ml-3">
      <p className="font-medium text-primary">{title}</p>
      <p className="text-sm text-gray-600">{nbr}</p>
    </div>
  </Link>)
}

function index() {
  const [data,setData]=useState({});
   const getData =()=>{
    axios.get("/Api/statistic").then(res =>setData( res.data))
   }
  useEffect(()=>{
    getData()
  },[])
  let datast = [
    { title: "Demandes", nbr: data?.Demandes||0, icon: "fa-solid fa-hand" ,href:"/admin/Demande" },
    { title: "Formtions", nbr: data?.Formtions||0, icon: "fa-solid fa-graduation-cap",href:"/admin/Formtion" },
    { title: "Utilisateurs", nbr: data?.Utilisateurs||0, icon: "fa-solid fa-users" ,href:"/admin/users"},
    { title: "Messages", nbr: data?.Messages||0, icon: "fa-regular fa-envelope",href:"/admin/message" },
  ]
  return (
<AdminLayout title={"Dashboard"}>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">
      {datast.map((item,i) => <Card key={i} {...item} />)}
    </div>
    <div className='bg-white mt-10'>
      <TableDashboard/>
    </div>
    <div className='bg-white mt-10'>
      <TableDashboardFormation/>
    </div>
</AdminLayout>
  )
}

export default index
