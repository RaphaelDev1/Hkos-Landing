<template>
            <div class="container"><!-----first container---->
            <div class="main-block1 row"> 


                <div class="main-block1l col-md"> <!-----left---->
                    <div class="heading-info2"><h1 class="text11">Votre entreprise</h1></div>
                    <div class="paragraphe-info2"><p class="text12">Derniers devis</p></div>

                    <hr>

                    <div><p class="text13">XXX-XXX-XXX-XXX</p></div>

                    <div class="paragraphe-info2"><p class="text12">Dernièrs factures</p></div>

                    <hr>

                    <div ><p class="text13">XXX-XXX-XXX-XXX</p></div>

                    <div class="paragraphe-info2"><p class="text12">Derniers contrats</p></div>

                    <hr>

                    <div><p class="text13">XXX-XXX-XXX-XXX</p></div>


                    
                </div>

                <div class="container-fluid col-md"> <!-----right---->
                    
                    
                    <div class="main-block10">
                        
                        <div class="border container-fluid col-md"><p class="text13">CA de Mai 2022</p>

                            <div class="main-block10"><p class="text15">XXX-XX $</p></div>
                        
                        </div>


                        <div class="border ms-2 col-md container-fluid"><p class="text13">TVA collectée en Mai</p>

                            <div class="main-block10"><p class="text15">XXX-XX $</p></div>
                        
                        </div>
                    </div>

                    <div class="border  mt-2 container-fluid"> <p class="text13">Chiffres d'affaires</p>


                        <div ><img src="img/img11.png" class="img-fluid"></div>

                    </div>

                </div>
            </div>
            </div>

</template>

<script>
export default {
  name: 'DashboardBlock',
  props: {
    msg: String
  }
}
</script>