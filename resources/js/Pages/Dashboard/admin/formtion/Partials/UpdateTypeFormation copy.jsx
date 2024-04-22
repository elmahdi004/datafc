import axios from 'axios'
import DialogModal from '@/Components/DialogModal';


import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput'

import classNames from 'classnames';
import React, { useRef, useState, useEffect } from 'react';
import useRoute from '@/Hooks/useRoute';
import ActionMessage from '@/Components/ActionMessage';
import FormSection from '@/Components/FormSection';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';

import useTypedPage from '@/Hooks/useTypedPage';

export default function UpdateTypeFormation({formationCatId, setFormationcatId}) {
    const form = useForm({
        _method: 'update',
        CodeFormation: "DFC *",
        Titre: "",
        photo: null,
    });
    const [data, setData] = useState([])
    const photoRef = useRef(null);
    const route = useRoute();
    const [photoPreview, setPhotoPreview] = useState(null);
    function updateProfileInformation() {

        form.put("/newcCatFormation", {
           // errorBag: 'updateProfileInformation',
            preserveScroll: true,
            onSuccess: async () => {
                clearPhotoFileInput()
               await getData()
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
        form.setData('photo', photo);
        const reader = new FileReader();
        reader.onload = e => {
            setPhotoPreview(e.target?.result);
        };
        reader.readAsDataURL(photo);
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

    const [showaddinterface, setShowaddinterface] = useState(false);
    const [t_v, setT_v] = useState()



    async function getData() {
        await axios.get("/FormationCategorieShow/1").then(res => setData(res.data))
    }

    function add_interface() {
        setShowaddinterface(true);
        getData()
    }
    function closeModal() {
        setShowaddinterface(false);

    }
    const handleCreate = (inputValue) => {
        form.setData('Titre', inputValue)
        add_interface()

    };
    async function addFunction() {

        updateProfileInformation()

    }

    return (
        <div className="">

            <DialogModal isOpen={showaddinterface} onClose={closeModal}>

                <DialogModal.Content title={'Créer une nouvelle'}>
                    <div className="flex flex-wrap " >
                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                                <InputLabel value="Code de référence" htmlFor="CodeFormation" />
                                <TextInput type="text" name="CodeFormation" id="CodeFormation" value={data.CodeFormation} onChange={e => form.setData('CodeFormation', e.currentTarget.value)} className="w-full" />
                            </div>
                        </div>
                        <div className="w-full lg:w-8/12 px-4">
                            <div className="relative w-full mb-3">
                                <InputLabel value="Titre" htmlFor="Titre">

                                </InputLabel>
                                <TextInput type="text" name="Titre" id="Titre" value={data.Titre} onChange={e => form.setData('Titre', e.currentTarget.value)} className="w-full" />
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
            </DialogModal>
        </div>
    )
}
