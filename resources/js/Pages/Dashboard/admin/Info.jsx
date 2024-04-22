import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '@/Layouts/AdminLayout';
import TextInput from '@/Components/TextInput'
import PrimaryButton from '@/Components/PrimaryButton';

import Clientlogo from './ComponantsDashboard/Clientlogo';
import { toast } from 'react-toastify';

function Info() {
    const [data, setData] = useState({})
    const [errors, setErrors] = useState({})

    function gethData() {
        axios.get("/settings").then(res => { setData(res.data) })

    }
   async function updateData() {
    const toastP = toast.loading("S'il vous plaît, attendez...")
       await axios.post("/settings",data).then(res => {
        toast.update(toastP, {
            render: "Puis avec succès",
            type: toast.TYPE.SUCCESS,
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true,
        })
        gethData()
    }).catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
            setErrors(response.data.errors)
            toast.update(toastP, {
                render: err?.response?.data?.message || "Il y a un problème",
                type: toast.TYPE.ERROR,
                isLoading: false,
                autoClose: 5000,
                closeOnClick: true,
            })
            setErrors(response.data.errors)
           
        } else {
            toast.update(toastP, {
                render: "Il y a un problème",
                type: toast.TYPE.ERROR,
                isLoading: false,
                autoClose: 5000,
                closeOnClick: true,
            });
        }
    })

    }
    function handleChange(e) {
        setData(re => ({ ...re, [e.target.name]: e.target.value }))
    }
    useEffect(() => gethData(), [])
    const monStyle = {
        border: '0',
        height: '450px',
        width: '100%',
      };
    return (
        <AdminLayout title={"info"}>

            <div className="flex justify-center items-center ">

                <div className="container mx-auto  lg:px-20">
                    <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-lg">
                        <div className="flex">
                            <h1 className="font-bold text-primary uppercase text-5xl">Information</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-4 mt-5">
                            <label className="block font-medium text-sm text-primary/80 dark:text-gray-300">Nom de Site</label>
                            <TextInput
                                className="w-full"
                                name="site_name"
                                value={data?.site_name||""}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Nom*"
                            />

                            <label className="block font-medium text-sm text-primary/80 dark:text-gray-300">E-mail</label>
                            <TextInput
                                className="w-full"
                                name="email"
                                value={data?.email||""}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Email*"
                            />

                            <label className="block font-medium text-sm text-primary/80 dark:text-gray-300">Tel</label>
                            <TextInput
                                className="w-full"
                                name="tel"
                                value={data?.tel||""}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Tel*"
                            />

                            <label className="block font-medium text-sm text-primary/80 dark:text-gray-300">Fix</label>
                            <TextInput
                                className="w-full"
                                name="fix"
                                value={data?.fix||""}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Fix*"
                            />



                            <label className="block font-medium text-sm text-primary/80 dark:text-gray-300">Adresse</label>
                            <TextInput
                                className="w-full"
                                name="adresse"
                                value={data?.adresse||""}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Adresse*"
                            />

                            <label className="block font-medium text-sm text-primary/80 dark:text-gray-300">Ville</label>
                            <TextInput
                                className="w-full"
                                name="ville"
                                value={data?.ville||""}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Ville*"
                            />
                            <label className="block font-medium text-sm text-primary/80 dark:text-gray-300">Lien linkedin</label>
                            <TextInput
                                className="w-full"
                                name="link_linkedin"
                                value={data?.link_linkedin||""}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Lien linkedin ..."
                            />
                            <label className="block font-medium text-sm text-primary/80 dark:text-gray-300">Lien Facebook</label>
                            <TextInput
                                className="w-full"
                                name="link_facebook"
                                value={data?.link_facebook||""}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Lien Facebook ..."
                            />
                            <label className="block font-medium text-sm text-primary/80 dark:text-gray-300">Lien instagram</label>
                            <TextInput
                                className="w-full"
                                name="link_instagram"
                                value={data?.link_instagram||""}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Lien Instagram ..."
                            />
                            <label className="block font-medium text-sm text-primary/80 dark:text-gray-300">Google map</label>
                            <TextInput
                                className="w-full"
                                name="google_map"
                                value={data?.google_map ||""}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Google Map*"
                            />



                        </div>
                        <div className="my-4">
                            <textarea
                                name="description"
                                value={data?.description}
                                onChange={(e) => handleChange(e)}
                                placeholder="description" className="w-full h-32 border-gray-300 dark:border-primary/80 dark:text-gray-300 focus:border-primary  focus:ring-primary rounded-md shadow-sm"></textarea>
                        </div>
                        <div className="my-2 w-1/2 lg:w-1/4">
                            <PrimaryButton onClick={()=>updateData()}>
                            Enregistrer
                            </PrimaryButton>
                        </div>
                    </div>
                    <div
                        className="w-full lg:-mt-96 lg:w-2/6  ml-auto  rounded-2xl overflow-hidden shadow-md">
                         <iframe style={monStyle} src={data.google_map} width="600" height="450" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </div>
            </div>
<Clientlogo/>
        </AdminLayout>
    )
}

export default Info



