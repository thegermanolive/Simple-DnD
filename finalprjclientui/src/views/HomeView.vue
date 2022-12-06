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
    <div class="cards">
      <article class="card" style="max-width: 20rem;">
        <img src="https://visualpharm.com/assets/970/Fire%20Element-595b40b75ba036ed117d5f0f.svg" alt="Image" class="card-img-top" height="232px">
        <div class="card-body">
          <a role="button" tabindex="0" href="http://localhost:8080/#/Spells"
             target="_self" class="btn btn-primary">
            Spells
          </a>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">
        <img src="https://visualpharm.com/assets/661/The%20Dragon%20Team-595b40b85ba036ed117db4c2.svg" alt="Image" class="card-img-top" height="232px">
        <div class="card-body">
          <a role="button" tabindex="0" href="http://localhost:8080/#/Monsters"
             target="_self" class="btn btn-primary">
            Monsters          </a>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">
        <img src="https://visualpharm.com/assets/96/Bookmark%20Ribbon-595b40b65ba036ed117d187c.svg" alt="Image" class="card-img-top" height="232px">
        <div class="card-body">
          <a role="button" tabindex="0" href="http://localhost:8080/#/Bookmarks"
             target="_self" class="btn btn-primary">
            Bookmarks
          </a>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">
        <img src="https://visualpharm.com/assets/189/Person-595b40b65ba036ed117d21b8.svg" alt="Image" class="card-img-top" height="232px">
        <div class="card-body">
          <a role="button" tabindex="0" href="http://localhost:8080/#/DM-Login"
             target="_self" class="btn btn-primary">
            DM-Login
          </a>
        </div>
      </article>
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
.cards{
    display: flex;
    justify-content: center;
    background-color: #2c3e50;
  }
  .home{
    background-color: #2c3e50;
    color: black;
  }
  .card{
    margin: 20px;
    width: 75%;
  }
</style>
