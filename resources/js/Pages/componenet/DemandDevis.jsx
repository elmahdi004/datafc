import { useEffect, useState } from "react";
import DialogModal from "../../Components/DialogModal";
import { Tab } from '@headlessui/react'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import axios from "axios";
import { toast } from 'react-toastify';
import { Link } from '@inertiajs/react';

import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';

export default function DemandDevis({ formationId, Code, Titre, }) {
    const route = useRoute();
    const page = useTypedPage();

    const [act, setAct] = useState(false)

    const Types = ["physique", "morale"];
    const [errors, setErrors] = useState({})

    const [action, setaction] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const typeD = Types[selectedIndex];
    const [email, setEmail] = useState(page?.props?.auth?.user?.email||"");
    const [tel, setTel] = useState(page?.props?.auth?.user?.tel||"");
    const [adresse, setAdresse] = useState("");
    const [nbr, setNbr] = useState(1);
    const [entreprise, setEntreprise] = useState("");
    const [raisons, setRaisons] = useState("");
    const [resplonsable, setResplonsable] = useState(page?.props?.auth?.user?.name||"");
    const [telres, settelres] = useState("");
    const [prenompm, setPrenompm] = useState("");
    const [nompm, setNompm] = useState(page?.props?.auth?.user?.name||"");
    const [typeOrgpm, setTypeOrgpm] = useState(0);
    const [nomOrgpm, setNomOrgpm] = useState("");

    ///
    function intState() {
        setEmail("")
        setTel("")
        setAdresse("")
        setNbr(1)
        setEntreprise("")
        setRaisons("")
        setResplonsable("")
        setPrenompm("")
        setNompm("")
        setTypeOrgpm(0)
        setNomOrgpm("")
    }
    const demandeF =
    {
        "typeD": "morale",
        "formation_id": formationId,
        "email": email,
        "tel": tel,
        "adresse": adresse,
        "nbrpers": nbr,

        "entreprise": entreprise,
        "raisons": raisons,
        "resplonsable": resplonsable,
        "telres": telres
    };
    const demandeM =
    {
        "typeD": "physique",
        "formation_id": formationId,
        "email": email,
        "tel": tel,
        "adresse": adresse,
        "nbrpers": nbr,

        "prenompm": prenompm,
        "nompm": nompm,
        "typeOrgpm": typeOrgpm,
        "nomOrgpm": nomOrgpm
    };


    const Modalaut = () => {
        const [action, setaction] = useState(false);

        function closeModal() {
            setaction(false);
            setAct(false)
        }
        useEffect(()=>{
            if(act){
                setaction(true);
            }
        },[act])
        return (
            <div>
                <DialogModal isOpen={action} onClose={closeModal} maxWidth={'sm'}>
                    <DialogModal.Content >

                    </DialogModal.Content>

                    <div className="p-4">
                        Merci de vous connecter ou de créer un compte pour une réponse efficace à vos demandes.
                    </div>

                    <DialogModal.Footer>
                        {!page.props.auth.user ? <div className="flex items-center grid-rows-2 gap-10 justify-end w-full">
                            <Link href={route('login')} className=" flex items-center justify-center w-full">
                                <PrimaryButton className="w-full flex items-center justify-center" >Connecter</PrimaryButton>
                            </Link>
                            <Link href={route('register')} className=" flex items-center justify-center w-full">
                                <SecondaryButton className="w-full flex items-center justify-center">S'inscrire</SecondaryButton>
                            </Link>
                        </div > : ""}
                    </DialogModal.Footer>
                </DialogModal>
            </div>

        )
    }

    ///
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    function closeModal() {
        setaction(false);
        intState()
        setErrors({})
    }
    async function payload_f() {
        const toastP = toast.loading("S'il vous plaît, attendez...")
        await axios.post("/Demandenew", typeD == "physique" ? demandeM : demandeF)

            .then(res => {
                toast.update(toastP, {
                    render: "Puis avec succès",
                    type: toast.TYPE.SUCCESS,
                    isLoading: false,
                    autoClose: 5000,
                    closeOnClick: true,
                })
                closeModal();
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

    };

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const telRegex = /^(\+212|00212|0)([ \-_/]*)(\d[ \-_/]*){9}([ \-_/]*)$/;

    function Custom_input_number() {


        return (<div className="flex flex-row  h-10 w-24 rounded-lg  relative overflow-hidden shadow-sm">
            <button type="button"
                disabled={nbr <= 1}
                onClick={(e) => {
                    if (nbr >= 2) {
                        setNbr(nbr - 1)
                    }

                }} className="font-semibold rounded  bg-primary/90 hover:bg-primary text-white border-primary h-full w-20 flex  focus:outline-none cursor-pointer disabled:opacity-50">
                <span className="m-auto">-</span>
            </button>
            <input
                type="hidden"
                value={nbr}
                className="md:p-2 p-1 text-xs md:text-base  focus:outline-none text-center"
                readOnly
                name="custom-input-number"
            />
            <div
                className="bg-white w-20 text-xs md:text-base flex items-center justify-center cursor-default"
            >
                <span>{nbr}</span>
            </div>

            <button type="button"

                onClick={(e) => {
                    setNbr(nbr + 1)

                }}
                className="font-semibold  rounded bg-primary/90 hover:bg-primary text-white border-primary h-full w-20 flex  focus:outline-none cursor-pointer disabled:opacity-50"
            >
                <span className="m-auto">+</span>
            </button>
        </div>)
    }
    return (
        <>
            <button
                type="button"
                onClick={(e) => {
                    page.props.auth.user?setaction(true):setAct(true)
                }}
                className="border border-primary max-sm:p-2 max-sm:text-sm shadow bg-primary/80 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-primary focus:outline-none focus:shadow-outline"
            >
                DEMANDE DE DEVIS
            </button>
            <DialogModal isOpen={action} onClose={closeModal} maxWidth={'6xl'}>
                <DialogModal.Content title={"Demande de devis"}>
                    <div className="rounded-t bg-white mb-0   ">
                        <div className="grid grid-cols-2">
                            <div >
                                <h4 className=" font-bold text-xl text-primary p-2 ">Code de formation : </h4>
                            </div>
                            <div>
                                <p className="font-semibold  text-xl text-black p-2">{Code}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className=" font-bold text-xl text-primary p-2 ">
                                <h4>Théme de formation :</h4>
                            </div>
                            <div>
                                <p className="font-semibold  text-xl text-black p-2">{Titre}</p>

                            </div>
                        </div>
                    </div>
                    <hr className="w-5/6 mx-auto my-3" />
                    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                        <Tab.List className="flex space-x-2 bg-gray-100   p-4">
                            <Tab className={({ selected }) =>

                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 ',
                                    'shadow ring-primary ring-opacity-60 ring-offset-2 ring-offset-primary/50 focus:outline-none ',
                                    selected
                                        ? 'bg-primary/95 shadow text-white'
                                        : 'text-primary bg-white hover:bg-primary/50 hover:text-white'
                                )
                            }>Personne Physique</Tab>
                            <Tab className={({ selected }) =>


                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                    'shadow ring-primary ring-opacity-60 ring-offset-2 ring-offset-primary/50 focus:outline-none ',
                                    selected
                                        ? 'bg-primary/95 shadow text-white'
                                        : 'text-primary bg-white hover:bg-primary/20 hover:text-white'
                                )
                            }> Personne Morale</Tab>

                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className="flex-auto py-10 pt-0">
                                    <form className="mt-4" onSubmit={(e) => e.preventDefault()}>

                                        <div className="flex flex-wrap ">
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <InputLabel>
                                                        Nom
                                                    </InputLabel>
                                                    <TextInput onChange={(e) => setNompm(e?.target.value)}
                                                        value={nompm || ''} type="text" name="nom"
                                                        className={`w-full ${errors?.nompm ? 'border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500' : ''}`} />
                                                    <InputError message={errors?.nompm} className="mt-2" />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <InputLabel>
                                                        Prenom
                                                    </InputLabel>
                                                    <TextInput onChange={(e) => setPrenompm(e?.target.value)} value={prenompm || ''} type="text" name="Prenom"
                                                        className={`w-full ${errors?.prenompm ? 'border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500' : ''}`} />
                                                    <InputError message={errors?.prenompm} className="mt-2" />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <InputLabel>
                                                        Email
                                                    </InputLabel>
                                                    <TextInput onChange={(e) => setEmail(e?.target.value)} value={email || ''} type="email" name="email"
                                                        className={` w-full ${email || errors?.email ? !emailRegex.test(email) || errors.email ? "border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500" : "" : ""}
                                                    `} />
                                                    <InputError message={errors?.email} className="mt-2" />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <InputLabel>
                                                        Téléphone
                                                    </InputLabel>
                                                    <TextInput onChange={(e) => setTel(e?.target.value.replace(/[^0-9\^+-\.]/g, ''))} value={tel || ''} type="tel" name="tel"
                                                        className={`w-full ${tel || errors?.tel ? !telRegex.test(tel) || errors?.tel ? "border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500" : "" : ""}`} />
                                                    <InputError message={errors?.tel} className="mt-2" />

                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-12/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <InputLabel>
                                                        Addresse
                                                    </InputLabel>
                                                    <TextInput type="text" onChange={(e) => setAdresse(e?.target.value)} value={adresse || ''} name="adresse" className={`w-full ${errors?.adresse ? 'border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500' : ''}`} />
                                                    <InputError message={errors?.adresse} className="mt-2" />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <InputLabel>
                                                        Pour quel type d'organisme travaillez-vous?
                                                    </InputLabel>
                                                    <select defaultValue={typeOrgpm} onChange={(e) => setTypeOrgpm(e?.target.value)} className=" text-black  border-primar focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-2 px-5 font-medium outline-none transition" >
                                                        {["Entreprise privée", "Administration publique", "Association", "Fondation"].map((item, i) => <option key={i} value={i}>{item}</option>)}
                                                    </select>

                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <InputLabel>
                                                        Nom d'organisme
                                                    </InputLabel>
                                                    <TextInput type="text" onChange={(e) => setNomOrgpm(e?.target.value)} value={nomOrgpm || ''} className={`w-full ${errors?.nomOrgpm ? 'border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500' : ''}`} />
                                                    <InputError message={errors?.nomOrgpm} className="mt-2" />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4 pt-4">
                                                <div className="relative  w-full mb-3">
                                                    <p className="flex items-center justify-center mt-4 capitalize  text-blueGray-600 text-xs font-bold " >
                                                        Nombre De Participants À Former :
                                                    </p>

                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4 pt-4">
                                                <div className="relative flex justify-center items-center w-full mb-3">
                                                    <Custom_input_number />
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>

                            </Tab.Panel>



                            <Tab.Panel> <div className="flex-auto py-10 pt-0">
                                <form className="mt-4">

                                    <div className="flex flex-wrap ">
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <InputLabel>
                                                    Entreprise
                                                </InputLabel>
                                                <TextInput onChange={(e) => setEntreprise(e?.target.value)} value={entreprise || ''} type="text" name="entreprise" className={`w-full ${errors.entreprise ? 'border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500' : ''}`} />
                                                <InputError message={errors.entreprise} className="mt-2" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <InputLabel>
                                                    Raison sociale
                                                </InputLabel>
                                                <TextInput onChange={(e) => setRaisons(e?.target.value)} value={raisons || ''} type="text" name="sociale" className={`w-full ${errors?.raisons ? 'border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500' : ''}`} />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <InputLabel>
                                                    Email
                                                </InputLabel>
                                                <TextInput onChange={(e) => setEmail(e?.target.value)} value={email || ''} type="email" name="email"
                                                    className={` w-full ${email || errors?.email ? !emailRegex.test(email) || errors.email ? "border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500" : "" : ""}
                                                    `} />
                                                <InputError message={errors?.email} className="mt-2" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <InputLabel>
                                                    Téléphone
                                                </InputLabel>
                                                <TextInput onChange={(e) => setTel(e?.target.value.replace(/[^0-9\^+-\.]/g, ''))} value={tel || ''} type="tel" name="tel"
                                                    className={`w-full ${tel || errors?.tel ? !telRegex.test(tel) || errors?.tel ? "border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500" : "" : ""}`} /> <InputError message={errors?.tel} className="mt-2" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <InputLabel>
                                                    Addresse
                                                </InputLabel>
                                                <TextInput type="text" onChange={(e) => setAdresse(e?.target.value)} value={adresse || ''} name="adresse" className={`w-full ${errors?.adresse ? 'border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500' : ''}`} />
                                                <InputError message={errors?.adresse} className="mt-2" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <InputLabel>
                                                    Responsable ou Inerlocuteur
                                                </InputLabel>
                                                <TextInput onChange={(e) => setResplonsable(e?.target.value)} value={resplonsable || ''} type="text" className={`w-full ${errors?.resplonsable ? 'border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500' : ''}`} />
                                                <InputError message={errors?.resplonsable} className="mt-2" />


                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <InputLabel>
                                                    Téléphone
                                                </InputLabel>
                                                <TextInput onChange={(e) => settelres(e?.target.value.replace(/[^0-9\^+-\.]/g, ''))} value={telres || ''} type="tel" name="telres"
                                                    className={`w-full ${telres || errors.telres ? !telRegex.test(telres) || errors.telres ? "border-red-500 text-red-900 placeholder-red-700  focus:ring-red-500  focus:border-red-500" : "" : ""}`} />
                                                <InputError message={errors.telres} className="mt-2" />


                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4 pt-4">
                                            <div className="relative  w-full mb-3">
                                                <p className="flex items-center justify-center mt-4 capitalize  text-blueGray-600 text-xs font-bold " >
                                                    Nombre de participants à former :
                                                </p>

                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4 pt-4">
                                            <div className="relative flex justify-center items-center w-full mb-3">
                                                <Custom_input_number />
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div></Tab.Panel>

                        </Tab.Panels>
                    </Tab.Group>
                </DialogModal.Content>

                <DialogModal.Footer>
                    <button
                        className=" border-[#E9EDF9] transition hover:border-red-600 hover:bg-red-600 hover:text-white font-medium text-base py-2 px-4 rounded  me-2"
                        onClick={closeModal}
                    >
                        Annuler
                    </button>
                    <button
                        className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded transition text-base"
                        onClick={payload_f}
                    >
                        Envoyer la Demande
                    </button>
                </DialogModal.Footer>
            </DialogModal>
            <Modalaut />

        </>
    )
}
