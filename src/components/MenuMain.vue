<template>



<!-- Navbar + Head Block(Space)  -->
            <nav class="navbar navbar-expand-lg navbar-light menumain sticky-top">
                <a class="navbar-brand" href="#"><img src="img/logo.png" class="menulogo"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between menumain" id="navbarNav">
                  <ul class="navbar-nav menuul">
                      
                    <li class="nav-item active">
                      <a class="" href="#1">Logiciel de facturisation gratuit</a>
                    </li>
                    <li class="nav-item">
                      <a class="" href="#4">Fonctionalités</a>
                    </li>
                    <li class="nav-item">
                      <a class="" href="#3">Tarifs</a>
                    </li>
                    <li class="nav-item">
                      <a class="" href="#questions">A propos</a>
                    </li>
                  </ul>

                  <ul class="menuul navbar-nav">
                    <button class="btn btn-light btn2" style="background-color: rgb(255, 255, 255); padding: 4px 16px; margin: 8px; border: 1px solid rgb(197, 194, 194);">Connexion</button>
                    <button class="btn btn-success btn2" style="background-color: rgb(27, 179, 27); color: white; padding: 4px 16px; margin: 8px;">Créer un compte</button>
                </ul>
                </div>
              </nav>
              
 <!--Head Block (Space)--->
<div class="head-block"></div>

</template>

<script>
export default {
  name: 'MenuMain',
  props: {
    msg: String
  }
}
</script>