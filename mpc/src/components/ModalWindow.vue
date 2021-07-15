<template>
  <div class="wrapper">
    <div class="header">{{ settings.header }}</div>
    <div class="content">
      <AddPaymentForm
        v-if="settings.compName === 'add'"
        @addNewPayment="addNewPaymentData"
        :category-list="categoryList"
      />
      <Auth v-if="settings.compName === 'auth'" />
    </div>
    <div class="footer">
      <button class="add-payment-form_button" @click="onCloseClick">
        Close
      </button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import AddPaymentForm from "../components/AddPaymentForm.vue";
import Auth from "./Auth.vue";

export default {
  name: "ModalWindow",
  components: {
    AddPaymentForm,
    Auth,
  },
  props: {
    settings: {
      type: Object,
    },
  },
  methods: {
    ...mapMutations(["setPaymentsListData", "addDataToPaymentList"]),

    addNewPaymentData(value) {
      this.addDataToPaymentList(value);
    },
    onCloseClick() {
      this.$modal.hide();
    },
  },
  computed: {
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
  },
};
</script>
<style>
.add-payment-form_button {
  margin-bottom: 5px;
  margin-top: 25px;
  margin-left: 10px;
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
</style>
