<template>
  <div>
    <h2>Add Payment Page</h2>
    <div class="wrapper">
      <div class="add-payment-form">
        <AddPaymentForm
          @addNewPayment="addNewPaymentData"
          :category-list="categoryList"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import AddPaymentForm from "@/components/AddPaymentForm";

export default {
  name: "PageAddPayment",
  components: {
    AddPaymentForm,
  },
  methods: {
    ...mapMutations(["setPaymentsListData", "addDataToPaymentList"]),
    ...mapActions({
      fetchListData: "fetchData",
    }),
    addNewPaymentData(value) {
      this.addDataToPaymentList(value);
    },
  },
  created() {
    if (!this.fetchListData.length) {
      this.fetchListData();
    }
    this.$store.dispatch("fetchCategoryList");
  },
  computed: {
    paymentsList() {
      return this.$store.getters.getPaymentList;
    },
    categoryList() {
      // console.log("this.$store.getters.getCategoryList;");
      return this.$store.getters.getCategoryList;
    },
  },
};
</script>

<style scoped></style>
