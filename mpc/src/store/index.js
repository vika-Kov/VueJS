import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
    data: {
      page1: [
        { id: 1, date: "20.03.2020", category: "Food", value: 169 },
        {
          id: 2,
          date: "21.03.2020",
          category: "Navigation",
          value: 50,
        },
        { id: 3, date: "22.03.2020", category: "Sport", value: 450 },
      ],
      page2: [
        {
          id: 4,
          date: "23.03.2020",
          category: "Entertainment",
          value: 969,
        },
        {
          id: 5,
          date: "24.03.2020",
          category: "Education",
          value: 1500,
        },
        { id: 6, date: "25.03.2020", category: "Food", value: 200 },
      ],
    },
  },
  mutations: {
    setPaymentsListData(state, payload) {
      const jointPaymentList = [...state.paymentsList, ...payload];
      state.paymentsList = [...new Set(jointPaymentList)];
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
    getPages: (state) => {
      const pagesCount = Object.keys(state.data).length;
      const pages = [...Array(pagesCount).keys()].map((x) => x + 1);
      return pages;
    },
  },
  actions: {
    SomeAction({ commit }, res) {
      commit("setPaymentsListData", res);
    },
    fetchCategoryList({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            "Food",
            "Transport",
            "Education",
            "Internet",
            "GB",
            "Life",
            "Entertainment",
          ]);
        }, 1000);
      }).then((res) => commit("addCategory", res));
    },
    fetchData({ commit }, page = 1) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = this.state.data["page" + page];
          resolve(items);
        }, 1000);
      }).then((res) => {
        console.log(res);
        commit("setPaymentsListData", res);
      });
    },
  },
});
