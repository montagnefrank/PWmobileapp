<?php

require ("conn.php");
$jsonp = array();

if ($_GET) {
    if ($_GET['meth'] == 'login') {

        $username = $_GET["username"];
        $password = $_GET["password"];

        $query = "SELECT * FROM usuario WHERE nombreUsuario = '$username'";
        $result = $conn->query($query);
        if (!$result)
            die($_GET['callback'] . '(' . "{'scriptResp' : 'userqueryFail'}" . ')');
        $rows = $result->num_rows;
        $result->data_seek(0);
        $row = $result->fetch_array(MYSQLI_ASSOC);
        $jsonp = $row;

        if (($rows != 0) && (strcmp($row["nombreUsuario"], $username) == 0) && ($row['passwordUsuario'] === $password)) {

            $jsonp['scriptResp'] = "match";
            echo $_GET['callback'] . '(' . json_encode($jsonp) . ')';
        } else {
            echo $_GET['callback'] . '(' . "{'scriptResp' : 'noMatch'}" . ')';
        }
    }

    if ($_GET['meth'] == 'reg') {

        $fullname = $_GET["fullname"];
        $phone = $_GET["phone"];
        $vehicle = $_GET["vehicle"];
        $plate = $_GET["plate"];
        $username = $_GET["username"];
        $password = $_GET["password"];

        $select = "SELECT nombreUsuario FROM usuario WHERE nombreUsuario = '" . $username . "';";
        $result = $conn->query($select) or die($_GET['callback'] . '(' . "{'scriptResp' : 'userexistqueryfail'}" . ')');
        $row_cnt = $result->num_rows;

        if ($row_cnt > 0) {
            echo $_GET['callback'] . '(' . "{'scriptResp' : 'userAlreadyInDB'}" . ')';
        } else {
            $val_select = "INSERT INTO usuario("
                    . "passwordUsuario,nombreUsuario,idPerfil,phoneUsuario,fechaingresoUsuario,nombresUsuario,apellidosUsuario,idEstablecimiento,statusUsuario,temaUsuario"
                    . ")  VALUES  ('" .
                    $password . "','" . $username . "','0','" . $phone . "','" . date("Y-m-d") . "','" . $fullname . "','0','0','1','dark')";
            $val_result = $conn->query($val_select) or die($_GET['callback'] . '(' . "{'scriptResp' : 'insertuserFail'}" . ')');

            if ($val_result) {
                $jsonp['scriptResp'] = "regsuccess";
                $jsonp['user']['fullname'] = $fullname;
                $jsonp['user']['phone'] = $phone;
                $jsonp['user']['vehicle'] = $vehicle;
                $jsonp['user']['plate'] = $plate;
                $jsonp['user']['username'] = $username;
                echo $_GET['callback'] . '(' . json_encode($jsonp) . ')';
            } else {
                echo $_GET['callback'] . '(' . "{'scriptResp' : 'failuserReg'}" . ')';
            }
        }
    }
} else {
    echo $_GET['callback'] . '(' . "{'scriptResp' : 'silent'}" . ')';
}
