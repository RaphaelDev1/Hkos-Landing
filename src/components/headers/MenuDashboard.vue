<template>
  <nav class="navbar navbar-expand-lg navbar-light menumain2 sticky-top">
    <a class="navbar-brand" href="#"
      ><img src="img/logo2.png" class="menulogo"
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
      class="collapse navbar-collapse justify-content-between menumain2"
      id="navbarNav"
    >
      <ul class="navbar-nav menuul">
        <li class="nav-item active">
          <router-link to="/dashboard">Tableau de bord</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/devis">Devis</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/facture">Facture</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contrat">Contrat de travail</router-link>
        </li>
      </ul>

      <ul class="menuul navbar-nav">
        <router-link
          class="btn btn2"
          to="/"
          style="
            background-color: rgb(255, 255, 255);
            color: rgb(50, 141, 245);
            padding: 2px 14px;
            margin: 8px;
            border: 1px solid rgb(197, 194, 194);
          "
        >
          Déconnexion
        </router-link>
        <button
          class="btn btn2"
          style="
            background-color: rgb(50, 141, 245);
            color: white;
            padding: 2px 14px;
            margin: 8px;
            border: 1px solid white;
          "
        >
          Mon compte
        </button>
      </ul>
    </div>
  </nav>

  <div
    style="display: none; position: fixed; background: white !important; width: 100%"
    id="999"
  >
    <div class="d-flex flex-column sticky-top" >
      <div class="p-2 d-flex justify-content-center border-top">
        <router-link to="/dashboard" class="menulink"
          >Tableau de bord</router-link
        >
      </div>

      <div class="d-flex justify-content-center border-top p-2" style="background: white !important ">
        <router-link to="/devis" class="menulink" >Devis</router-link>
      </div>

       <div class="d-flex justify-content-center border-top p-2">
        <router-link to="/facture" class="menulink">Facture</router-link>
      </div>

      <div class="d-flex justify-content-center border-top p-2">
        <router-link to="/contrat" class="menulink">Contrat de travail</router-link>
      </div>

      <div class="p-2 d-flex justify-content-center border">
         <router-link
          class="btn btn2"
          style="
            background-color: rgb(50, 141, 245);
            color: white;
            padding: 2px 14px;
            margin: 8px;
          "
          to=""
        >
          Mon compte
        </router-link>
        <router-link
          class="btn btn2"
          style="
            background-color: white;
            color: black;
            padding: 4px 16px;
            margin: 8px;
            border: 1px solid black;
          "
          to="/"
        >
         Déconnexion</router-link
        >
      </div>
    </div>
  </div>

  <!--Head Block (Space)--->
  <div class="head-block2"></div>
</template>

<script>
import $ from "jquery";

export default {
  name: "MenuDashboard",
  mounted() {
    $(".navbar-toggler").on("click", () => {
      $("#999").slideToggle();
    });

    // $(".menulink").on("click", () => {
    //   $("#999").slideToggle();
    // });
  },
  props: {
    msg: String,
  },
};
</script>