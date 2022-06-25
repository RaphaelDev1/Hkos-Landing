<template>
  <MenuDashboard/>
  <DashboardBlock/>
</template>

<script>
import DashboardBlock from '../components/user/DashboardBlock.vue'
import MenuDashboard from '../components/headers/MenuDashboard.vue'




export default {
  name: 'DashboardView',

  data: ()=>({

  }),


  components: {
    DashboardBlock,
    MenuDashboard
  }
}
</script>
