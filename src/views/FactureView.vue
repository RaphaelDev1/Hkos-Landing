<template>
  <MenuDashboard/>
  <FactureBlock/>
</template>

<script>
import FactureBlock from '../components/user/FactureBlock.vue'
import MenuDashboard from '../components/headers/MenuDashboard.vue'




export default {
  name: 'DashboardView',

  data: ()=>({

  }),


  components: {
    FactureBlock,
    MenuDashboard
  }
}
</script>