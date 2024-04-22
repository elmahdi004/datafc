import { useState, useEffect } from 'react'
import axios from 'axios'
const Th_order = ({  name_la }) => {
    return (
        <th
            scope="col"
            className={`px-6 text-center py-3 cursor-pointer
             dark:border-gray-300 text-black"
        `}>{name_la}
        </th>
    )
}
function TableDashboardFormation() {
    const [dataM, setdataM] = useState();
    const [loading, setLoading] = useState(false);
    const getData = async () => {
        await axios.get(`/Api/lastMessage`)
            .then(reponse => {setdataM(reponse.data);  });
        setLoading(true);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>

        <h3 className="p-5  text-2xl font-bold dark:text-white">Dernière Messages</h3>
            <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-primary/80 uppercase bg-gray-50 dark:bg-primary/80 dark:text-gray-400">
                    <tr>

                        <Th_order name_la="Expéditeur" />
                        <Th_order name_la="Email" />

                        <Th_order name_la="Object" />
                        <Th_order name_la="Téléphone" />
                        <Th_order name_la="Envoyer le message" />

                    </tr>
                </thead>
                <tbody>
                 
                    {dataM?.map((f, index) => (
                        <tr
                            key={index}
                            className={`${!f.read?"bg-primary/40":"bg-gray-200"} border-b  dark:bg-primary text-center dark:border-primary/80 hover:bg-opacity-20 dark:hover:bg-gray-600`}
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {f?.full_name }
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {f?.email}
                            </th>



                            <td className="px-6  py-4">
                                {f?.object}
                            </td>
                            <td className="px-6  py-4 text-center">
                                {f?.tel}
                            </td>
                            <td className="px-6 py-4 ">
                                {f?.created_at}
                            </td>


                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableDashboardFormation
