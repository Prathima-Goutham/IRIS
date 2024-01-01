<?php
   define('DB_SERVER', 'localhost:5432');
   define('DB_USERNAME', 'postgres');
   define('DB_PASSWORD', 'Simpleton99'); //modify it as per your password
   define('DB_DATABASE', 'postgres'); //modify it as per your databse
   $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
?>