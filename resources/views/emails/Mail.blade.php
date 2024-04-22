<body>

    {!!$msgEmail!!}<br><br>
    <div>
        <h5> {{ \App\Models\Setting::getSetting('site_name', 'Data fc') }}</h5>
        <p>Adresse : {{ \App\Models\Setting::getSetting('description', 'Data fc') }} </p>
        <p>TEL: {{ \App\Models\Setting::getSetting('tel', '') }}</p>
        <p>Fix: {{ \App\Models\Setting::getSetting('fix', '') }}</p>

    </div>
</body>