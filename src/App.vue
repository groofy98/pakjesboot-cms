<template>
  <v-app>
    <v-navigation-drawer app fixed>
      <nav-bar></nav-bar>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-toolbar-title>Pakjesboot</v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import axios from './axios-auth.js';
import process from 'dotenv';

export default {
  name: "App",
  components: {
    NavBar,
    // HelloWorld
  },
  data: () => ({
    //
  }),
  computed: {
    token() {
      return this.$store.state.token;
    },
  },
  mounted: {
    setAppURL(){
      if(process.env.NODE_ENV !== 'development'){
        axios.baseURL = 'https://pakjesboot.azurewebsites.net/api';
      }

    }
  }
  
};
</script>
