<template>
  <div class="home">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
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
    </div>
    <div>
      <!--      <article class="card" style="max-width: 20rem;">-->
      <!--        <img src="@/assets/Monster.jpg" alt="Image" class="card-img-top">-->
      <!--        <div class="card-body">-->
      <!--          <a role="button" tabindex="0"
      href="#" target="_self" class="btn btn-primary">-->
      <!--            Monsters-->
      <!--          </a>-->
      <!--        </div>-->
      <!--      </article>-->
    </div>
    <div>
      <b-card-group deck>
        <b-card title="Title" img-src="" img-alt="Image" img-top>
          <b-card-text>
            This is a wider card with
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>

        <b-card title="Title" img-src="" img-alt="Image" img-top>
          <b-card-text>
            This card has supporting text below as a natural lead-in to additional content.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>

        <b-card title="Title" img-src="" img-alt="Image" img-top>
          <b-card-text>
            This is a wider card with
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  BCard, BCardText, BLink, BButton, CardPlugin,
  BCardHeader, BCardFooter, BCardBody, BCardTitle,
  BCardSubTitle, BCardImg, BCardImgLazy, BCardGroup,
} from 'bootstrap-vue';

Vue.component('BCard', BCard);
Vue.component('BCardText', BCardText);
Vue.component('BLink', BLink);
Vue.component('BButton', BButton);
Vue.use(CardPlugin);
@Component({
  components: {
    BCard, BCardText, BLink, BButton,
  },
})
export default class HomeView extends Vue {}
</script>
<style>
  .card mb-2{
    display: flex;
    justify-content: center;
    background-color: #2c3e50;
  }
  .home{
    background-color: #2c3e50;
    color: black;
  }
</style>
