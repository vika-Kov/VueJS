<template>
  <div id="app">
    <div class="header">
      <h1>My Personal Cost</h1>
    </div>
    <br />
    <div class="add-new-cost">
      <button class="add-new-cost_button" @click="checkFormVisibility()">
        ADD NEW COST +
      </button>
    </div>
    <div class="wrapper">
      <div class="add-payment-form" v-if="showForm">
        <AddPaymentForm
          @addNewPayment="addNewPaymentData"
          :category-list="categoryList"
        />
      </div>
      <br />
      <div>Total Sum = {{ getFPV }}</div>
      <h2>Payment List</h2>
      <PaymentsDisplay
        :items="paymentsList"
        :pages="pages"
        @switchPages="performSwitch"
      />
      <br />
      <h2>Category List</h2>
      <CategoryDisplay :items="categoryList" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import CategoryDisplay from "./components/CategoryDisplay.vue";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    CategoryDisplay,
  },
  data() {
    return {
      showForm: false,
      pages: this.$store.getters.getPages,
    };
  },
  methods: {
    ...mapMutations(["setPaymentsListData", "addDataToPaymentList"]),
    ...mapActions({
      fetchListData: "fetchData",
    }),
    addNewPaymentData(value) {
      this.addDataToPaymentList(value);
    },
    checkFormVisibility() {
      this.showForm = !this.showForm;
    },
    performSwitch(page) {
      this.fetchListData(page);
    },
  },
  computed: {
    ...mapGetters(["getFullPaymentValue"]),
    getFPV() {
      return this.getFullPaymentValue;
    },
    paymentsList() {
      return this.$store.getters.getPaymentList;
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
  },

  created() {
    if (!this.fetchListData.length) {
      this.fetchListData();
    }
    this.$store.dispatch("fetchCategoryList");
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
