<?php

$parts = explode("/", $_SERVER["REQUEST_URI"])

header("Content-type: application/json; charset=UTF-8");

switch ($parts[1]) {
case 'articles':
  # code...
  break;

case 'comments':
  # code...
  break;

case 'login':
  # code...
  break;

case 'register':
  # code...
  break;

default:
  http_response_code(404);
  break;
}

