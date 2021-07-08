import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
  },
  mutations: {
    setPaymentsListData(state, payload) {
      state.paymentsList = payload;
    },
    addDataToPaymentList(state, payload) {
      state.paymentsList.push(payload);
    },
    addCategory(state, payload) {
      state.categoryList = payload;
    },
  },
  getters: {
    getPaymentList: (state) => state.paymentsList,
    getFullPaymentValue: (state) => {
      return state.paymentsList.reduce((res, cur) => res + cur.value, 0);
    },
    getCategoryFull: (state) => {
      return state.categoryList;
    },
    getCategoryList: (state) => {
      return state.categoryList;
    },
  },
  actions: {
    SomeAction({ commit }, res) {
      commit("setPaymentsListData", res);
    },
    fetchCategoryList({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(["Food", "Transport", "Education", "Internet", "GB", "Life"]);
        }, 1000);
      }).then((res) => commit("addCategory", res));
    },
    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = [];
          for (let i = 1; i < 110; i++) {
            items.push({
              date: "12.12.2020",
              category: "Food",
              value: i,
            });
          }
          resolve(items);
        }, 2000);
      }).then((res) => commit("setPaymentsListData", res));
    },
  },
});
