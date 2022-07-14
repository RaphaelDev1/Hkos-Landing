<template>
  <div class="container p-5 col-sm-10 col-lg-12 devisMain">
    <div class="border-bottom">
      <h3 class="fw-normal mb-5">Contrat de travail</h3>
    </div>
    <div class="devisGenerateur border-bottom pb-5 pt-5 row">
      <div class="devisGenerateurLeft col-lg">
        <!-- left -->

        <div class="pb-2">
          <label class="form-label">Nom</label>
          <input class="form-control" v-model="form.contratnom" type="text" />
        </div>

        <div class="pb-2">
          <label class="form-label">Prénom</label>
          <input class="form-control" v-model="form.contratprenom" type="text" />
        </div>

        <div class="pb-2">
          <label class="form-label">Date de naissance</label>
          <input class="form-control" v-model="form.contratdn" type="date" />
        </div>

        <div class="pb-2">
          <label class="form-label">Lieu de naissance</label>
          <input class="form-control" v-model="form.contratln" type="text" />
        </div>

        <div class="pb-2">
          <label class="form-label">Adresse</label>
          <input class="form-control" v-model="form.contratadresse" type="text" />
        </div>

        <div class="pb-2">
          <label class="form-label">N° Sécurité sociale</label>
          <input class="form-control" v-model="form.contratss" type="number" />
        </div>

        <div class="pb-2">
          <label class="form-label">N° CNI ou Sejour</label>
          <input class="form-control" v-model="form.contratcni" type="number" />
        </div>

        <div class="pb-2">
          <label class="form-label">Date de validité CNI</label>
          <input class="form-control" v-model="form.contratdcni" type="date" />
        </div>
      </div>

      <div class="devisGenerateurRight col-lg">
        <!-- right -->

        <div class="pb-2">
          <label class="form-label">Nombre d'heures par semaine</label>
          <input class="form-control" v-model="form.contraths" type="number" />
        </div>

        <div class="pb-2">
          <label class="form-label">Salaire brut</label>
          <input class="form-control" v-model="form.contratsb" type="number" />
        </div>

        <div class="pb-2">
          <label class="form-label">Grade embauche</label>
          <input class="form-control" v-model="form.contratgrade" type="text" />
        </div>

        <div class="pb-2">
          <label class="form-label">Titre de post</label>
          <input class="form-control" v-model="form.contratpost" type="text" />
        </div>

         <div class="pb-2">
          <label class="form-label">Date de demarrage</label>
          <input class="form-control" v-model="form.contratdemarrage" type="date" />
        </div>

         <div class="pb-2">
          <label class="form-label">Date de fin</label>
          <input class="form-control" v-model="form.contratfin" type="date" />
        </div>

        <div class="pb-2">
          <label class="form-label">Date de signature contrat</label>
          <input class="form-control" v-model="form.contratsignature" type="date" />
        </div>
        <div class="pb-2">
          <label class="form-label">Date d'éntrée en fonction</label>
          <input class="form-control" v-model="form.contratdatefonction" type="date" />
        </div>

        <div class="pb-2">
          <label class="form-label">Durée préavis</label>
          <input class="form-control" type="text" />
        </div>






      </div>
    </div>
    <!--Devis info -->


    <!-- table -->

  </div>

  <a href="/upload/output.pdf" download="" v-if="status">Download</a>

  <div class="d-flex justify-content-center m-4" v-else>
    <button
      class="btn btn2"
      style="
        background-color: rgb(50, 141, 245);
        color: white;
        padding: 6px 18px;
        margin: 8px;
      "
      @click="sendForm"
    >
      Generer mon devis
    </button>
  </div>
</template>

<script>

export default {
  name: "ContratBlockGenerateur",
  props: {
    msg: String,
  },

  data() {
    return {
      status: false,
      form: {
        contratnom: "",
        contratprenom: "",
        contratatdn:"",
        contratln: "",
        contratadresse: "",

        contratss: "",
        contratcni : "",
        contratdcni : "",
        contraths : "",
        contratsb : "",

        contratgrade : "",
        contratpost : "",
        contratdemarrage : "",
        contratfin : "",
        contratsignature : "",

        contratdatefonction : "",

      },
    };
  },
  methods: {
    async sendForm() {
      let res = await fetch("http://localhost:8000/save-contrat", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.form),
      });

      let data = await res.text();

      console.log(data);

      if (data == "ok") this.status = true;
    },
  },
  updated() {
    console.log(this.form);
  },
};
</script>

