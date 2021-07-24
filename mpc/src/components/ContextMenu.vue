<template>
  <div class="text-center">
    <v-menu flat color="grey" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text color="gray" v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title @click="action = item.action">
            <v-icon>{{ item.icon }}</v-icon
            >{{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "ContextMenu",
  props: ["itemId"],
  data: () => ({
    items: [
      {
        title: "Редактировать",
        icon: "mdi-pencil-outline",
        action: "edit",
      },
      { title: "Удалить", icon: "mdi-delete", action: "delete" },
    ],
    action: "",
  }),
  methods: {
    onEdit() {
      console.log("edit");
      this.$emit("onEdit", this.itemId);
    },
    onDelete() {
      console.log("delete");
      this.$emit("onDelete", this.itemId);
    },
  },
  watch: {
    action: function (value) {
      if (value === "edit") this.onEdit();
      if (value === "delete") this.onDelete();
    },
  },
};
</script>

<style scoped></style>
