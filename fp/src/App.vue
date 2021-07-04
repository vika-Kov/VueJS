<template>
  <div id="app">
    <div :class="[$style.header]">
      <h1>My Personal Cost</h1>
    </div>
    <div class="wrapper">
      <PaymentsDisplay />
    </div>
  </div>
</template>
<script>
import PaymentsDisplay from "../../mpc/src/components/PaymentsDisplay.vue";
export default {
  name: "App",
  components: {
    PaymentsDisplay,
  },
  data() {
    return {};
  },
  methods: {
    fetchData() {
      return [
        {
          date: "12.03.2020",
          caregory: "Food",
          value: 180,
        },
        {
          date: "11.04.2020",
          caregory: "Internet",
          value: 100,
        },
        {
          date: "24.02.2020",
          caregory: "Food",
          value: 300,
        },
        {
          date: "02.07.2020",
          caregory: "Sport",
          value: 400,
        },
      ];
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style>
.header {
  font-size: 20px;
}
</style>
