<template>
  <v-card
    class="mx-auto"
    width="256"
    tile
  >
    <v-navigation-drawer permanent>
      <v-system-bar></v-system-bar>      
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            v-on:click="navigate(item)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      selectedItem: 0,
      items: [
        { text: 'Boats', icon: 'mdi-sail-boat', url: 'boats' },
        { text: 'Users', icon: 'mdi-account-multiple', url: 'users' },
        { text: 'Shipments', icon: 'mdi-truck-cargo-container', url: 'shipments' },
        { text: 'Depots', icon: 'mdi-map-marker-path', url: 'depots' },
        { text: 'Errors', icon: 'mdi-alert-circle', url: 'errors' },        
      ],
    }),
    methods: {
        navigate(item){
            this.$router.push(item.url);
        }
    },
  }
</script>