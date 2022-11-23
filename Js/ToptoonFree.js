var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/Kt-Wong/Html-css/main/toptoonfree.css" type="text/css">');
$done({ body });
