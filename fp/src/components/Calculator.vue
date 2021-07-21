<template>
  <div id="app">
    <input type="number" v-model.number="operand1" placeholder="operand1" />
    <input type="number" v-model.number="operand2" placeholder="operand2" />
    <div>={{ result }}</div>
    <!-- <div>= fib{{ fibResult }}</div> -->
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
    <div class="checkbox">
      <label>Show keyboard</label
      ><input type="checkbox" @click="checkKeyboardVisibility()" />
    </div>
    <div class="digitalKeyboard" v-if="showKeyboard">
      <button
        v-for="number in numbers"
        @click="showNumber(number)"
        :key="number"
        v-bind:title="'btn' + number"
      >
        {{ number }}
      </button>
      <button @click="backSpace()" id="backSpace">&larr;</button>
      <br />
      <input
        type="radio"
        name="radio"
        @click="chooseOperand(1)"
        checked
      />Операнд1
      <input type="radio" name="radio" @click="chooseOperand(2)" />Операнд2
    </div>
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
      result: 0,
      error: "",
      logs: {},
      showKeyboard: true,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      choosenOperand: 1,
    };
  },

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
      this.result = +this.operand1 + +this.operand2;
    },
    substract() {
      this.result = +this.operand1 - +this.operand2;
    },
    mult() {
      this.result = +this.operand1 * +this.operand2;
    },
    div() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        return (this.error = "Делить на 0 нельзя");
      }
      this.result = +operand1 / +operand2;
    },
    divInteger(op1, op2) {
      this.result = parseInt(op1 / op2);
    },

    checkKeyboardVisibility() {
      this.showKeyboard = !this.showKeyboard;
    },
    showNumber(number) {
      if (this.choosenOperand === 1) {
        this.operand1 += number.toLocaleString();
        this.operand1 = parseInt(this.operand1);
      } else {
        this.operand2 += number.toLocaleString();
        this.operand2 = parseInt(this.operand2);
      }
      console.log(this.operand1, this.operand2);
    },
    backSpace() {
      if (this.choosenOperand === 1) {
        const value = this.operand1.toLocaleString().split("");
        value.pop();
        this.operand1 = value.join("").toLocaleString();
      } else {
        const value = this.operand2.toLocaleString().split("");
        value.pop();
        this.operand2 = value.join("").toLocaleString();
      }
    },
    chooseOperand(operand) {
      console.log(operand);
      this.choosenOperand = operand;
    },
  },

  computed: {
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
