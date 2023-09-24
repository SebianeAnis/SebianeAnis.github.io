<?php

if(isset($_POST['Devis-Name'], $_POST['Devis-Phone'], $_POST['Devis-Email'], $_POST['Devis-Company'])) {

    $name = $_POST['Devis-Name'];
    $tel = $_POST['Devis-Phone'];
    $mail = $_POST['Devis-Email'];
    $company = $_POST['Devis-Company'];

    // Traitez vos données ici...

    echo $name." ".$tel." ".$mail." ".$company;
}else{
    echo "rien";
}

?>
