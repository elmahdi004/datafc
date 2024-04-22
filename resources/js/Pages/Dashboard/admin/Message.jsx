import AdminLayout from '@/Layouts/AdminLayout';
import React, { useEffect, useState } from 'react'
import MsgReply from './MsgReply';
import axios from 'axios';



function Message() {
    const [selctClientBox, setSelctClientBox] = useState(0);
    const [data, setData] = useState([])
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [msg, setMsg] = useState({})
    const [loading, setLoading] = useState(false);

    async function getData() {
        await axios.get(`/Api/messages?q=${query}`).then(res => {
           
            setData(res.data)
        })
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(function () {
            setLoading(false)
        }, 1000);
    }, [selctClientBox])

    useEffect(() => {
        setLoading(true)
        getData()
        setLoading(false)
    }, [query])



    function HTMLRenderer(props) {
        return (
            <div
                dangerouslySetInnerHTML={{ __html: props.html }}
            />
        );
    }
    async function getMsg(i) {
        await axios.get(`/Api/messages/${i}`).then(res => {
            setMsg(res.data)
        })
    }
    const ClientBox = ({ e, i }) => {
        function loadingData() {
            setLoading(true)
            getMsg(i)
            setLoading(false)
        }
        return <li className='select-none'>
            <input type="radio" id={"hosting-" + i} className="peer hidden" onClick={n => {
                n.target.checked ? setSelctClientBox(i) : "";
                loadingData();
            }} defaultChecked={selctClientBox == i} />
            <label htmlFor={"hosting-" + i} className="group  block h-full cursor-pointer bg-white px-3 py-3 transition border-b border-gray-500/20 peer-checked:bg-primary hover:bg-primary/80 hover:text-white peer-checked:text-white">
                <div className="flex  items-center">
                    <img src={`/avatars/${e.full_name}/60/e1fdff/238a91`} className={`w-12 h-12 rounded-full bg-gray-300  flex items-center justify-center text-lg text-black shadow`}/>


                    <div className="p-2">
                        <span className="flex  justify-between items-center">
                            <h3 className="text-sm font-semibold">{e.full_name}</h3>
                        </span>
                        <p className="text-sm opacity-60 drop-shadow">{e.object}</p>
                        <p className="text-sm opacity-60 drop-shadow">{e.created_at}</p>
                    </div>
                </div>
            </label>
        </li>
    }
    const Mail = ({ mess }) => {
        return <div className='relative text-sm  w-10/12 me-auto bg-white border-gray-400 border-2 py-2 px-4 shadow rounded-3xl rounded-bl-sm mb-4'>
            <h1 className="font-bold text-2xl">{mess.object}</h1>
            <article className="mt-8 text-gray-500 leading-7 tracking-wider">
                <HTMLRenderer html={mess.msg} />
            </article>
            <div className="text-sm opacity-60 drop-shadow text-center">{mess.created_at}</div>
        </div>
    }
    const Reply = ({ repley }) => {
        return <div className='relative w-10/12 ms-auto text-sm bg-white py-2 px-4 shadow  border-2 rounded-3xl rounded-br-none mb-4 border-primary'>
            <h1 className="font-bold text-2xl">{repley?.object}</h1>
            <article className="mt-8 text-gray-500 leading-7 tracking-wider">
                <HTMLRenderer html={repley?.msg} />
            </article>
            <div className="flex items-end justify-between">
                <span></span>
                <div className="text-sm opacity-60 drop-shadow ">{repley.created_at}</div>
                <div className="flex flex-col content-center items-center w-1/6">
                    <img src={repley.user.profile_photo_url} className="h-8 w-8 flex-none rounded-full border-2" />
                    <span className='text-xs'>{repley.user.name}</span>
                </div>
            </div>
        </div>
    }
    return (
        <AdminLayout title={"Message"}>
            <main className="flex  w-full shadow rounded" style={{ height: `calc(100vh - 5rem)` }}>
                <section className="w-2/12 flex flex-col   bg-gray-50 h-full overflow-y-auto ">
                    <label className="px-3 my-2">
                        <input
                            value={query || ""}
                            onChange={(event) =>
                                setQuery(event.target.value || "")
                            }
                            className="rounded-lg p-2 bg-white border border-primary shadow transition duration-200 focus:outline-none focus:ring-2 w-full" placeholder="Search..." />
                    </label>
                    <div className="flex flex-col  h-full overflow-y-auto ">
                        <ul className="">
                            {data?.map((e, i) => <ClientBox key={i} i={e.id} e={e} />)}
                        </ul>
                    </div>
                </section>
                <section className="w-10/12 relative h-full border-l   overflow-hidden  ">
                    {Object.keys(msg).length ? <>
                        <div className="flex justify-between items-center  bg-white shadow   py-1 px-5 mb-1">
                            <div className="flex space-x-4 items-center select-none">
                                <div className={`w-10 h-10 rounded-full bg-gray-300  flex items-center justify-center text-lg text-black shadow`}>
                                    {msg?.full_name[0]}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-semibold text-lg">{msg?.full_name}</h3>
                                    <p className="text-light text-gray-400">{msg?.email}</p>
                                </div>
                            </div>
                        </div>
                        <section className='p-4 overflow-y-auto relative items-center block ' style={{ height: `calc(100vh - 10rem)` }}>
                            {loading ? <div className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                                <svg aria-hidden="true" className="w-16 h-16 mr-2 text-gray-200 animate-spin  fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                                : <>
                                    <Mail mess={msg} />
                                    {
                                        msg?.repleys?.map((r, i) => <Reply key={i} repley={r} />)
                                    }
                                </>}
                        </section>
                        <MsgReply
                            action_f={getMsg}
                            data={msg}
                        />
                    </> : ""}
                </section>
            </main>
        </AdminLayout>
    )
}

export default Message
