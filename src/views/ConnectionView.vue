<template>
  <MenuInscription/>
  <ConnectionBlock/>
</template>

<script>
import ConnectionBlock from '../components/user/ConnectionBlock.vue'
import MenuInscription from '../components/headers/MenuInscription.vue'





export default {
  name: 'HomeView',

  data: ()=>({

  }),


  components: {
    ConnectionBlock,
    MenuInscription
  }
}
</script>
