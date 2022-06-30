<template>
  <MenuInscription/>
  <RegistrationBlock/>

</template>

<script>
import RegistrationBlock from '../components/user/RegistrationBlock.vue'
import MenuInscription from '../components/headers/MenuInscription.vue'




export default {
  name: 'NewAccountView',

  data: ()=>({

  }),


  components: {
    RegistrationBlock,
    MenuInscription,

  }
}
</script>