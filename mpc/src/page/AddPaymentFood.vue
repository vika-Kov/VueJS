<template>
  <div class="payment-form">
    <div>
      <input
        class="add-payment-form_input"
        placeholder="Amount"
        type="number"
        v-model.number="value"
      />
      <input
        class="add-payment-form_input"
        placeholder="Category"
        type="text"
        v-model.trim="category"
      />
      <input
        class="add-payment-form_input"
        placeholder="Date"
        type="text"
        v-model.trim="date"
      />
      <button class="add-payment-form_button" @click="onClick">ADD +</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPaymentFood",
  components: {},
  data() {
    return {
      value: 200,
      category: "Food",
      date: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onClick() {
      const { category, value } = this;
      const data = {
        date: this.getCurrentDate,
        category,
        value,
      };
      console.log(data);
      this.$emit("addNewPayment", data);
    },
  },
};
</script>

<style>
.add-new-cost_button {
  margin-bottom: 5px;
  border: none;
  height: 45px;
  width: 200px;
  background-color: #59bda5;
  text-align: center;
  color: white;
  font-family: Verdana;
  font-weight: 800;
  font-size: 14px;
  box-shadow: 0.2em 0.2em 10px rgba(122, 122, 122, 0.5);
  border-radius: 6px;
  transition: 0.3s;
}
.add-payment-form_input {
  height: 25px;
  width: 192px;
  display: flex;
  margin-bottom: 10px;
}
.add-payment-form_button {
  margin-bottom: 5px;
  border: none;
  height: 30px;
  width: 100px;
  background-color: #59bda5;
  text-align: center;
  color: white;
  font-family: Verdana;
  font-weight: 800;
  font-size: 14px;
  box-shadow: 0.2em 0.2em 10px rgba(122, 122, 122, 0.5);
  border-radius: 6px;
  transition: 0.3s;
}
button:hover {
  transform: scale(1.05);
}
</style>
