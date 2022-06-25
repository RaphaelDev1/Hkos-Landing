<template>
<div class="container"><!-----1 container---->
            <div class="main-block1 row"> 
                <div class="main-block1l col-md"> <!-----left---->
                    <div class="heading-info"><h1 class="text1">Votre logiciel DeskForce 3.1</h1></div>
                    <div class="paragraphe-info"><p class="text3">3 outils en 1 pour faciliter la gestion de votre entreprise<br>DEVIS - FACTURE - CONTRAT DE TRAVAIL <br>PME gagnez du temps avec notre solution pensée pour vous</p></div>
                    <div class="btn1-container"><button class="btn btn-lg fs-5" style="background-color: rgb(27, 179, 27); color: white; padding: 20px 25px;">Essayez gratuitement</button></div>
                </div>

                <div class="main-block1r col-md"> <!-----right IMG---->
                    <img src="img/img1.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>

</template>

<script>
export default {
  name: 'BlockFirst',
  props: {
    titre: String,
    btntext: String,
    text: String,
  }
}
</script>