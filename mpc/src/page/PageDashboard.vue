<template>
  <v-row>
    <v-col cols="9">
      <div class="text-h5 text-md-3 pb-4">My personal costs</div>

      <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
          <v-btn color="teal" v-on="on" dark
            >ADD NEW COST
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <AddPaymentForm
            @addNewPayment="addNewPaymentData"
            @closeDialog="closeDialog"
            :category-list="categoryList"
          />
        </v-card>
      </v-dialog>
      <PaymentsDisplay
        :items="curElements"
        @addNewPayment="addDataToPaymentList"
      />
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
      <Chart :option="getChartOption()"></Chart>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Pagination from "../components/Pagination.vue";
import AddPaymentForm from "../components/AddPaymentForm.vue";
import Chart from "@/components/Chart";

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
      iter: 0,
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
    closeDialog() {
      this.dialog = false;
    },
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
    setPage() {
      this.pageName = location.pathname.slice(1);
    },
    getSeriesData() {
      return this.categoryList.map((category) => {
        const name = category;
        const value =
          this.paymentList.reduce((res, cur) => {
            if (cur.category === category) {
              return res + cur.value;
            }
          }, 0) || 0;

        return { name, value };
      });
    },
    getChartOption() {
      let option = {
        // данные диаграммы
        title: {
          text: "Расходы по категориям",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: [
            "Food",
            "Transport",
            "Education",
            "Internet",
            "GB",
            "Life",
            "Sport",
          ],
        },
        series: [
          {
            name: "Категории",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { name: "Food", value: 100 },
              { name: "Transport", value: 50 },
              { name: "Education", value: 50 },
              { name: "Internet", value: 50 },
              { name: "GB", value: 50 },
              { name: "Life", value: 50 },
              { name: "Sport", value: 50 },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      // this.iter += 1;
      const legend = this.$store.getters.getCategoryList;
      const seriesData = this.getSeriesData();
      if (seriesData) {
        option.series[0].data = seriesData;
      } else {
        console.log("Series Data is NOT OK");
      }
      if (legend) {
        option.legend.data = legend;
      } else {
        console.log("Legend Data is NOT OK");
      }
      return option;
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
    // getOption() {
    //   return this.getChartOption();
    // },
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

    // console.log(this.$route);
  },
};
</script>

<style scoped lang="scss"></style>
