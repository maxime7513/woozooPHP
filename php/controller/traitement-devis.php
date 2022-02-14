<?php
require_once "./php/controller/fonctions.php";

$formIdentifiant = filtrerSansEspace("formIdentifiant");
if ($formIdentifiant == "devis"){
    $tabAsso = [
        "adresseRetrait"    => filtrerSansEspace("adresse1"),
        "adresseLivraison"  => filtrerSansEspace("adresse2"),
    ];
    extract($tabAsso);

    if(isset($adresseRetrait) && isset($adresseLivraison)){
        $distance = calculerDistance($adresseRetrait,$adresseLivraison);
        echo "distance => $distance <br>";
        $nbr = 3;
        $distance = substr($distance, 0, -$nbr); // ENLEVER " km"
        echo "$distance <br>";
        $prix = calculerPrixCourse($distance);
        echo "prix => $prix €";
    };
}
