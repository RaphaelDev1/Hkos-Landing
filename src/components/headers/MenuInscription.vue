<template>



<!-- Navbar  -->
        <nav class="navbar navbar-expand-lg navbar-light menumain2 sticky-top">
                <a class="navbar-brand" href="#"><img src="img/logo2.png" class="menulogo"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between menumain2" id="navbarNav">
                  <ul class="navbar-nav menuul">
                  </ul>

                  <ul class="menuul navbar-nav">

                    
                    <router-link class="btn btn-success btn2" style="background-color: rgb(27, 179, 27); color: white; padding: 4px 16px; margin: 8px;" to="/newaccount"> Créer un compte</router-link>
 

                </ul>
                </div>
              </nav>
              
 <!--Head Block (Space)--->
<div class="head-block"></div>

</template>

<script>
export default {
  name: 'MenuInscription',
  props: {
    msg: String
  }
}
</script>