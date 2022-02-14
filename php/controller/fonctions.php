<?php
function filtrerSansEspace($name)
{
    $resultat = $_POST[$name] ?? ""; // TEXTE VIDE PAR DEFAUT CONTRE HACK

    // strip_tags ENLEVER LES BALISES HTML ET PHP
    $resultat = strip_tags($resultat);
    
    // ENLEVE TOUS LES ESPACES
    $resultat = str_replace(' ', '', $resultat);
    return $resultat;
}

function calculerDistance($adresseRetrait, $adresseLivraison){

    $APIKEY = "AIzaSyBMIR6bbaiSWW9AxgXsCDtbycdqCqBasAI";
    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_URL => 'https://maps.googleapis.com/maps/api/directions/json?origin='.$adresseRetrait.'&destination='.$adresseLivraison.'&key='.$APIKEY,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => '',
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => 'GET',
    ));
    $response = curl_exec($curl);
    curl_close($curl);
    $obj = json_decode($response, true);
    return $obj["routes"][0]["legs"][0]["distance"]["text"];
}

function calculerPrixCourse($distance){
  if($distance <= 3){
    $prix = 6.5;
  }else if($distance <= 8){
    $taux = 1.1;
    $prix = 6.5 + ((round($distance,0) - 3) * $taux);
  }else if($distance <= 10){
    $taux = 1.5;
    $prix = 12 + ((round($distance,0) - 8) * $taux);
  }else if($distance <= 35){
    $taux = 1.8;
    $prix = 15 +((round($distance,0) -10) * $taux);
  }else{
    $taux = 2.15;
    $prix = 60 +((round($distance,0) - 35) * $taux);
  }
  return $prix;
}