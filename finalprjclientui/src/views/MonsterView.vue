<template>
  <div class="Monsters">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <div>
      <h1 id="fr">
        Monsters
      </h1>
    </div>
    <div>
      <MonsterForm/>
    </div>
  </div>
</template>
<script>
import { Component, Mixins, Vue } from 'vue-property-decorator';
import {
  BCard, BModal, VBModal, ModalPlugin, BCardText, BLink, BButton, BFormTextarea,
} from 'bootstrap-vue';
import MonsterForm from '@/components/Monster/MonsterFormAndCards.vue';
import GlobalMixin from '@/mixins/global-mixin';

Vue.component('BCard', BCard);
Vue.component('BCardText', BCardText);
Vue.component('BLink', BLink);
Vue.component('BButton', BButton);
Vue.component('BModal', BModal);
Vue.component('BFormTextarea', BFormTextarea);
Vue.directive('BModal', VBModal);
Vue.use(ModalPlugin);
@Component({
  components: {
    MonsterForm,
  },
})
export default class MonsterView extends Mixins(GlobalMixin) {
  // eslint-disable-next-line class-methods-use-this

}
</script>
<style scoped>

.Monsters{
  background: #4682B4;
  color: black;
  zoom: 75%
}
</style>
