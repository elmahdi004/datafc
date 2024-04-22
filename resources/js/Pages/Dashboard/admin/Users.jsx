import AdminLayout from '@/Layouts/AdminLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import DangerButton from '@/Components/DangerButton';
import classNames from 'classnames';
import TextInput from '@/Components/TextInput'
import { toast } from 'react-toastify';


import { useState, useEffect } from 'react';
import ConfirmationModal from '@/Components/ConfirmationModal';

import axios from 'axios';

export default function Users() {
    const [data, setData] = useState({})
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const fetchNextPrevTasks = (link) => {
        if (link) {
            const url = new URL(link);
            setPage(url.searchParams.get("page"));
        }
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
                    {data?.links?.map((link, index) => (
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
    function gethData() {
        setLoading(true);
        axios.get(`/Api/users?page=${page}&q=${query}`).then(
            res => setData(res.data)
        )
        setLoading(false);
    }
    useEffect(() => {
        gethData()
    }, [query,page])
    useEffect(() => {
        setPage(1)
    }, [query])
    const Card = ({ user }) => {
        const Toggle = ({ block, idu }) => {
            const [confirmationModal, setConfirmationModal] = useState(false)
            const [errors, setErrors] = useState({})
            async function toggleBlock() {
                const toastP = toast.loading("S'il vous plaît, attendez...")
                await axios.post("/Api/users", { id: idu}).then(res => {
                    toast.update(toastP, {
                        render: "Puis avec succès",
                        type: toast.TYPE.SUCCESS,
                        isLoading: false,
                        autoClose: 5000,
                        closeOnClick: true,
                    })
                    gethData()
                    closeModal()                }).catch(err => {
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
            function closeModal() {
                setConfirmationModal(false);
            }
            return (<>
                <span onClick={() => setConfirmationModal(true)}>
                    {!block ?
                        <PrimaryButton>blocage</PrimaryButton>
                        : <SecondaryButton >Déblocage</SecondaryButton>}
                </span>
                <ConfirmationModal isOpen={confirmationModal} onClose={() => closeModal()}>
                    <ConfirmationModal.Content title={(!block ? "Blocage" : "Déblocage") + " l'utilisateur " + user.name}>
                    Êtes-vous conscient du danger de cette action ?
                    </ConfirmationModal.Content>
                    <ConfirmationModal.Footer>
                        <SecondaryButton onClick={() => closeModal()}>
                            Annuler
                        </SecondaryButton>
                        <DangerButton
                            onClick={() => toggleBlock()}
                            className={classNames('ml-2', {
                                'opacity-25': false,
                            })}>
                            {!block ? "blocage" : "Déblocage"}
                        </DangerButton>
                    </ConfirmationModal.Footer>
                </ConfirmationModal>
            </>
            )
        }
        return <div className={`relative p-4 w-full ${!user.block ? "bg-white" : "bg-gray-200"} rounded-lg overflow-hidden shadow hover:shadow-md`}>
            <div className="flex items-center p-4 h-16  ">
                <img src={user.profile_photo_url} className="h-14 w-14 py-4flex-none rounded-full border-2" />
                <div className="ml-4 flex-auto ">
                    <div className="font-medium">{user.name} <span className='text-slate-500'>
                        ({user.is_admin ? "Admin" : "Client"})
                    </span>
                    </div>
                    <div className="mt-1 text-slate-500 text-sm">{user.email}</div>
                    <div className="mt-1 text-slate-500 text-sm">{user.tel}</div>
                </div>
            </div>
            <div className="flex items-center justify-between w-full pt-4">
                <span></span>
<Toggle block={user.block} idu={user.id}></Toggle>

            </div>

        </div>
    }

    return (
        <AdminLayout title={"utilisateurs"}>
            <div className="lg:pr-3 w-full flex justify-center items-center">
                <div className="mt-2 relative w-full sm:w-8/12 text-gray-600 rounded  flex justify-center items-center">
                    <TextInput
                        type="text"
                        value={query || ""}
                        onChange={(event) =>
                            setQuery(event.target.value||"")
                        }
                        placeholder="Search"
                        className="shadow w-full px-5 pe-[40px] py-3 text-sm focus:outline-none"
                    />
                    <i className="fa-solid fa-magnifying-glass absolute right-0 top-0 mt-4 mr-4"></i>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">

                {data?.data?.map((user, i) =>
                    <Card key={i} user={user} />
                )}
            </div>

            {loading?<></>:<></>}
            {data.last_page > 1 ? <RenderPaginationLinks /> : ""}
        </AdminLayout>
    )

}
