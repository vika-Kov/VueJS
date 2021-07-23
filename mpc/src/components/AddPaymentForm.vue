<template>
<v-card class="text-left pa-8">
    <v-text-field v-model="date" label="Date" />
<v-select
          :items="categoryList"
          v-model="category"
          label="Category"
        ></v-select>
    <v-text-field v-model.number="value" label="Value" />
    <v-card-actions>
    <div class="buttons">
    <v-btn color="teal lighten-1"  dark @click="onClick">ADD<v-icon>mdi-plus</v-icon></v-btn>
    
    </div>
    </v-card-actions>
</v-card>

</template>

<script>
export default {
  name: "AddPaymentForm",
  props: ["categoryList"],
  data() {
    return {
      value: 0,
      category: "",
      date: null,
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
        date: this.date || this.getCurrentDate,
        category,
        value,
      };
      this.$emit("addNewPayment", data);
    },
    onCloseClick() {
      this.$modal.hide();
    },
    loadParams(route) {
      this.category = route.params["category"];
      this.value = route.query["value"];
    },
  },
  watch: {
    $route(newRoute) {
      this.loadParams(newRoute);
    },
  },
  created() {
    this.loadParams(this.$route);
  },
  //передача параметров через this.$route
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
.select-category {
  margin-bottom: 10px;
  height: 30px;
  width: 200px;
}
.buttons{

  display:flex;
  justify-content: space-between;
}
</style>
