<template>
  <MenuDashboard/>
  <DevisBlockGenerateur/>
</template>

<script>
import DevisBlockGenerateur from '../components/user/DevisBlockGenerateur.vue'
import MenuDashboard from '../components/headers/MenuDashboard.vue'




export default {
  name: 'DevisGenerateurView',

  data: ()=>({


  }),


  components: {
    DevisBlockGenerateur,
    MenuDashboard
  }
}
</script>