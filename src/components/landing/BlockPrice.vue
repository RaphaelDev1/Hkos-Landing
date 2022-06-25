<template>
        <div class="container" id="3">  <!--Price Container-->
            <div class="text-center textblock1" style="margin-top: 100px; margin-bottom: 100px;">
                <h1 class="text2"> Des tarifs simples et transparents</h1>
            </div>

            <div class="priceContainer row" >  <!--PricesBLocks-->
                <div class="priceContainer2 col-lg">
                    <h3 class="text5">MENSUEL</h3>
                    <p class="text3">Arretez quand vous voulez</p>
                    <h1 class="text6">25€</h1>
                    <span class="text3">HT/mois</span>
                </div>

                <div class="priceContainer2 col-lg">
                    <h3 class="text5">ANNUEL</h3>
                    <p class="text3">Economisez 72€ par an</p>
                    <h1 class="text6">19€</h1>
                    <span class="text3">HT/mois</span>
                    <span class="text3">Paiement annuel de 228€</span>
                </div>

            </div>
        </div>

        <div class="container priceContainer">
            <div class="priceContainer3">
                <p><i class="fa-solid fa-check"></i>1 mois d'essai gratuit</p>
                <p><i class="fa-solid fa-check"></i>Création de devis, factures et contrats de travail en 1 clic</p>
                <p><i class="fa-solid fa-check"></i>Duplication de documents facille</p>
                <p><i class="fa-solid fa-check"></i>Envoi des documents par email</p>
                <p><i class="fa-solid fa-check"></i>Gestion des clients et fournisseurs</p>
                <p><i class="fa-solid fa-check"></i>Bibliothèques de produits et ouvrages</p>
                <p><i class="fa-solid fa-check"></i>Statistiques et pilotage</p>
                <p><i class="fa-solid fa-check"></i>Compatible loi anti-fraude TVA</p>
                <p><i class="fa-solid fa-check"></i>Signature électronique</p>
                <p><i class="fa-solid fa-check"></i>Mises à jour logicier incluses</p>
                <p><i class="fa-solid fa-check"></i>Assistance gratuite et illimitée</p>
            </div>
        </div>
</template>

<script>
export default {
  name: 'BLockPrice',
  props: {
    msg: String
  }
}
</script>