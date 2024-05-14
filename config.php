<?php
session_start();
require_once 'vendor/autoload.php';
$google_client = new Google_Client();
$google_client->setClientId('591602342186-6ct1m322htpi378c3nvnjqk68c9h22m7.apps.googleusercontent.com');
$google_client->setClientSecret('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');
$google_client->setRedirectUri('http://localhost/NOSQLPROJECT/googlesignup.php');
$google_client->addScope('email');
$google_client->addScope('profile');
