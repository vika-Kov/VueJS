export default {
  install(Vue) {
    if (this.installed) {
      return;
    }
    this.installed = true;
    Vue.prototype.$contextMenu = {
      EventBus: new Vue(),
      show(name, settings) {
        this.EventBus.$emit("show", { name, settings });
        console.log("show contextMenu");
      },
      hide() {
        this.EventBus.$emit("hide");
        console.log("hide contextMenu");
      },
      edit(paymentID) {
        this.EventBus.$emit("edit", paymentID);
        console.log("edit payment data");
      },
    };
  },
};
