<template>
  <div id="app">
    <div v-for="(item, idx) in myCollection" :key="item">
      {{ item }}- {{ idx }}
    </div>

    <div class="logs" v-for="(log, id) in logs" :key="id">
      {{ log }}
    </div>
    <input type="number" v-model.number="operand1" placeholder="operand1" />
    <input
      type="number"
      v-model.number="operand2"
      placeholder="operand2"
      @blur="sendData(operand2)"
    />
    <div>={{ result }}</div>
    <div>= fib{{ fibResult }}</div>
    <div class="error" :class="{ red: error }" v-if="!!error">
      {{ error }}
    </div>

    <div class="strange-message">
      <template v-if="result < 0">Получилось отрицательное число</template>
      <template v-else-if="result < 100">
        Получилось число в первой сотне
      </template>
      <template v-else>Все остальные числа</template>
    </div>

    <div class="keyboard">
      <!-- 
          <button @click="calculate('+')">+</button>
          <button @click="calculate('-')">-</button>
          <button @click="calculate('*')">*</button>
          <button @click="calculate('/')">/</button>
          <button @click="divInteger(operand1, operand2)">/floor</button> 
        -->
      <button
        v-for="operand in operands"
        @click="calculate(operand)"
        :key="operand"
        v-bind:title="operand"
      >
        {{ operand }}
      </button>
    </div>
    <!-- {{ powSum }}
      {{ powWithOperand }} -->
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      myCollection: [1, 2, 3, 4, 5],
      operands: ["+", "-", "/", "*"],
      text: "Some string",
      operand1: 0,
      operand2: 0,
      fibResult: 0,
      result: 0,
      error: "",
      logs: {},
    };
  },
  // watch: {
  //   result: function (newValue, oldValue) {
  //     this.console.log(newValue, oldValue);
  //   },
  // },

  methods: {
    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.substract();
          break;
        case "*":
          this.mult();
          break;
        case "/":
          this.div();
          break;
      }
      const key = Date.now();
      const value = `${this.operand1}${operation}${this.operand2} = ${this.result}`;
      this.$set(this.logs, key, value);
    },
    add() {
      this.result = this.operand1 + this.operand2;
      this.fibResult = this.fib1 + this.fib2;
    },
    substract() {
      this.result = this.operand1 - this.operand2;
    },
    mult() {
      this.result = this.operand1 * this.operand2;
    },
    div() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        return (this.error = "Делить на 0 нельзя");
      }
      this.result = operand1 / operand2;
    },
    divInteger(op1, op2) {
      this.result = parseInt(op1 / op2);
    },
    sendData() {
      console.log("Send Data");
    },
    fib(n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    },
  },
  computed: {
    fib1() {
      return this.fib(this.operand1);
    },
    fib2() {
      return this.fib(this.operand2);
    },

    // powWithOperand() {
    //   return Math.pow(this.operand1, this.operand2);
    // },
    // powSum() {
    //   return Math.pow(this.result, 4);
    // },
  },
};
</script>

<style>
</style>
