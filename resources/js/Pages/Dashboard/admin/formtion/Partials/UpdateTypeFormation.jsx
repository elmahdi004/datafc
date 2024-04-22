import axios from 'axios'
import DialogModal from '@/Components/DialogModal';
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput'
import { router } from '@inertiajs/core';
import { Link, useForm } from '@inertiajs/react';
import classNames from 'classnames';
import React, { useRef, useState, useEffect } from 'react';
import useRoute from '@/Hooks/useRoute';
import ActionMessage from '@/Components/ActionMessage';
import FormSection from '@/Components/FormSection';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';

import useTypedPage from '@/Hooks/useTypedPage';
import { toast } from 'react-toastify';

export default function UpdateTypeFormation({ idC ,dataF}) {
    const form = useForm({
        _method: 'post',
        'imgFormation':null,
        ...dataF,
    });
    const [data, setData] = useState({})
    const photoRef = useRef(null);
    const route = useRoute();
    const [photoPreview, setPhotoPreview] = useState(null);
    function updateProfileInformation() {
        const toastP = toast.loading("S'il vous plaît, attendez...")

        form.post("/UPCatFormation/"+idC, {
            // errorBag: 'updateProfileInformation',
            preserveScroll: true,
            onSuccess:  (res) => {
                toast.update(toastP, {
                    render: "Puis avec succès",
                    type: toast.TYPE.SUCCESS,
                    isLoading: false,
                    autoClose: 5000,
                    closeOnClick: true,
                })
                clearPhotoFileInput()
               
                closeModal()
            },
        });

    }
    function selectNewPhoto() {
        photoRef.current?.click();
    }
    function updatePhotoPreview() {

        const photo = photoRef.current?.files?.[0];
        if (!photo) {
            return;
        }
        form.setData('imgFormation', photo);
        const reader = new FileReader();
        reader.onload = e => {
            setPhotoPreview(e.target?.result);
        };
        reader.readAsDataURL(photo);

    }

    function deletePhoto() {
        setPhotoPreview(null);
        form.setData('imgFormation', null);
        clearPhotoFileInput();
    }

    function clearPhotoFileInput() {

        if (photoRef.current?.value) {
            photoRef.current.value = '';
            form.setData('imgFormation', null);
        }
    }

    const [showaddinterface, setShowaddinterface] = useState(false);



    function getData() {
        axios.get(`/FormationCategorieShow/${idC}`).then(res => {
            setData(res.data)
            form.setData(res.data);

       
        })
    }

     function add_interface() {
        setShowaddinterface(true);
        // getData()
    }
    function closeModal() {
        setShowaddinterface(false);
        //setForm({})
        //setErrors({})
    }

    async function addFunction() {
        ///post
        updateProfileInformation()

    }

    return (
        <>
            <div
                onClick={add_interface}
                className="text-white absolute right-28 bg-primary hover:bg-primary/70 focus:ring-4 focus:ring-cyan-200 me-4 font-medium rounded text-sm inline-flex items-center px-3 py-2 text-center"
            ><i className="fas fa-pen-square"></i></div>
            <DialogModal isOpen={showaddinterface} onClose={closeModal}>

                <DialogModal.Content title={'Créer une nouvelle'}>
                    <div className="flex flex-wrap " >
                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                                <InputLabel value="Code de référence" htmlFor="CodeFormation" />
                                <TextInput type="text" name="CodeFormation" id="CodeFormation" value={form.data?.CodeFormation} onChange={e => form.setData('CodeFormation', e.currentTarget.value)} className="w-full" />
                            </div>
                        </div>
                        <div className="w-full lg:w-8/12 px-4">
                            <div className="relative w-full mb-3">
                                <InputLabel value="Titre" htmlFor="Titre">

                                </InputLabel>
                                <TextInput type="text" name="Titre" id="Titre" value={form.data.Titre} onChange={e => form.setData('Titre', e.currentTarget.value)} className="w-full" />
                            </div>
                        </div>
                        <div className="w-full  px-4">
                            <div className="relative w-full mb-3">
                                <div className="col-span-6 sm:col-span-4">
                                    {/* <!-- Profile Photo File Input --> */}
                                    <input
                                        //value={form.photo}
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
                                            {form.data.imgFormation ?
                                                <>
                                                    <button onClick={deletePhoto} type="button" className="text-white absolute right-2 top-2  bg-red-600 opacity-50  hover:opacity-100 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="default-modal">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                    </button>
                                                    <img src={"/storage/"+form.data.imgFormation} className="h-full w-full object-cover object-center " />
                                                </>
                                                : <div className="h-36 w-full flex items-center justify-center select-none bg-gray-300 " >
                                                    <SecondaryButton className="mt-2 mr-2" type="button" onClick={selectNewPhoto}>
                                                        Sélectionnez une nouvelle photo
                                                    </SecondaryButton>
                                                </div>}
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
                       mise à jour
                    </PrimaryButton>
                </DialogModal.Footer>
            </DialogModal>
        </>

    )
}
