<template>
 <div id="app">
    <div class="header">
        <h1>My Personal Cost</h1>
    </div>
    <br>
    <div class="add-new-cost">
      <button class="add-new-cost_button" @click="checkFormVisibility()">
        ADD NEW COST +
      </button>
    </div>
    <div class="wrapper">
      <div class="add-payment-form" v-if="showForm"><AddPaymentForm @addNewPayment="addNewPaymentData"/></div>
      <br>
      <PaymentsDisplay :items="paymentsList"/>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from './components/AddPaymentForm.vue';
import PaymentsDisplay from './components/PaymentsDisplay.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  data() {
    return {
        paymentsList:[],
        showForm: false,
    };
  },
  methods: {
    addNewPaymentData(value){
      this.paymentsList = [...this.paymentsList, value]
    },
    fetchData(){
      return[
        {
          date:"12.03.2020",
          caregory:"Food",
          value:180
        },
        {
          date:"11.04.2020",
          caregory:"Internet",
          value:100
        },
        {
          date:"24.02.2020",
          caregory:"Food",
          value:300
        },
        {
          date:"02.07.2020",
          caregory:"Sport",
          value:1400
        },
      ]
    },
    checkFormVisibility() {
      this.showForm = !this.showForm;
    },

  },
  created(){
    this.paymentsList = this.fetchData()
  }
}
</script>

<style>

.header{
font-size:20px;
}
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
button:hover {
  transform: scale(1.05);
}
</style>
