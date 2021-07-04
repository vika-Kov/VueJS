<template>
 <div id="app">
    <div class="header">
        <h1>My Personal Cost</h1>
    </div>
    <br>
    <div class="wrapper">
      <AddPaymentForm @addNewPayment="addNewPaymentData"/>
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
        // showForm: false,
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

</style>
