<template>
  <v-form ref="form">
    <v-text-field v-model="date" label="Date" />
    <v-select
      :items="categoryList"
      v-model="category"
      label="Category"
      required
    ></v-select>
    <v-text-field v-model.number="value" label="Value" required />
    <v-btn class="mr-4" @click="submit"> submit </v-btn>
    <v-btn class="mr-4" @click="clear" color="error"> clear </v-btn>
    <v-btn class="mr-4" @click="close" color="warning"> close </v-btn>
  </v-form>
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
    };
  },
  methods: {
    clear() {
      this.value = "";
      this.category = "Food";
      this.date = null;
    },
    close() {
      this.$emit("closeDialog");
    },
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    submit() {
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
