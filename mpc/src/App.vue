<template>
  <div id="app">
    <div class="header">
      <h1>My Personal Cost</h1>
      <div class="menu">
        <a href="#" @click="goToPage('dashboard')">Dashboard</a> /
        <a href="#" @click="goToPage('about')">About</a><br />
        <a href="#" @click="goToPage('Food?value=200')"
          >Add category Food payment with a price of 200</a
        >
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
    goToPage(page) {
      this.$router.push({
        name: page,
      });
    },
  },
};
</script>

<style>
.header {
  font-size: 20px;
}
</style>
