<template>
  <div class="payment-form">
    <div class="add-new-cost">
      <button class="add-new-cost_button" @click="checkFormVisibility()">
        ADD NEW COST +
      </button>
    </div>
    <div class="add-payment-form" v-if="showForm">
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
  name: "AddPaymentForm",
  data() {
    return {
      value: 0,
      category: "",
      date: "",
      showForm: false,
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
      console.log("saved");
      const { value, category, date } = this;
      const data = {
        value,
        category,
        date: this.date || this.getCurrentDate,
      };
      console.log(date);
      this.$emit("addNewPayment", data);
    },
    checkFormVisibility() {
      this.showForm = !this.showForm;
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
.add-payment-form_button{
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