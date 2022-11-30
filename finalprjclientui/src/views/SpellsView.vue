<template>
  <div class="Spells">
    <div Class="header">
      <h1>Cast Some Spells</h1>
    </div>
    <div>
      <b-button v-b-modal.modal-1>Launch demo modal</b-button>
      <SpellsForm>
        <h2>Form</h2>
      </SpellsForm>

    </div>
  </div>
</template>

<script lang="ts">

import { Vue } from 'vue-property-decorator';
import { BButton, BModal } from 'bootstrap-vue';
import SpellsForm from '@/components/SpellsForm.vue';

Vue.component('BButton', BButton);
Vue.component('BModal', BModal);
export default class SpellsView extends Vue {}
</script>
