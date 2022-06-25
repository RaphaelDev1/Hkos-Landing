<template>
  <MenuDashboard/>
  <DevisBlock/>
</template>

<script>
import DevisBlock from '../components/user/DevisBlock.vue'
import MenuDashboard from '../components/headers/MenuDashboard.vue'




export default {
  name: 'DashboardView',

  data: ()=>({

  }),


  components: {
    DevisBlock,
    MenuDashboard
  }
}
</script>