<template>
  <div class="Monsters">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <div>
      <h1>
        Monsters
      </h1>
    </div>
    <div>
      <MonsterForm/>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import {
  BCard, BModal, VBModal, ModalPlugin, BCardText, BLink, BButton, CardPlugin, BFormTextarea,
  BCardHeader, BCardFooter, BCardBody, BCardTitle,
  BCardSubTitle, BCardImg, BCardImgLazy, BCardGroup,
} from 'bootstrap-vue';
import MonsterForm from '@/components/Monster/MonsterForm.vue';

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
export default class MonsterView extends Vue {}
</script>

<style scoped>
.Monsters{
  background: #2c3e50;
}
</style>
