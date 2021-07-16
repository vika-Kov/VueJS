<template>
  <div class="context-menu" :style="style" ref="context">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ContextMenu",
  data() {
    return {
      left: 0, // left position
      top: 0, // top position
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
      this.left = 100;
      this.top = 100;
    },

    // onOpenClick(evt) {
    //   // updates position of context menu
    //   this.left = evt.pageX || evt.clientX;
    //   this.top = evt.pageY || evt.clientY;
    //   // make element focused
    //   // @ts-ignore
    //   // Vue.nextTick(() => this.$el.focus());
    //   // this.show = true;
    // },

    style() {
      const evt = this.settings.evt;
      this.left = evt.pageX || evt.clientX;
      this.top = evt.pageY || evt.clientY;
      console.log(this.left, this.top);
      return {
        top: this.top + "px",
        left: this.left + "px",
      };
    },
  },
  mounted() {
    // const evt = this.settings.evt;
    // this.left = evt.pageX || evt.clientX;
    // this.top = evt.pageY || evt.clientY;
    // console.log(this.left, this.top);
  },
};
</script>

<style scoped>
li {
  list-style-type: none; /* Убираем маркеры */
}
/*.context-menu {*/
/*  position: fixed;*/
/*  background: white;*/
/*  z-index: 999;*/
/*  outline: none;*/
/*  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);*/
/*  cursor: pointer;*/
/*}*/
</style>
