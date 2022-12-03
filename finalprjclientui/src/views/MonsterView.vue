<template>
  <div class="Monsters">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <div Class="header">
      <h1>Slay some Monsters</h1>
    </div>
    <div>
      <b-button v-b-modal.modal-1>Add Monster</b-button>
      <b-button v-b-modal.modal-2>Edit Monster</b-button>
    </div>
    <div>
      <b-modal id="modal-2" title="BootstrapVue">
        <MonsterEditForm/>
      </b-modal>
      <b-modal id="modal-1" title="BootstrapVue">
        <MonsterAddForm/>
      </b-modal>
    </div>
  </div>
</template>

<script lang="ts">
import MonsterAddForm from '@/components/Monster/MonsterFormAdd.vue';
import MonsterEditForm from '@/components/Monster/MonsterFormEdit.vue';
import { Component, Vue } from 'vue-property-decorator';
import {
  BModal, VBModal, ModalPlugin, BButton,
} from 'bootstrap-vue';

Vue.component('BModal', BModal);

// eslint-disable-next-line import/extensions

Vue.component('BButton', BButton);
Vue.component('BModal', BModal);
Vue.directive('BModal', VBModal);
Vue.use(ModalPlugin);
@Component({
  components: {
    MonsterAddForm, MonsterEditForm,
  },
  data() {
    return {
      ShowAdd: false,
      ShowEdit: false,
    };
  },
})
export default class MonsterView extends Vue {}
</script>
<style>
h1{
  color: black;
}
.Monsters{
  background: #2c3e50;
}
</style>
