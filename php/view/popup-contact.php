<div id="popup-contact">
    <i onclick="popup('#popup-contact')" class="far fa-times-circle"></i>
    <p><i class="fas fa-phone-square-alt"></i>04 960 960</p>
    <!-- <p>* prix d'un appel local</p> -->
    <div class="formulaire">
        <h4>contactez-nous</h3>
        <form action="contact.php" method="POST">
            <div>
                <input type="text" name="nom_contact" required placeholder="Votre nom">
                <input type="text" name="entreprise_contact" placeholder="Raison sociale" maxlength="160">
            </div>
            <div>
                <input type="text" name="tel_contact" placeholder="Numéro de telephone">
                <input type="email" name="email_contact" required placeholder="Votre email">
            </div>
            <div>
                <textarea name="message_contact" cols="12" rows="6" required placeholder="Votre message ..."></textarea>
            </div>
            <button type="submit" name="sent-contact">Envoyer<i class="far fa-paper-plane"></i></button>
            <!-- <input type="hidden" name="recaptcha_response" id="recaptchaResponse" data-badge="inline"> -->
        </form>
    </div>
</div>