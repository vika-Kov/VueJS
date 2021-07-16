<template>
  <div class="payments-list">
    <div class="list">
      <table>
        <tr class="item">
          <th class="item_htg">#</th>
          <th class="item_list">Date</th>
          <th class="item_list">Category</th>
          <th class="item_list">Value</th>
          <th></th>
        </tr>
        <tr class="item" v-for="(item, idx) in items" :key="idx">
          <th class="item_htg">{{ idx + 1 }}</th>
          <th class="item_list">{{ item.date }}</th>
          <th class="item_list">{{ item.category }}</th>
          <th class="item_list">{{ item.value }}</th>
          <th class="item_list">
            <button @click="openContextMenu" :id="idx">...</button>
          </th>
        </tr>
      </table>
    </div>

    <context-menu :v-if="showContextMenu" :settings="settings">
      <menu>
        <li>
          <button @click="editPayment">Редактировать</button>
        </li>
        <li>
          <button @click="deletePayment">Удалить</button>
        </li>
      </menu>
    </context-menu>
    <button
      class="add-payment-form_button"
      @click="onClick(page)"
      v-for="page in pages"
      :key="page"
    >
      Page {{ page }}
    </button>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  components: { ContextMenu: () => import("@/components/ContextMenu") },
  data() {
    return {
      showContextMenu: false,
      settings: {},
      selectedPaymentId: null,
    };
  },
  props: {
    items: { type: Array, default: () => [], required: true },
    pages: { type: Array, default: () => [], required: true },
  },
  methods: {
    openContextMenu(event) {
      this.$contextMenu.show("contextMenu", {
        idx: event.target.id,
        evt: event,
      });
      this.selectedPaymentId = this.items[event.target.id].id;
    },
    onShown(settings) {
      this.settings = settings.settings;
    },
    onHide() {
      this.settings = {};
    },
    onClick(page) {
      this.$emit("switchPages", page);
    },
    deletePayment() {
      this.$emit("deletePayment", this.selectedPaymentId);
      this.$contextMenu.hide();
    },
    editPayment() {
      this.$emit("editPayment", this.selectedPaymentId);
    },
  },
  mounted() {
    this.$contextMenu.EventBus.$on("show", this.onShown);
    this.$contextMenu.EventBus.$on("hide", this.onHide);
  },
};
</script>
<style>
li {
  list-style-type: none; /* Убираем маркеры */
}
.list {
  max-width: 560px;
  box-shadow: 5px 6px 10px 2px rgba(0, 0, 0, 0.19);
}
.item_htg {
  width: 100px;
  padding-top: 20px;
}
.item_list {
  width: 160px;
  padding-top: 20px;
}
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
button:hover {
  transform: scale(1.05);
}
</style>
