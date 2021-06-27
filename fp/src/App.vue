<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" :data="computedDate" />
    <Calculator />
    <button @click="onClick">Click me</button>/ {{ count }}
    <button @click="count = 1 + 2">Sum</button>
    <button @click="onClick2(1, 4)">Click me2</button>
    {{ message }}
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Calculator,
  },
  data() {
    return {
      count: 0,
      currentDate: null,
      message: "Hello VUE",
    };
  },
  methods: {
    onClick() {
      this.count += 1;
    },
    onClick2(param1, param2) {
      this.count = param1 + param2;
    },
  },
  computed: {
    computedDate() {
      return this.currentDate || new Date();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
