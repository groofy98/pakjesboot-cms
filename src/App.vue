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
  created: {
    
  }
  
};
</script>
