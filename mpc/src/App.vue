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
    </div>
    <br />
    <div class="content">
      <router-view />
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {
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
</style>
