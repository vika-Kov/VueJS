<template>
  <div id="app">
    <div :class="[$style.header]">
      <h1>My Personal Cost</h1>
    </div>
    <div class="menu">
    <!-- https://router.vuejs.org/ru/api/-->
      <!-- <router-link to="/dashboard">
        Dashboard
      </router-link> /
      <router-link to="/about">
        About
      </router-link> -->
      <a href="#" @click="goToPage('dashboard')">Dashboard</a> / 
      <a href="#" @click="goToPage('about')">About</a>
      <!-- <a href="dashboard">Dashboard</a> / 
      <a href="page404">404</a> / 
      <a href="about">about</a> -->
    </div>
    <br/>
    <div class="content">
      <router-view />
      <!-- <Page404 v-if="pageName==='page404'"/>
      <PageAbout v-if="pageName==='about'"/>
      <PageDashboard v-if="pageName==='dashboard'"/> -->
    </div>
    <div class="wrapper">
     

    </div>
    <transition name="fade">
      <ModalWindow v-if="modalWindowName" :settings="settings"/>
    </transition>
  </div>
</template>

<script>
// import PageAbout from './page/PageAbout.vue'
// import PageDashboard from './page/PageDashboard.vue'
// import Page404 from './page/Page404.vue'


export default {
  name: 'App',
  components: {
       ModalWindow: ()=> import ('./components/ModalWindow.vue'),
    // Page404,
    // PageAbout,
    // PageDashboard
  },
  data() {
    return {
      page: 1,
      count: 10,
      pageName: '',
      modalWindowName: '',
      settings: {}
    }
  },
  methods: {
      goToPage(page){
        this.$router.push({
          name: page,
          params: {
            id: "123"
          }
        })
      },
      onShown(settings){
        this.modalWindowName = settings.name
        this.settings = settings.settings
      },
      onHide(){
        this.modalWindowName = ''
        this.settings = {}
      }
      // setPage(){
      //   this.pageName = location.pathname.slice(1)
      // }
  },
  created(){
      // this.paymentsList = this.fetchData()
      // this.$store.commit('setPaymentsListData', this.fetchData())
      // if(!this.fetchListData.length) {
      //   this.fetchListData()
      // }
      // this.$store.dispatch('fetchCategoryList')
  },
  mounted(){
    this.$modal.EventBus.$on('show', this.onShown)
    this.$modal.EventBus.$on('hide', this.onHide)
    // this.setPage()
    // const links = document.querySelectorAll('a')
    // links.forEach(link=>{
    //   link.addEventListener('click', event => {
    //     event.preventDefault()
    //     history.pushState({}, '', link.href)
    //     this.setPage()
    //   })
    // })
    // window.addEventListener('popstate', ()=>{
    //   this.setPage()
    //   console.log('popstate')
    // })
  }
}
</script>

<style lang="scss" scoped module>
.header{
  font-size: 20px;
}
</style>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
    transition: opacity .30s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
