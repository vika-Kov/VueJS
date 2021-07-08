<template>
  <div class="category-list">
    <div class="list">
      <table>
        <tr class="item">
          <th class="item_htg">#</th>
          <th class="item_list">Category</th>
        </tr>
        <tr class="item" v-for="(item, idx) in items" :key="idx">
          <th class="item_htg">{{ idx + 1 }}</th>
          <th class="item_list">{{ item }}</th>
        </tr>
      </table>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryDisplay",
  props: {
    items: { type: Array, default: () => [], required: true },
  },
}
</script>

<style scoped>
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
</style>