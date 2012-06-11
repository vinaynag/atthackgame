<?php

$id = $_GET['me'];

if (strlen($id) < 10) die("Bad ID<br>");

$eid = ($id);

mysql_connect("localhost", "(user)", "(pwd)");
mysql_select_db("(db name)");

function safe_query($query)
{
    $ret = mysql_query($query);
    if (mysql_errno() != 0) echo mysql_error();
    return $ret;
}

safe_query("LOCK TABLE requests WRITE, users WRITE, events WRITE");

$res = safe_query("SELECT * FROM users WHERE user_id='$eid'");
$arr = mysql_fetch_array($res);

if ($arr)
{
        print("startGame('$arr[1]');");
}
else
{
        $res = safe_query("SELECT * FROM requests");
        $arr = mysql_fetch_array($res);

        if (!$arr)
        {
            safe_query("INSERT INTO requests VALUES ('$eid')");
            print("waitForOpp();");
        }
        else if ($arr[0] != $id)
        {
            safe_query("DELETE FROM requests");
            $eopp = addslashes($arr[0]);
            safe_query("DELETE FROM events WHERE user_id = '$eid'");
            safe_query("DELETE FROM events WHERE user_id = '$eopp'");
            safe_query("DELETE FROM users WHERE user_id = '$eid'");
            safe_query("DELETE FROM users WHERE user_id = '$eopp'");
            safe_query("DELETE FROM users WHERE opp_id = '$eid'");
            safe_query("DELETE FROM users WHERE opp_id = '$eopp'");
            safe_query("INSERT INTO users VALUES ('$eid', '$eopp')");
            safe_query("INSERT INTO users VALUES ('$eopp', '$eid')");
            print("startGame('$eopp');");
        }
        else
        {
            print("waitForOpp();");
        }
}

safe_query("UNLOCK TABLES");

