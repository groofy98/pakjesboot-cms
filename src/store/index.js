import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    username: null
  },
  getters: {
    isAuthenticated(state) {
      return state.token != null;
    }
  },
  mutations: {
    authUser(state, userData) {
      state.token = userData.bearerToken      
    },
    setToken(state){
      state.token = localStorage.token;
    }
  },
  actions: {
    login({ commit }, authData) {
      axios
        .post("/login", {
          username: authData.username,
          password: authData.password,
        })
        .then((res) => {
          console.log(res.data);
          commit('authUser', res.data);
          axios.defaults.headers.common['Authorization'] = "Bearer " + res.data.bearerToken;
          localStorage.token = res.data.bearerToken;              
        })
        .catch((error) => (this.error = error));
    },    
  }
})
