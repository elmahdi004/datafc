import React from 'react'
import { useEffect, useState } from "react";
import DialogModal from '@/Components/DialogModal';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import TextInput from '@/Components/TextInput'

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from 'axios';
import { toast } from 'react-toastify';

export default function MsgReply({ data, action_f }) {
  const [action, setaction] = useState(false)
  const [object, setObject] = useState("")
  const [errors, setErrors] = useState({})
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  function closeModal() {
    setaction(false);
}
    const payload_f = async () => {
        const toastP = toast.loading("S'il vous plaît, attendez...")

    await axios.post("/Api/replay", {

      object,
      message_id: data.id,
      msg: convertToHTML(editorState.getCurrentContent())
    }).then(res => {
        toast.update(toastP, {
            render: "Puis avec succès",
            type: toast.TYPE.SUCCESS,
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true,
        })
        ///window.location.href = '/admin/Formtion'
      action_f(data.id)
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

  return (<>
    <div className="fixed bottom-5 right-5">
      <div onClick={(e) => setaction(true)} className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-lg text-white">
        <i className="fa-solid fa-reply" />
      </div>
    </div>
    <DialogModal isOpen={action} onClose={closeModal} maxWidth={'4xl'}>
      <DialogModal.Content title={""}>
        <div className="flex py-5 space-x-4 items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <div className={`w-12 h-12 rounded-full bg-gray-300  flex items-center justify-center text-lg text-black shadow`}>
              {data.full_name[0]}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">{data.full_name}</h3>
            <p className="text-light text-gray-400">{data.email}</p>
          </div>
        </div>
        <div className="w-full  px-4">
          <div className="relative w-full mb-3">
            <label className="block capitalize text-blueGray-600 text-xs font-bold mb-2">
              Object
            </label>
            <TextInput type="text" name="Duree"
              value={object || ""}
              onChange={(e) => setObject(e.target?.value)}
              className="w-full" />
          </div>
        </div>
        <div className="w-full border-gray-300 dark:border-primary/80 dark:text-gray-300 focus:border-primary  focus:ring-primary rounded-md shadow-sm">
          <Editor
            className="w-full "
            editorState={editorState}
            onEditorStateChange={setEditorState}
            toolbar={{
              options: ['inline', 'list', 'textAlign', 'remove', 'history'],
            }}

          />
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
          Envoyer
        </button>
      </DialogModal.Footer>
    </DialogModal>
  </>
  )

}
