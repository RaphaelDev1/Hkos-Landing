<template>



<!-- Navbar  -->
        <nav class="navbar navbar-expand-lg navbar-light menumain2 sticky-top">
                <router-link class="navbar-brand" to="/"><img src="img/logo2.png" class="menulogo"></router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between menumain2" id="navbarNav">
                  <ul class="navbar-nav menuul">
                  </ul>

                  <ul class="menuul navbar-nav">

                    
                    <router-link class="btn btn-success btn2" style="background-color: rgb(27, 179, 27); color: white; padding: 4px 16px; margin: 8px;" to="/connection"> Connection</router-link>
 

                </ul>
                </div>
              </nav>


              <div
    style="display: none; position: fixed; background: white; width: 100%"
    id="999"
  >
    <div class="d-flex flex-column sticky-top">


      <div class="p-2 d-flex justify-content-center border">
         <router-link
          class="btn btn2"
          style="
            background-color: rgb(50, 141, 245);
            color: white;
            padding: 2px 14px;
            margin: 8px;
          "
          to="/connection"
        >
          Connection
        </router-link>
      </div>
    </div>
  </div>
              
 <!--Head Block (Space)--->
<div class="head-block"></div>

</template>

<script>
import $ from "jquery";

export default {
  name: "MenuConnection",
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