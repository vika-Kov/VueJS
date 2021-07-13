<template>
  <div>
    <h2>Page404</h2>
    <p>
      This is error page. You have no resource with name
      {{ navPage }}
    </p>
  </div>
</template>
<script>
export default {
  name: "Page404",
  data() {
    return {
      navPage: "PAGE_NAME_TO_BE_ADDED",
    };
  },
};
</script>

<style></style>
