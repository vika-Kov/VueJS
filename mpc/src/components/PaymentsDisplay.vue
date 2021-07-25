<template>
  <v-data-table
    :headers="headers"
    :items="items"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Список расходов</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="teal darken-2"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Добавить новый расход
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      :items="categoryList"
                      v-model="editedItem.category"
                      label="Category"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.date"
                      label="Date"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.value"
                      label="Value"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="teal darken-2" dark text @click="close">
                Отменить
              </v-btn>
              <v-btn color="teal darken-2" dark text @click="save">
                Сохранить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Подтвердите удаление расхода</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="teal darken-2" dark text @click="closeDelete"
                >Отменить</v-btn
              >
              <v-btn color="teal darken-2" dark text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:item.category="{ item }">
      <v-context-menu
        :content="item.category"
        @onEdit="editItem(item)"
        @onDelete="deleteItem(item)"
      ></v-context-menu>
    </template>
  </v-data-table>
</template>
<script>
import ContextMenu from "@/components/ContextMenu";

export default {
  name: "PaymentDisplay",
  props: ["headers", "items", "categoryList"],
  components: { "v-context-menu": ContextMenu },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: 0,
      category: "",
      date: null,
      value: 0,
    },
    defaultItem: {
      id: 0,
      category: "",
      date: null,
      value: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Добавить новый расход"
        : "Редактировать расход";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem.id = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.$store.commit("deleteDataFromPaymentList", this.editedIndex);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      //Изменим Value на числовое значение
      this.editedItem.value = Number(this.editedItem.value);

      if (this.editedIndex > -1) {
        this.$store.commit("editPayment", {
          editedItem: this.editedItem,
          editedIndex: this.editedIndex,
        });
      } else {
        // вычисляем последний индекс и увеличиваем его на 1
        this.editedItem.id =
          this.items.reduce((acc, val) => {
            acc = acc === undefined || val.id > acc ? val.id : acc;
            return acc;
          }, 0) + 1;
        // this.editedItem.id = 1234;
        this.$store.commit("addDataToPaymentList", this.editedItem);
      }
      this.$emit("chartRerender");
      this.close();
    },
  },
};
</script>
