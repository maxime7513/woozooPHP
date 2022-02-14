<header>
    <a href="index.php"><img src="./assets/img/header/logo-woozoo.png" alt="logo woozoo"></a>
    <nav>
        <button id="menu-hamburger" class="cache"><i class="fas fa-bars"></i><i class="fas fa-times cache"></i></button>
        <div class="header-dropdown">
            <a href="index.php">Accueil</a>
            <!-- <a href="javascript:ancre('#devis','100','2500')">Nos tarifs</a> -->
            <div id="solution_hover">
                <span>nos solutions</span>
                <div class="block-hover"></div>
                <div id="dropdown_nos-solutions"> <!-- dropdown nos solutions -->
                    <div class="fleche-dropdown"></div>
                    <a class="course-demande_p"><img src="./assets/img/professionnel/offre/mobile_course-demande3.png" alt="">Course à la demande</a>
                    <a class="course-securite_p"><img src="./assets/img/professionnel/offre/sac-scelle2.png" alt="">Course haute sécurité</a>
                    <a class="mise-disposition_p"><img src="./assets/img/professionnel/offre/coursier_bleu.png" alt="">Mise à disposition</a>
                    <a class="optimisation-tournee_p"><img src="./assets/img/professionnel/offre/mockup_tournee.png" alt="">Optimisation de tournées</a>
                </div>
            </div>
            <div id="secteurs_hover">
                <span>nos secteurs d'activité</span>
                <div class="block-hover"></div>
                <div id="dropdown_nos-secteurs"> <!-- dropdown nos solutions -->
                    <div class="fleche-dropdown"></div>
                    <a href="#commerce" class="commerce_p"><img src="./assets/img/header/shop.svg" alt="">Commerce</a>
                    <a href="#luxe" class="luxe_p"><img src="./assets/img/header/mode.svg" alt="">Retail & luxe</a>
                    <a href="#e-commerce" class="e-commerce_p"><img src="./assets/img/header/online.svg" alt="">E-commerce</a>
                    <a href="#restaurant" class="restaurant_p"><img src="./assets/img/header/restaurant.svg" alt="">Restaurant</a>
                    <!-- <p class="messagerie-express_p"><img src="./assets/img/header/mails.svg" alt="">Messagerie express</p> -->
                </div>
            </div>
            <button onclick="popup('#popup-contact')">Contactez un commercial</button>
            <button onclick="popup('#popup-livraison')">Lancez une livraison</button>
        </div>
    </nav>
</header>
<div class="transition_secteurs"></div> <!-- BACKGROUND TRANSITION SOLUTIONS -->
<div id="professionnel"> <!-- POUR BACKGROUND MAP ET LA TRANSITION SECTEURS -->