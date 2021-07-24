<template>
  <v-container>
    <v-row>
      <v-col cols="1">#</v-col>
      <v-col cols="2">Date</v-col>
      <v-col cols="2">Category</v-col>
      <v-col cols="2">Value</v-col>
      <v-col cols="1">Actions</v-col>
    </v-row>
    <v-row v-for="(item, idx) in items" :key="idx">
      <v-col cols="1">{{ idx }}</v-col>
      <v-col cols="2">{{ item.date }}</v-col>
      <v-col cols="2">{{ item.category }}</v-col>
      <v-col cols="2">{{ item.value }}</v-col>
      <v-col cols="1"
        ><context-menu
          @onDelete="onDelete"
          @onEdit="onEdit"
          :itemId="item.id"
        ></context-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContextMenu from "@/components/ContextMenu";

export default {
  name: "PaymentsDisplay",
  components: { ContextMenu },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onEdit(itemId) {
      console.log("PaymentsDisplay onEdit", itemId);
    },
    onDelete(itemId) {
      console.log("PaymentsDisplay onDelete", itemId);
    },
  },
};
</script>
