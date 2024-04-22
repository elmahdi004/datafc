
import { Link, useForm } from '@inertiajs/react';
import DialogModal from '@/Components/DialogModal';
import React, { useRef, useState, useEffect } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import axios from 'axios'
import { toast } from 'react-toastify';


export default function Clientlogo() {


    const [listClient, setListClient] = useState([]);
    const [showaddinterface, setShowaddinterface] = useState(false);
    const [errors, setErrors] = useState({})

    function add_interface() {
        setShowaddinterface(true);
    }
    function closeModal() {
        setShowaddinterface(false);
    }
    async function getData() {
        await axios.get("/Api/Noslient").then(res => setListClient(res.data))
    }
    useEffect(() => {
        getData()
    }, [])
    async function deleteClient(id) {

        const toastP = toast.loading("S'il vous plaît, attendez...")
        await axios.delete("/Api/Noslient/" + id).then(res => {
            toast.update(toastP, {
                render: "Puis avec succès",
                type: toast.TYPE.SUCCESS,
                isLoading: false,
                autoClose: 5000,
                closeOnClick: true,
            })
            getData()
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
    const SingleImage = ({ href, imgSrc, Alt, id }) => {
        return (
            <div
                href={href}
                className="mx-4 relative select-none bg-gray-100 flex border-transparent shadow-md border-2 hover:border-primary h-32 p-2 items-center justify-center   ease-in-out delay-150 duration-700 transition-opacity	 opacity-70  hover:opacity-100 overflow-hidden rounded-lg"
            >
                <button
                    onClick={e => deleteClient(id)}
                    type="button" className="text-white absolute right-2 top-2  bg-red-600 opacity-50  hover:opacity-100 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <img src={imgSrc} alt={Alt} className="h-full " />
            </div>
        );
    };
    function ButtonAdd() {
        const photoRef = useRef(null);
        const [photoPreview, setPhotoPreview] = useState(null);
        const form = useForm({
            _method: 'POST',
            href: "Client.ma",
            Alt: "Client int",
            photo: null,
            isActive: true,
        });

        function addFunction() {
            const toastP = toast.loading("S'il vous plaît, attendez...")
            form.post("/Api/Noslient", {

                preserveScroll: true,
                onSuccess: async () => {
                    clearPhotoFileInput()
                    getData()
                    closeModal()
                    toast.update(toastP, {
                        render: "Puis avec succès",
                        type: toast.TYPE.SUCCESS,
                        isLoading: false,
                        autoClose: 5000,
                        closeOnClick: true,
                    })
                },
                onError: errors => {
                    toast.update(toastP, {
                        render: "Il y a un problème",
                        type: toast.TYPE.ERROR,
                        isLoading: false,
                        autoClose: 5000,
                        closeOnClick: true,
                    });
                },
                onFinish: visit => {}
            });
        }
        function updatePhotoPreview() {

            const photo = photoRef.current?.files?.[0];
            if (!photo) {
                return;
            }
            form.setData('photo', photo);
            const reader = new FileReader();
            reader.onload = e => {
                setPhotoPreview(e.target?.result);
            };
            reader.readAsDataURL(photo);

        }
        function selectNewPhoto() {
            photoRef.current?.click();
        }
        function deletePhoto() {
            setPhotoPreview(null);
            clearPhotoFileInput();
        }

        function clearPhotoFileInput() {

            if (photoRef.current?.value) {
                photoRef.current.value = '';
                form.setData('photo', null);
            }
        }

        return (<><div onClick={(e) => { add_interface() }} className="mx-4 flex border-gray-300 text-gray-300 hover:text-primary shadow-md border-2 hover:border-primary h-32 p-2 items-center justify-center   overflow-hidden rounded-lg">
            <i className="fa-solid fa-plus text-2xl"></i>
        </div>
            <DialogModal isOpen={showaddinterface} onClose={closeModal}>

                <DialogModal.Content title={'Créer une nouvelle'}>
                    <div className="flex flex-wrap " >
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                                <InputLabel value="Nom clinet" htmlFor="Alt" />
                                <TextInput type="text" name="Alt" id="CodeFormation" value={form.data.Alt} onChange={e => form.setData('Alt', e.currentTarget.value)} className="w-full" />
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                                <InputLabel value="line" htmlFor="href">

                                </InputLabel>
                                <TextInput type="text" name="href" id="href" value={form.data.href} onChange={e => form.setData('href', e.currentTarget.value)} className="w-full" />
                            </div>
                        </div>
                        <div className="w-full  px-4">
                            <div className="relative w-full mb-3">
                                <div className="col-span-6 sm:col-span-4">

                                    <input

                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        ref={photoRef}

                                        onChange={updatePhotoPreview}
                                    />

                                    <InputLabel htmlFor="photo" value="Photo" />
                                    <div className="text-center relative rounded-md shadow overflow-hidden w-36 sm:w-96 mx-auto">
                                        {photoPreview ? (
                                            <>
                                                <button onClick={deletePhoto} type="button" className="text-white absolute right-2 top-2  bg-red-600 opacity-50  hover:opacity-100 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="default-modal">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                </button>
                                                <img src={photoPreview} className="h-full w-full object-cover object-center " />
                                            </>) : <>
                                            <div className="h-36 w-full flex items-center justify-center select-none bg-gray-300 " >
                                                <SecondaryButton className="mt-2 mr-2" type="button" onClick={selectNewPhoto}>
                                                    Sélectionnez une nouvelle photo
                                                </SecondaryButton>
                                            </div>
                                        </>}
                                    </div>




                                    <InputError message={form.errors.photo} className="mt-2" />
                                </div>

                            </div>
                        </div>
                    </div>
                </DialogModal.Content>
                <DialogModal.Footer>
                    <SecondaryButton
                        className="m-1"
                        onClick={closeModal}
                    >
                        Annuler
                    </SecondaryButton>
                    <PrimaryButton
                        className="m-1"
                        onClick={addFunction}
                    >
                        ajouter
                    </PrimaryButton>
                </DialogModal.Footer>
            </DialogModal></>
        )

    }
    return <div className="container lg:px-20 mt-5">
        <div className="mx-auto bg-white rounded-2xl shadow-lg p-20 w-full">
            <div className="flex mb-4">
                <h1 className="font-bold text-primary uppercase text-5xl">Nos Client</h1>
            </div>
            <div className="w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {listClient?.map((c, i) => <SingleImage key={i}
                        id={c.id}
                        href={c.href}
                        Alt={c.Alt}
                        imgSrc={`/storage/${c.imgSrc}`}
                    />)}
                    <ButtonAdd></ButtonAdd>

                </div>
            </div>
        </div>
    </div>
}
