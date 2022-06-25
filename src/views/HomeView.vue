<template>
  <MenuMain/>

  <BlockFirst/>

  <TextBlock/>

  <BlockBigImage/>

  <BlockImageLeft v-for="(item, index) in list" :key="index" :titre="item.titre" :img="item.img" :text="item.text" :btntext="item.btntext" :index="index" />


  <TextBlock/>

  <BlockPrice/>

  <TextBlock2/>

  <BlockThreeImg/>

  <BlockBlue/>

  <BlockQuestions/>

  <BlockFooter/>
</template>

<script>
import MenuMain from '../components/headers/MenuMain.vue'
import BlockFirst from '../components/landing/BlockFirst.vue'
import BlockImageLeft from '../components/landing/BlockImageLeft.vue'
import TextBlock from '../components/landing/TextBlock.vue'
import TextBlock2 from '../components/landing/TextBlock2.vue'
import BlockBigImage from '../components/landing/BlockBigImage.vue'
import BlockPrice from '../components/landing/BlockPrice.vue'
import BlockThreeImg from '../components/landing/BlockThreeImg.vue'
import BlockBlue from '../components/landing/BlockBlue.vue'
import BlockFooter from '../components/landing/BlockFooter.vue'
import BlockQuestions from '../components/landing/BlockQuestions.vue'



export default {
  name: 'HomeView',

  data: ()=>({

        list: [
          { btntext: 'La facrturisation avec nous', titre: 'La gestion d’entreprise enfin <span class="span1">simplifiée</span>', text: 'Vos devis et factures en 5 minutes. Passez moins de temps au bureau, améliorez votre présentation et gagnez plus', img: '/img/img3.png' },

          { btntext: 'Créer un compte gratuit', titre: '<span class="span1">Facilitez</span> vos contractualisations', text: 'Vos contrats CDI - CDD - INTERIM - APPRENTIS-STAGE en 1 clic- Automatisation du contrat de travail - Historique de vos contrats - Avenant au contrat en 1 clic - Suivi de l’évolution de la carrière de votre employé', img: '/img/img4.png' },

          { btntext: 'Go START UP!', titre: 'Solution de gestion spéciale pour <span class="span1">START UP!</span>', text: 'Cette solution 3 en 1 est conçue sur mesure pour permettre aux PME, TPE, Auto-entrepreneurs de disposer des outils essentiels de gestion lors du démarrage de leurs activités. Notre solution centralise l’essentiel de votre comptabilité et donne de l’allure à vos documents comptables. ( design, identité visuelle, clarté, visibilité CA...)', img: '/img/img5.png' },

          { btntext: 'Créer un compte gratuit', titre: 'Artisans <span class="span1">profitez</span> de notre outil de gestion 3 en 1', text: 'Restez concentrés sur la création de vos oeuvres et votre métier. Nous nous chargeons dorganiser vos taches de gestions comptables et contractualisations via un outil 3 en 1. Devis, facturation, contractualisation, suivi évolution salariale, tableau dynamique de votre CA etc...', img: '/img/img6.png' },

          { btntext: 'La facrturisation avec nous', titre: 'Devis / Facture', text: 'Obtenez un devis et facture personnalisé avec votre logo en 1 clic. Créer des devis et factures et avoir l’historique sur le même espace client. Voir les devis facturés et obtenir votre CA. Enregistrer vos clients en base de données. Graphiques et indicateurs sur vos activités ...', img: '/img/img7.png' },

          { btntext: 'Créer un compte gratuit', titre: 'Acceder à vos outils de gestion sur Tablette, Ordinateur ou Telephone', text: 'Tous vos outils sont accessibles sur différents supports. Transportez vos outils partout sur vos téléphones, tablettes, ordinateur ... La flexibilité de notre solution vous accorde une légèreté dutilisation ainsi qu’une disponibilité en tout lieu!', img: '/img/img8.png' },
        ],


  }),


  components: {
    MenuMain,
    BlockFirst,
    TextBlock,
    TextBlock2,
    BlockBigImage,
    BlockImageLeft,
    BlockPrice,
    BlockThreeImg,
    BlockBlue,
    BlockFooter,
    BlockQuestions,
  }
}
</script>
