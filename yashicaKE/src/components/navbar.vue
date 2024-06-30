<template>
    <v-app-bar  color="yellow">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>CamelShop</v-app-bar-title>
  <v-btn variant ="tonal" to="/">Home page</v-btn>
  <v-btn variant="tonal" to="/Cameras" >Cameras</v-btn>
  <v-btn variant="tonal" to="/films.vue">Films</v-btn>
  <v-btn variant="tonal" to="/Aboutus">Aboutus</v-btn>
  <v-btn variant="tonal" to="/Contactus.vue">Contactus</v-btn>
  
</v-app-bar>
</template>