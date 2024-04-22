import AdminLayout from '@/Layouts/AdminLayout'
import { useState, useEffect } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import DialogModal from '@/Components/DialogModal';

import SecondaryButton from '@/Components/SecondaryButton';
import DangerButton from '@/Components/DangerButton';
import classNames from 'classnames';
import ConfirmationModal from '@/Components/ConfirmationModal';
import TextInput from '@/Components/TextInput';

function InfoDemand({ data, action_f }) {
    const [action, setaction] = useState(false)
     const valider = () => {
      const toastP = toast.loading("S'il vous plaît, attendez...")

         axios.post("/Demandeupdate", { "id": data.id }).then(res => {
            toast.update(toastP, {
                render: "Puis avec succès",
                type: toast.TYPE.SUCCESS,
                isLoading: false,
                autoClose: 5000,
                closeOnClick: true,
            })
            closeModal()
            action_f()
		    closeModal()
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
    function closeModal() {
        setaction(false);
    }
    const payload_f = async () => {
        valider()
    };
    const ismorale = data?.demandeable_type === "App\\Models\\PersMorale" ? true : false
    const typorg = ["Entreprise privée", "Administration publique", "Association", "Fondation"]

    return (<>
        <div
            onClick={(e) => setaction(true)}
            className="text-white me-2 bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
        >
            <i className="fa-solid fa-eye"></i>

        </div>
        <DialogModal isOpen={action} onClose={closeModal} maxWidth={'4xl'}>
            <DialogModal.Content title={`Demande # ${data.id}`}>
                <div className="rounded-t bg-white mb-0   ">


                    <div className="grid grid-cols-2">
                        <div className=" font-bold text-xl text-primary p-2 ">
                            <h4>Formation </h4>
                        </div>
                        <div>
                            <p className="font-semibold  text-xl text-black p-2">{`${data?.formation?.Code} /  ${data?.formation?.Titre}`}</p>

                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div >
                            <h4 className=" font-bold text-xl text-primary p-2 ">{ismorale ? "Entreprise" : "Nom"}</h4>
                        </div>
                        <div>
                            <p className="font-semibold  text-xl text-black p-2"> {ismorale ? data.demandeable.entreprise : data.demandeable.prenompm}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div >
                            <h4 className=" font-bold text-xl text-primary p-2 ">{ismorale ? "Raison Sociale" : "Prenom"}</h4>
                        </div>
                        <div>
                            <p className="font-semibold  text-xl text-black p-2"> {ismorale ? data.demandeable.raisons : data.demandeable.nom}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div >
                            <h4 className=" font-bold text-xl text-primary p-2 ">Email</h4>
                        </div>
                        <div>
                            <p className="font-semibold  text-xl text-black p-2"> {data.email}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div >
                            <h4 className=" font-bold text-xl text-primary p-2 ">Téléphone</h4>
                        </div>
                        <div>
                            <p className="font-semibold  text-xl text-black p-2"> {data.tel}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div >
                            <h4 className=" font-bold text-xl text-primary p-2 ">Adresse</h4>
                        </div>
                        <div>
                            <p className="font-semibold  text-xl text-black p-2"> {data.adresse}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div >
                            <h4 className=" font-bold text-xl text-primary p-2 ">Adresse</h4>
                        </div>
                        <div>
                            <p className="font-semibold  text-xl text-black p-2"> {data.adresse}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div >
                            <h4 className=" font-bold text-xl text-primary p-2 ">{ismorale ? "responsible  ou Inerlocuteur" : "Type d'organisme"}</h4>
                        </div>
                        <div>
                            <p className="font-semibold  text-xl text-black p-2"> {ismorale ? data.demandeable.resplonsable : typorg[data.demandeable.typeOrgpm]}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div >
                            <h4 className=" font-bold text-xl text-primary p-2 ">{ismorale ? "responsible  ou Inerlocuteur" : "Type d'organisme"}</h4>
                        </div>
                        <div>
                            <p className="font-semibold  text-xl text-black p-2"> {ismorale ? data.demandeable.telres : data.demandeable.nomOrgpm}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div >
                            <h4 className=" font-bold text-xl text-primary p-2 ">Nombre De Participants À Former :</h4>
                        </div>
                        <div>
                            <p className="font-semibold  text-xl text-black p-2"> {data.nbrpers}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div >
                            <h4 className=" font-bold text-xl text-primary p-2 ">L'utilisateur qui a demandé</h4>
                        </div>
                        <div>
                            <p className="font-semibold  text-xl text-black p-2"> {data.user.name}</p>
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-2">
                            <div >
                                <h4 className=" font-bold text-xl text-primary p-2 ">Qui demander: </h4>
                            </div>
                            <div>
                                <p className="font-semibold  text-xl text-black p-2"> {ismorale ? "Morale" : "Physique"}</p>
                            </div>
                        </div> */}
                </div>



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
                    valider
                </button>
            </DialogModal.Footer>
        </DialogModal>
    </>
    )

}

function Demande() {
    const [dataF, setDataF] = useState({});
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [order, setOrder] = useState("id");
    const [DESC, setDESC] = useState(true);
    const [maxRows, setMaxRows] = useState(10);
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [loading, setLoading] = useState(false);
    const [confirmationModal, setConfirmationModal] = useState(false)

    const getData = async () => {
        setLoading(true);

        await axios
            .get(
                `/Demandetest?page=${page}&q=${query}&order=${order}&DESC=${DESC}&row=${maxRows}&pagetype=index`
            )
            .then((reponse) => {
                setDataF(reponse.data);
            });
        setLoading(false);
    };
    useEffect(() => {
        getData();
    }, [page, query, order, DESC, maxRows]);

    const handleSelectAll = (e) => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(dataF.data.map((fac) => parseInt(fac.id)));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };
    const handleClick = (e) => {
        const { id, checked } = e.target;
     
        setIsCheck([...isCheck, parseInt(id)]);
        if (!checked) {
            setIsCheck([...isCheck.filter((fac) => fac != id)]);
        }
    };


    const fetchNextPrevTasks = (link) => {
        if (link) {
            const url = new URL(link);

            setPage(url.searchParams.get("page"));
        }
    };

    const f_ordre = (p) => {
        if (order === p) {
            setDESC((D) => !D);
        } else {
            setDESC(false);
        }
        setOrder(p);
    };
    const deletfact = async (factDelet) => {
        const toastd = toast.loading("S'il vous plaît, attendez...");

        await axios
            .delete(`/Api/Demande/${factDelet}`)
            .then((Response) => {
                toast.update(toastd, {
                    render: "Puis avec succès",
                    type: toast.TYPE.SUCCESS,
                    isLoading: false,
                    autoClose: 5000,
                    closeOnClick: true,
                });
                getData();
               
            })
            .catch((err) => {
                toast.update(toastd, {
                    render: "Il y a un problème",
                    type: toast.TYPE.ERROR,
                    isLoading: false,
                    autoClose: 5000,
                    closeOnClick: true,
                });
            });
    };

    const RenderPaginationLinks = () => {
        function getActive(active) {
            if (active) {
                return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded  bg-primary focus:text-dark-purple  text-white";
            } else {
                return "mr-1 mb-1  items-center px-4 py-3 text-sm leading-4 border rounded  hover:bg-white  focus:border-primary focus:text-primary";
            }
        }


        return (
            <div className="mb-4">
                <div className="flex  justify-center mt-8 j ">
                    {dataF?.links?.map((link, index) => (
                        <button
                            type="button"
                            className={`mr-1 mb-1 px-4 py-3 text-sm leading-4 dark:text-gray-400 border rounded cursor-pointer  ${getActive(
                                link.active
                            )}`}
                            key={index}
                            onClick={() => fetchNextPrevTasks(link.url)}
                            disabled={link.active}
                        >
                            {link.label
                                .replace("&laquo;", "")
                                .replace("&raquo;", "")}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const Th_order = ({ order_by, name_la }) => {
        return (
            <th
                scope="col"
                className={`px-6 py-3 cursor-pointer ${order === order_by
                    ? "    dark:border-gray-300 text-black"
                    : ""
                    }`}
                onClick={() => {
                    f_ordre(order_by);
                }}
            >
                {name_la}
                <span>
                    {" "}
                    {order === order_by ? (
                        DESC ? (
                            <i className=" px-2 fa-solid fa-caret-up"></i>
                        ) : (
                            <i className=" px-2 fa-solid fa-caret-down"></i>
                        )
                    ) : (
                        <i className="fa-solid fa-sort"></i>
                    )}
                </span>
            </th>
        )

    }
    const [password, setPassword] = useState("")
    function ConfirmationdestroyMany() {
        const DemandesDestroyManySeed = async () => {
            const toastd = toast.loading("S'il vous plaît, attendez...");
           
            await axios
                .post("/Api/Demandes", { DemandeIds: isCheck, password: password })
                .then((response) => {
                    setPassword("")
                    closeModal()
               
                    setIsCheck([]);
                    toast.update(toastd, {
                        render: "Puis avec succès",
                        type: toast.TYPE.SUCCESS,
                        isLoading: false,
                        autoClose: 5000,
                        closeOnClick: true,
                    });
                    getData();
                })
                .catch((err) => {
                    toast.update(toastd, {
                        render: "Il y a un problème",
                        type: toast.TYPE.ERROR,
                        isLoading: false,
                        autoClose: 5000,
                        closeOnClick: true,
                    });
                });
        }

        function closeModal() {
            setConfirmationModal(false);
        }
        return <ConfirmationModal isOpen={confirmationModal} onClose={() => closeModal()}>
            <ConfirmationModal.Content title={"Supprimer les demandes !"}>
                Veuillez saisir votre Mot de passe pour confirmer que vous souhaitez supprimer la liste des demandes.
                <div className="mt-4">
                    <TextInput type="password" className="mt-1 block w-full"
                        placeholder="Mot de passe"
                        value={password || ""}
                        onChange={e => setPassword(e.currentTarget.value)} />
                </div>
            </ConfirmationModal.Content>
            <ConfirmationModal.Footer>
                <SecondaryButton onClick={() => closeModal()}>
                    Annuler
                </SecondaryButton>


                <DangerButton
                    onClick={() => DemandesDestroyManySeed()}
                    className={classNames('ml-2', {
                        'opacity-25': false,
                    })}>
                    Confirmation
                </DangerButton>
            </ConfirmationModal.Footer>
        </ConfirmationModal>
    }
    return (
        <AdminLayout title={"Demande"}>
            <div className="w-full h-full">
                <div className="relative overflow-x-auto shadow-md  sm:rounded-lg  ">
                    <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                        <div className="mb-1 w-full">
                            <div className="mb-4">
                                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
                                    Tous les Demandes
                                </h1>
                            </div>
                            <div className="sm:flex">
                                <div className=" sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0">
                                    <div className="lg:pr-3">
                                        <div className="mt-1 relative w-full lg:w-64 xl:w-96 text-gray-600 rounded  flex justify-center items-center">
                                            <TextInput
                                                type="text"
                                                value={query}
                                                onChange={(event) =>
                                                    setQuery(event.target.value)
                                                }
                                                placeholder="Search"
                                                className="shadow w-full  sm:text-sm  pe-[40px] py-3 text-sm "
                                            />
                                            <i className="fa-solid fa-magnifying-glass absolute right-0 top-0 mt-4 mr-4"></i>
                                        </div>
                                    </div>
                                    <div className="flex space-x-1 pl-0 sm:pl-2 mt-3 sm:mt-0">
                                        {isCheck?.length ? (
                                            <button
                                                type="button"
                                                onClick={() => setConfirmationModal(true)}
                                                className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300  focus:ring-red rounded-lg  py-2 px-2.5 m-1"
                                                disabled={!isCheck.length}
                                            >
                                                <i className="fa-solid fa-trash"></i>
                                                {isCheck.length ? (
                                                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                                                        {isCheck?.length}
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </button>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-primary/80 uppercase bg-gray-50 dark:bg-primary/80 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4 ">
                                    <div className="flex items-center ps-4">
                                        <input
                                            onChange={handleSelectAll}
                                            checked={isCheckAll}
                                            type="checkbox"
                                            name="selectAll"
                                            id="selectAll"
                                            className=" accent-primary"
                                        />
                                    </div>
                                </th>
                                <Th_order order_by="demandeable_type" name_la="Type" />
                                <Th_order order_by="demandeable_type" name_la="entreprise / personne" />
                                <Th_order order_by="formation_id" name_la="Formation" />
                                <Th_order order_by="nbrpers" name_la="Number Person" />
                                <Th_order order_by="user_id" name_la="Client" />
                                <Th_order order_by="created_at" name_la="Date" />
                                <Th_order order_by="status" name_la="Status" />

                                <th
                                    scope="col"
                                    className="px-6 py-3 flex justify-center"
                                >
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="11" className="px-6 py-4">
                                        <div
                                            className="text-left h-[100px] flex
justify-center
items-center"
                                        >
                                            <div role="status">
                                                <svg
                                                    aria-hidden="true"
                                                    className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
                                                    viewBox="0 0 100 101"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                        fill="currentFill"
                                                    />
                                                </svg>
                                                <span className="sr-only">
                                                    Loading...
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                dataF?.data?.map((f, index) => (
                                    <tr
                                        key={index}
                                        className="bg-white border-b dark:bg-primary dark:border-primary/80 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        <td className="w-4 p-4">
                                            <div className="flex items-center ps-4">
                                                <input
                                                    onChange={handleClick}
                                                    checked={isCheck.includes(
                                                        parseInt(f.id)
                                                    )}
                                                    id={f.id}
                                                    type="checkbox"
                                                    className=" accent-primary"
                                                />
                                            </div>
                                        </td>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {f?.demandeable_type === "App\\Models\\PersMorale" ? "Morale" : "Physique"}
                                        </th>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {f?.demandeable_type === "App\\Models\\PersMorale" ? f.demandeable.entreprise : f.demandeable.prenompm}
                                        </th>
                                        <td className="px-6 py-4">
                                            {f?.formation?.Code} / {f?.formation?.Titre}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {f?.nbrpers}
                                        </td>
                                        <td className="px-6 py-4 ">
                                            {f?.user?.name}
                                        </td>

                                        <td className="px-6 py-4">
                                            {f?.created_at}
                                        </td>

                                        <td className={`px-6 py-4 ${!f?.status ? "text-red-700" : "text-primary"}`}>
                                            {f?.status ? "validé" : "non validé"}
                                        </td>
                                        <td className="px-6 py-4 flex justify-center  ">

                                            <InfoDemand
                                                data={f}
                                                action_f={getData}
                                            />


                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                    {dataF?.last_page > 1 ? <RenderPaginationLinks /> : ""}
                </div>
            </div>
            <ConfirmationdestroyMany />
        </AdminLayout>







    )
}

export default Demande
