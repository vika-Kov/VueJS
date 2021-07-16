<template>
  <transition name="fade">
    <div class="context-menu" v-show="show" :style="style" ref="context">
      <button @click="onCloseClick">X</button>
      <slot></slot>
      <div class="edit-form" v-if="editModeOn">
        <edit-payment-form
          :category-list="categoryList"
          :payment-id="paymentId"
        ></edit-payment-form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ContextMenu",
  components: {
    EditPaymentForm: () => import("@/components/EditPaymentForm"),
  },
  data() {
    return {
      left: 0, // left position
      top: 0, // top position
      show: false,
      editModeOn: false,
      paymentId: null,
    };
  },
  props: {
    settings: {
      type: Object,
    },
  },
  methods: {
    closeContextMenu() {
      this.editModeOn = false;
      this.show = false;
      this.left = 0;
      this.top = 0;
    },
    onCloseClick() {
      this.closeContextMenu();
    },
    onShown(settings) {
      const evt = settings.settings.evt;
      this.left = evt.pageX || evt.clientX;
      // this.top = (evt.pageY || evt.clientY) - window.pageYOffset;
      this.top = evt.pageY || evt.clientY;
      this.show = true;
    },
    onHide() {
      this.closeContextMenu();
    },
    onEdit(paymentId) {
      this.paymentId = paymentId;
      this.editModeOn = true;
    },
  },
  computed: {
    // get position of context menu
    style() {
      return {
        top: this.top + "px",
        left: this.left + "px",
      };
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
    paymentData() {
      return this.$store.getters.getPaymentList;
    },
  },
  mounted() {
    this.$contextMenu.EventBus.$on("show", this.onShown);
    this.$contextMenu.EventBus.$on("hide", this.onHide);
    this.$contextMenu.EventBus.$on("edit", this.onEdit);
  },
};
</script>

<style scoped>
.context-menu {
  position: fixed;
  background: white;
  z-index: 999;
  outline: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
