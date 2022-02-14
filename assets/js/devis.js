function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      mapTypeControl: false,
      center: { lat: 43.2961743, lng: 5.3699525 },
      zoom: 7,
    });
    new AutocompleteDirectionsHandler(map);
}
  
class AutocompleteDirectionsHandler {
  map;
  originPlaceId;
  destinationPlaceId;
  travelMode;
  directionsService;
  directionsRenderer;
  constructor(map) {
    this.map = map;
    this.originPlaceId = "";
    this.destinationPlaceId = "";
    this.travelMode = google.maps.TravelMode.DRIVING;
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(map);
    const originInput = document.getElementById("origin-input");
    const destinationInput = document.getElementById("destination-input");
    const options = {
      // componentRestrictions: {administrative_area_level_3: "FR-PAC"},
      // types: ["address"],
      strictBounds: true,
    };
    // const originAutocomplete = new google.maps.places.Autocomplete(originInput);
    const originAutocomplete = new google.maps.places.Autocomplete(originInput, options);
    // Specify just the place data fields that you need.
    originAutocomplete.setFields(["place_id"]);
    const destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput, options);
    destinationAutocomplete.setFields(["place_id"]);
    
    this.setupPlaceChangedListener(originAutocomplete, "ORIG");
    this.setupPlaceChangedListener(destinationAutocomplete, "DEST");
  //   this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
  //   this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
  //     destinationInput
  //   );
  //   this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
  }
  setupPlaceChangedListener(autocomplete, mode) {
    autocomplete.bindTo("bounds", this.map);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (!place.place_id) {
        window.alert("Veuillez selectionner une adresse dans la liste.");
        return;
      }

      if (mode === "ORIG") {
        this.originPlaceId = place.place_id;
      } else {
        this.destinationPlaceId = place.place_id;
      }
      this.route();
    });
  }
  route() {
    if (!this.originPlaceId || !this.destinationPlaceId) {
      return;
    }
    const me = this;
    this.directionsService.route(
      {
        origin: { placeId: this.originPlaceId },
        destination: { placeId: this.destinationPlaceId },
        travelMode: this.travelMode,
      },
      (response, status) => {
        if (status === "OK") {
          me.directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }
}

function calculerPrixCourse(distance){
  let prix,
      tauxMin = 5.5,
      taux1 = 0.75,// de 1 a 3km
      taux2 = 1,// de 3 a 8km
      taux3 = 1,// de 8 a 10km
      taux4 = 1,// de 10 a 15km
      taux5 = 2,// de 15 a 35km
      taux6 = 2.3;// au dessus de 35km

  if(distance <= 1){
    prix = tauxMin;
  }else if(distance <= 3){ // de 1 a 3km
    prix = tauxMin + ((distance - 1) * taux1);
  }else if(distance <= 8){ // de 3 a 8km
    tauxMin += (2 * taux1);
    prix = tauxMin + ((distance - 3) * taux2);
  }else if(distance <= 10){ // de 8 a 10km
    tauxMin += (2 * taux1) + (5 * taux2);
    prix = tauxMin + ((distance - 8) * taux3);
  }else if(distance <= 15){ // de 10 a 15km
    tauxMin += (2 * taux1) + (5 * taux2) +  (2 * taux3);
    prix = tauxMin + ((distance - 10) * taux4);
  }else if(distance <= 35){ // de 15 a 35km
    tauxMin += (2 * taux1) + (5 * taux2) +  (2 * taux3) + (5 * taux4);
    prix = tauxMin + ((distance - 15) * taux5);
  }else{ // au dessus de 35km
    tauxMin += (2 * taux1) + (5 * taux2) +  (2 * taux3) + (5 * taux4) + (20 * taux5);
    prix = tauxMin + ((distance - 35) * taux6);
  }

  // ICI LIVREUR
  let prixLivreur,
      tauxMinLivreur = 4,
      taux1Livreur = 0.55,// de 1 a 3km
      taux2Livreur = 0.65,// de 3 a 5km
      taux3Livreur = 0.75, // de 5 a 7km
      taux4Livreur = 0.85,// de 7 a 10km
      taux5Livreur = 1;// au dessus de 10km

  if(distance <= 1){
    prixLivreur = tauxMinLivreur;
  }else if(distance <= 3){ // de 1 a 3km
    prixLivreur = tauxMinLivreur + ((distance - 1) * taux1Livreur);
  }else if(distance <= 5){ // de 3 a 5km
    tauxMinLivreur += (2 * taux1Livreur);
    prixLivreur = tauxMinLivreur + ((distance - 3) * taux2Livreur);
  }else if(distance <= 7){ // de 5 a 7km
    tauxMinLivreur += (2 * taux1Livreur) + (2 * taux2Livreur);
    prixLivreur = tauxMinLivreur + ((distance - 5) * taux3Livreur);
  }else if(distance <= 10){ // de 7 a 10km
    tauxMinLivreur += (2 * taux1Livreur) + (2 * taux2Livreur) + (2 * taux3Livreur);
    prixLivreur = tauxMinLivreur + ((distance - 7) * taux4Livreur);
  }else{ // au dessus de 10km
    tauxMinLivreur += (2 * taux1Livreur) + (2 * taux2Livreur) + (2 * taux3Livreur) + (3 * taux4Livreur);
    prixLivreur = tauxMinLivreur + ((distance - 10) * taux5Livreur);
  }

  let prixTva = prix * 1.2;

  $('#reponse-devis p').remove(); // SUPPRIMER LES 3 <p> CREER A CHAQUE FOIS QUON REFAIS UNE SIMULATION
  let newpArrivé = document.createElement('p'),     
      newpDistance = document.createElement('p'),       
      newpPrix = document.createElement('p');


  newpArrivé.innerHTML  = '<i class="far fa-clock"></i>Prise en charge dans <strong> 20 </strong> min';
  newpDistance.innerHTML = '<i class="fas fa-road"></i><strong>'+ distance +'</strong> km';
  newpPrix.innerHTML = '<i class="fas fa-credit-card"></i><strong>' + prixTva.toFixed(2) + '</strong> €';
  $('#reponse-devis').prepend(newpArrivé); // ICI LIVREUR ET WOOZOO SANS TVA
  $('#reponse-devis div').append(newpDistance, newpPrix);
  
  // FAIRE DISPARAITER BOUTTON "estimez livraison"
  $('#estimer').css('display','none');
  // FAIRE APPARAITRE BOUTTON "valider cette livraison" ET <p>nouvelle estimation</p>
  $('#valider_estimation').css('display','block');
  $('#nouvelle_estimation').css('display','block');
}

function calculerDistance(){
  const origin = document.getElementById("origin-input").value;
  const destination = document.getElementById("destination-input").value;
  const request = {
    origins: [origin],
    destinations: [destination],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false,
  };
  const service = new google.maps.DistanceMatrixService();

  service.getDistanceMatrix(request).then((response) => {
  var valueMetre = response["rows"][0]["elements"][0]["distance"]["value"];
  // var distanceKm = Math.round(valueMetre / 1000);
  var distanceKm = (valueMetre / 1000).toFixed(1);
  calculerPrixCourse(distanceKm);
  });
}

// LANCER FONCTION CALCULER DISTANCE QUAND ON CLICK SUR LE BOUTTON id="estimer"
$( "#estimer" ).click(function() {
  calculerDistance();
});

// FONCTION INVERSER INPUT
$( "#double-arrow" ).click(function() {
let inputOrigin = document.getElementById("origin-input");
let inputDestination = document.getElementById("destination-input");
let enregistrer = inputOrigin.value;
inputOrigin.value = inputDestination.value;
inputDestination.value = enregistrer;
calculerDistance();
});

// NOUVELLE ESTIMATION
$("#nouvelle_estimation").click(function(){
  $("#origin-input").val(""); // REMETTRE INPUT ORIGIN A 0
  $("#destination-input").val(""); // REMETTRE INPUT DESTINATION A 0
  $("#reponse-devis p").css("display","none"); // EFFACER <p> DEVIS
  $("#valider_estimation").css("display","none"); // EFFACER BOUTTON
  $("#nouvelle_estimation").css("display","none"); // EFFACER <p> NOUVELLE ESTIMATION
  $("#estimer").css("display","block"); // FAIRE APPARAITRE BOUTTON ESTIMER
});

// calculerPrixCourse(6);
