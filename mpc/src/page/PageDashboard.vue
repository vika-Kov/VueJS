<template>
<v-container>
  <v-row>
    <v-col cols="6">
      <div class="text-h5 text-md-3 pb-4">My personal costs</div>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator= "{on}">
          <v-btn color="teal lighten-1" v-on="on" dark @click="showPaymentsForm">ADD NEW COST<v-icon>mdi-plus</v-icon></v-btn>
        </template>
          <v-card>
          <AddPaymentForm
          @addNewPayment="addNewPaymentData"
          :category-list="categoryList"/>
          <v-card-action>
             <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          </v-card-action>
          </v-card>
      </v-dialog>
        <PaymentsDisplay
          :items="paymentsList"
          :pages="pages"
          @switchPages="performSwitch"
          @deletePayment="deletePayment"
          @editPayment="editPayment"
        />
        <div class="text-h5 text-md-3 py-4">Total Sum = {{ getFPV }}</div>
        <div class="text-h5"> Category List</div>
        <CategoryDisplay :items="categoryList" />
    </v-col>
    <v-col cols="6">
      <div class="text-h5 text-md-3 pb-4">CHARTS</div>
    </v-col>
  </v-row>
</v-container>
  
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import CategoryDisplay from "../components/CategoryDisplay.vue";
import AddPaymentForm from "../components/AddPaymentForm.vue";

export default {
  name: "PageDashboard",
  components: {
    PaymentsDisplay,
    CategoryDisplay,
    AddPaymentForm
  },
  data() {
    return {
      pages: this.$store.getters.getPages,
      pageName: String,
      // modalVisible: false,
      dialog:false,
    };
  },
  
  methods: {
    ...mapMutations(["setPaymentsListData", "addDataToPaymentList"]),
    ...mapActions({
      fetchListData: "fetchData",
    }),
    performSwitch(page) {
      this.fetchListData(page);
    },
    showPaymentsForm() {
      this.$modal.show("add", { header: "Add My Cost", compName: "add" });
    },
    addNewPaymentData(value) {
      this.addDataToPaymentList(value);
    },
    // Context Menu emitted events
    deletePayment(paymentId) {
      this.$store.commit("deleteDataFromPaymentList", paymentId);
    },
    editPayment(paymentId) {
      console.log("Edit Payment ", paymentId);
      this.$contextMenu.edit(paymentId);
      this.$store.commit("deleteDataFromPaymentList", paymentId);
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

<style>
button:hover {
  transform: scale(1.05);
}
</style>
