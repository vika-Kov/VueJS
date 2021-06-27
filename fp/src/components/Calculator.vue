<template>
  <div id="app">
    <input type="number" v-model.number="operand1" placeholder="operand1" />
    <input
      type="number"
      v-model.number="operand2"
      placeholder="operand2"
      @blur="sendData(operand2)"
    />
    ={{ sum }}

    <div class="keyboard">
      <button v-on:click="sum = operand1 + operand2">+</button>
      <button v-on:click="sum = operand1 - operand2">-</button>
      <button @click="mult">*</button>
      <button @click="div(operand1, operand2)">/</button>
      <button @click="divInteger(operand1, operand2)">/floor</button>
    </div>
    {{ powSum }}
    {{ powWithOperand }}
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      text: "Some string",
      operand1: 0,
      operand2: 0,
      sum: 0,
    };
  },
  watch: {
    sum: function (newValue, oldValue) {
      this.console.log(newValue, oldValue);
    },
  },

  methods: {
    mult() {
      this.sum = this.operand1 * this.operand2;
    },
    div(op1, op2) {
      this.sum = op1 / op2;
    },
    divInteger(op1, op2) {
      this.sum = parseInt(op1 / op2);
    },
    sendData() {
      console.log("Send Data");
    },
  },
  computed: {
    powWithOperand() {
      return Math.pow(this.operand1, this.operand2);
    },
    powSum() {
      return Math.pow(this.sum, 4);
    },
  },
};
</script>

<style>
</style>
