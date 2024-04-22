<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FormationCategorieController;
use App\Http\Controllers\FormationController;
use App\Http\Controllers\DemandeController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\RepleyController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\NoslientController;
use App\Http\Controllers\MailController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('accueil/Accueil');
});
Route::get('/sommes-nous', function () {
    return Inertia::render('quisommesnous/Sommesnous');
});
Route::get('/domiciliation', function () {
    return Inertia::render('domiciliation/Domiciliation');
});
Route::get('/ingenierie-de-formation', function () {
    return Inertia::render('nosServices/Ingn');
});
Route::get('/formation', function () {
    return Inertia::render('formationPage/FormationPage');
});
Route::get('/assistance-conseil-en-recrutement', function () {
    return Inertia::render('assistancconseil/Assistancconseil');
});
Route::get('/contact-nous', function () {
    return Inertia::render('contact-nous/Contactnous');
});
Route::get('/formations-interentreprises', function () {
    return Inertia::render('Formations/Formations');
});
Route::get('/nos-formations', function () {
    return Inertia::render('nosFormation/NosFormation');
});
Route::get('/info-formation/{idf}', function ($idf) {
    return Inertia::render('Formations/infoForrmation/FormationInfo', ['idf' => $idf]);
});

Route::get("/etude_stratigique", function () {
    return Inertia::render('etudeSt/EtudeSt');
});
Route::middleware([
    'auth:sanctum', 'admin',
    config('jetstream.auth_session'),
    'verified',
    //'password.confirm'
])->group(function () {

    $adminList = [
        [
            "path" => "/admin",
            "element" => "index"
        ],
        [
            "path" => "/admin/Demande",
            "element" => "Demande"
        ],
        [
            "path" => "/admin/Formtion",
            "element" => "formtion/index"
        ],
        [
            "path" => "/admin/Formtion/add",
            "element" => "formtion/Add"
        ],
        [
            "path" => "/admin/info",
            "element" => "Info"
        ],
        [
            "path" => "/admin/users",
            "element" => "Users"
        ],
        [
            "path" => "/admin/message",
            "element" => "Message"
        ],
        [
            "path" => "/admin/Certificat",
            "element" => "Certificat"
        ]
    ];
    foreach ($adminList as $link) {
        Route::get($link["path"], function (Request $request) use ($link) {
            // $request->session()->flash('flash.banner', 'Yay it works!');
            //$request->session()->flash('flash.bannerStyle', 'error');
            $com = 'Dashboard/admin/' . $link["element"];
            return Inertia::render($com);
        });
    }
    Route::get("/admin/formtion/edit/{idf}", function ($idf) {
        return Inertia::render('Dashboard/admin/formtion/Edit', ['idf' => $idf]);
    });
    Route::get('/FormationCategorieData', [FormationCategorieController::class, 'showDataForAdmin']);
    Route::get('/Demandetest', [DemandeController::class, 'index']);
    Route::post('/Demandeupdate', [DemandeController::class, 'update']);
    Route::get('/FormationCategorieShow/{id}', [FormationCategorieController::class, 'edit']);

});




Route::get('/FormationInfo', [FormationCategorieController::class, 'index']);
Route::get('/FormationInfo/{id}', [FormationCategorieController::class, 'show']);
Route::get('/settings', [SettingController::class, 'edit'])->name('settings.edit');





Route::get('Api/Formation/{id}', [FormationController::class, 'show']);
Route::post('Api/messages', [MessageController::class, 'store']);








Route::get('Api/Noslient', [NoslientController::class, 'index']);



Route::get('/avatars/{name}/{size}/{bgColor}/{textColor}', [SettingController::class, 'generateSvg']);

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
    //'password.confirm'
])->group(function () {
    Route::group(['middleware' => 'client'], function () {
        Route::get('Api/clientDemandes', [UserController::class, 'clientDemandes']);
        Route::post('/Demandenew', [DemandeController::class, 'store']);

    });
    Route::group(['middleware' => 'admin'], function () {
        Route::post('/UPCatFormation/{id}', [FormationCategorieController::class, 'update']);
        Route::post('/deletCategorie', [FormationCategorieController::class, 'destroy']);
        Route::post('/settings', [SettingController::class, 'update'])->name('settings.update');
        Route::get('/FormationCategorie', [FormationCategorieController::class, 'index2']);
        Route::post('/newcCatFormation', [FormationCategorieController::class, 'store']);
        Route::post('/Api/Formation/{id}', [FormationController::class, 'update']);
        Route::post('/newcFormation', [FormationController::class, 'store']);
        Route::post('/deletFormation', [FormationController::class, 'destroy']);
        Route::get('Api/messages', [MessageController::class, 'index']);
        Route::get('Api/messages/{id}', [MessageController::class, 'show']);
        Route::post('Api/replay', [RepleyController::class, 'store']);
        Route::get('Api/users', [UserController::class, 'index']);
        Route::post('Api/users', [UserController::class, 'update']);
        Route::get('Api/statistic', [DashboardController::class, 'statistic']);
        Route::get('Api/lastDemandes', [DashboardController::class, 'lastDemmandes']);
        Route::get('Api/lastMessage', [DashboardController::class, 'lastMessage']);
        Route::get("/send", [MailController::class, 'sendEmail']);
        Route::post('Api/Demandes', [DemandeController::class, 'destroyMany']);
        Route::post('Api/Noslient', [NoslientController::class, 'store']);
        Route::delete('Api/Noslient/{id}', [NoslientController::class, 'destroy']);
    });
});

require_once __DIR__ . '/jetstream.php';
