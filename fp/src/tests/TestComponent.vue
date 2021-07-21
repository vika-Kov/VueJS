<template>
  <div>This message is: {{ message }} (mod)</div>
</template>

<script>
export default {
    name: "TestComp",
    props: {
        message: String
    }
}
</script>