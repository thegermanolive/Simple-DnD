<template>
  <div class="home">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <div>

      <div class="about">
        <h1>Welcome to the Davsch Dungeons and Dragons Repository</h1>
        <p>
          We Provide a Way for you to Store and Edit, your Monsters, Weapons,
          and Spells for your campaign or one-shots for easy access for
          you and your players To get  started Select one of the tabs above
        </p>
        <p>
          Or one Of the Cards below
        </p>
        <HomeCard/>
      </div>

    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  BCard, BCardText, BLink, BButton, CardPlugin,
} from 'bootstrap-vue';

import HomeCard from '@/components/Home/HomeCards.vue';

Vue.component('BCard', BCard);
Vue.component('BCardText', BCardText);
Vue.component('BLink', BLink);
Vue.component('BButton', BButton);
Vue.use(CardPlugin);
@Component({
  components: {
    BCard, BCardText, BLink, BButton, HomeCard,
  },
})
export default class HomeView extends Vue {}
</script>
<style>
.home{
  background: #4682B4;
  color: black;
  zoom: 75%
}
</style>
