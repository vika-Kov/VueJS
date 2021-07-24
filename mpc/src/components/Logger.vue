<template>
<div>
  <p>
    Iter = {{ iter }}
  </p>
  <p>
    Option = {{ option }}
  </p>
</div>
</template>

<script>
export default {
  name: "Logger",
  props:["iter", "option"]
}
</script>

<style scoped>

</style>