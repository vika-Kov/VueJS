git <template>
  <div id="app">
    <div class="header">
      <h1>My Personal Cost</h1>
      <div class="menu">
        <router-link to="/dashboard">Dashboard</router-link> /
        <router-link to="/about">About</router-link>
        <br />
        <router-link
          :to="{ path: '/add/payment/Food', query: { value: '200' } }"
          >Add category Food payment with a price of 200</router-link
        >
        <br />
        <router-link
          :to="{ path: '/add/payment/Transport', query: { value: '50' } }"
          >Add category Transport payment with a price of 50</router-link
        >
        <br />
        <router-link
          :to="{ path: '/add/payment/Entertainment', query: { value: '2000' } }"
          >Add category Entertainment payment with a price of 2000</router-link
        >
        <br />
        <router-link to="/404">Error 404</router-link>
      </div>
      <div class="add-payment-form">
        <!-- <AddPaymentForm
          @addNewPayment="addNewPaymentData"
          :category-list="categoryList"
        /> -->
        <transition name="fade">
          <ModalWindow v-if="modalWindowName" :settings="settings" />
        </transition>
      </div>
    </div>
    <br />
    <div class="content">
      <router-view />
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "App",
  components: { ModalWindow: () => import("@/components/ModalWindow") },
  data() {
    return {
      showForm: false,
      settings: {},
      modalWindowName: "",
    };
  },
  methods: {
    onShown(settings) {
      this.modalWindowName = settings.name;
      this.settings = settings.settings;
    },
    onHide() {
      this.modalWindowName = "";
      this.settings = {};
    },
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShown);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
  created() {
    if (this.$route.path != "/dashboard") {
      this.$router.push({ name: "dashboard" });
    }
  },
};
</script>

<style>
.header {
  font-size: 20px;
}
.add-new-cost_button {
  margin-bottom: 5px;
  border: none;
  height: 45px;
  width: 200px;
  background-color: #59bda5;
  text-align: center;
  color: white;
  font-family: Verdana;
  font-weight: 800;
  font-size: 14px;
  box-shadow: 0.2em 0.2em 10px rgba(122, 122, 122, 0.5);
  border-radius: 6px;
  transition: 0.3s;
}
button:hover {
  transform: scale(1.05);
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
