<template>
  <div>
    <div class="wrapper">
      <br />
      <div class="add-new-cost">
        <button class="add-new-cost_button" @click="showPaymentsForm">
          ADD NEW COST +
        </button>
      </div>
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
    showPaymentsForm() {
      this.$modal.show("add", { header: "Add My Cost", compName: "add" });
      this.$modal.hide();
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
  mounted() {},
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