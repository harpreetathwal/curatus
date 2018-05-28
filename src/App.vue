<template>
  <div id="app">
    <div class="top-menu" style="text-align:center; position:absolute; top:1%; right:1%; display:inline;">
     <router-link to="/login"> 
      <button class="btn btn-primary btn-md"> Login </button>
     </router-link>
     <router-link to="/logout">
      <button  class="btn btn-primary btn-md">Logout</button>
     </router-link>
    </div>
    <div class="container">
      <div class="row navbar-header">
        <img src="./assets/images/top_bar.png" style="margin:auto;width:100%;height:150%;">
      </div>
      <center>
        <div class="row"> 
          <div class="col-sm-3" style="background-color:lavender;">
            <router-link to="/home"><h2>Home</h2><img class="option" src="./assets/images/grasshopper.png"> </router-link>
          </div>
          <div class="col-sm-3" style="background-color:lavenderblush;"> 
            <router-link to="/beehive"><h2>Beehive</h2><img class="option" src="./assets/images/beehive.png"></router-link>
          </div>
          <div class="col-sm-3" style="background-color:lavender;">
            <router-link to="/whisper"><h2 >Whisper</h2></router-link>
              <img class="option" src="./assets/images/whisper.png">
            </router-link>
          </div>
          <div class="col-sm-3" style="background-color:lavenderblush;"> 
            <router-link to="/octopus"><h2>Octopus</h2><img class="option" src="./assets/images/octopus.png"></router-link>
          </div>
        </div>
        <br>
        <br>
      </center>
      <router-view/>
      <div class="spacing_placholder" style="margin-top:500px"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  h2 {
    margin-top:0px;font-family: Impact, Charcoal, sans-serif;font-weight:normal
  }
  img.option {
    border-radius: 50%;border-style:dotted;max-width:100%;max-height:80%;
  }
  div.center_alligned {

    width: 100%;
    height: 400px;
    background-image: url("./assets/images/foreground.png");
    background-size: 100% 100%;
  }

  div.footer_branding {
    width: 100%;
    height: 600px;
    background-image: url("./assets/images/brand_image.png");
    background-size: 100% 120%;
  }
</style>
