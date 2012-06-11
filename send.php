<?php

$id = $_GET['me'];

if (strlen($id) < 10) die("Bad ID<br>");

$evt = $_GET['evt'];

$eid = ($id);
$eevt = ($evt);

mysql_connect("localhost", "(user)", "(pwd)");
mysql_select_db("(db name)");

function safe_query($query)
{
    $ret = mysql_query($query);
    if (mysql_errno() != 0) echo mysql_error();
    return $ret;
}

safe_query("INSERT INTO events (user_id, evt) VALUES ('$eid', '$eevt')");

