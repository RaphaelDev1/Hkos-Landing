<template>
  <MenuDashboard/>
  <FactureBlockGenerateur/>
</template>

<script>
import FactureBlockGenerateur from '../components/user/FactureBlockGenerateur.vue'
import MenuDashboard from '../components/headers/MenuDashboard.vue'




export default {
  name: 'FactureGenerateurView',

  data: ()=>({


  }),


  components: {
    FactureBlockGenerateur,
    MenuDashboard
  }
}
</script>