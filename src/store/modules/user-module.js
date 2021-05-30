import Vue from "vue";
import Vuex from "vuex";
import axios from "../../_http/axios-http";

Vue.use(Vuex)

const state = () => ({
  usersList: [],
  expData: []
})

const getters = {
  getExpData(state) {
    return state.expData;
  }
}
const mutations = {
  setExpData(state, res) {
    state.expData = res
  }
}
const actions = {
  async fetchExpData({ commit }) {
    try {
      const res = await axios.get('/JSON/experience.json');
      commit('setExpData', res);
      return res
    }
    catch (err) {
      return err      
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
