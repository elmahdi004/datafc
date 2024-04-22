<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Laravel\Fortify\Features;
use Laravel\Jetstream\Jetstream;
use Laravel\Jetstream\Http\Controllers\Inertia\UserProfileController as JetstreamUserProfileController;

class CustomUserProfileController extends JetstreamUserProfileController
{
    public function showClient(Request $request)
    {
        $this->validateTwoFactorAuthenticationState($request);

        return Jetstream::inertia()->render($request, 'dasboardClient/Profile', [
            'confirmsTwoFactorAuthentication' => Features::optionEnabled(Features::twoFactorAuthentication(), 'confirm'),
            'sessions' => $this->sessions($request)->all(),
        ]);
    }
}
