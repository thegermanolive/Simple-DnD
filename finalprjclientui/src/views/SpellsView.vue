<template>
  <div class="Spells">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <div Class="header">
      <h1>Cast Some Spells</h1>
    </div>
    <div>
      <b-button v-b-modal.modal-1>Add Spell</b-button>
      <b-button v-b-modal.modal-edit>Edit Spell</b-button>
    </div>
    <div>
      <b-modal
        id="modal-edit"
        ref="modal-edit"
        title="Edit Spell"
        @show="resetEditModal"
        @hidden="resetEditModal"
        @ok="EdithandleOk"
      >
        <SpellEditForm/>
      </b-modal>
      <b-modal id="modal-1" title="Add Spell">
        <SpellAddForm>
          <b-button type="submit" variant="primary">Submit</b-button>
        </SpellAddForm>
      </b-modal>
    </div>
  </div>
</template>

<script lang="ts">
import SpellAddForm from '@/components/Spell/SpellFormAdd.vue';
import SpellEditForm from '@/components/Spell/SpellFormEdit.vue';
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
    SpellAddForm, SpellEditForm,
  },
  data() {
    return {
      ShowAdd: false,
      ShowEdit: false,
    };
  },
  methods: {
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
