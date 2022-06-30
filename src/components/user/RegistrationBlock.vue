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
          <input class="form-control" type="text" />
        </div>

        <div class="pb-2">
          <label class="form-label">Quel est le téléphone de votre éntreprise?</label>
          <input class="form-control" type="text" />
        </div>

        <div class="pb-2">
          <label class="form-label">Quel est le SIRET de votre éntreprise?</label>
          <input class="form-control" type="text" />
        </div>

        <div class="pb-2">
            <label class="form-label">Quel est le e-mail de votre éntreprise?</label>
            <input class="form-control" type="text" />
          </div>

        
      </div>

      <div class="devisGenerateurRight col-lg">
        <!-- right -->

        <div class="pb-2">
          <label class="form-label">Choisissez votre login</label>
          <input class="form-control" type="text" />
        </div>

        <div class="pb-2">
          <label class="form-label">Choisissez votre mot-de passe</label>
          <input class="form-control" type="text" />
        </div>

        <div class="pb-2">
          <label class="form-label">Confirmez votre mot-de passe</label>
          <input class="form-control" type="text" />
        </div>





      </div>

            
    </div>
  </div>

  <div class="d-flex justify-content-center">
    <router-link class="btn btn-primary mb-4"   to=""> Créer mon compte Hkos</router-link>
</div>
</template>

<script>
export default {
  name: "RegistrationBlock",
  props: {
    msg: String,
  },
};
</script>