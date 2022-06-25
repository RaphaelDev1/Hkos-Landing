<template>


<div class="container logocontainer">  <!---14th container---->
        <img src="img/logo.png">
    </div>

        <div class="container">
            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <div class="col-lg">
                    <h5 class="text4"> Produit</h5>
                        <div class="d-flex flex-column">
                            <a class="footerlink" href="#devisfacture">Devis</a>
                            <a class="footerlink" href="#devisfacture">Factrure</a>
                            <a class="footerlink" href="#contrat">Contrat</a>
                            <a class="footerlink" href="#contrat">CDI/CDD</a>
                            <a class="footerlink" href="#3">Tarifs</a>
                        </div>
                </div>


        
                <div class="col-lg">
                    <h5 class="text4"> Entreprise</h5>
                        <div class="d-flex flex-column">
                            <a class="footerlink" href="#4">Digitalisation</a>
                            <a class="footerlink" href="#efacture">E-facturisation</a>
                            <a class="footerlink" href="#start-up">Solution Start-Up</a>
                            <a class="footerlink" href="#questions">Outil 3 en 1</a>
                        </div>
                </div>
           

            
                <div class="col-lg">
                    <h5 class="text4"> Langues</h5>
                        <div class="d-flex flex-column">
                            <a class="footerlink" href="#">Francais</a>
                            <a class="footerlink" href="#">Anglais</a>
                        </div>
                </div>

                <div class="col-lg">
                    <h5 class="text4"> Suivez-nous</h5>
                        <div class="d-flex flex-column">
                            <a class="footerlink" href="https://www.linkedin.com/in/hkos-solutions-72814b240/">Linkeldn</a>
                            <a class="footerlink" href="https://www.instagram.com/hkos.logiciels">Instagramm</a>
                        </div>
                </div>
            </div>
         </div>

        <hr class="separatedl">

        <div class="container logocontainer">  <!---14th container---->
            <img src="img/logo.png">
            <div class="copyrightcontainer"><p class="text3">Copyright © 2022 ElyOs<br>
                30, rue de Godot de Mauroy, 75000 Paris, France</p></div>
        </div>
</template>

<script>
export default {
  name: 'BLockFooter',
  props: {
    msg: String
  }
}
</script>