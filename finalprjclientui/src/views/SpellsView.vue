<template>
  <div class="Spells">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <div Class="header">
      <h1>Cast Some Spells</h1>
    </div>
    <div>
      <button type="button" id="show-modal-Add" @click="ShowAdd = true"
              class="btn btn-primary btn-lg">Add Spell</button>
      <button type="button" id="show-modal-Edit" @click="ShowEdit = true"
              class="btn btn-primary btn-lg">Edit Spell</button>
    </div>
    <div>
      <ModalAdd :show="ShowAdd" @close="ShowAdd = false">
      </ModalAdd>
      <ModalEdit :show="ShowEdit" @close="ShowEdit = false">
      </ModalEdit>
    </div>
    <div>
    </div>

  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

import { BButton, BModal } from 'bootstrap-vue';

import ModalEdit from '@/components/Spell/SpellModalEdit.vue';
import ModalAdd from '@/components/Spell/SpellsModalAdd.vue';
// eslint-disable-next-line import/extensions

Vue.component('BButton', BButton);
Vue.component('BModal', BModal);

@Component({
  components: {
    ModalAdd, ModalEdit,
  },
  data() {
    return {
      ShowAdd: false,
      ShowEdit: false,
    };
  },
})
export default class SpellsView extends Vue {}
</script>
<style>
h1{
  color: black;
}
.Spells{
  background: #2c3e50;
}
</style>
