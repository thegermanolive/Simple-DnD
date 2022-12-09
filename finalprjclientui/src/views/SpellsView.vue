<template>
  <div class="Spells">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <div>
      <h1>
        Spells
      </h1>
    </div>
    <div>
      <SpellForm/>
    </div>
  </div>
</template>
<script>

import { Component, Vue } from 'vue-property-decorator';
import {
  BCard, BModal, VBModal, ModalPlugin, BCardText, BLink, BButton, BFormTextarea,
} from 'bootstrap-vue';
import SpellForm from '@/components/Spell/SpellFormAndCards.vue';

Vue.component('BCard', BCard);
Vue.component('BCardText', BCardText);
Vue.component('BLink', BLink);
Vue.component('BButton', BButton);
Vue.component('BModal', BModal);
Vue.directive('BModal', VBModal);
Vue.component('BFormTextarea', BFormTextarea);
Vue.use(ModalPlugin);
@Component({
  components: {
    SpellForm,
  },
})
export default class SpellsView extends Vue {}
</script>
<style>
.Spells{
  background: #4682B4;
  color: black;
  zoom: 75%
}

</style>
