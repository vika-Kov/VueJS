<template>
  <v-card class="text-left pa-8">
    <v-text-field v-model="date" label="Date" />
    <v-select
      :items="categoryList"
      v-model="category"
      label="Category"
    ></v-select>
    <v-text-field v-model.number="value" label="Date" />
  </v-card>
</template>

<script>
export default {
  name: "AddPaymentForm",
  props: ["categoryList"],
  data() {
    return {
      value: 0,
      category: "Food",
      date: "",
      cats: ["Food", "Transport", "Housing", "Healthcare"],
    };
  },
  methods: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    onClick() {
      const { value, category } = this;
      const data = {
        date: this.date || this.getCurrentDate(),
        category,
        value,
      };
      console.log(data);
      this.$emit("addNewPayment", data);
    },
  },
};
</script>

<style></style>
