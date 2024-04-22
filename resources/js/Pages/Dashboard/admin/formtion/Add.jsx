import React, { useState } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput'
import AddTypeFormation from './Partials/AddTypeFormation';
import PrimaryButton from '@/Components/PrimaryButton';
import axios from 'axios';
import { toast } from 'react-toastify';


function Add() {
    const [dataFormation, setFormation] = useState({});
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState({})
    const [formationCatId, setFormationcatId] = useState(null);
    //formation_categories_id
    function handleChange(e) {
        setFormation(re => ({ ...re, [e.target.name]: e.target.value }))
    }
    async function addNewFormation() {
        const toastP = toast.loading("S'il vous plaît, attendez...")
        await axios.post("/newcFormation", { ...dataFormation, formationCatId, programme_formations: data }).then(res => {
            toast.update(toastP, {
                render: "Puis avec succès",
                type: toast.TYPE.SUCCESS,
                isLoading: false,
                autoClose: 5000,
                closeOnClick: true,
            })
            window.location.href = '/admin/Formtion'
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
    function Addprog() {
        const [input, setInput] = useState('');
        const [idUPDAT, setIdUPDAT] = useState(undefined);
        const [soupro, setSoupro] = useState('');
        function addLine() {
            if (idUPDAT !== undefined) {
                setData((current) => {
                    const updatedData = [...current];
                    updatedData[idUPDAT] = { Titre: input, sous_programmes: soupro.split(/\r?\n/).filter((el) => el.length) };
                    return updatedData;
                });
            } else {
                setData((current) => [...current, { Titre: input, sous_programmes: soupro.split(/\r?\n/).filter((el) => el.length) }]);
            }
            setInput('');
            setSoupro('');
            setIdUPDAT(undefined);
        }
        function editLine(index) {
            setIdUPDAT(index);
            const selectedItem = data[index];
            setInput(selectedItem.Titre);
            setSoupro(selectedItem.sous_programmes.join("\r\n"));
        }
        function delLine(index) {
            setData((current) => {
                const updatedData = [...current];
                updatedData.splice(index, 1);
                return updatedData;
            });
        }
        return (
            <div className='p-4 '>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Programme</label>
                <div className="relative flex h-10 w-full">
                    <input
                        onChange={(e) => setInput(e.target?.value)}
                        type="text"
                        value={input || ""}
                        className=" h-full w-full rounded-[7px] border border-primary bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-primary/80 outline outline-0 transition-all  focus:border-1 focus:border-primary active:border-primary  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <div
                        onClick={(e) => addLine()}
                        className="!absolute right-1 top-1 z-10 select-none rounded bg-primary py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    >
                        {idUPDAT !== undefined ? "Edit" : "Add"}
                    </div>
                </div>
                <textarea
                    placeholder={`Utilisez la touche Entrée pour séparer les éléments \nExample 1\nExample 2`}
                    rows="4"
                    onChange={(e) => setSoupro(e.target?.value)}
                    value={soupro}
                    className="block p-2.5 my-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
                <ul>
                    {data?.map((item, index) => (
                        <li key={index} className="text-body-color ms-2 my-2 text-sm">
                            <span className="flex">
                                <span className="text-primary mr-2 rounded-full text-base">
                                    <svg width={20} height={20} viewBox="0 0 20 20" className="fill-current">
                                        <path
                                            d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"
                                        />
                                        <path
                                            d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875"
                                        />
                                    </svg>
                                </span>
                                {item.Titre}
                                <div className="ms-auto mr-2 flex gap-2">
                                    <div
                                        className="select-none rounded bg-primary py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                        onClick={() => editLine(index)}>
                                        Edit
                                    </div>
                                    <div
                                        className="select-none rounded bg-red-600 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                        onClick={() => delLine(index)}>
                                        Del
                                    </div>
                                </div>
                            </span>
                            <ul className="ps-5">
                                {item?.sous_programmes?.map((line, x) => (
                                    <li key={x} className="text-body-color mb-1 flex text-base">
                                        <span className="text-primary mr-2 flex items-center rounded-full text-base">
                                            <svg width="20" height="8" viewBox="0 0 20 8" className="fill-current">
                                                <path
                                                    d="M19.2188 2.90626L17.0625 0.343758C16.875 0.125008 16.5312 0.0937583 16.2812 0.281258C16.0625 0.468758 16.0312 0.812508 16.2188 1.06251L18.25 3.46876H0.9375C0.625 3.46876 0.375 3.71876 0.375 4.03126C0.375 4.34376 0.625 4.59376 0.9375 4.59376H18.25L16.2188 7.00001C16.0312 7.21876 16.0625 7.56251 16.2812 7.78126C16.375 7.87501 16.5 7.90626 16.625 7.90626C16.7812 7.90626 16.9375 7.84376 17.0312 7.71876L19.1875 5.15626C19.75 4.46876 19.75 3.53126 19.2188 2.90626Z"
                                                ></path>
                                            </svg>
                                        </span>
                                        {line}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    return (
        <AdminLayout title={"Ajouter une Formation"}>
            <div className='container mx-auto'>
                <div className="w-full p-4 ">
                    <AddTypeFormation formationCatId={formationCatId} setFormationcatId={setFormationcatId} />
                </div>
                <hr />
                <div className="flex flex-wrap ">
                    <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                            <InputLabel  value="Code"/>
                            <TextInput type="text" name="Code"
                                value={dataFormation?.Code || ""}
                                onChange={(e) => handleChange(e)}
                                className={`w-full ${errors?.Code?'border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500':''}`}
                                 />
                            <InputError message={errors.Code} className="mt-2"/>
                        </div>
                    </div>
                    <div className="w-full lg:w-9/12 px-4">
                        <div className="relative w-full mb-3">

                            <InputLabel  value="Titre"/>
                            <TextInput type="text" name="Titre"
                                value={dataFormation?.Titre || ""}
                                onChange={(e) => handleChange(e)}
                                className={`w-full ${errors?.Titre?'border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500':''}`}
                                />
                                <InputError message={errors.Titre} className="mt-2"/>

                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap ">
                    <div className="w-full lg:w-9/12 px-4">
                        <div className="relative w-full mb-3">
                        <InputLabel  value="Population Cible"/>
                            <TextInput type="text" name="Population_cible"
                                value={dataFormation?.Population_cible || ""}
                                onChange={(e) => handleChange(e)}
                                className={`w-full ${errors?.Population_cible?'border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500':''}`}/>
                              <InputError message={errors.Population_cible} className="mt-2"/>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                            <InputLabel  value="Durée"/>
                            <TextInput type="text" name="Duree"
                                value={dataFormation?.Duree || ""}
                                onChange={(e) => handleChange(e)}
                                className={`w-full ${errors?.Duree?'border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500':''}`}/>
                            <InputError message={errors.Duree} className="mt-2"/>

                        </div>
                    </div>
                </div>
                {/*  End population and durée */}
                {/* textarea for Objectif */}
                <div className='px-4 py-6' >
                    <InputLabel  value="Objectifs"/>
                    <textarea name='Objectifs'
                        value={dataFormation?.Objectifs || ""}
                        onChange={(e) => handleChange(e)}
                        rows="4" className={`block p-2.5 w-full text-sm text-gray-900  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-primary/80 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors?.Objectifs?'border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500':''}`} placeholder="Write your thoughts here..."></textarea>
                <InputError message={errors.Objectifs} className="mt-2"/>
                </div>
                {/* End textarea for Objectif */}
                <div>
                    <hr />

                    <Addprog />

                </div>
                <PrimaryButton onClick={addNewFormation}> ajouter</PrimaryButton>
            </div>
        </AdminLayout>
    )
}

export default Add
