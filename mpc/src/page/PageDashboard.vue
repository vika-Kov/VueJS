<template>
  <v-row>
    <v-col cols="9">
      <div class="text-h5 text-md-3 pb-4">My personal costs</div>

      <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
          <v-btn color="teal" v-on="on" dark
            >ADD NEW COST <v-icon>mdi-plus</v-icon></v-btn
          >
        </template>
        <v-card>
          <AddPaymentForm
            @addNewPayment="addNewPaymentData"
            :category-list="categoryList"
          />
        </v-card>
        <v-card-action>
          <v-spacer></v-spacer>

          <v-btn color="white" text @click="dialog = false">Close</v-btn>

          <v-btn color="white" text>Add</v-btn>
        </v-card-action>
      </v-dialog>
      <PaymentsDisplay :items="curElements" />
      <Pagination
        :length="paymentListLength"
        @changePage="onPaginate"
        :count="count"
        :cur="page"
      />
      <div>Total Sum = {{ getFPV }}</div>
    </v-col>
    <v-col cols="3">
      CHARTS
      <Chart> </Chart>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Pagination from "../components/Pagination.vue";
import AddPaymentForm from "../components/AddPaymentForm.vue";
import Chart from "@/components/Chart";
//import Button from "../components/Button.vue";

export default {
  name: "PageDashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
    Chart,
  },
  data() {
    return {
      page: 1,
      count: 10,
      pageName: "",
      dialog: false,
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
    onPaginate(p) {
      this.page = p;
    },
    goToPage(page) {
      this.$router.push({
        name: page,
        params: {
          id: "123",
        },
      });
    },
    showPaymentsForm() {
      this.$modal.show("add", {
        header: "Add My Cost",
        compName: "AddPaymentForm",
        category: this.categoryList,
      });
    },
    setPage() {
      this.pageName = location.pathname.slice(1);
    },
  },
  computed: {
    ...mapGetters(["getFullPaymentValue"]),
    getFPV() {
      return this.getFullPaymentValue;
    },
    paymentList() {
      return this.$store.getters.getPaymentList;
    },
    paymentListLength() {
      return this.$store.getters.getPaymentList.length;
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
    curElements() {
      const { count, page } = this;
      return this.paymentList.slice(
        count * (page - 1),
        count * (page - 1) + count
      );
    },
  },
  created() {
    // this.paymentsList = this.fetchData()
    // this.$store.commit('setPaymentsListData', this.fetchData())
    if (!this.fetchListData.length) {
      this.fetchListData();
    }
    this.$store.dispatch("fetchCategoryList");
  },
  mounted() {
    this.page = Number(this.$route.params.page) || 1;
    console.log(this.$route);
  },
};
</script>

<style scoped lang="scss"></style>
