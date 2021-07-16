<template>
  <transition name="fade">
    <div class="context-menu" v-show="show" :style="style" ref="context">
      <button @click="onCloseClick">X</button>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ContextMenu",
  data() {
    return {
      left: 0, // left position
      top: 0, // top position
      show: false,
    };
  },
  props: {
    settings: {
      type: Object,
    },
  },
  methods: {
    onCloseClick() {
      this.$contextMenu.hide();
      this.show = false;
      this.left = 0;
      this.top = 0;
    },
    onShown(settings) {
      const evt = settings.settings.evt;
      this.left = evt.pageX || evt.clientX;
      this.top = (evt.pageY || evt.clientY) - window.pageYOffset;
      this.show = true;
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
  },
  mounted() {
    this.$contextMenu.EventBus.$on("show", this.onShown);
    // this.$contextMenu.EventBus.$on("hide", this.onHide);
  },
};
</script>

<style scoped>
li {
  list-style-type: none; /* Убираем маркеры */
}
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
