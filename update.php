<?php

$id = $_GET['he'];

if (strlen($id) < 10) die("Bad ID<br>");

$lid = (int)$_GET['lid'];

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

$res = mysql_query("SELECT * FROM events WHERE user_id='$eid' AND event_id > $lid ORDER BY event_id");
while ($arr = mysql_fetch_array($res))
{
    echo "opponentEvent({$arr[evt]});";
    $lid = $arr['event_id'];
}
echo "lid = $lid;";


