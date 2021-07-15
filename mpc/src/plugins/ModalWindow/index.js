export default{
    instell(Vue){
       if (this.installed){
           return
       }
       this.installed = true
       Vue.prototype.$modal = {
           show(){
               console.log('show')
           },
           hide(){
               console.log('hide')
           }
       }
    }
}