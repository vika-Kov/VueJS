<template>
  <div class="payments-list">
    <div class="list">
      <table>
        <tr class="item">
          <th class="item_htg">#</th>
          <th class="item_list">Date</th>
          <th class="item_list">Category</th>
          <th class="item_list">Value</th>
        </tr>
        <tr class="item" v-for="(item, idx) in items" :key="idx">
          <th class="item_htg">{{ idx + 1 }}</th>
          <th class="item_list">{{ item.date }}</th>
          <th class="item_list">{{ item.category }}</th>
          <th class="item_list">{{ item.value }}</th>
        </tr>
      </table>
    </div>
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
  props: {
    items: { type: Array, default: () => [], required: true },
    pages: { type: Array, default: () => [], required: true },
  },
  methods: {
    onClick(page) {
      this.$emit("switchPages", page);
    },
  },
};
</script>
<style >
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
