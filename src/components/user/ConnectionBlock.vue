<template>

      
      <div class="container-sm" > 
        <form>

          <div class="d-flex justify-content-center mb-5"><img src="img/logo.png" class="logoinscription">
          </div>

            <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="form2Example1" class="form-control" />
            <label class="form-label" for="form2Example1">E-mail</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">Mot de passe</label>
          </div>

          <!-- 2 column grid layout for inline styling -->
          <div class="row mb-4">

             <!-- Submit button -->
          <div class="d-flex justify-content-center">
            
            <router-link class="btn btn-primary btn-block mb-4"  to="/dashboard"> Connexion</router-link>
            
            </div>
          
            <div class="col d-flex justify-content-center">
              <!-- Simple link -->
              <a href="#!">Mot de passe oublié?</a>
            </div>
          </div>

        

          <!-- Register buttons -->
          <div class="text-center">
            <p>Vous n'etes pas un membre? <a href="#!">Créer un compte</a></p>
          </div>
        </form>
      </div>

</template>

<script>
export default {
  name: 'ConnectionBlock',
  props: {
    msg: String
  }
}
</script>