<template>
<div>
    <slot name="title" v-bind:option="property"/>
    <slot name="icon" />
    <slot />
</div>
</template>

<script>
export default {
    name: 'Button',
    data(){
        return {
            property: [1,2,3,44,"test"]
        }
    },
    mounted(){
        console.log(this)
    }
}
</script>

<style>

</style>