<template>
  <p>Message is: {{ message }}</p>
  <!--  eslint-disable-next-line-->
  <input v-model="message" placeholder="edit me" />
</template>
<script>
export default {
  data() {
    return {
      message: '',
    };
  },
};
</script>
