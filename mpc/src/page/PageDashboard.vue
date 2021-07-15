<template>
  <div>
    <div class="wrapper">
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
// import AddPaymentForm from "../components/AddPaymentForm.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import CategoryDisplay from "../components/CategoryDisplay.vue";

export default {
  name: "PageDashboard",
  components: {
    PaymentsDisplay,
    // AddPaymentForm,
    CategoryDisplay,
  },
  data() {
    return {
      pages: this.$store.getters.getPages,
      pageName: String,
    };
  },
  methods: {
    ...mapMutations(["setPaymentsListData", "addDataToPaymentList"]),
    ...mapActions({
      fetchListData: "fetchData",
    }),
    // addNewPaymentData(value) {
    //   this.addDataToPaymentList(value);
    // },

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
  mounted() {
    this.$modal.show("name", "settings");
    this.$modal.hide();
  },
  created() {
    if (!this.fetchListData.length) {
      this.fetchListData();
    }
    this.$store.dispatch("fetchCategoryList");
  },
};
</script>

<style >
button:hover {
  transform: scale(1.05);
}
</style>