<template>
  <div class="container p-5 col-sm-10 col-lg-12 devisMain">
    <div class="border-bottom">
      <h3 class="fw-normal mb-5">Créer votre compte Hkos</h3>
    </div>
    <div class="devisGenerateur border-bottom pb-5 pt-5 row">
      <div class="devisGenerateurLeft col-lg">
        <!-- left -->

        <div class="pb-2">
          <label class="form-label">Quel est le nom de votre éntreprise?</label>
          <input class="form-control" v-model="form.companyName" type="text" />
        </div>

        <div class="pb-2">
          <label class="form-label"
            >Quel est le téléphone de votre éntreprise?</label
          >
          <input class="form-control" v-model="form.companyTel" type="text" />
        </div>

        <div class="pb-2">
          <label class="form-label"
            >Quel est le SIRET de votre éntreprise?</label
          >
          <input class="form-control" v-model="form.companySiret" type="text" />
        </div>

        <div class="pb-2">
          <label class="form-label"
            >Quel est le e-mail de votre éntreprise?</label
          >
          <input class="form-control" v-model="form.companyEmail" type="text" />
        </div>

        <div class="pb-2">
          <label class="form-label"
            >Quel est l'adresse de votre éntreprise?</label
          >
          <input
            class="form-control mb-2"
            v-model="form.companyAdresse"
            type="text"
            placeholder="Adresse"
          />
          <input
            class="form-control mb-2"
            v-model="form.companyVille"
            type="text"
            placeholder="Ville"
          />
          <input
            class="form-control mb-2"
            v-model="form.companyCP"
            type="text"
            placeholder="Code Postale"
          />
          <input
            class="form-control mb-2"
            v-model="form.companyPays"
            type="text"
            placeholder="Pays"
          />
        </div>
      </div>

      <div class="devisGenerateurRight col-lg">
        <!-- right -->

        <div class="pb-2">
          <label class="form-label">Choisissez votre login</label>
          <input class="form-control" v-model="form.login" type="text" />
        </div>

        <div class="pb-2">
          <label class="form-label">Choisissez votre mot-de passe</label>
          <input class="form-control" v-model="form.password" type="text" />
        </div>

        <div class="pb-2">
          <label class="form-label">Confirmez votre mot-de passe</label>
          <input class="form-control" type="text" />
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-center">
    <router-link class="btn btn-primary mb-4" to="/connection" @click="sendForm">
      Créer mon compte Hkos</router-link
    >
  </div>
</template>

<script>
export default {
  name: "RegistrationBlock",
  props: {
    msg: String,
  },

  data() {
    return {
      status: false,
      form: {
        companyName: "",
        companyTel: "",
        companySiret: "",
        companyEmail: "",

        companyAdresse: "",
        companyVille: "",
        companyCP: "",
        companyPays: "",

        login: "",
        password: "",
      },
    };
  },
  methods: {
    async sendForm() {
      let res = await fetch("https://hkos22.herokuapp.com/save-facture", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.form),
      });

      let data = await res.text();

      console.log(data);

      if (data == "ok") this.status = true;
    },
  },
};
</script>