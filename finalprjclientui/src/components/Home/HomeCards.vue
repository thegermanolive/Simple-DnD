<template>
  <div class="FunctionCards">
    <article class="card" style="max-width: 20rem;">
      <div class="card-body">
        <b-button href="http://localhost:8080/#/Spells"> <img src="https://visualpharm.com/assets/970/Fire%20Element-595b40b75ba036ed117d5f0f.svg" alt="Image" class="card-img-top" height="232px">Spells</b-button>
      </div>
    </article>
    <article class="card" style="max-width: 20rem;">

      <div class="card-body">
        <b-button href="http://localhost:8080/#/Monsters"> <img src="https://visualpharm.com/assets/661/The%20Dragon%20Team-595b40b85ba036ed117db4c2.svg" alt="Image" class="card-img-top" height="232px">Monsters</b-button>
      </div>
    </article>
    <article class="card" style="max-width: 20rem;">

      <div class="card-body">
        <b-button href="http://localhost:8080/#/Bookmarks"><img src="https://visualpharm.com/assets/96/Bookmark%20Ribbon-595b40b65ba036ed117d187c.svg" alt="Image" class="card-img-top" height="232px">Bookmarks</b-button>
      </div>
    </article>
    <article class="card" style="max-width: 20rem;">

      <div class="card-body">
        <b-button href="http://localhost:8080/#/DM-Login" ><img src="https://visualpharm.com/assets/189/Person-595b40b65ba036ed117d21b8.svg" alt="Image" class="card-img-top" height="232px">DM-Login</b-button>
      </div>
    </article>
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
export default class HomeCards extends Vue {}
</script>

<style scoped>
.FunctionCards{
  display: flex;
  justify-content: center;
  background-color: #2c3e50;
}
.card{
  margin: 20px;
  width: 75%;
  background-color: #2c3e50;
}
</style>
