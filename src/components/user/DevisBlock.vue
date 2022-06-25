<template>
        <div class="container"><!-----first container---->
            <div class="main-block1 row"> 
                <div class="main-block1l col-md"> <!-----left---->

                    <div class="btndeviscontainer">
                        <router-link to="/generateur-devis" class="btn btndevis" style="background-color: rgb(50, 141, 245); color: white; padding: 2px 14px; margin: 8px;">+ Nouveau Devis

                        </router-link>
                    </div>


                    <div class="devisline mt-4" style="    border-bottom: 1px solid grey;">
                      <div class="devislineblock"><p class="devistext1">Numero</p></div>

                      <div class="devislineblock"><p class="devistext1">Date</p></div>

                      <div class="devislineblock"><p class="devistext1">Client</p></div>

                      <div class="devislineblock"><p class="devistext1">Montant TTC</p></div>
  

                    </div>

                    <div class="devisline mt-4">
                      <div class="devislineblock"><p class="devistext2">123-345-123</p></div>

                      <div class="devislineblock"><p class="devistext2">01-06-2022</p></div>

                      <div class="devislineblock"><p class="devistext2">Hkos</p></div>
                      
                      <div class="devislineblock"><p class="devistext2">1000$</p></div>
  

                    </div>
                </div>

                


            </div>
        </div>
</template>

<script>
export default {
  name: 'DevisBlock',
  props: {
    msg: String
  }
}
</script>