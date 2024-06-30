<template>
    <v-app-bar elevation="2" color="grey">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>YashicaKE</v-app-bar-title>
  <v-btn variant ="tonal" to="/" primary >Home page</v-btn>
  <v-btn variant="tonal" to="/Cameras" >Cameras</v-btn>
  <v-btn variant="tonal" to="cart.vue">Cart</v-btn>
  <v-btn variant="tonal" to="/Aboutus">Aboutus</v-btn>
  <v-btn variant="tonal" to="/Contactus.vue">Contactus</v-btn>
  
</v-app-bar>
</template>