import { useForm } from '@inertiajs/react';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import ActionSection from '@/Components/ActionSection';
import DangerButton from '@/Components/DangerButton';
import DialogModal from '@/Components/DialogModal';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import SecondaryButton from '@/Components/SecondaryButton';
export default function DeleteUserForm() {
    const route = useRoute();
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const form = useForm({
        password: '',
    });
    const passwordRef = useRef(null);
    function confirmUserDeletion() {
        setConfirmingUserDeletion(true);
        setTimeout(() => passwordRef.current?.focus(), 250);
    }
    function deleteUser() {
        form.delete(route('current-user.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordRef.current?.focus(),
            onFinish: () => form.reset(),
        });
    }
    function closeModal() {
        setConfirmingUserDeletion(false);
        form.reset();
    }
    return (<ActionSection title={'Supprimer le compte'} description={'Supprimez définitivement votre compte.'}>
      <div className="max-w-xl text-sm text-gray-600 dark:text-gray-400">
      Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Avant de supprimer votre compte, veuillez télécharger toutes les données ou informations que vous souhaitez conserver.
      </div>
      <div className="mt-5">
        <DangerButton onClick={confirmUserDeletion}>
          Supprimer le compte
        </DangerButton>
      </div>
      <DialogModal isOpen={confirmingUserDeletion} onClose={closeModal}>
        <DialogModal.Content title={'Supprimer le compte'}>Êtes-vous sûr de vouloir supprimer votre compte ? Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Veuillez saisir votre Mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte.
          <div className="mt-4">
            <TextInput type="password" className="mt-1 block w-3/4" placeholder="Mot de passe" value={form.data.password} onChange={e => form.setData('password', e.currentTarget.value)}/>
            <InputError message={form.errors.password} className="mt-2"/>
          </div>
        </DialogModal.Content>
        <DialogModal.Footer>
          <SecondaryButton onClick={closeModal}>Annuler</SecondaryButton>
          <DangerButton onClick={deleteUser} className={classNames('ml-2', { 'opacity-25': form.processing })} disabled={form.processing}>
            Supprimer le compte
          </DangerButton>
        </DialogModal.Footer>
      </DialogModal>
    </ActionSection>);
}
