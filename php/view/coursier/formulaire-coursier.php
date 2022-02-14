<form method="POST" action="index.php#devis" id="form_coursier">
    <div class="popup-formulaire_coursier">
        <p>Remplir ce formulaire d'inscription pour faire partie de l'équipe Woozoo</p>
    </div>
    <h4>Rejoins nous dès maintenant !</h4>
    <div>
        <input type="text" name="nom" id="nom" required placeholder="Nom" maxlength="160">
        <input type="text" name="prenom" id="prenom" required placeholder="Prenom" maxlength="160">
    </div>
    <div>
        <input type="text" name="email" id="email" required placeholder="Email" maxlength="160">
        <input type="text" name="telephone" id="telephone" required placeholder="Téléphone" maxlength="160">
    </div>
    <div>
        <input type="text" name="ville" id="ville" required placeholder="Ville" maxlength="160">
        <input type="text" name="code_postal" id="code_postal" required placeholder="Code postal" maxlength="160">
    </div>
    <select name="vehicule" id="vehicule" required>
        <option value="">Sélectionne un véhicule</option>
        <option value="velo">Vélo</option>
        <option value="scooter">Scooter</option>
        <option value="scooter-electrique">Scooter éléctrique</option>
        <option value="voiture">Voiture</option>
        <option value="utilitaire">Utilitaire</option>
    </select>
    <select name="statut_pro" id="statut_pro" required>
        <option value="">Sélectionne un statut pro</option>
        <option value="auto-entrepreneur">Auto-entrepreneur</option>
        <option value="micro-entreprise">Micro-entreprise(SASU,EURL)</option>
        <option value="sarl">SARL, SAS, SA</option>
        <option value="autre">Autre</option>
    </select>
    <div id="capacite">
        <p>Detenez vous l'attestation de capacité de transport?</p>
        <div>
            <input type="radio" id="capacite1" name="capacite_transport" value="oui">
            <label for="capacite1">Oui</label>
        </div>
        <div>
            <input type="radio" id="capacite2" name="capacite_transport" value="non">
            <label for="capacite2">Non</label>
        </div>
    </div>
    <button type="submit">S'inscrire</button>
    <input type="hidden" name="formIdentifiant" value="inscription_coursier">
</form>