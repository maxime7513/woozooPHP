<section id="devis">
    <div id="map"></div>
    <div class="formulaire">
        <h3>Estimez le prix de votre livraison<br>en quelques clics</h3>
        <div id="form-devis">
            <label>
                <img src="./assets/img/devis/colis.png" alt="">
                <input type="text" name="adresse1" id="origin-input" required placeholder="Adresse de retrait" maxlength="160">
                <img src="./assets/img/devis/double-arrow.png" alt="" id="double-arrow">
            </label>
            <label>
                <img src="./assets/img/devis/position.png" alt="">
                <input type="text" name="adresse2" id="destination-input" required placeholder="Adresse de livraison" maxlength="160">
            </label>
            <button id="estimer">Estimez Livraison</button>
            <div id="reponse-devis">
                <div></div>
            </div>
            <div>
                <button id="valider_estimation" onclick="popup('#popup-livraison')">Confirmer cette livraison</button>
                <p id="nouvelle_estimation"><i class="fas fa-redo"></i>Lancer une nouvelle estimation</p>
            </div>
        </div>
    </div>
</section>