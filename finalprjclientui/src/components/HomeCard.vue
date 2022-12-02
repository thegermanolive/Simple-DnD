<template>
  <div class="HomeCardAll">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <b-card>
      <b-card-title>
        Yeet
      </b-card-title>
    </b-card>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import {
  BCard, BCardText, BLink, BButton, BCardGroup, BCardHeader,
  BCardFooter, BCardBody, BCardTitle, BCardSubTitle, BCardImg, BCardImgLazy,
} from 'bootstrap-vue';

Vue.component('BCard', BCard);
Vue.component('BCardText', BCardText);
Vue.component('BLink', BLink);
Vue.component('BButton', BButton);
Vue.component('BCardGroup', BCardGroup);
Vue.component('BCardHeader', BCardHeader);
Vue.component('BCardFooter', BCardFooter);
Vue.component('BCardBody', BCardBody);
Vue.component('BCardTitle', BCardTitle);
Vue.component('BCardSubTitle', BCardSubTitle);
Vue.component('BCardImg', BCardImg);
Vue.component('BCardImgLazy', BCardImgLazy);

@Component
export default class MonsterCard extends Vue {}
</script>

<style scoped>
.cards{
  display: flex;
  justify-content: center;
  background-color: #2c3e50;
}
</style>
