<template>
  <div class="Bookmark">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <div>

    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { CardPlugin, BCard, BCardText } from 'bootstrap-vue';

Vue.component('BCard', BCard);
Vue.component('BCardText', BCardText);

Vue.use(CardPlugin);
@Component({
  BCard, BCardText,
})
export default class BookmarkView extends Vue {}
</script>

<style scoped>

</style>
