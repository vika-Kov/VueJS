<template>
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ on: menu, attrs }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn v-bind="attrs" v-on="{ ...tooltip, ...menu }" text>
              {{ content }}
            </v-btn>
          </template>
          <span>ЛКМ - конекстное меню</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title @click="onClick(item.action)"
            ><v-icon>{{ item.icon }}</v-icon
            >{{ item.title }}</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "ContextMenu",
  props: ["content"],
  data: () => ({
    items: [
      {
        title: "Редактировать",
        icon: "mdi-pencil-outline",
        action: "edit",
      },
      { title: "Удалить", icon: "mdi-delete", action: "delete" },
    ],
  }),
  methods: {
    onClick(action) {
      if (action === "edit") this.$emit("onEdit");
      if (action === "delete") this.$emit("onDelete");
    },
  },
};
</script>

<style scoped></style>
