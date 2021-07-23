<template>
  <v-container>
    <v-row>
      <v-col cols="1">#</v-col>
      <v-col cols="2">Date</v-col>
      <v-col cols="2">Category</v-col>
      <v-col cols="2">Value</v-col>
      <v-col cols="1">Context</v-col>
    </v-row>
    <v-row v-for="(item, idx) in items" :key="idx">
      <v-col cols="1">{{ idx }}</v-col>
      <v-col cols="2">{{ item.date }}</v-col>
      <v-col cols="2">{{ item.category }}</v-col>
      <v-col cols="2">{{ item.value }}</v-col>
      <v-col cols="1">
        <v-btn>...</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
