import { useForm } from '@inertiajs/react';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import ActionMessage from '@/Components/ActionMessage';
import ActionSection from '@/Components/ActionSection';
import DialogModal from '@/Components/DialogModal';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SecondaryButton from '@/Components/SecondaryButton';
export default function LogoutOtherBrowserSessions({ sessions }) {
    const [confirmingLogout, setConfirmingLogout] = useState(false);
    const route = useRoute();
    const passwordRef = useRef(null);
    const form = useForm({
        password: '',
    });
    function confirmLogout() {
        setConfirmingLogout(true);
        setTimeout(() => passwordRef.current?.focus(), 250);
    }
    function logoutOtherBrowserSessions() {
        form.delete(route('other-browser-sessions.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordRef.current?.focus(),
            onFinish: () => form.reset(),
        });
    }
    function closeModal() {
        setConfirmingLogout(false);
        form.reset();
    }
    return (<ActionSection title={'Sessions de navigateur'} description={"Gérez et déconnectez-vous de vos sessions actives sur d'autres navigateurs et appareils."}>
      <div className="max-w-xl text-sm text-gray-600 dark:text-gray-400">
      Si nécessaire, vous pouvez vous déconnecter de toutes vos autres sessions de navigateur sur tous vos appareils. Certaines de vos sessions récentes sont répertoriées ci-dessous ; cependant, cette liste n'est peut-être pas exhaustive. Si vous pensez que votre compte a été compromis, vous devez également mettre à jour votre Mot de passe.
      </div>

      {/* <!-- Other Browser Sessions --> */}
      {sessions.length > 0 ? (<div className="mt-5 space-y-6">
          {sessions.map((session, i) => (<div className="flex items-center" key={i}>
              <div>
                {session.agent.is_desktop ? (<svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-500">
                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gray-500">
                    <path d="M0 0h24v24H0z" stroke="none"></path>
                    <rect x="7" y="4" width="10" height="16" rx="1"></rect>
                    <path d="M11 5h2M12 17v.01"></path>
                  </svg>)}
              </div>

              <div className="ml-3">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {session.agent.platform} - {session.agent.browser}
                </div>

                <div>
                  <div className="text-xs text-gray-500">
                    {session.ip_address},
                    {session.is_current_device ? (<span className="text-green-500 font-semibold">
                        Cet appareil
                      </span>) : (<span>Last active {session.last_active}</span>)}
                  </div>
                </div>
              </div>
            </div>))}
        </div>) : null}

      <div className="flex items-center mt-5">
        <PrimaryButton onClick={confirmLogout}>
          Se déconnecter des autres sessions du navigateur
        </PrimaryButton>

        <ActionMessage on={form.recentlySuccessful} className="ml-3">
          Done.
        </ActionMessage>
      </div>

      {/* <!-- Log Out Other Devices Confirmation Modal --> */}
      <DialogModal isOpen={confirmingLogout} onClose={closeModal}>
        <DialogModal.Content title={'Se déconnecter des autres sessions du navigateur'}>
        Veuillez saisir votre Mot de passe pour confirmer que vous souhaitez vous déconnecter de vos autres sessions de navigateur sur tous vos appareils.
          <div className="mt-4">
            <TextInput type="password" className="mt-1 block w-3/4" placeholder="Mot de passe" ref={passwordRef} value={form.data.password} onChange={e => form.setData('password', e.currentTarget.value)}/>

            <InputError message={form.errors.password} className="mt-2"/>
          </div>
        </DialogModal.Content>

        <DialogModal.Footer>
          <SecondaryButton onClick={closeModal}>Annuler</SecondaryButton>

          <PrimaryButton onClick={logoutOtherBrowserSessions} className={classNames('ml-2', { 'opacity-25': form.processing })} disabled={form.processing}>
            Se déconnecter des autres sessions du navigateur
          </PrimaryButton>
        </DialogModal.Footer>
      </DialogModal>
    </ActionSection>);
}
