<template>
  <v-row>
    <v-col cols="9">
      <div class="text-h5 text-md-3 pb-4">Учёт расходов</div>

      <PaymentsDisplay
        :headers="headers"
        :items="paymentList"
        :category-list="categoryList"
        @addNewPayment="addDataToPaymentList"
      />

      <div>Total Sum = {{ getFPV }}</div>
    </v-col>
    <v-col cols="3">
      Диаграмма расходов
      <v-chart :option="getChartOption()"></v-chart>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
// import AddPaymentForm from "../components/AddPaymentForm.vue";
import ECharts from "@/components/Chart";

export default {
  name: "PageDashboard",
  components: {
    PaymentsDisplay,
    "v-chart": ECharts,
  },
  data() {
    return {
      page: 1,
      count: 10,
      pageName: "",
      dialog: false,
      headers: [
        {
          text: "id",
          align: "start",
          sortable: false,
          value: "id",
        },
        {
          text: "Category",
          sortable: true,
          value: "category",
        },
        { text: "Date", value: "date" },
        { text: "Value", value: "value" },
        { text: "Actions", value: "actions", sortable: false },
      ],
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
    getSeriesData() {
      const series = this.categoryList.map((category) => {
        return {
          name: category,
          value: this.paymentList.reduce((acc, cur) => {
            if (cur.category === category) {
              return acc + cur.value;
            } else {
              return acc;
            }
          }, 0),
        };
      });
      return series;
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
  mounted() {
    this.page = Number(this.$route.params.page) || 1;
  },
};
</script>

<style scoped lang="scss"></style>
