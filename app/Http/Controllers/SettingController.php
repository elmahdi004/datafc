<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Setting;

class SettingController extends Controller
{
    public function edit()
    {
        //return Setting::get(['key', 'value']);
        $settings = Setting::all();

        $result = (object)[];

        foreach ($settings as $setting) {
            $result->{$setting->key} = $setting->value;
        }

        return $result;
    }


    public function update(Request $request)
    {
        $data = $request->except('_token');
        foreach ($data as $key => $value) {
            Setting::where('key', $key)->update(['value' => $value]);
        }
      //  $request->session()->flash('flash.banner', 'Yay it works!');
      //  $request->session()->flash('flash.bannerStyle', 'success');
        /*  return to_route('settings.edit')
            ->withStatus('Settings updated successfully.'); */
    }

    public function generateSvg($name="us", $size=200, $bgColor="e1fdff", $textColor="238a91")
    {
        $svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' . $size . 'px" height="' . $size . 'px" viewBox="0 0 200 200" version="1.1">';
        $svg .= '<rect fill="#' . $bgColor . '" width="200" height="200"/>';
        $svg .= '<text x="50%" y="50%" style="color: #' . $textColor . '; line-height: 1;font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif;" alignment-baseline="middle" text-anchor="middle" font-size="88" font-weight="400" dy=".1em" dominant-baseline="middle" fill="#' . $textColor . '">' . strtoupper(substr($name, 0, 2)) . '</text>';
        $svg .= '</svg>';

        return response($svg)->header('Content-Type', 'image/svg+xml');
    }
}
