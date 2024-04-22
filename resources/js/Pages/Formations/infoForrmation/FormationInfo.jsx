import  { useEffect, useState } from 'react'
import HeroFormationInfo from '../../Hero/HeroFormationInfo';
import axios from 'axios'
import Header from '../../header/Header';
import useTypedPage from '@/Hooks/useTypedPage';
import AccordionBasicExample from '../../componenet/AccordionBasicExample';
import ClientLayout from '@/Layouts/ClientLayout'
function FormationInfo() {
  const page = useTypedPage();
  const [data, setData] = useState([])
  async function getdata() {
    await axios.get(`/FormationInfo/${page.props.idf}`).then(response => setData(response.data))
  }
  useEffect(() => {
    getdata()
  }, [])
  const infoFormati={
    CodeFormation:data.CodeFormation,
    Titre:data.Titre,
    imgFormation:data.imgFormation,
}
  return (
    <>
      <ClientLayout title={`Formations : ${infoFormati?.CodeFormation+" "+infoFormati?.Titre}`}>
      <div className=' pb-14'>
        <HeroFormationInfo {...infoFormati}  />
        <div className=' mt-20 '>
          {data?.formation?.map((val,i)=><AccordionBasicExample key={i} {...val}   info_cat={infoFormati} />)}
        </div>
      </div>
      </ClientLayout>
    </>
  )
}

export default FormationInfo
