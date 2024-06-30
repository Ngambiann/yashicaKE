<script setup>
import Navbar from "./components/navbar.vue"
 
</script>

<template>
    <v-app>
    <Navbar></Navbar>
    <v-main>
<RouterView></RouterView>
    </v-main>
</v-app>
</template>


