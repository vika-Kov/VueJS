<template>
  <div id="app">
    <div class="header">
      <h1>My Personal Cost</h1>
      <div class="menu">
        <router-link to="/dashboard">Dashboard</router-link> /
        <router-link to="/about">About</router-link>
        <br />
        <router-link
          :to="{ path: '/add/payment/Food', query: { value: '200' } }"
          >Add category Food payment with a price of 200</router-link
        >
        <br />
        <router-link
          :to="{ path: '/add/payment/Transport', query: { value: '50' } }"
          >Add category Transport payment with a price of 50</router-link
        >
        <br />
        <router-link
          :to="{ path: '/add/payment/Entertainment', query: { value: '2000' } }"
          >Add category Entertainment payment with a price of 2000</router-link
        >
        <br />
        <router-link to="/404">Error 404</router-link>
      </div>
      <div class="add-new-cost">
        <button class="add-new-cost_button" @click="checkFormVisibility()">
          ADD NEW COST +
        </button>
      </div>
      <div class="add-payment-form" v-if="showForm">
        <!-- <AddPaymentForm
          @addNewPayment="addNewPaymentData"
          :category-list="categoryList"
        /> -->
        <ModalWindow @close="showForm = !showForm" :settings="settings" />
      </div>
    </div>
    <br />
    <div class="content">
      <router-view />
    </div>
    <br />
  </div>
</template>

<script>
import ModalWindow from "./components/ModalWindow.vue";
export default {
  name: "App",
  components: { ModalWindow },
  data() {
    return {
      showForm: false,
      settings: {
        header: "Add My Cost",
        compName: "add",
      },
    };
  },
  methods: {
    checkFormVisibility() {
      this.showForm = !this.showForm;
    },
    // goToPage(page) {
    //   this.$router.push({
    //     name: page,
    //   });
    // },
  },
  created() {
    if (this.$route.path != "/dashboard") {
      this.$router.push({ name: "dashboard" });
    }
    // this.setPaymentsListData(this.fetchData());
  },
};
</script>

<style>
.header {
  font-size: 20px;
}
.add-new-cost_button {
  margin-bottom: 5px;
  border: none;
  height: 45px;
  width: 200px;
  background-color: #59bda5;
  text-align: center;
  color: white;
  font-family: Verdana;
  font-weight: 800;
  font-size: 14px;
  box-shadow: 0.2em 0.2em 10px rgba(122, 122, 122, 0.5);
  border-radius: 6px;
  transition: 0.3s;
}
button:hover {
  transform: scale(1.05);
}
</style>
