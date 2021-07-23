<template>
  <div class="wrapper">
      <div @click="onClick(cur - 1)" class="pages"> - </div>
      <div class="pages" :class="{'active': cur === i}" v-for="i in pagesCount" :key="i" @click="onClick(i)">
          {{ i }}
      </div>
      <div @click="onClick(cur + 1)" class="pages"> + </div>
  </div>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        length: Number,
        cur: Number,
        count: {
            type: Number,
            default: 10,
        }
    },
    computed: {
        pagesCount(){
            return Math.ceil(this.length / this.count)
        }
    },
    methods: {
        onClick(p){
            if(p < 1 || p > this.pagesCount) {
                return
            }
            this.$emit('changePage', p)
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    width: 100%;
}
.pages {
    padding: 12px;
    cursor: pointer;
}
.active{
    background: #ccc;
}
</style>