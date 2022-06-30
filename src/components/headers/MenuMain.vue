<template>
  <!-- Navbar + Head Block(Space)  -->
  <nav class="navbar navbar-expand-lg navbar-light menumain sticky-top">
    <a class="navbar-brand" href="#"
      ><img src="img/logo.png" class="menulogo"
    /></a>
    <button
      class="navbar-toggler me-2"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse justify-content-between menumain"
      id="navbarNav"
    >
      <ul class="navbar-nav menuul">
        <li class="nav-item">
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
        <router-link
          class="btn btn-light btn2"
          style="
            background-color: rgb(255, 255, 255);
            padding: 4px 16px;
            margin: 8px;
            border: 1px solid rgb(197, 194, 194);
          "
          to="/connection"
        >
          Connexion</router-link
        >
        <router-link
          class="btn btn2"
          style="
            background-color: rgb(27, 179, 27);
            color: white;
            padding: 4px 16px;
            margin: 8px;
          "
          to="/new-account"
        >
          Créer un compte</router-link
        >
      </ul>
    </div>


    
  </nav>


  <!--Head Block (Space)--->
  <div style="display:none; position : fixed; background:white; width:100%" id="999">
    <div class="d-flex flex-column sticky-top">
        <div class="p-2 d-flex justify-content-center  border-top">
            <a class="menulink" href="#1">Logiciel de facturisation gratuit</a>
        </div>

        <div class="p-2 d-flex justify-content-center  border-top">
            <a class="menulink" href="#4">Fonctionalités</a>
        </div>
        <div class="d-flex justify-content-center  border-top p-2">
            <a class="menulink" href="#3">Tarifs</a>
        </div>

        <div class="p-2 d-flex justify-content-center border">
            <router-link class="btn btn-light btn2 me-2 ms-5" style="background-color: rgb(255, 255, 255); padding: 4px 16px; margin: 8px; border: 1px solid rgb(197, 194, 194);" to="/connection"> Connexion</router-link>
            <router-link class="btn btn2" style="background-color: rgb(27, 179, 27); color: white; padding: 4px 16px; margin: 8px;" to="/new-account"> Créer un compte</router-link>
        </div>
      </div>
      </div>


      <div class="head-block">   </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "MenuMain",
  mounted() {
    $(".navbar-toggler").on("click", () => {
      $("#999").slideToggle();
    });



    $(".menulink").on("click", () => {
      $("#999").slideToggle();
    });


  },
  props: {
    msg: String,
  },
};
</script>